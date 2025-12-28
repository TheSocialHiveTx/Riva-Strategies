
import React from 'react';
import { 
  Building2, 
  Utensils, 
  Hammer, 
  Scale, 
  ShoppingBag, 
  Home, 
  Stethoscope, 
  Cpu, 
  Truck, 
  Wallet, 
  Users 
} from 'lucide-react';

export const COLORS = {
  primaryBlue: '#0A2F73',
  secondaryBlue: '#123B8C',
  primaryBg: '#FFFFFF',
  accentGold: '#C9A24D',
  darkGold: '#B08A3C',
  neutralGray: '#4A4A4A',
  lightGray: '#F4F6F9',
};

export interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  slug: string;
  shortDesc: string;
  different: string;
  problems: string[];
  systems: string;
  subSectors: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: '1',
    name: 'Hospitality & Food Service',
    slug: 'hospitality-food-service',
    icon: <Utensils className="w-8 h-8" />,
    shortDesc: 'Scaling operational excellence in high-volume, labor-intensive environments.',
    different: 'Hospitality operates on razor-thin margins where pennies matter. It is a business of constant motion, high turnover, and immediate customer feedback.',
    problems: [
      'Rising labor and COGS (Cost of Goods Sold)',
      'Inconsistent guest experiences across locations',
      'Fragmented marketing and loyalty systems',
      'Lack of real-time operational visibility'
    ],
    systems: 'Riva installs inventory management protocols and labor optimization frameworks that protect your bottom line while driving guest lifetime value.',
    subSectors: ['Restaurants & Restaurant Groups', 'Hotels & Boutique Lodging', 'Event Venues & Catering', 'Breweries & Distilleries', 'Franchise Operations']
  },
  {
    id: '2',
    name: 'Local & Field Services',
    slug: 'local-field-services',
    icon: <Hammer className="w-8 h-8" />,
    shortDesc: 'Converting service technicians into revenue drivers and calls into long-term contracts.',
    different: 'Success depends on dispatch efficiency and lead-to-close speed. Your brand is often only as good as the last technician to visit a customer.',
    problems: [
      'Inefficient dispatching and routing',
      'Low lead-to-booking conversion rates',
      'Difficulty recruiting and retaining skilled labor',
      'Manual, paper-heavy back-office processes'
    ],
    systems: 'We deploy CRM automation and dispatch optimization systems that maximize "wrench time" and automate customer follow-ups.',
    subSectors: ['HVAC, Plumbing & Electrical', 'General Contracting & Construction', 'Landscaping & Outdoor Living', 'Automotive Service & Repair', 'Facility Management']
  },
  {
    id: '3',
    name: 'Professional Services',
    slug: 'professional-services',
    icon: <Scale className="w-8 h-8" />,
    shortDesc: 'Transitioning from billable-hour dependency to scalable growth models.',
    different: 'The product is expertise. Scaling requires decoupling revenue from the owner’s individual hours and building robust referral systems.',
    problems: [
      'Revenue plateaus based on partner capacity',
      'Inconsistent lead flow and sales pipeline',
      'High administrative burden on high-value talent',
      'Opaque project management and tracking'
    ],
    systems: 'We implement high-authority marketing funnels and project efficiency trackers that free up your experts to focus on billable work.',
    subSectors: ['Law Firms & Legal Operations', 'Accounting & CPA Firms', 'Architecture & Design Firms', 'Marketing & Creative Agencies', 'Consulting & Staffing Firms']
  },
  {
    id: '4',
    name: 'Retail & E-Commerce',
    slug: 'retail-ecommerce',
    icon: <ShoppingBag className="w-8 h-8" />,
    shortDesc: 'Bridging the gap between physical storefronts and digital scale.',
    different: 'Retail requires omni-channel synchronization. Your physical store and digital warehouse must operate as a single, cohesive unit.',
    problems: [
      'Inventory bloat and stockouts',
      'High customer acquisition costs',
      'Low repeat purchase rates',
      'Inconsistent brand experience across channels'
    ],
    systems: 'Riva optimizes your inventory turnover and builds automated retention loops to maximize customer lifetime value (LTV).',
    subSectors: ['Brick-and-Mortar Retail', 'Direct-to-Consumer (DTC) Brands', 'Luxury Goods & Apparel', 'Wholesale & Distribution', 'Multi-Location Retail Chains']
  },
  {
    id: '5',
    name: 'Real Estate & Development',
    slug: 'real-estate-development',
    icon: <Home className="w-8 h-8" />,
    shortDesc: 'Streamlining complex project lifecycles and asset management.',
    different: 'Capital intensive with long lead times. Success is found in strict project management and professionalized investor relations.',
    problems: [
      'Communication breakdowns in development pipelines',
      'Manual investor reporting and communications',
      'Slow response times to new inquiries',
      'Unpredictable occupancy or absorption rates'
    ],
    systems: 'We build institutional-grade communication and pipeline tracking systems that increase transparency and speed to market.',
    subSectors: ['Commercial Real Estate Brokerage', 'Property Management', 'Real Estate Development', 'Residential Real Estate Teams', 'Self-Storage & Warehousing']
  },
  {
    id: '6',
    name: 'Healthcare & Medical',
    slug: 'healthcare-medical',
    icon: <Stethoscope className="w-8 h-8" />,
    shortDesc: 'Patient-centric operations designed for profitability and compliance.',
    different: 'Medical practices must balance high-quality patient care with the realities of insurance billing and regulatory constraints.',
    problems: [
      'Complex billing and administrative overhead',
      'Patient no-show rates and scheduling gaps',
      'Difficulty scaling multi-clinic locations',
      'Poor online reputation management'
    ],
    systems: 'Riva implements automated patient scheduling and automated billing follow-ups to maximize provider productivity.',
    subSectors: ['Private Medical Practices', 'Dental & Orthodontic Groups', 'MedSpa & Aesthetic Clinics', 'Physical Therapy & Rehab Centers', 'Veterinary Clinics']
  },
  {
    id: '7',
    name: 'Technology & Software',
    slug: 'technology-software',
    icon: <Cpu className="w-8 h-8" />,
    shortDesc: 'Accelerating growth through scalable sales engines and churn reduction.',
    different: 'The focus is on MRR and churn. Every percent improvement in retention has massive downstream effects on enterprise value.',
    problems: [
      'High customer churn and low expansion revenue',
      'Sales and marketing misalignment',
      'Scaling customer success without bloated headcount',
      'Opaque product-market-fit metrics'
    ],
    systems: 'We architect sales-led and product-led growth systems that focus on high-intent lead generation and customer health scoring.',
    subSectors: ['SaaS Companies', 'Managed Service Providers (MSPs)', 'IT & Cybersecurity Firms', 'Digital Product Agencies']
  },
  {
    id: '8',
    name: 'Manufacturing & Logistics',
    slug: 'manufacturing-logistics',
    icon: <Truck className="w-8 h-8" />,
    shortDesc: 'Modernizing legacy operations for the modern supply chain.',
    different: 'Manufacturing relies on tight feedback loops between sales, production, and delivery. Waste is the primary enemy of profit.',
    problems: [
      'Inventory management lag',
      'Unpredictable lead times and production delays',
      'Poor visibility into shop floor efficiency',
      'Dependency on legacy, non-integrated software'
    ],
    systems: 'Riva streamlines the "Order-to-Cash" cycle, implementing modern ERP/CRM integrations that provide real-time margin visibility.',
    subSectors: ['Light Manufacturing & Fabrication', 'Freight, Trucking & Logistics', 'Supply Chain Management', 'Industrial Equipment & Machinery']
  },
  {
    id: '9',
    name: 'Financial Services',
    slug: 'financial-services',
    icon: <Wallet className="w-8 h-8" />,
    shortDesc: 'Building trust through automated authority and efficient client acquisition.',
    different: 'Highly regulated and trust-based. Your marketing must lead with authority, and your back office must be impeccable.',
    problems: [
      'Strict compliance barriers to modern marketing',
      'Difficulty differentiating in a crowded market',
      'Manual, paper-intensive onboarding',
      'Low referral activation rates'
    ],
    systems: 'We deploy "Education-First" marketing systems and automated onboarding workflows that shorten the time to client trust.',
    subSectors: ['Wealth Management & Financial Planning', 'Insurance Agencies', 'Mortgage Brokerage', 'Fintech Startups']
  },
  {
    id: '10',
    name: 'Non-Profit & Education',
    slug: 'non-profit-education',
    icon: <Users className="w-8 h-8" />,
    shortDesc: 'Mission-driven growth with business-minded efficiency.',
    different: 'Success is measured by impact, but impact requires consistent funding and highly efficient resource allocation.',
    problems: [
      'Unpredictable donor or enrollment cycles',
      'Over-reliance on manual fundraising efforts',
      'Fragmented member or student data',
      'Marketing that feels "corporate" instead of personal'
    ],
    systems: 'Riva builds automated donor journey systems and enrollment pipelines that treat your mission with the operational rigor it deserves.',
    subSectors: ['501(c)(3) Non-Profits', 'Trade Associations & Chambers', 'Private Schools & Training Centers']
  }
];

export const SERVICES = [
  {
    title: 'Revenue Systems',
    description: 'We build predictable sales and marketing machines that turn cold leads into loyal customers without owner intervention.',
    icon: '📈'
  },
  {
    title: 'Operational Efficiency',
    description: 'We audit and rebuild your workflows, removing bottlenecks and implementing the right tech stack for your specific stage.',
    icon: '⚙️'
  },
  {
    title: 'Strategic Planning',
    description: 'Long-term roadmaps based on hard data, not gut feelings. We help you define the "Where" and the "How" for the next 3-5 years.',
    icon: '🗺️'
  },
  {
    title: 'Team Performance',
    description: 'Leadership training and incentive structures that align your team’s output with your company’s growth goals.',
    icon: '🤝'
  }
];
