
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COLORS, INDUSTRIES, SERVICES } from '../constants';

const Home = () => {
  return (
    <div className="overflow-x-hidden animate-page-entrance">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50/50 border border-blue-100 text-riva-blue text-[10px] font-black uppercase tracking-[0.25em] mb-10">
              Growth Architecture & Systems
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-riva-blue leading-[1.05] tracking-tight">
              We Build <br />
              <span className="text-riva-gold italic font-serif">Valuable</span> Companies.
            </h1>
            <p className="mt-10 text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl font-light">
              Riva Strategies transforms operator-dependent businesses into high-performance, system-led assets.
            </p>
            <div className="mt-14 flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-riva-gold text-riva-blue rounded-sm font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-riva-gold-dark hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
                Book Growth Audit <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-10 py-5 border-2 border-riva-blue text-riva-blue rounded-sm font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all flex items-center justify-center">
                Our Methodology
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle Geometric Design */}
        <div className="absolute top-0 right-0 w-2/5 h-full hidden lg:block overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-[-100px] w-[600px] h-[600px] border-[40px] border-riva-blue/5 rounded-full"></div>
            <div className="absolute bottom-20 right-[-50px] w-[300px] h-[300px] bg-riva-gold/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Authority Bar */}
      <section className="bg-riva-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center items-center">
            {[
              { val: '$100M+', label: 'Managed Pipeline' },
              { val: '42%', label: 'Avg Efficiency Lift' },
              { val: '250+', label: 'Systems Deployed' },
              { val: '10+', label: 'Core Verticals' }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-3xl md:text-5xl font-black text-riva-gold group-hover:scale-110 transition-transform duration-300">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200/50 mt-4">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-riva-gold mb-6">Execution Pillars</h2>
              <h3 className="text-4xl md:text-5xl font-black text-riva-blue leading-tight tracking-tight">The Architecture of Scale</h3>
            </div>
            <p className="text-gray-500 text-lg max-w-sm md:text-right">A multi-disciplinary approach to solving bottlenecks across your entire organization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-sm border border-gray-100 gold-glow transition-all duration-300 group">
                <div className="text-4xl mb-8 transition-transform group-hover:scale-125 duration-300 inline-block">{service.icon}</div>
                <h4 className="text-xl font-bold text-riva-blue mb-4">{service.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.description}</p>
                <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-riva-gold flex items-center group-hover:text-riva-blue transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Focus Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-riva-gold/10 rounded-full blur-2xl"></div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="Executive Meeting" className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 relative z-10" />
              <div className="absolute -bottom-10 -right-10 p-8 bg-riva-blue text-white rounded-sm shadow-2xl z-20 hidden md:block animate-pulse">
                <div className="text-3xl font-black text-riva-gold">ROI-Driven</div>
                <div className="text-[10px] uppercase tracking-widest mt-2 font-bold opacity-60">Consulting Method</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-riva-gold mb-6">Our DNA</h2>
              <h3 className="text-4xl md:text-5xl font-black text-riva-blue mb-10 leading-tight tracking-tight">Operator Minds. <br />Systematic Hands.</h3>
              <div className="space-y-8">
                {[
                  { t: "Deep Vertical Knowledge", d: "We don't guess. We apply frameworks proven in your specific sector." },
                  { t: "System-First Growth", d: "We build engines that produce predictable, high-margin revenue." },
                  { t: "Radical Transparency", d: "Live dashboards and real-time KPI tracking for every client." }
                ].map((item, idx) => (
                  <div key={idx} className="flex group">
                    <div className="w-12 h-12 bg-blue-50 text-riva-blue rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-riva-blue group-hover:text-white transition-all duration-300">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="ml-6">
                        <h4 className="text-lg font-bold text-riva-blue mb-1">{item.t}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-14">
                <Link to="/contact" className="group text-riva-blue font-black text-xs uppercase tracking-[0.2em] flex items-center hover:text-riva-gold transition-colors">
                  Speak with a Principal <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Showcase */}
      <section className="py-32 bg-gray-50/50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-riva-gold mb-6">Vertical Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black text-riva-blue mb-6 tracking-tight">Built for Your Reality</h3>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">Specific operational frameworks designed for the unique constraints of your industry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INDUSTRIES.slice(0, 3).map((ind, i) => (
              <Link key={i} to={`/industries/${ind.slug}`} className="group relative bg-white overflow-hidden border border-gray-100 p-12 gold-glow transition-all duration-500">
                <div className="relative z-10">
                    <div className="text-riva-blue mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{ind.icon}</div>
                    <h4 className="text-2xl font-black text-riva-blue mb-4 tracking-tight">{ind.name}</h4>
                    <p className="text-gray-500 text-sm mb-10 leading-relaxed">{ind.shortDesc}</p>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-riva-gold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      View Vertical Solutions <ChevronRight className="ml-1 w-4 h-4" />
                    </div>
                </div>
                {/* Decorative background number */}
                <div className="absolute -bottom-8 -right-8 text-9xl font-black text-gray-50 select-none group-hover:text-riva-gold/5 transition-colors duration-500">0{i+1}</div>
              </Link>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <Link to="/industries" className="inline-flex items-center px-10 py-5 border-2 border-riva-blue text-riva-blue rounded-sm font-black text-xs uppercase tracking-[0.2em] hover:bg-riva-blue hover:text-white transition-all">
                View All Industries
             </Link>
          </div>
        </div>
      </section>

      {/* High-Contrast CTA */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-riva-blue rounded-sm p-12 md:p-24 text-center relative overflow-hidden">
             <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Stop Building a Job. <br />Start Building an <span className="text-riva-gold italic font-serif">Asset</span>.</h2>
                <p className="text-blue-100/70 text-lg md:text-xl mb-12 font-light leading-relaxed">
                  Join the elite businesses that operate on the Riva Framework. High margins, predictable scale, and absolute owner freedom.
                </p>
                <Link to="/contact" className="inline-block px-12 py-6 bg-riva-gold text-riva-blue rounded-sm font-black text-sm uppercase tracking-[0.25em] shadow-2xl hover:bg-riva-gold-dark hover:scale-105 active:scale-95 transition-all">
                  Apply for Consultation
                </Link>
             </div>
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] border-[20px] border-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-riva-gold rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
