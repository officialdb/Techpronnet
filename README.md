# Techpronnet Technologies — Premium Homepage

A minimal, production-grade homepage for **Techpronnet Technologies**, engineered with **Next.js (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Neon Serverless PostgreSQL**.

---

## 1. Architectural & Design Review

### What We Preserved from the Original HTML Direction
- **Brand Palette & Tonal Restraint**:
  - `paper` (`#FAFAF8`): Editorial warm canvas
  - `ink` (`#252824`): Crisp charcoal typography and primary contrast actions
  - `muted` (`#73766F`): Refined secondary text and structure
  - `line` (`#E8E8E2`): Editorial division lines and card borders
  - `navy` (`#334655`): Understated accent for interaction states and icon highlights
  - `sand` (`#F0EEE8`): Warm card and contact panel backing
  - `sage` (`#E8EAE3`): Subtle organic accent for badges and status badges
- **Typography & Proportions**:
  - Clean `Inter` font stack with negative letter-spacing for headlines (`tracking-[-.055em]`)
  - Spaced uppercase eyebrows (`letter-spacing: .14em`)
  - Monospaced numbering (`01`, `02`, `03`) for editorial sequencing
- **Content Hierarchy**:
  - Header with minimalist square framed logo brandmark
  - Hero with dual CTAs and understated operations preview card
  - "Who we work with" industry client strip
  - "The Challenge" 3-part problem definition
  - "What we do" 6 core service modules
  - "How we work" 3-step structured process
  - Warm sand contact section with project enquiry form
  - Responsive footer with dynamic copyright year and smooth scroll-to-top

### Key Architectural Improvements over the Static Mockup
1. **True Production-Ready Architecture**:
   - Rebuilt as a modular Next.js application using React Server Components (RSC) for instantaneous page load and client components where stateful interactivity is required.
2. **Accessible Mobile Navigation**:
   - The original HTML lacked a functional mobile menu. Added a responsive hamburger drawer with smooth animations and keyboard focus handling.
3. **Interactive Service Linking**:
   - Clicking any *"Discuss a..."* link in the services grid smoothly scrolls to the contact section and pre-populates the service dropdown with the exact service selected.
4. **Neon PostgreSQL Database Integration**:
   - Integrated with `@neondatabase/serverless` using pooled connections.
   - Built a dedicated `contact_inquiries` table with primary key, timestamps, inquiry status, and indexes.
   - Dual-writing backwards-compatibility with the existing `leads` table in the database so that existing CRM tools and queries continue working seamlessly.
5. **Strict Schema Validation & UX**:
   - End-to-end validation with **Zod** both client-side and server-side.
   - Comprehensive error feedback, disabled submit button with spinner, and an editorial confirmation view displaying an auto-generated tracking reference code (e.g. `TPN-202610-0001`).
6. **Network Reliability & Resilience**:
   - Configured IPv4/IPv6 fallback routing in `src/lib/db.ts` to ensure database connections never hang on systems or cloud containers with partial IPv6 routing.

---

## 2. Neon Postgres Database Setup Instructions

### Step 1: Obtain Your Database Connection String
1. Log into your [Neon Console](https://console.neon.tech).
2. Select your project (e.g. `Techpronnet`).
3. Under **Connection Details**, ensure **Pooled connection** is selected.
4. Copy the connection string. It will look like:
   ```env
   DATABASE_URL="postgresql://neondb_owner:[PASSWORD]@[ENDPOINT]-pooler.[REGION].aws.neon.tech/neondb?sslmode=require"
   ```

### Step 2: Configure Environment Variables
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```
Paste your Neon database URL into `.env.local`:
```env
DATABASE_URL="postgresql://neondb_owner:[PASSWORD]@[ENDPOINT]-pooler.[REGION].aws.neon.tech/neondb?sslmode=require"
```

### Step 3: Run Database Migrations
Run the schema script to create the `contact_inquiries` table and indexes:
```sql
-- Located in src/lib/schema.sql
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  business VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(100),
  service VARCHAR(100) NOT NULL,
  details TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'NEW',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status);
```

### Step 4: Verify the Connection
Run the included verification script:
```bash
node --env-file=.env.local scripts/test-db.mjs
```
Expected output:
```
Connecting to Neon Postgres...
✅ Successfully connected to Neon!
   Database: neondb
   PostgreSQL Version: PostgreSQL
✅ 'contact_inquiries' table exists in public schema.
   Current total inquiries: 2
```

---

## 3. Project Structure

```
├── .env.example                # Template for environment variables
├── .env.local                  # Local environment configuration (Neon DATABASE_URL)
├── next.config.mjs             # Next.js configuration
├── package.json                # Project dependencies and build scripts
├── postcss.config.mjs          # PostCSS configuration for Tailwind v4
├── tsconfig.json               # TypeScript compiler configuration
├── scripts/
│   └── test-db.mjs             # Database connectivity test script
└── src/
    ├── app/
    │   ├── actions/
    │   │   └── contact.ts      # Next.js Server Action for form processing & Neon insert
    │   ├── api/
    │   │   └── contact/
    │   │       └── route.ts    # REST API endpoint (POST /api/contact)
    │   ├── globals.css         # Tailwind v4 theme, colors, typography & micro-interactions
    │   ├── layout.tsx          # Root layout, Google Inter fonts, SEO & OpenGraph tags
    │   └── page.tsx            # Main page assembling all modular sections
    ├── components/
    │   ├── ContactForm.tsx     # Interactive client form with Zod validation & state
    │   ├── ContactSection.tsx  # Warm sand contact section wrapper
    │   ├── Footer.tsx          # Minimalist footer with live year & back-to-top scroll
    │   ├── Header.tsx          # Sticky navigation with mobile menu drawer
    │   ├── Hero.tsx            # Hero with typography & operations preview card
    │   ├── Industries.tsx      # Social proof strip ("Who we work with")
    │   ├── Problems.tsx        # "The Challenge" 3 numbered editorial points
    │   ├── Process.tsx         # "Our Process" 3-step structured timeline
    │   └── Services.tsx        # "Our Services" 6 cards with interactive form pre-filling
    └── lib/
        ├── db.ts               # Neon serverless client & connection pooling helper
        ├── schema.sql          # SQL migration definition
        └── validations.ts      # Zod validation schema & service option list
```

---

## 4. Running Locally

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Test
```bash
npm run build
npm run start
```

---

## 5. Deployment

### Vercel
1. Push this repository to GitHub/GitLab.
2. Import the project into Vercel.
3. In **Settings -> Environment Variables**, add `DATABASE_URL` with your Neon connection string.
4. Deploy.

### Railway / Docker
1. Add `DATABASE_URL` as an environment variable in your Railway service settings.
2. Deploy directly from the repository.
