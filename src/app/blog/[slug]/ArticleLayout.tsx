"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Nav, Footer } from "../../../routes/index";
import { BlogPost } from "../../../lib/blog-data";

export default function ArticleLayout({ post }: { post: BlogPost }) {
  const { scrollY } = useScroll();
  
  // Parallax animations similar to careers page
  const rightImgY = useTransform(scrollY, [0, 1000], [0, -120]);
  const leftImgY = useTransform(scrollY, [0, 1000], [0, -80]);

  // Animation variants
  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-slate-900 bg-[#FBF8F3]">
      {/* Soft top gradient for navbar visibility */}
      <div 
        className="absolute top-0 inset-x-0 h-[300px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(217, 228, 239, 0.4) 0%, rgba(242, 228, 234, 0.1) 40%, transparent 100%)"
        }}
      />
      
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center pt-32 pb-16 md:pb-24 px-6 md:px-10 overflow-visible z-20">
        
        {/* Left Edge Image - Anchored to bottom */}
        <motion.img 
          src="/Untitled design (42).svg" 
          alt="" 
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "-40%", opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
          className="absolute left-0 bottom-[-10%] w-[35vw] max-w-[450px] pointer-events-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)] object-contain mix-blend-multiply"
          style={{ y: leftImgY }}
        />

        {/* Right Edge Image - Anchored to bottom */}
        <motion.img 
          src="/Untitled design (63).svg" 
          alt="" 
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "40%", opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
          className="absolute right-0 bottom-[-10%] w-[32vw] max-w-[420px] pointer-events-none z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.05)] object-contain mix-blend-multiply"
          style={{ y: rightImgY }}
        />

        <motion.div {...reveal} className="relative mx-auto max-w-[1024px] text-center z-20 pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-[13px] font-bold text-[#1E3048] tracking-wide uppercase">{post.tag}</span>
          </div>

          <h1 className="main-page-title mb-8 leading-[1.2] !text-[40px] md:!text-[56px]">
            {post.title}
          </h1>
        </motion.div>
      </section>

      <section className="relative py-12 md:py-24 px-6 md:px-10 overflow-visible z-20">
        <div className="mx-auto max-w-[1024px]">
          
          {/* Two-Column Section Header */}
          <div className="flex flex-col md:flex-row text-left gap-10 md:gap-20 mb-20 relative z-20">
            <h3 className="main-page-title flex-1 leading-[1.1] !text-[36px] md:!text-[44px]">
              Article Overview
            </h3>
            <div className="flex-1 space-y-4 text-[#4F6072] text-[18px] md:text-[20px] leading-relaxed font-sans italic font-medium border-l-4 border-[#1E3A8A] pl-6">
              <p>{post.summary}</p>
            </div>
          </div>

          {/* Article Content Box (inspired by careers form container) */}
          <motion.div {...reveal} className="max-w-[850px] mx-auto text-left relative z-20">
            <div className="bg-white/70 backdrop-blur-2xl p-8 md:p-16 rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
              
              <div 
                className="prose prose-lg max-w-none text-[#213145]
                           prose-h2:font-serif prose-h2:text-[32px] prose-h2:text-[#1E3048] prose-h2:mt-12 prose-h2:mb-6
                           prose-p:text-[17px] prose-p:leading-[1.8] prose-p:text-[#4F6072] prose-p:mb-6
                           prose-strong:text-[#1E3048] prose-strong:font-bold
                           prose-ul:text-[17px] prose-ul:text-[#4F6072] prose-ul:leading-[1.8]
                           prose-li:mb-3"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

            </div>
          </motion.div>

        </div>
      </section>

      {/* Hyper minimalist footer override */}
      <div className="relative w-full bg-transparent mt-12">
        <style>{`
          .footer-black-override * {
            color: #0f172a !important;
            border-color: rgba(0,0,0,0.15) !important;
          }
          .footer-black-override button,
          .footer-black-override span[style*="background"] {
            background: rgba(0,0,0,0.03) !important;
          }
          .footer-black-override button:hover {
            background: rgba(0,0,0,0.08) !important;
          }
          .footer-black-override a:hover {
            color: #1E3A8A !important;
            background: transparent !important;
          }
        `}</style>
        <div className="footer-black-override">
          <Footer />
        </div>
      </div>
    </main>
  );
}
