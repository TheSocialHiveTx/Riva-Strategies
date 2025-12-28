
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicesHub = () => {
  return (
    <div className="animate-page-entrance overflow-x-hidden">
      <section className="bg-white pt-40 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-[10px] font-black uppercase tracking-[0.3em] text-riva-gold mb-6">Expertise</h1>
            <h2 className="text-5xl md:text-7xl font-black text-riva-blue tracking-tighter leading-tight mb-8">Growth <br />Architecture.</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              We provide the frameworks and revenue engines necessary for professional scale. We don't just advise—we implement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-16 bg-white p-12 md:p-20 rounded-sm shadow-sm border border-gray-100 gold-glow transition-all duration-500 group">
                <div className="lg:w-1/2">
                  <div className="text-6xl mb-10 group-hover:scale-110 transition-transform duration-500 inline-block">{service.icon}</div>
                  <h2 className="text-4xl font-black text-riva-blue mb-6 tracking-tight leading-tight">{service.title}</h2>
                  <p className="text-gray-500 text-lg leading-relaxed font-light mb-10">
                    {service.description}
                  </p>
                  <Link to="/contact" className="group inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-riva-blue hover:text-riva-gold transition-colors">
                    Consult on {service.title} <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-riva-gold">The Build</h4>
                      <ul className="space-y-4">
                        {["Proprietary Frameworks", "Automated Logic", "Margin Visibility"].map((item, i) => (
                          <li key={i} className="flex items-center text-riva-blue font-bold text-sm">
                            <CheckCircle2 className="w-5 h-5 text-riva-gold mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-riva-gold">Objective</h4>
                      <p className="text-sm text-gray-400 leading-relaxed italic font-serif">
                        "Transforming operational chaos into a data-driven high-performance asset."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-32 bg-riva-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-riva-gold mb-6">Our Protocol</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter">The Implementation Lifecycle</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Audit', desc: 'Surgical analysis of your current P&L, team output, and tech bottlenecks.' },
              { step: '02', title: 'Architect', desc: 'Development of custom revenue engines and operational maps.' },
              { step: '03', title: 'Implement', desc: 'Heavy-lifting deployment of new systems and staff training protocols.' },
              { step: '04', title: 'Refine', desc: 'Ongoing optimization fueled by real-time monthly performance data.' }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="text-7xl font-black text-white/5 absolute -top-10 -left-6 group-hover:text-riva-gold/10 transition-colors duration-500">{step.step}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-riva-gold tracking-tight">{step.title}</h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-riva-blue mb-10 tracking-tighter leading-tight">Built for <span className="text-riva-gold italic font-serif">Serious</span> Operators.</h2>
          <p className="text-xl text-gray-500 mb-14 font-light leading-relaxed max-w-3xl mx-auto">
            We don't do "retainers" for the sake of it. We build systems that produce measurable ROI. If you are ready for a systemic pivot, we are your partner.
          </p>
          <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-riva-gold text-riva-blue rounded-sm font-black text-sm uppercase tracking-[0.25em] shadow-2xl hover:bg-riva-gold-dark hover:scale-105 active:scale-95 transition-all">
            Begin Your Strategic Audit <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesHub;
