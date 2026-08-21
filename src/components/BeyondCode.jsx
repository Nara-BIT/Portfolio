import { motion } from "framer-motion";
import { youtubeVideos, youtubeChannel, blog } from "../data/constants";
import { FaYoutube, FaPenNib } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function BeyondCode() {
  return (
    <section id="beyond-code" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary mb-4">Beyond Code</h2>
          <div className="w-full h-px gradient-line" />
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-start">
          
          {/* YouTube Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-3xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <FaYoutube className="text-3xl text-red-500" />
                <h3 className="text-2xl font-bold text-text-primary">Video Editing</h3>
              </div>
              <a 
                href={youtubeChannel} 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-mono text-text-muted hover:text-text-primary transition-colors flex items-center gap-2"
              >
                @BrawlyisliveYT <FiExternalLink />
              </a>
            </div>
            
            <p className="text-text-secondary mb-8">
              Video editing started as a hobby and grew into a creative outlet. Here are a few notable edits I've worked on over time.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {youtubeVideos.map((video, i) => (
                <motion.a
                  key={video.id}
                  href={`https://youtu.be/${video.id}`}
                  target="_blank"
                  rel="noreferrer"
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative aspect-video rounded-xl overflow-hidden bg-surface-lighter border border-surface-border block"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Blog Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl h-full flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaPenNib className="text-2xl text-accent" />
              <h3 className="text-2xl font-bold text-text-primary">Writing</h3>
            </div>

            <div className="flex-1">
              <h4 className="text-xl font-bold text-text-primary mb-3">{blog.title}</h4>
              <p className="text-text-secondary leading-relaxed mb-8">
                {blog.description}
              </p>
            </div>

            <a 
              href={blog.url} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-between w-full p-4 rounded-xl border border-surface-border bg-surface-lighter hover:bg-text-primary hover:text-surface hover:border-text-primary transition-all duration-300 group"
            >
              <span className="font-semibold">Read the Saga</span>
              <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
