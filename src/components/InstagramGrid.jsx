import React from 'react';
import { Heart, MessageCircle, Camera } from 'lucide-react';

export default function InstagramGrid() {
  const posts = [

    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=400&auto=format&fit=crop",
      likes: "1.2k",
      comments: "94",
      caption: "Spiritual Sacred Geometry & Number Vibrations ✨"
    },
    {
      id: 2,
      image: "/assets/a.png",
      likes: "2.4k",
      comments: "182",
      caption: "Consultation Insights from Mumbai Studio 🌟"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop",
      likes: "980",
      comments: "64",
      caption: "Executive Business Name Numerology 🏛️"
    },
    {
      id: 4,
      image: "/assets/office_ambient.jpg",
      likes: "3.1k",
      comments: "210",
      caption: "Kalina Studio Luxury Ambiance 🌿"
    }
  ];

  return (
    <section className="py-16 bg-[#080809] border-t border-[#C8A44D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C8A44D] mb-1">
              <Camera className="w-4 h-4" />
              <span>@shinewithnumerology</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F5EF]">
              Follow Our Spiritual Journey
            </h3>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full glass-panel border-[#C8A44D]/30 text-xs text-[#C8A44D] font-semibold tracking-wider uppercase hover:bg-[#C8A44D] hover:text-black transition-all duration-300"
          >
            Visit Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-xl overflow-hidden glass-panel border-[#C8A44D]/20 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className={`w-full h-full ${post.image.includes('a.png') ? 'object-contain object-top bg-[#121214]' : 'object-cover object-center'} group-hover:scale-105 transition-transform duration-700`}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <p className="text-xs text-[#E8DFD1] font-medium mb-3 line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex items-center gap-4 text-xs text-[#C8A44D]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" /> {post.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
