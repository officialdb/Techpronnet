import json
from app.database import SessionLocal
from app.models import Service

db = SessionLocal()

# Check if services already exist
if db.query(Service).count() > 0:
    print("Services already exist in the database.")
    exit(0)

services_data = [
  {
    "domain": 'software',
    "name": 'Custom Software & SaaS Development',
    "slug": 'custom-software-saas',
    "tagline": 'Tailor-made software, Web Apps, Mobile Apps, and Enterprise SaaS built for scale.',
    "description": 'We engineer robust web applications, native & cross-platform mobile apps, cloud-native APIs, and AI-driven workflow automation designed to streamline operations and unlock business growth.',
    "icon": 'fa-code',
    "features_json": json.dumps([
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
    "pricing_starting": '$1,500',
    "is_popular": True,
    "order_index": 1
  },
  {
    "domain": 'security',
    "name": 'CCTV & Security Solutions',
    "slug": 'cctv-security-systems',
    "tagline": 'Enterprise-grade Surveillance, Smart Doors, Intercom, Electric Fence & Access Control.',
    "description": 'Protect your assets with high-definition IP camera networks, biometric access control, intercom systems, electric fencing, smart door bells, and real-time perimeter alarm alerts.',
    "icon": 'fa-shield',
    "features_json": json.dumps([
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
    "pricing_starting": '$450',
    "is_popular": True,
    "order_index": 2
  },
  {
    "domain": 'solar',
    "name": 'Solar & Renewable Energy Systems',
    "slug": 'solar-electrical-installations',
    "tagline": 'Clean, reliable power generation with hybrid inverters, lithium backup & solar street lights.',
    "description": 'Cut grid dependency and power outages with high-efficiency solar panel arrays, smart hybrid inverters, industrial battery banks, solar street lighting, and certified electrical wiring for commercial and residential properties.',
    "icon": 'fa-sun-o',
    "features_json": json.dumps([
      'Solar/Inverter & Battery Installation',
      'Solar Panel Installation (Tier 1)',
      'Solar Maintenance & Efficiency Audits',
      'Hybrid & Off-Grid Inverter Installation',
      'Inverter Sales & Spare Distribution',
      'Lithium & Gel Battery Backup Systems',
      'Solar Street Light Installation',
      'Residential & Industrial Electrical Installations'
    ]),
    "pricing_starting": '$850',
    "is_popular": True,
    "order_index": 3
  },
  {
    "domain": 'networking',
    "name": 'Enterprise Networking & IT Infrastructure',
    "slug": 'networking-it-infrastructure',
    "tagline": 'High-speed mesh Wi-Fi, structured cabling, router config, and server racks.',
    "description": 'Build flawless connectivity across office buildings, campuses, and industrial facilities with Gigabit structured copper/fiber cabling, enterprise routers, firewalls, and server cabinet rack setup.',
    "icon": 'fa-sitemap',
    "features_json": json.dumps([
      'Wi-Fi Installation & Mesh Access Points',
      'Structured Cat6a/Cat7 Network Cabling',
      'Router & Managed Switch Configuration',
      'Office Networking & VPN Setup',
      'Server Setup & Rack Cabling',
      'Complete IT Infrastructure Deployment'
    ]),
    "pricing_starting": '$600',
    "is_popular": False,
    "order_index": 4
  },
  {
    "domain": 'it-support',
    "name": 'Managed IT Support & Repairs',
    "slug": 'managed-it-support',
    "tagline": 'Proactive system maintenance, computer repairs, printer & software support.',
    "description": 'Keep your operations running seamlessly with 24/7 remote IT helpdesk, hardware troubleshooting, workstation computer repairs, network printer setups, and routine system maintenance contracts.',
    "icon": 'fa-wrench',
    "features_json": json.dumps([
      '24/7 Remote Desktop Support',
      'Computer & Laptop Hardware Repairs',
      'Networked Printer Installation & Setup',
      'Enterprise Software Installation',
      'System Maintenance & Security Audits',
      'Managed IT Services (SLA Contracts)'
    ]),
    "pricing_starting": '$250',
    "is_popular": False,
    "order_index": 5
  },
  {
    "domain": 'tracking',
    "name": 'Car Tracking & Fleet Monitoring',
    "slug": 'car-tracking-fleet-monitoring',
    "tagline": 'Real-time GPS vehicle tracking, fleet dispatch & anti-theft systems.',
    "description": 'Monitor your vehicles and fleet with live GPS trackers, geofencing alerts, engine immobilizers, and a web-based fleet management dashboard for businesses and private vehicle owners.',
    "icon": 'fa-map-marker',
    "features_json": json.dumps([
      'Vehicle GPS Tracker Installation',
      'Real-Time Live Fleet Monitoring Dashboard',
      'Geofencing & Zone Alert Notifications',
      'Engine Immobilizer & Remote Cut-Off',
      'Anti-Theft Tracking & Recovery Support',
      'Multi-Vehicle Fleet Management',
      'Driver Behavior & Mileage Reporting'
    ]),
    "pricing_starting": '$120',
    "is_popular": False,
    "order_index": 6
  },
  {
    "domain": 'street-power',
    "name": 'Solar Street Lights & Outdoor Power',
    "slug": 'solar-street-lights-outdoor-power',
    "tagline": 'Autonomous solar-powered street lights, estate roads & compound illumination.',
    "description": 'Illuminate estate roads, parking lots, warehouses, and perimeter fences with all-in-one solar street lights featuring built-in lithium batteries, motion sensors, and auto dusk-to-dawn controls — zero electricity bill.',
    "icon": 'fa-lightbulb-o',
    "features_json": json.dumps([
      'All-In-One Solar Street Light Supply & Installation',
      'Estate Road & Compound Lighting Design',
      'Motion-Activated & Dusk-to-Dawn Control',
      'Built-In Lithium Battery Solar Lights',
      'Commercial Parking Lot & Warehouse Lighting',
      'Perimeter Fence Solar Flood Lights',
      'Maintenance & Replacement Services'
    ]),
    "pricing_starting": '$200',
    "is_popular": False,
    "order_index": 7
  }
]

for s in services_data:
    service = Service(**s)
    db.add(service)

db.commit()
print("✅ Inserted all initial services into the real database.")
