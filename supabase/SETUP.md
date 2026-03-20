# FamiliePraxis — Supabase Opsætningsguide

## Oversigt

FamiliePraxis kan køre på to måder:
1. **Uden Supabase** — appen bruger de lokale data i `js/data.js` (som den altid har gjort)
2. **Med Supabase** — appen henter data fra en database, Rikke kan redigere indhold via admin-panelet, og email-tilmeldinger gemmes

Appen falder automatisk tilbage til lokale data hvis Supabase ikke er konfigureret.

---

## Trin 1: Opret Supabase-projekt

1. Gå til [supabase.com](https://supabase.com) og opret en gratis konto
2. Klik **New Project**
3. Vælg et navn (fx "familiepraxis") og en stærk database-adgangskode
4. Vælg region (EU West anbefales — tættest på Danmark)
5. Vent til projektet er klar (~2 minutter)

## Trin 2: Kør database-schema

1. I Supabase Dashboard, gå til **SQL Editor**
2. Klik **New Query**
3. Åbn filen `supabase/schema.sql` fra dette projekt og kopier hele indholdet ind
4. Klik **Run** — dette opretter alle tabeller med sikkerhedsregler
5. Du bør se "Success" for alle statements

## Trin 3: Indsæt indhold (seed data)

1. Stadig i **SQL Editor**, klik **New Query**
2. Åbn filen `supabase/seed.sql` og kopier hele indholdet ind
3. Klik **Run** — dette indsætter alle øvelser, cirkler, temaer, trappen og morgen check-ins
4. Verificér: gå til **Table Editor** og tjek at tabellerne indeholder data

## Trin 4: Forbind appen

1. I Supabase Dashboard, gå til **Settings** → **API**
2. Find:
   - **Project URL** (ligner: `https://xxxxx.supabase.co`)
   - **anon/public key** (lang streng der starter med `eyJ...`)
3. Åbn `index.html` og find meta-tags i `<head>`:
   ```html
   <meta name="supabase-url" content="">
   <meta name="supabase-anon-key" content="">
   ```
4. Indsæt dine værdier:
   ```html
   <meta name="supabase-url" content="https://dit-projekt.supabase.co">
   <meta name="supabase-anon-key" content="eyJhbGci...din-key-her">
   ```
5. Gør det samme i `admin.html`

## Trin 5: Opret admin-bruger

1. I Supabase Dashboard, gå til **Authentication** → **Users**
2. Klik **Add User** → **Create New User**
3. Indtast Rikkes email og en stærk adgangskode
4. Klik **Create User**
5. Nu kan Rikke logge ind på admin-panelet med denne email/adgangskode

## Trin 6: Test admin-panelet

1. Åbn `admin.html` i en browser
2. Log ind med den email og adgangskode du oprettede
3. Du kan nu:
   - Se og redigere øvelser
   - Se og redigere temaer
   - Redigere cirkel-indhold
   - Redigere trappen
   - Administrere morgen check-ins
   - Se email-tilmeldinger og eksportere som CSV

---

## Sådan virker det

### Appen (index.html)
- Ved opstart forsøger appen at hente data fra Supabase
- Hvis det lykkes, bruges database-indholdet
- Hvis Supabase ikke er konfigureret eller fejler, bruges de lokale data i `js/data.js`
- Brugeren mærker ingen forskel

### Admin-panelet (admin.html)
- Kræver login med Supabase Auth
- Alle ændringer gemmes direkte i databasen
- Ændringer er synlige i appen inden for 5 minutter (cache-tid)

### Email-tilmeldinger
- Når en bruger tilmelder sig i appen, gemmes email i Supabase
- Hvis Supabase ikke er konfigureret, gemmes email lokalt i browseren
- Rikke kan se og eksportere tilmeldinger fra admin-panelet

### Sikkerhed (Row Level Security)
- **Alle besøgende** kan: læse aktivt indhold, tilmelde sig email
- **Kun admin (logget ind)** kan: oprette, redigere og slette indhold, se email-tilmeldinger

---

## Fejlsøgning

| Problem | Løsning |
|---------|---------|
| Appen viser ikke database-indhold | Tjek at meta-tags i index.html er udfyldt korrekt |
| Admin login fejler | Tjek at brugeren er oprettet i Supabase Authentication |
| "Supabase fejl 401" | Tjek at anon key er korrekt |
| Data vises ikke efter redigering | Vent 5 minutter (cache) eller hard-refresh browseren |
| Email-tilmelding fejler | Tjek at email_subscribers tabellen eksisterer |

---

## Gratis tier

Supabase's gratis plan inkluderer:
- 500 MB database
- 50.000 månedlige aktive brugere
- Ubegrænset API-kald
- 1 GB fillagring

Det er mere end rigeligt til FamiliePraxis.
