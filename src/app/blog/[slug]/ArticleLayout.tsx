"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav, Footer } from "../../../routes/index";
import { BlogPost, blogPosts } from "../../../lib/blog-data";

export default function ArticleLayout({ post }: { post: BlogPost }) {
  // Animation variants
  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
  };

  // Get 3 other related posts
  const otherPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-slate-900 bg-[#F5F2EB]">
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-10 z-20">
        <motion.div {...reveal} className="relative mx-auto max-w-[800px] text-center flex flex-col items-center">
          
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#1E3048] text-white rounded-full text-[12px] font-bold tracking-widest uppercase">
              {post.tag}
            </span>
          </div>

          <h1 className="font-serif text-[#1E3048] mb-8 leading-[1.1] text-[42px] md:text-[56px] lg:text-[64px] tracking-tight">
            {post.title}
          </h1>

          <p className="text-[#4F6072] text-[18px] md:text-[22px] leading-relaxed font-serif italic max-w-[700px] mx-auto">
            "{post.summary}"
          </p>

          <div className="w-12 h-[1px] bg-[#1E3048]/20 mt-12 mx-auto"></div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative py-10 px-6 md:px-10 z-20">
        <motion.div {...reveal} className="max-w-[700px] mx-auto text-left relative z-20">
          <div 
            className="prose prose-lg max-w-none text-[#213145]
                       prose-h2:font-serif prose-h2:text-[32px] md:prose-h2:text-[36px] prose-h2:text-[#1E3048] prose-h2:mt-16 prose-h2:mb-6 prose-h2:font-medium
                       prose-p:text-[18px] md:prose-p:text-[20px] prose-p:leading-[1.9] prose-p:text-[#3C4A5A] prose-p:mb-8 prose-p:font-sans
                       prose-strong:text-[#1E3048] prose-strong:font-bold
                       prose-ul:text-[18px] prose-ul:text-[#3C4A5A] prose-ul:leading-[1.9]
                       prose-li:mb-4
                       prose-blockquote:border-l-0 prose-blockquote:pl-0 prose-blockquote:my-12 prose-blockquote:text-center
                       prose-blockquote:font-serif prose-blockquote:text-[24px] md:prose-blockquote:text-[28px] prose-blockquote:text-[#1E3048] prose-blockquote:italic prose-blockquote:leading-[1.5]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </section>

      {/* Read Other Blogs */}
      <section className="relative py-24 px-6 md:px-10 bg-[#F5F2EB] border-t border-[#1E3048]/10 mt-12">
        <div className="max-w-[1024px] mx-auto">
          <h2 className="font-serif text-[36px] text-[#1E3048] text-center mb-16">Read Other Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {otherPosts.map((p, i) => (
              <Link href={`/blog/${p.slug}`} key={p.slug} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="cursor-pointer flex flex-col h-full"
                >
                  <div className="relative w-full aspect-[1.6] rounded-[16px] overflow-hidden mb-5 bg-[#EAE5D9]">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-[14px] py-[4px] bg-[#EAE5D9] text-[#4F4655] rounded-full text-[11px] font-bold tracking-widest uppercase">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-[20px] text-[#213145] leading-[1.3] group-hover:text-[#1E3A8A] transition-colors">
                    {p.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative w-full bg-transparent">
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
