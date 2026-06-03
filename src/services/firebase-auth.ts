import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

// Firebase configuration - only load in browser
const firebaseConfig = typeof window !== 'undefined' ? {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
} : {}

// Initialize Firebase only once and only in browser
let app: any = null
let auth: any = null
let db: any = null

if (typeof window !== 'undefined' && !getApps().length) {
  try {
    app = initializeApp(firebaseConfig)
    auth = getAuth(app)
    db = getFirestore(app)
    
    // Set persistence to LOCAL so user stays logged in
    setPersistence(auth, browserLocalPersistence).catch(error => {
      console.error('Error setting persistence:', error)
    })
  } catch (error) {
    console.error('Firebase initialization error:', error)
  }
}

export { auth, db }

// Google Auth Provider - initialize only when needed
let googleProvider: GoogleAuthProvider | null = null

function getGoogleProvider() {
  if (!googleProvider && typeof window !== 'undefined') {
    googleProvider = new GoogleAuthProvider()
    googleProvider.addScope('profile')
    googleProvider.addScope('email')
  }
  return googleProvider
}

export interface UserProfile {
  uid: string
  email: string
  displayName: string
  role: 'consumer' | 'label' | 'partner'
  photoURL?: string
  createdAt: string
  preferences?: Record<string, any>
  onboardingCompleted: boolean
}

/**
 * Sign up with email and password
 */
export async function signUpWithEmail(
  email: string,
  password: string,
  role: 'consumer' | 'label' | 'partner',
  displayName: string
): Promise<User> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Create user profile in Firestore
    const userProfile: UserProfile = {
      uid: user.uid,
      email: user.email || '',
      displayName,
      role,
      createdAt: new Date().toISOString(),
      onboardingCompleted: false
    }

    await setDoc(doc(db, 'users', user.uid), userProfile)

    return user
  } catch (error: any) {
    console.error('Sign up error:', error)
    throw new Error(error.message || 'Failed to sign up')
  }
}

/**
 * Sign in with email and password
 */
export async function signInWithEmail(email: string, password: string): Promise<User> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error: any) {
    console.error('Sign in error:', error)
    throw new Error(error.message || 'Failed to sign in')
  }
}

/**
 * Sign in with Google
 */
export async function signInWithGoogle(role: 'consumer' | 'label' | 'partner'): Promise<User> {
  try {
    const provider = getGoogleProvider()
    if (!provider || !auth) {
      throw new Error('Firebase not initialized. Please refresh the page.')
    }
    const result = await signInWithPopup(auth, provider)
    const user = result.user

    // Check if user profile exists
    const userDocRef = doc(db, 'users', user.uid)
    const userDocSnap = await getDoc(userDocRef)

    if (!userDocSnap.exists()) {
      // Create new user profile
      const userProfile: UserProfile = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || 'Google User',
        role,
        photoURL: user.photoURL || undefined,
        createdAt: new Date().toISOString(),
        onboardingCompleted: false
      }

      await setDoc(userDocRef, userProfile)
    }

    return user
  } catch (error: any) {
    console.error('Google sign in error:', error)
    throw new Error(error.message || 'Failed to sign in with Google')
  }
}

/**
 * Sign out
 */
export async function logOut(): Promise<void> {
  try {
    await signOut(auth)
  } catch (error: any) {
    console.error('Sign out error:', error)
    throw new Error(error.message || 'Failed to sign out')
  }
}

/**
 * Get current user
 */
export function getCurrentUser(): User | null {
  return auth.currentUser
}

/**
 * Subscribe to auth state changes
 */
export function onAuthChange(callback: (user: User | null) => void): () => void {
  return onAuthStateChanged(auth, callback)
}

/**
 * Get user profile from Firestore
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  try {
    const userDocRef = doc(db, 'users', uid)
    const userDocSnap = await getDoc(userDocRef)

    if (userDocSnap.exists()) {
      return userDocSnap.data() as UserProfile
    }

    return null
  } catch (error: any) {
    console.error('Error fetching user profile:', error)
    return null
  }
}

/**
 * Update user profile
 */
export async function updateUserProfile(uid: string, data: Partial<UserProfile>): Promise<void> {
  try {
    const userDocRef = doc(db, 'users', uid)
    await setDoc(userDocRef, data, { merge: true })
  } catch (error: any) {
    console.error('Error updating user profile:', error)
    throw new Error(error.message || 'Failed to update profile')
  }
}

/**
 * Mark onboarding as completed
 */
export async function completeOnboarding(uid: string): Promise<void> {
  try {
    await updateUserProfile(uid, {
      onboardingCompleted: true
    })
  } catch (error: any) {
    console.error('Error completing onboarding:', error)
    throw new Error(error.message || 'Failed to complete onboarding')
  }
}
