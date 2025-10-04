# Pre-Deployment Checklist

Pred prvým deploymentom na Lightsail overte tieto body:

## ✅ AWS Setup

- [ ] AWS CLI nainštalované (`aws --version`)
- [ ] AWS CLI nakonfigurované (`aws configure`)
- [ ] Lightsail Container Service vytvorený v AWS Console
- [ ] Poznačený názov servisu (napr. `casebook-prod`)

## ✅ Database

- [ ] MySQL databáza na Websupporte beží
- [ ] Máš DATABASE_URL connection string
- [ ] Máš SHADOW_DATABASE_URL (pre Prisma migrácie)
- [ ] **DÔLEŽITÉ**: Overeď, či Websupport povoľuje externí pripojenia
  - Možno budeš musieť kontaktovať support pre whitelist IP

## ✅ Secrets & Keys

- [ ] NEXTAUTH_SECRET (minimálne 32 znakov) - vygeneruj nový pre production
- [ ] JWT_SECRET (minimálne 32 znakov)
- [ ] Všetky secrets sú ODLIŠNÉ od development

## ✅ Docker

- [ ] Docker Desktop nainštalovaný a beží
- [ ] Otestovaný build lokálne: `docker buildx build --platform linux/amd64 -t casebook:latest .`

## ✅ Code

- [ ] Všetky zmeny sú committed
- [ ] `next.config.ts` má `output: 'standalone'`
- [ ] Žiadne hard-coded localhost URLs v kóde
- [ ] Environment variables sa načítavajú cez `process.env`

## 🚀 Ready to Deploy?

```bash
# Spraviť deploy script executable
chmod +x deploy-quick.sh

# Spustiť deployment
./deploy-quick.sh casebook-prod
```

## 🔍 Po deployi overiť

- [ ] Container sa spustil (Status: Running)
- [ ] Aplikácia odpovedá na Lightsail URL
- [ ] Database connection funguje (skús sa prihlásiť)
- [ ] Všetky obrázky a assets sa loadujú
- [ ] Skontroluj logs pre errory

## 🛟 Ak niečo nefunguje

1. **Container sa nespúšťa:**
   - Skontroluj logs v Lightsail Console (hľadaj `exec format error` - znamená zlú architektúru, použi `deploy-quick.sh` alebo `docker buildx`)
   - Over environment variables
   - Over, či je PORT 3000 správne nastavený

2. **Database connection error:**
   - Kontaktuj Websupport support
   - Požiadaj o whitelist IP adries AWS Lightsail
   - Alternatívne zvážiť cloud database (PlanetScale, Railway)

3. **404 alebo routing errors:**
   - Over `NEXTAUTH_URL` - musí byť production URL
   - Skontroluj middleware.ts

## 💰 Náklady

- Lightsail Container Service (Small): ~$10/mesiac
- Databáza: Máš už na Websupporte (€0 extra)
- **Total**: ~$10/mesiac
