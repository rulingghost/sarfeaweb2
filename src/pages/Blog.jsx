import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/blogPosts';
import { SEO } from '../components/ui/SEO';
import { Calendar, ArrowRight, BookOpen, Search, Hash } from 'lucide-react';
import { useState, useMemo } from 'react';

export const Blog = ({ setActivePage, t, language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set(BLOG_POSTS.flatMap(post => post.tags));
    return ['all', ...Array.from(tags)];
  }, []);

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title?.[language]?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.title?.['en']?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section className="pt-32 pb-20 px-4 min-h-screen">
      <SEO 
        title={t.blog_page?.title}
        description={t.blog_page?.subtitle}
        keywords="blog, teknoloji, yazılım, insight, makale"
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm mb-6"
          >
            <BookOpen size={16} />
            <span>Blog</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6"
          >
            {t.blog_page?.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            {t.blog_page?.subtitle}
          </motion.p>
        </div>

        {/* Search & Filter */}
        <div className="mb-12 flex flex-col items-center gap-6">
            <div className="relative w-full max-w-lg">
                <input 
                    type="text" 
                    placeholder="Blog yazılarında ara..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
                {allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${selectedTag === tag ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'}`}
                    >
                        {tag !== 'all' && <Hash size={14} className="opacity-50" />}
                        {tag === 'all' ? (language === 'en' ? 'All' : 'Tümü') : tag}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
             filteredPosts.slice(0, 12).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100 dark:border-slate-800"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={post.image} 
                  alt={post.title[language] || post.title['en']} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-950/90 backdrop-blur text-xs font-bold rounded-full text-slate-900 dark:text-white">
                        {post.tags[0]}
                    </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title[language] || post.title['en']}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 text-sm">
                  {post.excerpt[language] || post.excerpt['en']}
                </p>
                
                <button 
                  onClick={() => setActivePage(`blog-post-${post.id}`)}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm group/btn"
                >
                  {t.blog_page?.read_more}
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))
          ) : (
            <div className="col-span-full py-20 text-center text-slate-500">
                <p className="text-xl font-medium">Sonuç bulunamadı.</p>
                <button onClick={() => {setSearchTerm(''); setSelectedTag('all')}} className="mt-4 text-blue-600 hover:underline">Filtreleri Temizle</button>
            </div>
          )}
        </div>

        {/* SEO Uzay Yakıtı (SEO Cloud) - Gizli ama Google Tarar */}
        <div className="mt-32 opacity-20 hover:opacity-100 transition-opacity">
          <h3 className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-widest">Sektörel Çözüm Arşivi (Trend Analizi)</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {BLOG_POSTS.filter(p => p.isVirtual).map(post => (
              <button 
                key={post.id} 
                onClick={() => setActivePage(`blog-post-${post.id}`)}
                className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors underline decoration-slate-300"
              >
                {post.title[language] || post.title['en']}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
