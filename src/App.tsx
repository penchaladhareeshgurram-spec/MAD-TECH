/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return <MADTechPortal />;
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Cpu, 
  Rocket, 
  Send, 
  Terminal, 
  Blocks,
  ArrowRight
} from 'lucide-react';

function MADTechPortal() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    stream: '',
    domain: 'Full Stack Web Development',
    message: ''
  });

  const domains = [
    "Full Stack Web Development",
    "Mobile App Development",
    "Machine Learning & AI",
    "Data Science",
    "Cloud Computing & DevOps",
    "UI/UX Design"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const message = `*New Internship Application | MAD Tech*
-----------------------------------
*Applicant Details*
👤 *Name:* ${formData.fullName}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🎓 *College:* ${formData.college}
📖 *Stream/Branch:* ${formData.stream}

*Technical Preferences*
🎯 *Domain:* ${formData.domain}

*Additional Information:*
${formData.message || 'No additional information provided.'}
-----------------------------------`;

    // Encode properly for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "919182047829";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-brand-500 selection:text-white">
      {/* Navbar segment */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">MAD tech</span>
          </div>
          <div>
            <a 
              href="#apply" 
              className="px-4 py-2 text-sm font-medium bg-white text-slate-900 rounded-full hover:bg-slate-200 transition-colors shadow-sm"
            >
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Header/Hero Context */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-brand-300 mb-8">
                <Rocket className="w-4 h-4" />
                <span>Internship Program 2024</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-6 leading-tight">
                Build real projects. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-brand-500">
                  Gain industry experience.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                Stop watching tutorials and start building. Join our intensive internship program and work on hands-on technical projects that matter.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#apply"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-[0_0_40px_8px_rgba(79,70,229,0.3)]"
                >
                  Apply via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features / Why Us */}
        <section className="py-20 px-6 border-t border-white/5 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-white mb-4">Why MAD tech?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">We bridge the gap between classroom theory and real-world execution.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/50 transition-colors"
                >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hands-on Coding</h3>
                <p className="text-slate-400 leading-relaxed">
                  Contribute to actual production-ready codebases. Learn to write clean, maintainable, and scalable architecture.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/50 transition-colors"
                >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Modern Tech Stack</h3>
                <p className="text-slate-400 leading-relaxed">
                  Work with React, Node.js, AI APIs, Cloud architectures, and tools that modern tech companies actually use.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/50 transition-colors"
                >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                  <Blocks className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Live Projects</h3>
                <p className="text-slate-400 leading-relaxed">
                  Build complete end-to-end features rather than just toy examples. Your work will have real impact and user visibility.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Form Registration section */}
        <section id="apply" className="py-24 px-6 relative">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-4">
                Submit Your Application
              </h2>
              <p className="text-slate-400">
                Fill out the details below. Once you hit submit, your application will be instantly routed to our recruitment team via WhatsApp.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-slate-300">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-300">
                      Phone Number (WhatsApp) <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 90000 00000"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* College */}
                  <div className="space-y-2">
                    <label htmlFor="college" className="text-sm font-medium text-slate-300">
                      College / University <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      placeholder="Institute of Technology"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  {/* Stream */}
                  <div className="space-y-2">
                    <label htmlFor="stream" className="text-sm font-medium text-slate-300">
                      Stream & Year <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      id="stream"
                      name="stream"
                      value={formData.stream}
                      onChange={handleInputChange}
                      placeholder="B.Tech CS / 3rd Year"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Domain Selector */}
                <div className="space-y-2">
                  <label htmlFor="domain" className="text-sm font-medium text-slate-300">
                    Interested Tech Domain <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-slate-200 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all cursor-pointer"
                  >
                    {domains.map((domain) => (
                      <option key={domain} value={domain} className="bg-slate-900">{domain}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">
                    Why MAD tech? / Past Experience (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about yourself, links to your Github/Portfolio, and why you want to join us..."
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto relative group flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all w-full"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit via WhatsApp</span>
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    Clicking this will generate a pre-filled WhatsApp message directed to our hiring team. No data is stored on our servers.
                  </p>
                </div>

              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-12 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} MAD Tech Internship Program. All rights reserved.</p>
      </footer>
    </div>
  );
}
