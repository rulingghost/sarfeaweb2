import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/blogPosts';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

export const Blog = ({ setActivePage, t, language }) => {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm mb-6"
          >
            <circle cx="12" cy="12" r="10" />
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
