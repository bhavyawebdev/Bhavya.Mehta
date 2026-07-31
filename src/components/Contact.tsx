import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Building,
  User,
  MessageCircle
} from 'lucide-react';

import { personalData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide a message or project overview.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build mailto URL
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name} (${formData.company || 'Direct'})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message}`
    );

    window.open(`mailto:${personalData.email}?subject=${subject}&body=${body}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="connect" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] dark:bg-[#18181B] border-y border-[#E4E4E7] dark:border-[#27272A] transition-colors">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#2563EB] dark:text-[#3B82F6]">
            Get In Touch
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#09090B] dark:text-[#F4F4F5]">
            Connect With Me
          </h2>
          <div className="w-16 h-1 bg-[#2563EB] dark:bg-[#3B82F6] rounded-full mx-auto" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#3F3F46] dark:text-[#A1A1AA]">
            Looking for a dedicated Full Stack Developer? Send a message or connect directly via phone, WhatsApp, or email.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] shadow-xs space-y-8">
              
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-2xl text-[#09090B] dark:text-[#F4F4F5]">
                  Let's Discuss Opportunities
                </h3>
                <p className="text-sm text-[#3F3F46] dark:text-[#A1A1AA]">
                  Feel free to reach out directly for internship inquiries, full-time engineering roles, or project collaborations.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4">
                
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-[#E8ECF0]/60 dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-[#2563EB]/10 text-[#2563EB] dark:bg-[#3B82F6]/20 dark:text-[#3B82F6] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-xs text-[#3F3F46] dark:text-[#A1A1AA]">Email Address</span>
                      <a
                        href={`mailto:${personalData.email}`}
                        className="text-sm font-semibold text-[#09090B] dark:text-[#F4F4F5] hover:text-[#2563EB] dark:hover:text-[#3B82F6] truncate block"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalData.email, 'Email')}
                    className="p-2 rounded-lg text-[#3F3F46] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#F4F4F5] hover:bg-[#FAFAFA] dark:hover:bg-[#27272A] transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-xl bg-[#E8ECF0]/60 dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#2563EB]/10 text-[#2563EB] dark:bg-[#3B82F6]/20 dark:text-[#3B82F6] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#3F3F46] dark:text-[#A1A1AA]">Phone Number</span>
                      <a
                        href={`tel:+91${personalData.phone}`}
                        className="text-sm font-semibold text-[#09090B] dark:text-[#F4F4F5] hover:text-[#2563EB] dark:hover:text-[#3B82F6]"
                      >
                        +91 {personalData.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(`+91${personalData.phone}`, 'Phone')}
                    className="p-2 rounded-lg text-[#3F3F46] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#F4F4F5] hover:bg-[#FAFAFA] dark:hover:bg-[#27272A] transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedField === 'Phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/91${personalData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-between gap-3 transition-colors shadow-xs font-semibold text-sm"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </div>
                  <span className="text-xs bg-emerald-700 px-2.5 py-1 rounded-md">Direct</span>
                </a>

              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-[#E4E4E7] dark:border-[#27272A] space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#3F3F46] dark:text-[#A1A1AA]">
                  Professional Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center gap-2 text-xs font-semibold text-[#09090B] dark:text-[#F4F4F5] hover:bg-[#E8ECF0] dark:hover:bg-[#27272A] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center gap-2 text-xs font-semibold text-[#2563EB] dark:text-[#3B82F6] hover:bg-[#E8ECF0] dark:hover:bg-[#27272A] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-[#FAFAFA] dark:bg-[#1C1C1F] border border-[#E4E4E7] dark:border-[#27272A] shadow-xs space-y-6">
              
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-2xl text-[#09090B] dark:text-[#F4F4F5]">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#3F3F46] dark:text-[#A1A1AA]">
                  Fill in the form details below to trigger an immediate email dispatch.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2 font-serif font-bold text-lg">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span>Message Ready for Dispatch!</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Your email client has been opened with the pre-filled inquiry message. Alternatively, copy the email directly: <strong>{personalData.email}</strong>
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold underline text-emerald-700 dark:text-emerald-400 pt-2 block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#09090B] dark:text-[#F4F4F5]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-3.5 text-[#3F3F46] dark:text-[#A1A1AA]" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Bhavya Mehta"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#E8ECF0]/60 dark:bg-[#18181B] border ${
                          errors.name ? 'border-red-500' : 'border-[#E4E4E7] dark:border-[#27272A]'
                        } text-sm text-[#09090B] dark:text-[#F4F4F5] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-colors`}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                  </div>

                  {/* Email & Company Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#09090B] dark:text-[#F4F4F5]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#3F3F46] dark:text-[#A1A1AA]" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. bhavya@gmail.com"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#E8ECF0]/60 dark:bg-[#18181B] border ${
                            errors.email ? 'border-red-500' : 'border-[#E4E4E7] dark:border-[#27272A]'
                          } text-sm text-[#09090B] dark:text-[#F4F4F5] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-colors`}
                        />
                      </div>
                      {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                    </div>

                    {/* Company Input */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#09090B] dark:text-[#F4F4F5]">
                        Company / Organization
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 absolute left-3.5 top-3.5 text-[#3F3F46] dark:text-[#A1A1AA]" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. TechCorp Solutions"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#E8ECF0]/60 dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] text-sm text-[#09090B] dark:text-[#F4F4F5] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#09090B] dark:text-[#F4F4F5]">
                      What are you looking for? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe the role, project scope, or opportunity..."
                      className={`w-full p-4 rounded-xl bg-[#E8ECF0]/60 dark:bg-[#18181B] border ${
                        errors.message ? 'border-red-500' : 'border-[#E4E4E7] dark:border-[#27272A]'
                      } text-sm text-[#09090B] dark:text-[#F4F4F5] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-colors`}
                    />
                    {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
                  </div>

                  {/* Submit Button in Accent Color */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#2563EB] dark:bg-[#3B82F6] hover:bg-[#1D4ED8] dark:hover:bg-[#60A5FA] text-white font-sans font-semibold text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
