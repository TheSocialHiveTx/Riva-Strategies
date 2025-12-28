
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../constants';

const IndustriesHub = () => {
  return (
    <div className="animate-page-entrance overflow-x-hidden">
      <section className="bg-white pt-40 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-xs font-black uppercase tracking-[0.3em] text-riva-gold mb-6">Verticals</h1>
            <h2 className="text-5xl md:text-7xl font-black text-riva-blue tracking-tighter leading-tight mb-8">Specialized <br />Industry Hub.</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Every industry operates on its own set of "Physics." We've architected deep operational frameworks for the sectors that drive the global economy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <Link 
                key={industry.id} 
                to={`/industries/${industry.slug}`} 
                className="group flex flex-col h-full bg-white rounded-sm shadow-sm border border-gray-100 hover:border-riva-gold gold-glow transition-all duration-500 overflow-hidden"
              >
                <div className="p-10 flex-grow">
                  <div className="w-16 h-16 bg-blue-50 text-riva-blue rounded-sm flex items-center justify-center mb-8 group-hover:bg-riva-blue group-hover:text-white transition-all duration-500">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-black text-riva-blue mb-4 tracking-tight">{industry.name}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed text-sm font-light">
                    {industry.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.subSectors.slice(0, 2).map((sub, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 text-[10px] text-gray-400 rounded-sm uppercase tracking-widest font-black border border-gray-100">
                        {sub}
                      </span>
                    ))}
                    {industry.subSectors.length > 2 && (
                      <span className="px-3 py-1 bg-gray-50 text-[10px] text-gray-400 rounded-sm uppercase tracking-widest font-black border border-gray-100">
                        +{industry.subSectors.length - 2} More
                      </span>
                    )}
                  </div>
                </div>
                <div className="px-10 py-6 border-t border-gray-50 bg-gray-50 group-hover:bg-blue-50 transition-colors flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-riva-blue">
                  View Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-riva-blue rounded-sm p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-4xl font-black mb-6 tracking-tight">Don't see your industry?</h2>
                <p className="text-lg text-blue-100/70 mb-10 max-w-2xl mx-auto font-light">
                While we specialize in these sectors, our core architectural frameworks apply to any high-ambition organization.
                </p>
                <Link to="/contact" className="inline-block px-10 py-5 bg-riva-gold text-riva-blue rounded-sm font-black text-xs uppercase tracking-[0.2em] hover:bg-riva-gold-dark transition-all">
                Inquire for Custom Audit
                </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-riva-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesHub;
