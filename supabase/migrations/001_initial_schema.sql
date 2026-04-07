-- ILEA Lifestyle Experience Series — Initial Schema

CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('walk_the_world', 'hfhy_dinner')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  data JSONB DEFAULT '{}',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'paid')),
  payment_status TEXT DEFAULT 'none' CHECK (payment_status IN ('none', 'pending_payment', 'paid', 'payment_failed')),
  payment_id TEXT,
  amount DECIMAL(10,2),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for common queries
CREATE INDEX idx_submissions_type ON submissions(type);
CREATE INDEX idx_submissions_status ON submissions(status);
CREATE INDEX idx_submissions_created_at ON submissions(created_at DESC);
CREATE INDEX idx_submissions_email ON submissions(email);

-- Row-Level Security
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Public can submit forms
CREATE POLICY "Anyone can submit"
  ON submissions FOR INSERT
  WITH CHECK (true);

-- Only authenticated users (admins) can view submissions
CREATE POLICY "Admins can view"
  ON submissions FOR SELECT
  USING (auth.role() = 'authenticated');

-- Only authenticated users can update
CREATE POLICY "Admins can update"
  ON submissions FOR UPDATE
  USING (auth.role() = 'authenticated');
