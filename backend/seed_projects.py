import json
from app.database import SessionLocal
from app.models import Project

db = SessionLocal()

if db.query(Project).count() > 0:
    print("Projects already exist in the database.")
    exit(0)

projects_data = [
  {
    "title": "Apex Logistics ERP & Fleet Management System",
    "slug": "apex-logistics-erp",
    "client": "Apex Freight Global",
    "domain": "software",
    "description": "Custom Next.js & Python ERP platform integrating real-time GPS fleet tracking, automated dispatching, inventory audit, and customer portal.",
    "image_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "metrics_json": json.dumps({ "Efficiency Increase": "+45%", "Processing Speed": "3x Faster", "Active Users": "12,000+" }),
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
    "metrics_json": json.dumps({ "Diesel Reduction": "92%", "Annual Savings": "$18,500", "Uptime": "99.99%" }),
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
    "metrics_json": json.dumps({ "Coverage": "100%", "Incidents Detected": "0 Unchecked", "Storage": "60 Days NVR" }),
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
    "metrics_json": json.dumps({ "Speed": "10 Gbps Backbone", "Latency": "< 2ms", "Wi-Fi Coverage": "35,000 sq ft" }),
    "completion_date": "February 2026",
    "is_featured": True
  }
]

for p in projects_data:
    project = Project(**p)
    db.add(project)

db.commit()
print(f"✅ Inserted {len(projects_data)} initial projects into the database.")
