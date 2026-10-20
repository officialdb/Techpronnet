-- Techpronnet Technologies: Neon Postgres Schema

-- Inquiries table for homepage contact form
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

-- Recommended indexes for fast queries in administrative portals
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status);
