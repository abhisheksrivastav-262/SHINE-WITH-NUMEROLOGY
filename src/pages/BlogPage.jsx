import React, { useState } from 'react';
import { Sparkles, Clock, User, ArrowRight, X, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../utils/contentData';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [readingArticle, setReadingArticle] = useState(null);

  const categories = ['All', 'Numerology', 'Relationships', 'Career', 'Spiritual Growth'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="pt-24 pb-20 bg-[#0C0C0D] min-h-screen text-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs uppercase tracking-[0.2em] text-[#C8A44D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Spiritual Luxury Publication</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-gold-shimmer">
            The Sacred Journal
          </h1>
          <p className="text-sm sm:text-base text-[#E8DFD1]/80 font-light leading-relaxed">
            Insights on sacred mathematics, relationship dynamics, business vibration tuning, and personal evolution.
          </p>
        </div>

        {/* Featured Hero Article */}
        <div className="glass-panel rounded-3xl border-[#C8A44D]/30 overflow-hidden gold-glow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-8">
          <div className="lg:col-span-7 h-72 lg:h-[400px] rounded-2xl overflow-hidden relative">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-black/70 text-[#C8A44D] border border-[#C8A44D]/40 backdrop-blur-md">
              Featured Hero Article
            </span>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4 text-xs text-[#C8A44D]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F5EF] leading-snug">
              {featuredPost.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#E8DFD1]/80 font-light leading-relaxed">
              {featuredPost.excerpt}
            </p>

            <div className="pt-2">
              <button
                onClick={() => setReadingArticle(featuredPost)}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gold-gradient hover:bg-gold-gradient-hover transition-all flex items-center gap-2"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all border ${
                selectedCategory === cat
                  ? 'bg-gold-gradient text-black border-[#C8A44D] shadow-lg scale-105'
                  : 'glass-panel text-[#E8DFD1]/80 hover:text-white border-[#C8A44D]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-3xl glass-panel border-[#C8A44D]/20 overflow-hidden hover:border-[#C8A44D]/60 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-black/70 text-[#C8A44D] border border-[#C8A44D]/30 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-[#E8DFD1]/60">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#F8F5EF] leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#E8DFD1]/70 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#C8A44D]/15 mt-4 flex items-center justify-between">
                <span className="text-[11px] text-[#C8A44D]">By {post.author}</span>
                <button
                  onClick={() => setReadingArticle(post)}
                  className="text-xs font-bold uppercase tracking-wider text-[#C8A44D] hover:underline flex items-center gap-1"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reader Modal Drawer */}
        {readingArticle && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className="glass-panel max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border-[#C8A44D]/40 p-6 sm:p-10 relative space-y-6">
              <button
                onClick={() => setReadingArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-panel hover:bg-white/10 text-[#E8DFD1]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-[#C8A44D]/20 text-[#C8A44D] border border-[#C8A44D]/40">
                  {readingArticle.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gold-shimmer">
                  {readingArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-[#E8DFD1]/60">
                  <span>Author: {readingArticle.author}</span>
                  <span>•</span>
                  <span>{readingArticle.date}</span>
                  <span>•</span>
                  <span>{readingArticle.readTime}</span>
                </div>
              </div>

              <div className="h-64 rounded-2xl overflow-hidden">
                <img
                  src={readingArticle.image}
                  alt={readingArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm text-[#E8DFD1]/90 leading-relaxed font-light space-y-4 whitespace-pre-line">
                {readingArticle.content}
              </div>

              <div className="pt-6 border-t border-[#C8A44D]/20 flex justify-end">
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gold-gradient"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
