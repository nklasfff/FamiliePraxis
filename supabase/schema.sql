-- ============================================================
-- FamiliePraxis — Database Schema for Supabase
-- Kør dette i Supabase SQL Editor
-- ============================================================

-- ========== HJÆLPEFUNKTION: updated_at trigger ==========
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- ========== CIRKLER (7 kerneområder) ==========
CREATE TABLE IF NOT EXISTS circles (
  id TEXT PRIMARY KEY,
  titel TEXT NOT NULL,
  ikon TEXT NOT NULL DEFAULT 'leaf',
  sort_order INTEGER DEFAULT 0,

  -- Privat perspektiv
  privat_overblik_beskrivelse TEXT,
  privat_overblik_punkter JSONB DEFAULT '[]',
  privat_overblik_tip TEXT,
  privat_dybde JSONB DEFAULT '[]',

  -- Professionel perspektiv
  professionel_overblik_beskrivelse TEXT,
  professionel_overblik_punkter JSONB DEFAULT '[]',
  professionel_overblik_tip TEXT,
  professionel_dybde JSONB DEFAULT '[]',

  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER circles_updated_at
  BEFORE UPDATE ON circles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- ========== SAMMENHÆNGE (krydsreferencer mellem cirkler) ==========
CREATE TABLE IF NOT EXISTS connections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  fra TEXT NOT NULL REFERENCES circles(id),
  til TEXT NOT NULL REFERENCES circles(id),
  privat TEXT,
  professionel TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER connections_updated_at
  BEFORE UPDATE ON connections
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- ========== TEMAER ==========
CREATE TABLE IF NOT EXISTS themes (
  id TEXT PRIMARY KEY,
  titel TEXT NOT NULL,
  ikon TEXT NOT NULL DEFAULT 'chatBubble',
  sort_order INTEGER DEFAULT 0,

  -- Privat
  privat_intro TEXT,
  privat_tekst TEXT,
  privat_cirkler JSONB DEFAULT '[]',

  -- Professionel
  professionel_intro TEXT,
  professionel_tekst TEXT,
  professionel_cirkler JSONB DEFAULT '[]',

  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER themes_updated_at
  BEFORE UPDATE ON themes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- ========== ØVELSER ==========
CREATE TABLE IF NOT EXISTS exercises (
  id TEXT PRIMARY KEY,
  titel TEXT NOT NULL,
  tid TEXT NOT NULL DEFAULT '10 min',
  sted TEXT,
  intro TEXT,
  trin JSONB DEFAULT '[]',
  cirkel TEXT REFERENCES circles(id),
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER exercises_updated_at
  BEFORE UPDATE ON exercises
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- ========== NERVESYSTEMETS TRAPPE ==========
CREATE TABLE IF NOT EXISTS ladder_states (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trin INTEGER NOT NULL UNIQUE,
  navn TEXT NOT NULL,
  farve TEXT NOT NULL DEFAULT 'sage',

  -- Privat
  privat_beskrivelse TEXT,
  privat_krops_signaler JSONB DEFAULT '[]',
  privat_handlinger JSONB DEFAULT '[]',
  privat_oevelser JSONB DEFAULT '[]',

  -- Professionel
  professionel_beskrivelse TEXT,
  professionel_krops_signaler JSONB DEFAULT '[]',
  professionel_handlinger JSONB DEFAULT '[]',
  professionel_oevelser JSONB DEFAULT '[]',

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER ladder_states_updated_at
  BEFORE UPDATE ON ladder_states
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- ========== MORGEN CHECK-IN ==========
CREATE TABLE IF NOT EXISTS morning_checkins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  spoergsmaal TEXT NOT NULL,
  svar JSONB NOT NULL DEFAULT '[]',
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER morning_checkins_updated_at
  BEFORE UPDATE ON morning_checkins
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- ========== EMAIL-TILMELDINGER ==========
CREATE TABLE IF NOT EXISTS email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  perspektiv TEXT DEFAULT 'privat',
  is_active BOOLEAN DEFAULT TRUE,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_email_subscribers_email ON email_subscribers(email);


-- ========== INDHOLDSVERSION ==========
CREATE TABLE IF NOT EXISTS content_versions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  version TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);


-- ========== ROW LEVEL SECURITY ==========

-- Cirkler: alle kan læse aktive, kun auth kan skrive
ALTER TABLE circles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle kan læse aktive cirkler" ON circles FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Auth kan alt med cirkler" ON circles FOR ALL USING (auth.role() = 'authenticated');

-- Sammenhænge
ALTER TABLE connections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle kan læse sammenhænge" ON connections FOR SELECT USING (TRUE);
CREATE POLICY "Auth kan alt med sammenhænge" ON connections FOR ALL USING (auth.role() = 'authenticated');

-- Temaer
ALTER TABLE themes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle kan læse aktive temaer" ON themes FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Auth kan alt med temaer" ON themes FOR ALL USING (auth.role() = 'authenticated');

-- Øvelser
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle kan læse aktive øvelser" ON exercises FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Auth kan alt med øvelser" ON exercises FOR ALL USING (auth.role() = 'authenticated');

-- Trappen
ALTER TABLE ladder_states ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle kan læse trappen" ON ladder_states FOR SELECT USING (TRUE);
CREATE POLICY "Auth kan alt med trappen" ON ladder_states FOR ALL USING (auth.role() = 'authenticated');

-- Morgen check-in
ALTER TABLE morning_checkins ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle kan læse aktive check-ins" ON morning_checkins FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Auth kan alt med check-ins" ON morning_checkins FOR ALL USING (auth.role() = 'authenticated');

-- Email-tilmeldinger: alle kan tilmelde sig, kun auth kan læse
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle kan tilmelde sig" ON email_subscribers FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Auth kan alt med subscribers" ON email_subscribers FOR ALL USING (auth.role() = 'authenticated');

-- Indholdsversion
ALTER TABLE content_versions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle kan læse versioner" ON content_versions FOR SELECT USING (TRUE);
CREATE POLICY "Auth kan alt med versioner" ON content_versions FOR ALL USING (auth.role() = 'authenticated');


-- ========== INDEXES ==========
CREATE INDEX idx_circles_active ON circles(is_active);
CREATE INDEX idx_themes_active ON themes(is_active);
CREATE INDEX idx_exercises_active ON exercises(is_active);
CREATE INDEX idx_exercises_cirkel ON exercises(cirkel);
CREATE INDEX idx_connections_fra ON connections(fra);
CREATE INDEX idx_connections_til ON connections(til);
CREATE INDEX idx_morning_checkins_active ON morning_checkins(is_active);
