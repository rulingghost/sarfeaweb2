import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Share2, Clock, User } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { SEO } from '../components/ui/SEO';
import { Footer } from '../components/layout/Footer';

export const BlogPost = ({ postId, setActivePage, t, language }) => {
  const post = BLOG_POSTS.find(p => p.slug === postId || p.id === postId);

  if (!post) return <div className="min-h-screen flex items-center justify-center text-slate-500">Post not found</div>;

  const title = post.title[language] || post.title['en'];
  const content = post.content[language] || post.content['en'];
  const excerpt = post.excerpt[language] || post.excerpt['en'];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20">
      <SEO 
        title={title}
        description={excerpt}
        image={post.image}
        keywords={post.tags.join(', ')}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => setActivePage('blog')}
          className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {t?.blog_page?.back_to_blog || "Back to Blog"}
        </button>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800"
        >
          <div className="relative h-[400px] w-full overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
             <img src={post.image} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
             <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="flex items-center gap-3 text-white/80 text-sm font-medium mb-3">
                    <span className="flex items-center gap-1.5"><Calendar size={14}/> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14}/> 5 min read</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">{title}</h1>
                <div className="flex gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white border border-white/20">
                            #{tag}
                        </span>
                    ))}
                </div>
             </div>
          </div>

          <div className="p-8 md:p-12">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none 
              prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
              prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 dark:prose-strong:text-white
              prose-ul:list-disc prose-ul:pl-6 prose-li:marker:text-blue-500"
              dangerouslySetInnerHTML={{ __html: content }} 
            />
            
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                        <User size={24} className="text-slate-500"/>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Sarfea Editorial Team</p>
                        <p className="text-xs text-slate-500">Tech & Innovation</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors">
                    <Share2 size={20} />
                    <span className="text-sm font-medium">{t?.blog_page?.share || "Share"}</span>
                </button>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};
