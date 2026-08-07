import json
import datetime
from app.database import SessionLocal
from app.models import BlogPost

db = SessionLocal()

if db.query(BlogPost).count() > 0:
    print("Blog posts already exist in the database.")
    exit(0)

posts = [
  {
    "title": "How We Built a 50kW Solar Microgrid for a Shopping Complex in 14 Days",
    "slug": "50kw-solar-microgrid-shopping-complex",
    "excerpt": "A behind-the-scenes look at how our engineering team designed, sourced, and commissioned a full 50kW hybrid solar system with 100kWh battery backup for a commercial shopping complex — in just two weeks.",
    "content": """<h2>The Challenge</h2>
<p>When Crestline Shopping Complex reached out to us, they were spending over ₦2.4 million per month on diesel generators. Power outages were causing revenue losses and damaging refrigeration equipment in their anchor stores. They needed a reliable, long-term power solution — fast.</p>

<h2>Our Engineering Approach</h2>
<p>We started with a <strong>full energy audit</strong> of the facility. Over 48 hours, our team logged every load — from HVAC units to lighting, refrigeration, and point-of-sale systems. The result: a peak demand of 38kW with an average draw of 22kW.</p>

<p>We specified:</p>
<ul>
<li>50kW of Tier-1 JA Solar panels across the rooftop</li>
<li>Two 30kVA tri-phase hybrid inverters (Victron Energy)</li>
<li>100kWh Lithium Iron Phosphate (LiFePO4) battery bank</li>
<li>Automatic grid/generator switching with zero-transfer switchover</li>
</ul>

<h2>The 14-Day Installation</h2>
<p>Our team of 12 engineers worked in parallel shifts. Structural mounting was completed on days 1–3. Panel installation ran from days 3–7. Battery rack assembly and inverter wiring from days 7–11. Final commissioning, testing, and load transfer happened on days 12–14.</p>

<h2>Results After 90 Days</h2>
<p>The numbers speak for themselves:</p>
<ul>
<li><strong>92% reduction</strong> in diesel consumption</li>
<li><strong>₦18.5 million</strong> saved in the first year</li>
<li><strong>99.99% uptime</strong> — zero unplanned outages since commissioning</li>
</ul>

<blockquote>
"Techpronnet didn't just install solar panels — they gave us energy independence. The ROI was visible within the first month." — Operations Director, Crestline Shopping Complex
</blockquote>

<h2>Interested in a Similar Solution?</h2>
<p>Every facility has a unique energy profile. Our team offers <strong>free site surveys</strong> and detailed proposals at no cost. Contact us today to start your energy independence journey.</p>""",
    "author": "Techpronnet Engineering Team",
    "read_time": "6 min read",
    "tags_json": json.dumps(["Solar Energy", "Case Study", "Commercial", "Renewable Energy"]),
    "image_url": "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
  {
    "title": "Why Your Business Needs a Structured Network Cabling Infrastructure in 2026",
    "slug": "structured-network-cabling-business-2026",
    "excerpt": "Patch cables and consumer-grade Wi-Fi routers are quietly killing your business productivity. Here's what enterprise-grade structured cabling actually looks like — and why it matters more than ever.",
    "content": """<h2>The Hidden Cost of Poor Network Infrastructure</h2>
<p>Most business owners think of their office network as the router in the corner and the Wi-Fi password on the wall. But every dropped video call, every slow file transfer, every CRM timeout costs your business real money. Studies show that poor network connectivity costs SMEs an average of <strong>2.5 hours of productivity per employee per week.</strong></p>

<h2>What is Structured Cabling?</h2>
<p>Structured cabling is a standardised system of cabling and hardware that provides a comprehensive telecommunications infrastructure. Unlike ad-hoc patch cable installations, a properly designed structured cabling system:</p>
<ul>
<li>Supports multiple hardware uses (voice, data, video, security)</li>
<li>Is managed in a central patch panel for easy troubleshooting</li>
<li>Scales easily as your business grows</li>
<li>Achieves speeds from 1 Gbps to 10 Gbps per endpoint</li>
</ul>

<h2>Cat6a vs Cat7 — Which Should You Choose?</h2>
<p><strong>Cat6a</strong> (Augmented Category 6) supports 10 Gbps over 100 metres and is currently the industry standard for new commercial installations. It offers excellent shielding against crosstalk and is backward compatible with all previous standards.</p>
<p><strong>Cat7</strong> goes further — fully shielded individual pairs plus an overall shield (S/FTP), excellent for environments with heavy electrical interference such as factory floors or server rooms.</p>
<p>For most office environments, <strong>Cat6a is our recommendation.</strong> It provides headroom for the next decade of growth without the added cost of Cat7.</p>

<h2>The Techpronnet Installation Process</h2>
<p>Our team follows a strict methodology:</p>
<ol>
<li><strong>Network Survey:</strong> We map your floor plan, identify all endpoint locations and estimate cable runs.</li>
<li><strong>Design:</strong> We produce a full cabling diagram including switch placement, patch panel layout, and cable tray routes.</li>
<li><strong>Installation:</strong> Our certified cabling engineers pull, dress, terminate, and label every single cable to TIA-568 standard.</li>
<li><strong>Certification Testing:</strong> Every link is tested with a Fluke DTX cable tester and a test report is handed to you.</li>
<li><strong>Documentation:</strong> You receive as-built drawings and a port mapping document.</li>
</ol>

<h2>Ready to Upgrade?</h2>
<p>Whether you're moving to a new office, renovating, or simply tired of unreliable connectivity — we offer free site surveys and detailed proposals. Our networking projects start from $600 and include a full 5-year warranty on workmanship.</p>""",
    "author": "Techpronnet Networking Division",
    "read_time": "7 min read",
    "tags_json": json.dumps(["Networking", "Infrastructure", "IT", "Business"]),
    "image_url": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    "title": "CCTV in 2026: Why 4K IP Cameras Have Replaced Analogue Systems Forever",
    "slug": "cctv-4k-ip-cameras-vs-analogue-2026",
    "excerpt": "If your business is still running a DVR with analogue CCTV cameras installed before 2018, you are essentially guarding your premises with a blindfold. Here's the full breakdown of what modern IP CCTV actually offers.",
    "content": """<h2>The Analogue CCTV Legacy Problem</h2>
<p>Millions of Nigerian businesses are still operating analogue CCTV systems — grainy 720p footage stored on unreliable DVRs, with cameras that fail in low-light conditions and provide footage too blurry to be useful in an incident investigation. When things go wrong, the footage is worthless.</p>

<h2>What Changed with IP CCTV</h2>
<p>IP (Internet Protocol) cameras communicate over standard network infrastructure. This means:</p>
<ul>
<li><strong>4K (8MP) resolution</strong> — faces, number plates, and details are crystal clear</li>
<li><strong>Night vision with full-colour low-light</strong> — no more grainy black-and-white footage</li>
<li><strong>Remote viewing anywhere in the world</strong> from your phone</li>
<li><strong>AI-powered features</strong> — facial recognition, ANPR (license plate reading), intrusion detection zones, and people counting</li>
<li><strong>Scalability</strong> — add cameras anywhere on your network without running new coax cable</li>
</ul>

<h2>NVR vs DVR — Understanding the Difference</h2>
<p>Analogue systems use a <strong>DVR (Digital Video Recorder)</strong> which receives analogue signals and converts them to digital. IP systems use an <strong>NVR (Network Video Recorder)</strong> which receives already-digital streams over your network. NVR systems offer higher reliability, smarter storage management, and direct integration with access control systems.</p>

<h2>Our Recommended Setup for Commercial Properties</h2>
<p>For a typical 3-floor office building, we recommend:</p>
<ul>
<li>Hikvision DS-2CD2T47G2-L (4MP ColorVu) for indoor corridors</li>
<li>Hikvision DS-2CD2T47G2P-LSU/SL (4MP with spotlight) for perimeter coverage</li>
<li>Hikvision DS-2CD2T87G2P-LSU/SL (8MP 4K) for entrance/exit points</li>
<li>32-channel DS-7732NI-M4 NVR with 8TB storage (60+ days retention)</li>
<li>Integrated UPS to maintain recording during power outages</li>
</ul>

<h2>The ROI of a Modern CCTV System</h2>
<p>Beyond security, businesses report tangible benefits: reduced insurance premiums, reduced employee theft, faster dispute resolution, and improved customer trust. One of our clients — a car dealership — recovered ₦4.2 million in insurance claims within 3 months of installing our system, based on clear ANPR footage.</p>

<blockquote>"The old system was just decorative. Techpronnet's new IP cameras caught a theft attempt at 2am — we had clear facial footage within seconds." — Security Manager, Lagos facility</blockquote>""",
    "author": "Techpronnet Security Division",
    "read_time": "8 min read",
    "tags_json": json.dumps(["CCTV", "Security", "IP Cameras", "Technology"]),
    "image_url": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    "title": "Custom Software vs Off-the-Shelf: What's Right for Your Business in 2026?",
    "slug": "custom-software-vs-off-the-shelf-2026",
    "excerpt": "QuickBooks. Zoho. Salesforce. Off-the-shelf tools promise everything but often deliver frustrating compromises. Here's an honest comparison to help you decide when to buy — and when to build.",
    "content": """<h2>The Allure of Off-the-Shelf Software</h2>
<p>It's tempting. You sign up, pay a monthly subscription, and you're ready in minutes. Tools like Salesforce, Zoho CRM, and QuickBooks have transformed small business operations. For many use cases, they are the right choice.</p>

<p>But as businesses scale, many find that off-the-shelf tools start to show their limitations — rigid workflows, expensive per-seat licensing, poor integrations with local payment processors or government portals, and the constant realisation that you're running your business to fit the software rather than the other way around.</p>

<h2>When Off-the-Shelf is the Right Choice</h2>
<p>For standard functions with well-established best practices, off-the-shelf usually wins on cost and time-to-value:</p>
<ul>
<li>General accounting and bookkeeping</li>
<li>Email marketing and CRM (if your process is standard)</li>
<li>HR and payroll management</li>
<li>Standard e-commerce storefronts</li>
</ul>

<h2>When Custom Software is the Right Choice</h2>
<p>Custom software becomes the smart investment when:</p>
<ul>
<li><strong>Your process is unique</strong> — no standard tool fits your workflow without painful workarounds</li>
<li><strong>You handle sensitive proprietary data</strong> — you control exactly where data lives and who has access</li>
<li><strong>Scale is a goal</strong> — custom software scales with you; SaaS subscriptions scale your costs</li>
<li><strong>You need deep integration</strong> — connecting to local banking APIs, FIRS, CAC, or custom hardware</li>
<li><strong>Competitive advantage</strong> — your software IS your product or service</li>
</ul>

<h2>The Real Cost Comparison</h2>
<p>A popular mid-range ERP solution costs approximately $150–$400/user/month. For a 20-person team, that's $36,000–$96,000 per year — in perpetuity. A custom-built equivalent, scoped correctly, might cost $25,000–$60,000 once, with annual maintenance at 15–20% of build cost. By year 3, custom software is almost always cheaper — and it fits your business perfectly.</p>

<h2>Our Approach to Custom Software</h2>
<p>At Techpronnet, we follow an <strong>iterative delivery model</strong> — we don't disappear for 6 months and return with a big reveal. We build in 2-week sprints, demo working software regularly, and adjust based on your feedback. Every project includes:</p>
<ul>
<li>Discovery and requirements workshops</li>
<li>UI/UX wireframes and prototype approval before any code is written</li>
<li>Full source code ownership transferred to you on completion</li>
<li>12 months post-launch SLA support</li>
<li>Full documentation and training</li>
</ul>""",
    "author": "Techpronnet Software Division",
    "read_time": "9 min read",
    "tags_json": json.dumps(["Software", "Business", "Technology", "ERP"]),
    "image_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
]

for p in posts:
    post = BlogPost(**p)
    db.add(post)

db.commit()
print(f"✅ Seeded {len(posts)} real blog posts into the database.")
