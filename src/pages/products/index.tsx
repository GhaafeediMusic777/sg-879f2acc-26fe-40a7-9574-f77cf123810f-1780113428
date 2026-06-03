import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, Star } from 'lucide-react'

const PRODUCTS = [
  {
    id: 'emotional-soundtrack',
    name: 'Emotional Soundtrack',
    price: 49,
    emoji: '🎵',
    category: 'Music',
    rating: 4.8,
    description: 'Your story as original cinematic music',
    popular: true
  },
  {
    id: 'cinematic-story',
    name: 'Cinematic Story Film',
    price: 149,
    emoji: '🎬',
    category: 'Video',
    rating: 4.9,
    description: 'Song + music video experience',
    popular: true
  },
  {
    id: 'memorial-legacy',
    name: 'Memorial Legacy Film',
    price: 299,
    emoji: '🕯️',
    category: 'Legacy',
    rating: 5.0,
    description: 'Preserve forever',
    popular: true
  },
  {
    id: 'signature-masterpiece',
    name: 'Signature Masterpiece',
    price: 499,
    emoji: '👑',
    category: 'Premium',
    rating: 5.0,
    description: 'Ultimate cinematic experience',
    premium: true
  },
  {
    id: 'future-self',
    name: 'Future Self Vision',
    price: 125,
    emoji: '✨',
    category: 'Vision',
    rating: 4.7,
    description: 'Visualize yourself successful, happy, peaceful'
  },
  {
    id: 'dream-visualization',
    name: 'Dream AI Visualization',
    price: 79,
    emoji: '🌙',
    category: 'Vision',
    rating: 4.6,
    description: 'Subconscious cinema'
  },
  {
    id: 'relationship-healing',
    name: 'Relationship Healing',
    price: 119,
    emoji: '💔',
    category: 'Healing',
    rating: 4.7,
    description: 'Transform pain to purpose'
  },
  {
    id: 'cinematic-life-story',
    name: 'Cinematic Life Story',
    price: 249,
    emoji: '🎥',
    category: 'Biography',
    rating: 4.8,
    description: 'Biography as cinema'
  },
  {
    id: 'couples-journey',
    name: 'Couples Journey Film',
    price: 199,
    emoji: '❤️',
    category: 'Relationships',
    rating: 4.9,
    description: 'Your love story'
  },
  {
    id: 'sophia-ai',
    name: 'Sophia AI Membership',
    price: 19,
    emoji: '🤖',
    category: 'AI Companion',
    rating: 4.8,
    description: '24/7 emotional support & wellness companion',
    monthly: true
  },
  {
    id: 'voice-cloning',
    name: 'Voice Cloning Studio',
    price: 99,
    emoji: '🎙️',
    category: 'Audio',
    rating: 4.7,
    description: 'Hear your story in your own voice'
  },
  {
    id: 'social-ready',
    name: 'Social-Ready Clips',
    price: 39,
    emoji: '📱',
    category: 'Social',
    rating: 4.6,
    description: 'Auto-generated clips for TikTok & Instagram'
  },
  {
    id: 'family-vault',
    name: 'Family Vault',
    price: 149,
    emoji: '👨‍👩‍👧‍👦',
    category: 'Family',
    rating: 4.8,
    description: 'Preserve family stories forever'
  },
  {
    id: 'nft-collection',
    name: 'NFT Collection',
    price: 199,
    emoji: '🖼️',
    category: 'Web3',
    rating: 4.5,
    description: 'Own your story as an NFT'
  }
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))]

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent mb-4">
            All Products
          </h1>
          <p className="text-xl text-gray-300">
            Transform your emotional stories into cinematic masterpieces
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-gold" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black-800 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-gold text-black font-semibold'
                    : 'bg-black-800 text-gray-300 border border-gold/30 hover:border-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gold" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-black-800 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-black-800 border border-gold/30 rounded-xl overflow-hidden hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{product.emoji}</div>
                  {product.popular && (
                    <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full">
                      Popular
                    </span>
                  )}
                  {product.premium && (
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full">
                      Premium
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gold mb-2 group-hover:text-purple-400 transition-colors">
                  {product.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {product.rating && (
                      <>
                        <Star className="w-4 h-4 fill-gold text-gold" />
                        <span className="text-gold font-semibold">{product.rating}</span>
                      </>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gold">
                      ${product.price}
                    </div>
                    {product.monthly && (
                      <div className="text-xs text-gray-400">/month</div>
                    )}
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">No products found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="px-6 py-2 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
