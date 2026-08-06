import json
import datetime
from sqlalchemy.orm import Session
from .database import engine, Base, SessionLocal
from .models import User, Service, Project, BlogPost, Lead, QuoteRequest, Review, CMSSetting, AuditLog
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def seed_database():
    Base.metadata.create_all(bind=engine)
    db: Session = SessionLocal()

    # Check if already seeded
    if db.query(User).filter(User.email == "admin@techpronnet.com").first():
        print("Database already seeded.")
        db.close()
        return

    print("Seeding database with Techpronnet Technologies enterprise data...")

    # 1. Admin User
    admin = User(
        email="admin@techpronnet.com",
        name="Techpronnet Admin",
        hashed_password=pwd_context.hash("admin123"),
        role="ADMIN"
    )
    db.add(admin)

    # 2. Core Services (5 Main Domains)
    services_data = [
        {
            "domain": "software",
            "name": "Custom Software & SaaS Development",
            "slug": "custom-software-saas",
            "tagline": "Tailor-made software, Web Apps, Mobile Apps, and Enterprise SaaS built for scale.",
            "description": "We engineer robust web applications, native & cross-platform mobile apps, cloud-native APIs, and AI-driven workflow automation designed to streamline operations and unlock business growth.",
            "icon": "fa-code",
            "features_json": json.dumps([
                "Custom Web Application Development",
                "Mobile App Development (iOS & Android)",
                "Enterprise ERP & CRM Software",
                "RESTful & GraphQL API Engineering",
                "SaaS Multi-tenant Architecture",
                "UI/UX Interface Design",
                "AI Solutions & Machine Learning Integration",
                "Business Workflow Automation",
                "Search Engine Optimization (SEO)"
            ]),
            "pricing_starting": "$1,500",
            "is_popular": True,
            "order_index": 1
        },
        {
            "domain": "security",
            "name": "CCTV & Security Solutions",
            "slug": "cctv-security-systems",
            "tagline": "Enterprise-grade Surveillance, Smart Home, Security Doors & Access Control.",
            "description": "Protect your assets with high-definition IP camera networks, biometric access control, smart home automation, high-security door systems, and real-time perimeter alarm alerts.",
            "icon": "fa-shield",
            "features_json": json.dumps([
                "CCTV Installation & HD IP Cameras",
                "Surveillance Maintenance & Remote Monitoring",
                "Biometric Access Control Systems",
                "Smart Home & Automation Installation",
                "Armored Security Door Installation",
                "Intrusion & Motion Alarm Systems",
                "24/7 Mobile Live View Integration"
            ]),
            "pricing_starting": "$450",
            "is_popular": True,
            "order_index": 2
        },
        {
            "domain": "solar",
            "name": "Solar & Renewable Energy Systems",
            "slug": "solar-electrical-installations",
            "tagline": "Clean, reliable power generation with hybrid inverters and lithium backup.",
            "description": "Cut grid dependency and power outages with high-efficiency solar panel arrays, smart hybrid inverters, industrial battery banks, and certified electrical wiring for commercial and residential properties.",
            "icon": "fa-sun-o",
            "features_json": json.dumps([
                "High-Efficiency Solar Panel Array Installation",
                "Hybrid & Pure Sine Wave Inverter Setup",
                "Lithium-Ion & Tubular Battery Backup Systems",
                "Routine Solar Maintenance & Efficiency Audits",
                "Residential & Commercial Electrical Wiring",
                "Inverter Sales & Authorized Component Supplies"
            ]),
            "pricing_starting": "$850",
            "is_popular": True,
            "order_index": 3
        },
        {
            "domain": "networking",
            "name": "Enterprise Networking & IT Infrastructure",
            "slug": "networking-it-infrastructure",
            "tagline": "High-speed mesh Wi-Fi, structured cabling, router config, and server racks.",
            "description": "Build flawless connectivity across office buildings, campuses, and industrial facilities with Gigabit structured copper/fiber cabling, enterprise routers, firewalls, and server cabinet rack setup.",
            "icon": "fa-sitemap",
            "features_json": json.dumps([
                "High-Density Wi-Fi Installation & Coverage Audits",
                "Structured Cat6a/Cat7 Ethernet & Fiber Cabling",
                "Enterprise Router & Managed Switch Configuration",
                "Multi-Branch VPN & Secure Network Topology",
                "Server Rack Setup & Cable Management",
                "Data Center & Server Infrastructure Deployment"
            ]),
            "pricing_starting": "$600",
            "is_popular": False,
            "order_index": 4
        },
        {
            "domain": "it-support",
            "name": "Managed IT Support & Repairs",
            "slug": "managed-it-support",
            "tagline": "Proactive system maintenance, computer repairs, printer & software support.",
            "description": "Keep your operations running seamlessly with 24/7 remote IT helpdesk, hardware troubleshooting, workstation computer repairs, network printer setups, and routine system maintenance contracts.",
            "icon": "fa-wrench",
            "features_json": json.dumps([
                "24/7 Remote Desktop Support & Helpdesk",
                "Workstation & Laptop Hardware Repairs",
                "Networked Printer & Scanner Setup",
                "Enterprise Software Installation & Licensing",
                "System Maintenance & Malware Cleanup",
                "Managed IT Services (SLA Contracts)"
            ]),
            "pricing_starting": "$250",
            "is_popular": False,
            "order_index": 5
        }
    ]

    for s in services_data:
        db.add(Service(**s))

    # 3. Portfolio Projects
    projects_data = [
        {
            "title": "Apex Logistics ERP & Fleet Management System",
            "slug": "apex-logistics-erp",
            "client": "Apex Freight Global",
            "domain": "software",
            "description": "Custom Next.js & Python ERP platform integrating real-time GPS fleet tracking, automated dispatching, inventory audit, and customer portal.",
            "image_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
            "metrics_json": json.dumps({"Efficiency Increase": "+45%", "Processing Speed": "3x Faster", "Active Users": "12,000+"}),
            "completion_date": "January 2026",
            "is_featured": True
        },
        {
            "title": "Commercial 50kW Hybrid Solar Microgrid System",
            "slug": "commercial-50kw-solar-microgrid",
            "client": "Crestline Shopping Complex",
            "domain": "solar",
            "description": "Design and deployment of a 50kW Tier-1 solar array with 100kWh Lithium Iron Phosphate battery backup and 30kVA tri-phase hybrid inverters.",
            "image_url": "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
            "metrics_json": json.dumps({"Diesel Reduction": "92%", "Annual Savings": "$18,500", "Uptime": "99.99%"}),
            "completion_date": "March 2026",
            "is_featured": True
        },
        {
            "title": "Multi-Floor 64-Camera IP CCTV & Access Control",
            "slug": "multi-floor-cctv-access-control",
            "client": "Vanguard Tower Office Hub",
            "domain": "security",
            "description": "High-definition Hikvision 4K IP security cameras with optical zoom, ANPR license plate recognition, and biometric turnstiles across 5 floors.",
            "image_url": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
            "metrics_json": json.dumps({"Coverage": "100%", "Incidents Detected": "0 Unchecked", "Storage": "60 Days NVR"}),
            "completion_date": "November 2025",
            "is_featured": True
        },
        {
            "title": "Corporate Office Gigabit Cabling & Wi-Fi Mesh Network",
            "slug": "corporate-office-gigabit-cabling",
            "client": "Nexus Financial Systems",
            "domain": "networking",
            "description": "Installation of 120 Cat6a drops, Ubiquiti UniFi 6 Enterprise Access Points, 48-port PoE switches, and clean server rack cable management.",
            "image_url": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
            "metrics_json": json.dumps({"Speed": "10 Gbps Backbone", "Latency": "< 2ms", "Wi-Fi Coverage": "35,000 sq ft"}),
            "completion_date": "February 2026",
            "is_featured": True
        }
    ]

    for p in projects_data:
        db.add(Project(**p))

    # 4. Google Business Profile Reviews
    reviews_data = [
        {
            "reviewer_name": "Dr. Emmanuel Adebayo",
            "reviewer_avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
            "rating": 5.0,
            "review_text": "Techpronnet installed a 15kVA Solar & Lithium Battery system for our medical facility. Their work was flawless, neat, and highly professional. Zero blackout since installation!",
            "review_date": "2 weeks ago",
            "verified_google": True,
            "is_featured": True,
            "is_pinned": True,
            "owner_reply": "Thank you Dr. Adebayo! We are glad to power your facility reliably.",
            "ai_summary_tags": "Clean Installation, Reliable Solar, Highly Professional",
            "category": "Solar & Electrical"
        },
        {
            "reviewer_name": "Sarah Jenkins",
            "reviewer_avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
            "rating": 5.0,
            "review_text": "Their software team built a web portal and mobile app for our logistics firm ahead of schedule. Very responsive UI, seamless API backend, and clear communication throughout.",
            "review_date": "1 month ago",
            "verified_google": True,
            "is_featured": True,
            "is_pinned": True,
            "owner_reply": "Appreciate your review Sarah! Pleasure working on your logistics platform.",
            "ai_summary_tags": "Fast Delivery, Excellent Web App, Clear Communication",
            "category": "Software Development"
        },
        {
            "reviewer_name": "Chief Marcus Nwosu",
            "reviewer_avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
            "rating": 5.0,
            "review_text": "Great security and CCTV setup for my residence and estate gates. Biometric doors and live phone monitoring work perfectly. Highly recommended general tech solutions company!",
            "review_date": "3 weeks ago",
            "verified_google": True,
            "is_featured": True,
            "is_pinned": False,
            "owner_reply": "Thank you Chief Marcus! Security and peace of mind are always our top priority.",
            "ai_summary_tags": "Top Security, Crisp CCTV, Great Mobile View",
            "category": "Security Solutions"
        },
        {
            "reviewer_name": "Michael Chen",
            "reviewer_avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
            "rating": 5.0,
            "review_text": "Techpronnet resolved our office networking bottlenecks in less than 48 hours. Enterprise Wi-Fi mesh covers every corner of our 3-story office building effortlessly.",
            "review_date": "2 months ago",
            "verified_google": True,
            "is_featured": True,
            "is_pinned": False,
            "owner_reply": "Glad we could optimize your office infrastructure Michael!",
            "ai_summary_tags": "Fast Wi-Fi, Excellent Networking, Rapid Support",
            "category": "Networking"
        }
    ]

    for r in reviews_data:
        db.add(Review(**r))

    # 5. CMS Settings
    cms_settings = [
        {
            "key": "hero",
            "value_json": json.dumps({
                "headline": "Engineering Next-Gen Technology Solutions For Your Business & Home",
                "subheadline": "From custom enterprise software & AI automation to solar energy systems, CCTV security, structured networking, and 24/7 IT support.",
                "badge": "Trusted General Tech Solution Providers",
                "primary_btn_text": "Request a Free Quote",
                "secondary_btn_text": "Explore Services",
                "stats": [
                    {"number": "500+", "label": "Projects Completed"},
                    {"number": "99.8%", "label": "Client Satisfaction"},
                    {"number": "5.0 ★", "label": "Google Review Rating"},
                    {"number": "24/7", "label": "Emergency IT Support"}
                ]
            })
        },
        {
            "key": "company_info",
            "value_json": json.dumps({
                "name": "Techpronnet Technologies",
                "tagline": "Your General Tech Solution Providers",
                "phone": "+234 (0) 803 123 4567",
                "hotline": "+234 (0) 800 TECHPRONNET",
                "email": "info@techpronnet.com",
                "support_email": "support@techpronnet.com",
                "whatsapp": "+2348031234567",
                "address": "Techpronnet Innovation Center, 42 Business Avenue, Technology District",
                "opening_hours": "Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 3:00 PM | Sun: Emergency Support Only"
            })
        },
        {
            "key": "faqs",
            "value_json": json.dumps([
                {
                    "question": "What core services does Techpronnet Technologies provide?",
                    "answer": "Techpronnet is a full-service technology company offering Software Development (Web, Mobile, SaaS, AI), Security Solutions (CCTV, Access Control, Smart Doors), Solar & Electrical (Inverters, Solar Arrays, Battery Backups), Networking (Enterprise Wi-Fi, Cabling, Server Racks), and Managed IT Support.",
                    "category": "General"
                },
                {
                    "question": "How quickly can I get a detailed project or installation quote?",
                    "answer": "You can use our online Interactive Quote Engine to generate an instant initial assessment, or request a free site inspection. Our engineering team typically sends official formal proposals within 24 hours.",
                    "category": "Quotes & Pricing"
                },
                {
                    "question": "Do you provide warranties on solar panels, inverters, and CCTV equipment?",
                    "answer": "Yes! All solar panels come with up to 25-year manufacturer warranties, inverters carry 2-5 year warranties, and CCTV cameras/NVR hardware include full 1-2 year replacement guarantees plus routine maintenance contracts.",
                    "category": "Solar & Security"
                },
                {
                    "question": "Can Techpronnet build custom software integrated with our existing database?",
                    "answer": "Absolutely. Our senior software engineers specialize in API integrations, database migrations, custom CRM/ERP development, and modernizing legacy business software.",
                    "category": "Software"
                }
            ])
        }
    ]

    for c in cms_settings:
        db.add(CMSSetting(**c))

    # 6. Sample Leads
    leads_data = [
        {
            "name": "David Alabi",
            "email": "david.a@horizoncorp.com",
            "phone": "+2348029988776",
            "company": "Horizon Corp Ltd",
            "source": "Website Hero CTA",
            "status": "NEW",
            "notes": "Interested in 10kW Solar Installation and office CCTV setup."
        },
        {
            "name": "Evelyn Williams",
            "email": "evelyn@primehealth.org",
            "phone": "+2348051122334",
            "company": "Prime Health Clinic",
            "source": "Quote Wizard",
            "status": "PROPOSAL_SENT",
            "notes": "Custom clinic appointment management software quote sent."
        }
    ]

    for l in leads_data:
        db.add(Lead(**l))

    db.commit()
    print("Database seeding completed successfully!")
    db.close()

if __name__ == "__main__":
    seed_database()
