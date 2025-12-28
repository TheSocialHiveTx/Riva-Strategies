
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, AlertCircle, TrendingUp, ChevronRight } from 'lucide-react';
import { INDUSTRIES } from '../constants';

const IndustryDetail = () => {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const industry = INDUSTRIES.find(ind => ind.slug === industrySlug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <div className="animate-page-entrance overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-riva-blue text-white pt-48 pb-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <div className="text-riva-gold mb-10 inline-block p-4 bg-white/5 border border-white/10 rounded-sm backdrop-blur-md">
              {industry.icon}
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
              The <span className="text-riva-gold italic font-serif">Future</span> of <br />{industry.name}.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/70 leading-relaxed mb-12 font-light max-w-2xl">
              Transforming {industry.name.toLowerCase()} groups through industrial-grade systems and authority-driven revenue engines.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <Link to="/contact" className="px-10 py-5 bg-riva-gold text-riva-blue rounded-sm font-black text-xs uppercase tracking-[0.25em] hover:bg-riva-gold-dark transition-all shadow-2xl">
                Request {industry.name} Audit
                </Link>
                <Link to="/industries" className="px-10 py-5 border border-white/20 text-white rounded-sm font-black text-xs uppercase tracking-[0.25em] hover:bg-white/5 transition-all">
                Back to Verticals
                </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform hidden lg:block pointer-events-none"></div>
      </section>

      {/* Sector Focus Tag Cloud */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="text-[10px] font-black text-riva-blue uppercase tracking-[0.3em] mr-6">Key Niches:</span>
            {industry.subSectors.map((sector, idx) => (
              <span key={idx} className="bg-gray-50 px-5 py-2.5 rounded-sm border border-gray-100 text-[10px] font-black text-gray-500 shadow-sm uppercase tracking-widest">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-riva-gold mb-6">Dynamics</h2>
              <h3 className="text-4xl md:text-5xl font-black text-riva-blue mb-8 tracking-tighter">Why This Vertical is Different</h3>
              <p className="text-lg text-gray-500 leading-relaxed font-light mb-12">
                {industry.different}
              </p>
              <div className="bg-blue-50/50 p-10 rounded-sm border border-blue-100 group">
                <TrendingUp className="w-10 h-10 text-riva-blue mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-bold text-riva-blue mb-3">Our Structural Edge</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">We don't apply generic agency models. We deploy proprietary frameworks built from within the {industry.name.toLowerCase()} operations space.</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-riva-blue p-12 md:p-16 rounded-sm shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-black text-white mb-12 flex items-center tracking-tight">
                  <AlertCircle className="w-6 h-6 text-riva-gold mr-4" />
                  Primary Bottlenecks
                </h3>
                <ul className="space-y-10">
                  {industry.problems.map((problem, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="w-8 h-8 rounded-sm bg-white/10 text-riva-gold flex items-center justify-center flex-shrink-0 mt-0.5 mr-6 font-black text-xs group-hover:bg-riva-gold group-hover:text-riva-blue transition-all duration-300">
                        0{i + 1}
                      </div>
                      <p className="text-blue-50 font-bold text-lg leading-tight group-hover:text-white transition-colors">{problem}</p>
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Framework */}
      <section className="py-32 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-riva-gold mb-6">Implementation</h2>
            <h3 className="text-4xl md:text-5xl font-black text-riva-blue mb-6 tracking-tight leading-tight">Systemic Deployment</h3>
            <p className="text-lg text-gray-500 font-light italic">"{industry.systems}"</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { val: "30-90D", label: "Full Rollout", d: "Standard implementation cycle for core operational pivots." },
              { val: "100%", label: "Transparency", d: "Real-time P&L and KPI dashboards accessible to your team." },
              { val: "Asset-Led", label: "Focus", d: "Shifting value from the owner's individual effort to company equity." }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-10 border border-gray-100 gold-glow transition-all duration-300">
                <div className="text-3xl font-black text-riva-blue mb-4">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-riva-gold mb-4">{stat.label}</div>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{stat.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Level CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-riva-blue mb-10 tracking-tighter leading-tight">Professionalize Your <br />{industry.name} Operations.</h2>
          <p className="text-xl text-gray-500 mb-14 font-light leading-relaxed">
            Stop firefighting and start building enterprise value. Let’s identify the architecture needed for your next 5X growth phase.
          </p>
          <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-riva-gold text-riva-blue rounded-sm font-black text-sm uppercase tracking-[0.25em] shadow-2xl hover:bg-riva-gold-dark hover:scale-105 active:scale-95 transition-all">
            Apply for Strategy Call <ChevronRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
