
import React from 'react';
import { Calendar, Clock, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { COLORS } from '../constants';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen animate-page-entrance overflow-x-hidden">
      {/* Intro Header */}
      <section className="pt-40 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
                <h1 className="text-xs font-black uppercase tracking-[0.3em] text-riva-gold mb-6">Engagement</h1>
                <h2 className="text-5xl md:text-7xl font-black text-riva-blue tracking-tighter leading-tight">Apply for <br />Growth Strategy.</h2>
                <p className="mt-8 text-xl text-gray-500 font-light leading-relaxed">
                    This is a formal inquiry for a dedicated audit. We accept a limited number of clients per quarter to maintain our standards of operational excellence.
                </p>
            </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Info Column */}
            <div className="lg:w-5/12">
              <div className="sticky top-32 space-y-16">
                <div>
                  <h3 className="text-2xl font-black text-riva-blue mb-10 tracking-tight underline decoration-riva-gold decoration-4 underline-offset-8">What to Expect</h3>
                  <div className="space-y-10">
                    {[
                      { icon: <Calendar />, title: "30-Min Principal Review", desc: "A direct assessment of your current revenue and operational hurdles." },
                      { icon: <Clock />, title: "12-Hour Priority Response", desc: "Our team reviews all serious inquiries within one business day." },
                      { icon: <Globe />, title: "Nationwide Deployment", desc: "Digital systems integrated globally, on-site support available for HQ pivots." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start group">
                        <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-sm flex items-center justify-center text-riva-blue flex-shrink-0 group-hover:bg-riva-blue group-hover:text-white transition-all duration-300">
                          {item.icon}
                        </div>
                        <div className="ml-6">
                          <h4 className="text-lg font-bold text-riva-blue mb-2">{item.title}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-blue-50/50 rounded-sm border border-blue-100">
                    <div className="flex items-center text-riva-blue mb-4">
                        <ShieldCheck className="w-5 h-5 mr-3 text-riva-gold" />
                        <span className="text-xs font-black uppercase tracking-widest">Privacy Protocol</span>
                    </div>
                    <p className="text-xs text-blue-900/60 leading-relaxed font-medium">
                        All information submitted is protected under our standard Non-Disclosure Agreement. Your data stays internal to the Riva Strategies principal group.
                    </p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:w-7/12">
              <div className="bg-white p-10 md:p-16 rounded-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
                <h3 className="text-3xl font-black text-riva-blue mb-12 tracking-tight">System Audit Inquiry</h3>
                
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="block text-[10px] font-black text-riva-blue uppercase tracking-[0.2em] mb-3 group-focus-within:text-riva-gold transition-colors">First Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white px-5 py-4 rounded-sm border-2 border-gray-100 text-riva-blue font-semibold focus:outline-none focus:border-riva-gold focus:ring-4 focus:ring-riva-gold/5 transition-all" 
                        placeholder="John"
                        required 
                      />
                    </div>
                    <div className="relative group">
                      <label className="block text-[10px] font-black text-riva-blue uppercase tracking-[0.2em] mb-3 group-focus-within:text-riva-gold transition-colors">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white px-5 py-4 rounded-sm border-2 border-gray-100 text-riva-blue font-semibold focus:outline-none focus:border-riva-gold focus:ring-4 focus:ring-riva-gold/5 transition-all" 
                        placeholder="Doe"
                        required 
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-[10px] font-black text-riva-blue uppercase tracking-[0.2em] mb-3 group-focus-within:text-riva-gold transition-colors">Business Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white px-5 py-4 rounded-sm border-2 border-gray-100 text-riva-blue font-semibold focus:outline-none focus:border-riva-gold focus:ring-4 focus:ring-riva-gold/5 transition-all" 
                      placeholder="john@company.com"
                      required 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="block text-[10px] font-black text-riva-blue uppercase tracking-[0.2em] mb-3 group-focus-within:text-riva-gold transition-colors">Industry Vertical</label>
                      <select className="w-full bg-white px-5 py-4 rounded-sm border-2 border-gray-100 text-riva-blue font-semibold focus:outline-none focus:border-riva-gold focus:ring-4 focus:ring-riva-gold/5 transition-all appearance-none cursor-pointer">
                        <option>Select vertical...</option>
                        <option>Hospitality Groups</option>
                        <option>Professional Services</option>
                        <option>Manufacturing & Logistics</option>
                        <option>SaaS & Technology</option>
                        <option>Retail Multi-Chain</option>
                        <option>Other / High Growth</option>
                      </select>
                    </div>
                    <div className="relative group">
                      <label className="block text-[10px] font-black text-riva-blue uppercase tracking-[0.2em] mb-3 group-focus-within:text-riva-gold transition-colors">Current Revenue</label>
                      <select className="w-full bg-white px-5 py-4 rounded-sm border-2 border-gray-100 text-riva-blue font-semibold focus:outline-none focus:border-riva-gold focus:ring-4 focus:ring-riva-gold/5 transition-all appearance-none cursor-pointer">
                        <option>$0 - $1M (Early Scale)</option>
                        <option>$1M - $5M (Established)</option>
                        <option>$5M - $20M (Expansion)</option>
                        <option>$20M+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-[10px] font-black text-riva-blue uppercase tracking-[0.2em] mb-3 group-focus-within:text-riva-gold transition-colors">Current Bottleneck</label>
                    <textarea 
                        rows={5} 
                        className="w-full bg-white px-5 py-4 rounded-sm border-2 border-gray-100 text-riva-blue font-semibold focus:outline-none focus:border-riva-gold focus:ring-4 focus:ring-riva-gold/5 transition-all resize-none" 
                        placeholder="What is preventing you from doubling your revenue in the next 18 months?"
                    ></textarea>
                  </div>

                  <button className="group w-full py-6 bg-riva-gold text-riva-blue rounded-sm font-black text-sm uppercase tracking-[0.3em] shadow-xl hover:bg-riva-gold-dark hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center overflow-hidden relative">
                    <span className="relative z-10">Request Strategy Audit</span>
                    <ArrowRight className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                    {/* Subtle Shine Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-white/20 -skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
                  </button>
                  
                  <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest mt-6">
                    Professional Inquiry Only • No Solicitations
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
