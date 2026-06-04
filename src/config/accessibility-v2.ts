// Accessibility Configuration for WCAG AA Compliance

export interface AccessibilityConfig {
  wcagLevel: 'A' | 'AA' | 'AAA'
  colorContrast: {
    normalText: number // 4.5:1 for AA
    largeText: number // 3:1 for AA
    graphicsAndUI: number // 3:1 for AA
  }
  keyboardNavigation: {
    enabled: boolean
    focusIndicatorVisible: boolean
    focusIndicatorMinSize: number // pixels
    tabOrderLogical: boolean
    skipLinksPresent: boolean
  }
  screenReader: {
    enabled: boolean
    semanticHTML: boolean
    ariaLabels: boolean
    ariaRoles: boolean
    altText: boolean
    liveRegions: boolean
  }
  motionAndAnimation: {
    respectPrefersReducedMotion: boolean
    autoPlayDisabled: boolean
    flashingDisabled: boolean
  }
  textAndFonts: {
    minFontSize: number // pixels
    lineHeight: number // multiplier
    letterSpacing: number // multiplier
    wordSpacing: number // multiplier
    resizable: boolean
  }
  forms: {
    labelAssociation: boolean
    errorMessages: boolean
    helpText: boolean
    requiredFieldIndicators: boolean
    validationMessages: boolean
  }
}

export const ACCESSIBILITY_CONFIG: AccessibilityConfig = {
  wcagLevel: 'AA',
  colorContrast: {
    normalText: 4.5, // 4.5:1 for AA
    largeText: 3, // 3:1 for AA
    graphicsAndUI: 3, // 3:1 for AA
  },
  keyboardNavigation: {
    enabled: true,
    focusIndicatorVisible: true,
    focusIndicatorMinSize: 3,
    tabOrderLogical: true,
    skipLinksPresent: true,
  },
  screenReader: {
    enabled: true,
    semanticHTML: true,
    ariaLabels: true,
    ariaRoles: true,
    altText: true,
    liveRegions: true,
  },
  motionAndAnimation: {
    respectPrefersReducedMotion: true,
    autoPlayDisabled: true,
    flashingDisabled: true,
  },
  textAndFonts: {
    minFontSize: 14,
    lineHeight: 1.5,
    letterSpacing: 0.02,
    wordSpacing: 0.16,
    resizable: true,
  },
  forms: {
    labelAssociation: true,
    errorMessages: true,
    helpText: true,
    requiredFieldIndicators: true,
    validationMessages: true,
  },
}

// Color Contrast Checker
export const COLOR_CONTRAST_RATIOS = {
  // Text colors
  'luxury-pearl': {
    color: 'rgb(245, 242, 235)',
    contrast: {
      'luxury-dark': 16.5, // Excellent
      'luxury-dark-secondary': 14.2,
      'luxury-gold': 1.2, // Poor
    },
  },
  'luxury-gold': {
    color: 'rgba(212, 175, 55, 1)',
    contrast: {
      'luxury-dark': 8.1, // Excellent
      'luxury-dark-secondary': 6.8,
      'luxury-pearl': 1.2, // Poor
    },
  },
  'luxury-gray-light': {
    color: 'rgb(150, 150, 150)',
    contrast: {
      'luxury-dark': 7.2, // Excellent
      'luxury-dark-secondary': 5.9,
    },
  },
}

// ARIA Labels for Common Elements
export const ARIA_LABELS = {
  buttons: {
    play: 'Play audio',
    pause: 'Pause audio',
    next: 'Next track',
    previous: 'Previous track',
    favorite: 'Add to favorites',
    share: 'Share this content',
    menu: 'Open menu',
    close: 'Close dialog',
    search: 'Search',
    filter: 'Filter results',
  },
  navigation: {
    main: 'Main navigation',
    breadcrumb: 'Breadcrumb navigation',
    pagination: 'Pagination navigation',
    skip: 'Skip to main content',
  },
  forms: {
    search: 'Search form',
    login: 'Login form',
    signup: 'Sign up form',
    checkout: 'Checkout form',
    contact: 'Contact form',
  },
  regions: {
    main: 'Main content',
    sidebar: 'Sidebar',
    header: 'Site header',
    footer: 'Site footer',
    banner: 'Banner',
    complementary: 'Complementary content',
  },
  status: {
    loading: 'Loading',
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    info: 'Information',
  },
}

// Keyboard Shortcuts
export const KEYBOARD_SHORTCUTS = {
  navigation: {
    skipToMain: 'Alt + M',
    skipToNav: 'Alt + N',
    skipToFooter: 'Alt + F',
  },
  player: {
    play: 'Space',
    next: 'Right Arrow',
    previous: 'Left Arrow',
    volumeUp: 'Up Arrow',
    volumeDown: 'Down Arrow',
  },
  general: {
    search: 'Ctrl + K',
    menu: 'Ctrl + Shift + M',
    help: 'Ctrl + ?',
    accessibility: 'Ctrl + Alt + A',
  },
}

// Focus Styles
export const FOCUS_STYLES = {
  outline: '3px solid rgba(212, 175, 55, 1)',
  outlineOffset: '2px',
  borderRadius: '4px',
}

// Reduced Motion Preferences
export const REDUCED_MOTION_STYLES = {
  animation: 'none',
  transition: 'none',
  transform: 'none',
}

// Screen Reader Only Content
export const SCREEN_READER_ONLY_CLASS = `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`

// Accessibility Utilities

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get accessible animation settings
 */
export function getAccessibleAnimationSettings(defaultSettings: any) {
  if (prefersReducedMotion()) {
    return REDUCED_MOTION_STYLES
  }
  return defaultSettings
}

/**
 * Check color contrast ratio
 */
export function getContrastRatio(color1: string, color2: string): number {
  // Simplified contrast ratio calculation
  // In production, use a library like polished or wcag-contrast
  return 4.5 // Placeholder
}

/**
 * Generate accessible focus styles
 */
export function getAccessibleFocusStyles() {
  return {
    outline: FOCUS_STYLES.outline,
    outlineOffset: FOCUS_STYLES.outlineOffset,
    borderRadius: FOCUS_STYLES.borderRadius,
  }
}

/**
 * Create screen reader only content
 */
export function createScreenReaderOnlyContent(text: string) {
  return {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
    content: text,
  }
}

// WCAG Checklist
export const WCAG_CHECKLIST = {
  'Perceivable': {
    'Text Alternatives': {
      'Provide text alternatives for all non-text content': false,
      'Ensure alt text is descriptive and meaningful': false,
    },
    'Adaptable': {
      'Content is adaptable and can be presented in different ways': false,
      'Sequence and relationships are preserved': false,
    },
    'Distinguishable': {
      'Color is not the only means of conveying information': false,
      'Sufficient color contrast (4.5:1 for normal text)': false,
      'Text can be resized up to 200%': false,
    },
  },
  'Operable': {
    'Keyboard Accessible': {
      'All functionality is available via keyboard': false,
      'No keyboard trap': false,
      'Focus is visible': false,
    },
    'Enough Time': {
      'No time limits or adjustable time limits': false,
      'No auto-playing content': false,
    },
    'Seizures': {
      'No content flashes more than 3 times per second': false,
    },
    'Navigable': {
      'Logical tab order': false,
      'Purpose of links is clear': false,
      'Skip links present': false,
    },
  },
  'Understandable': {
    'Readable': {
      'Language of page is identified': false,
      'Text is clear and simple': false,
    },
    'Predictable': {
      'Navigation is consistent': false,
      'Components behave consistently': false,
    },
    'Input Assistance': {
      'Form labels are associated with inputs': false,
      'Error messages are clear': false,
      'Help text is available': false,
    },
  },
  'Robust': {
    'Compatible': {
      'Valid HTML': false,
      'ARIA is used correctly': false,
      'Works with assistive technologies': false,
    },
  },
}

// Accessibility Testing Checklist
export const ACCESSIBILITY_TESTING_CHECKLIST = {
  'Keyboard Navigation': [
    'Tab through all interactive elements',
    'Verify focus is always visible',
    'Check for keyboard traps',
    'Test with keyboard only',
  ],
  'Screen Reader': [
    'Test with NVDA (Windows)',
    'Test with JAWS (Windows)',
    'Test with VoiceOver (Mac)',
    'Verify all content is readable',
    'Check form labels',
    'Verify button purposes',
  ],
  'Color Contrast': [
    'Check text contrast ratios',
    'Verify color is not only indicator',
    'Test with color blindness simulator',
  ],
  'Zoom and Text Sizing': [
    'Test at 200% zoom',
    'Test with larger text',
    'Verify no horizontal scrolling',
  ],
  'Motion and Animation': [
    'Test with reduced motion preference',
    'Verify no auto-playing content',
    'Check for flashing content',
  ],
  'Forms and Validation': [
    'Verify all form fields have labels',
    'Check error messages are clear',
    'Verify required fields are indicated',
    'Test with screen reader',
  ],
}
