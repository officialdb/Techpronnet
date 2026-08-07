export interface ServiceItem {
  id: number;
  domain: 'software' | 'security' | 'solar' | 'networking' | 'it-support' | 'tracking' | 'street-power';
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  features_json: string;
  pricing_starting?: string;
  is_popular?: boolean;
  order_index: number;
}

export interface ProjectItem {
  id: number;
  title: string;
  slug: string;
  client: string;
  domain: string;
  description: string;
  image_url: string;
  metrics_json?: string;
  completion_date: string;
  is_featured: boolean;
}

export interface ReviewItem {
  id: number;
  reviewer_name: string;
  reviewer_avatar?: string;
  rating: number;
  review_text: string;
  review_date: string;
  verified_google: boolean;
  is_featured: boolean;
  is_pinned?: boolean;
  owner_reply?: string;
  ai_summary_tags?: string;
  category: string;
}

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 1,
    domain: 'software',
    name: 'Custom Software & SaaS Development',
    slug: 'custom-software-saas',
    tagline: 'Tailor-made software, Web Apps, Mobile Apps, and Enterprise SaaS built for scale.',
    description: 'We engineer robust web applications, native & cross-platform mobile apps, cloud-native APIs, and AI-driven workflow automation designed to streamline operations and unlock business growth.',
    icon: 'fa-code',
    features_json: JSON.stringify([
      'Custom Software Development',
      'Website Development',
      'Mobile App Development (iOS & Android)',
      'Enterprise Software & ERP',
      'API Development & Integration',
      'SaaS Development',
      'UI/UX Design',
      'AI Solutions & Machine Learning',
      'Business Automation',
      'Search Engine Optimization (SEO)'
    ]),
    pricing_starting: '$1,500',
    is_popular: true,
    order_index: 1
  },
  {
    id: 2,
    domain: 'security',
    name: 'CCTV & Security Solutions',
    slug: 'cctv-security-systems',
    tagline: 'Enterprise-grade Surveillance, Smart Doors, Intercom, Electric Fence & Access Control.',
    description: 'Protect your assets with high-definition IP camera networks, biometric access control, intercom systems, electric fencing, smart door bells, and real-time perimeter alarm alerts.',
    icon: 'fa-shield',
    features_json: JSON.stringify([
      'CCTV Installation & IP Cameras',
      'CCTV Maintenance & Monitoring',
      'Access Control Systems (Biometric/Keycard)',
      'Intercom System Installation',
      'Smart Door Bell Installation',
      'Electric Fence Installation & Monitoring',
      'Armored Security Door Installation',
      'Intrusion & Motion Alarm Systems',
      'Smart Home Installation & Automation'
    ]),
    pricing_starting: '$450',
    is_popular: true,
    order_index: 2
  },
  {
    id: 3,
    domain: 'solar',
    name: 'Solar & Renewable Energy Systems',
    slug: 'solar-electrical-installations',
    tagline: 'Clean, reliable power generation with hybrid inverters, lithium backup & solar street lights.',
    description: 'Cut grid dependency and power outages with high-efficiency solar panel arrays, smart hybrid inverters, industrial battery banks, solar street lighting, and certified electrical wiring for commercial and residential properties.',
    icon: 'fa-sun-o',
    features_json: JSON.stringify([
      'Solar/Inverter & Battery Installation',
      'Solar Panel Installation (Tier 1)',
      'Solar Maintenance & Efficiency Audits',
      'Hybrid & Off-Grid Inverter Installation',
      'Inverter Sales & Spare Distribution',
      'Lithium & Gel Battery Backup Systems',
      'Solar Street Light Installation',
      'Residential & Industrial Electrical Installations'
    ]),
    pricing_starting: '$850',
    is_popular: true,
    order_index: 3
  },
  {
    id: 4,
    domain: 'networking',
    name: 'Enterprise Networking & IT Infrastructure',
    slug: 'networking-it-infrastructure',
    tagline: 'High-speed mesh Wi-Fi, structured cabling, router config, and server racks.',
    description: 'Build flawless connectivity across office buildings, campuses, and industrial facilities with Gigabit structured copper/fiber cabling, enterprise routers, firewalls, and server cabinet rack setup.',
    icon: 'fa-sitemap',
    features_json: JSON.stringify([
      'Wi-Fi Installation & Mesh Access Points',
      'Structured Cat6a/Cat7 Network Cabling',
      'Router & Managed Switch Configuration',
      'Office Networking & VPN Setup',
      'Server Setup & Rack Cabling',
      'Complete IT Infrastructure Deployment'
    ]),
    pricing_starting: '$600',
    is_popular: false,
    order_index: 4
  },
  {
    id: 5,
    domain: 'it-support',
    name: 'Managed IT Support & Repairs',
    slug: 'managed-it-support',
    tagline: 'Proactive system maintenance, computer repairs, printer & software support.',
    description: 'Keep your operations running seamlessly with 24/7 remote IT helpdesk, hardware troubleshooting, workstation computer repairs, network printer setups, and routine system maintenance contracts.',
    icon: 'fa-wrench',
    features_json: JSON.stringify([
      '24/7 Remote Desktop Support',
      'Computer & Laptop Hardware Repairs',
      'Networked Printer Installation & Setup',
      'Enterprise Software Installation',
      'System Maintenance & Security Audits',
      'Managed IT Services (SLA Contracts)'
    ]),
    pricing_starting: '$250',
    is_popular: false,
    order_index: 5
  },
  {
    id: 6,
    domain: 'tracking',
    name: 'Car Tracking & Fleet Monitoring',
    slug: 'car-tracking-fleet-monitoring',
    tagline: 'Real-time GPS vehicle tracking, fleet dispatch & anti-theft systems.',
    description: 'Monitor your vehicles and fleet with live GPS trackers, geofencing alerts, engine immobilizers, and a web-based fleet management dashboard for businesses and private vehicle owners.',
    icon: 'fa-map-marker',
    features_json: JSON.stringify([
      'Vehicle GPS Tracker Installation',
      'Real-Time Live Fleet Monitoring Dashboard',
      'Geofencing & Zone Alert Notifications',
      'Engine Immobilizer & Remote Cut-Off',
      'Anti-Theft Tracking & Recovery Support',
      'Multi-Vehicle Fleet Management',
      'Driver Behavior & Mileage Reporting'
    ]),
    pricing_starting: '$120',
    is_popular: false,
    order_index: 6
  },
  {
    id: 7,
    domain: 'street-power',
    name: 'Solar Street Lights & Outdoor Power',
    slug: 'solar-street-lights-outdoor-power',
    tagline: 'Autonomous solar-powered street lights, estate roads & compound illumination.',
    description: 'Illuminate estate roads, parking lots, warehouses, and perimeter fences with all-in-one solar street lights featuring built-in lithium batteries, motion sensors, and auto dusk-to-dawn controls — zero electricity bill.',
    icon: 'fa-lightbulb-o',
    features_json: JSON.stringify([
      'All-In-One Solar Street Light Supply & Installation',
      'Estate Road & Compound Lighting Design',
      'Motion-Activated & Dusk-to-Dawn Control',
      'Built-In Lithium Battery Solar Lights',
      'Commercial Parking Lot & Warehouse Lighting',
      'Perimeter Fence Solar Flood Lights',
      'Maintenance & Replacement Services'
    ]),
    pricing_starting: '$200',
    is_popular: false,
    order_index: 7
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'Apex Logistics ERP & Fleet Management System',
    slug: 'apex-logistics-erp',
    client: 'Apex Freight Global',
    domain: 'software',
    description: 'Custom Next.js & Python ERP platform integrating real-time GPS fleet tracking, automated dispatching, inventory audit, and customer portal.',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    metrics_json: JSON.stringify({ 'Efficiency Increase': '+45%', 'Processing Speed': '3x Faster', 'Active Users': '12,000+' }),
    completion_date: 'January 2026',
    is_featured: true
  },
  {
    id: 2,
    title: 'Commercial 50kW Hybrid Solar Microgrid System',
    slug: 'commercial-50kw-solar-microgrid',
    client: 'Crestline Shopping Complex',
    domain: 'solar',
    description: 'Design and deployment of a 50kW Tier-1 solar array with 100kWh Lithium Iron Phosphate battery backup and 30kVA tri-phase hybrid inverters.',
    image_url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    metrics_json: JSON.stringify({ 'Diesel Reduction': '92%', 'Annual Savings': '$18,500', 'Uptime': '99.99%' }),
    completion_date: 'March 2026',
    is_featured: true
  },
  {
    id: 3,
    title: 'Multi-Floor 64-Camera IP CCTV & Access Control',
    slug: 'multi-floor-cctv-access-control',
    client: 'Vanguard Tower Office Hub',
    domain: 'security',
    description: 'High-definition Hikvision 4K IP security cameras with optical zoom, ANPR license plate recognition, and biometric turnstiles across 5 floors.',
    image_url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    metrics_json: JSON.stringify({ 'Coverage': '100%', 'Incidents Detected': '0 Unchecked', 'Storage': '60 Days NVR' }),
    completion_date: 'November 2025',
    is_featured: true
  },
  {
    id: 4,
    title: 'Corporate Office Gigabit Cabling & Wi-Fi Mesh Network',
    slug: 'corporate-office-gigabit-cabling',
    client: 'Nexus Financial Systems',
    domain: 'networking',
    description: 'Installation of 120 Cat6a drops, Ubiquiti UniFi 6 Enterprise Access Points, 48-port PoE switches, and clean server rack cable management.',
    image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    metrics_json: JSON.stringify({ 'Speed': '10 Gbps Backbone', 'Latency': '< 2ms', 'Wi-Fi Coverage': '35,000 sq ft' }),
    completion_date: 'February 2026',
    is_featured: true
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    reviewer_name: 'Dr. Emmanuel Adebayo',
    reviewer_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5.0,
    review_text: 'Techpronnet installed a 15kVA Solar & Lithium Battery system for our medical facility. Their work was flawless, neat, and highly professional. Zero blackout since installation!',
    review_date: '2 weeks ago',
    verified_google: true,
    is_featured: true,
    is_pinned: true,
    owner_reply: 'Thank you Dr. Adebayo! We are glad to power your facility reliably.',
    ai_summary_tags: 'Clean Installation, Reliable Solar, Highly Professional',
    category: 'Solar & Electrical'
  },
  {
    id: 2,
    reviewer_name: 'Sarah Jenkins',
    reviewer_avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5.0,
    review_text: 'Their software team built a web portal and mobile app for our logistics firm ahead of schedule. Very responsive UI, seamless API backend, and clear communication throughout.',
    review_date: '1 month ago',
    verified_google: true,
    is_featured: true,
    is_pinned: true,
    owner_reply: 'Appreciate your review Sarah! Pleasure working on your logistics platform.',
    ai_summary_tags: 'Fast Delivery, Excellent Web App, Clear Communication',
    category: 'Software Development'
  },
  {
    id: 3,
    reviewer_name: 'Chief Marcus Nwosu',
    reviewer_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5.0,
    review_text: 'Great security and CCTV setup for my residence and estate gates. Biometric doors and live phone monitoring work perfectly. Highly recommended general tech solutions company!',
    review_date: '3 weeks ago',
    verified_google: true,
    is_featured: true,
    is_pinned: false,
    owner_reply: 'Thank you Chief Marcus! Security and peace of mind are always our top priority.',
    ai_summary_tags: 'Top Security, Crisp CCTV, Great Mobile View',
    category: 'Security Solutions'
  },
  {
    id: 4,
    reviewer_name: 'Michael Chen',
    reviewer_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5.0,
    review_text: 'Techpronnet resolved our office networking bottlenecks in less than 48 hours. Enterprise Wi-Fi mesh covers every corner of our 3-story office building effortlessly.',
    review_date: '2 months ago',
    verified_google: true,
    is_featured: true,
    is_pinned: false,
    owner_reply: 'Glad we could optimize your office infrastructure Michael!',
    ai_summary_tags: 'Fast Wi-Fi, Excellent Networking, Rapid Support',
    category: 'Networking'
  }
];

export const COMPANY_DETAILS = {
  name: 'Techpronnet Technologies',
  tagline: 'Your General Tech Solution Providers',
  mission: 'Deliver innovative technology solutions that help individuals and businesses solve real-world problems through software, security, networking, renewable energy, and digital transformation.',
  phone: '+234 (0) 803 123 4567',
  hotline: '+234 (0) 800 TECHPRONNET',
  email: 'info@techpronnet.com',
  supportEmail: 'support@techpronnet.com',
  whatsapp: 'https://wa.me/2348031234567?text=Hello%20Techpronnet%20Technologies,%20I%20would%20like%20to%20inquire%20about%20your%20services.',
  address: 'Techpronnet Innovation Center, 42 Business Avenue, Technology District',
  hours: 'Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 3:00 PM | Sun: Emergency Hotline Only'
};
