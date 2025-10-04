# Deployment Guide - AWS Lightsail Container Service

## Predpoklady

1. **AWS CLI** nainštalované a nakonfigurované
2. **Docker** nainštalovaný a bežiaci
3. **Lightsail Container Service** vytvorený v AWS Console
4. **Existujúca MySQL/MariaDB databáza** (už máš na Websupporte)

## Inštalácia AWS CLI (ak nemáš)

```bash
# macOS
brew install awscli

# Konfigurácia
aws configure
```

## Inštalácia Lightsail Plugin

```bash
# Install the Lightsail control plugin
sudo curl "https://s3.us-west-2.amazonaws.com/lightsailctl/latest/darwin-amd64/lightsailctl" -o "/usr/local/bin/lightsailctl"
sudo chmod +x /usr/local/bin/lightsailctl
```

## Vytvorenie Container Service v Lightsail

1. Otvor [AWS Lightsail Console](https://lightsail.aws.amazon.com/)
2. Klikni na "Containers" v ľavom menu
3. Klikni "Create container service"
4. Vyber region (najlepšie EU - Frankfurt)
5. Vyber kapacitu (napr. Micro - $7/mesiac, Small - $10/mesiac)
6. Zadaj názov služby (napr. `casebook-prod`)
7. Klikni "Create container service"

## Database Setup

**Dobrá správa**: Budeš používať tvoju existujúcu MySQL databázu na Websupporte!

### Čo potrebuješ overiť:

1. **Firewall/Whitelist**: Over, či Websupport povolí pripojenie z AWS (môže byť potrebné pridať IP adresu Lightsail containera do whitelist)
2. **Connection String**: Máš už v `.env` súbore - použiješ rovnaký

**DÔLEŽITÉ**: Websupport môže vyžadovať whitelist IP adries pre externé pripojenia. Kontaktuj ich support ak budeš mať problémy s pripojením.

Ak by boli problémy s pripojením kvôli firewallu, máš alternatívy:
- Použiť [PlanetScale](https://planetscale.com) - Free tier, MySQL compatible
- Použiť [Railway](https://railway.app) - $5 credit/mesiac
- Použiť Lightsail MySQL databázu (Standard - $15/mesiac)

## Deployment Kroky

### 1. Environment Variables

Budeš používať tieto hodnoty z tvojho `.env` súboru v Lightsail Console:

```bash
# Database (z tvojho .env)
DATABASE_URL="mysql://kazuistika:O2g%3Ea(giz4ZWc%40YvJ2dj@mariadb114.r4.websupport.sk:3306/kazuistika_prod"
SHADOW_DATABASE_URL="mysql://kazuistika:O2g%3Ea(giz4ZWc%40YvJ2dj@mariadb114.r4.websupport.sk:3306/kazuistika_prisma_migrate"

# SMTP (z tvojho .env)
SMTP_HOST="smtp.m1.websupport.sk"
SMTP_PORT="465"
SMTP_SECURE="true"
SMTP_USER="nutricia@bincik.sk"
SMTP_PASS="v0)tm$Zx$aU]t-f$wfH~"

# JWT & Auth
JWT_SECRET="v0)tm$Zx$aU]t-f$wfH~v0)tm$Zx$aU]t-f$wfH~v0)tm$Zx$aU]t-f$wfH~"
NEXTAUTH_SECRET="v0)tm$Zx$aU]t-f$wfH~"
NEXTAUTH_URL="https://tvoja-lightsail-url.amazonaws.com"  # Uprav po deploye

# Node
NODE_ENV="production"
```

**DÔLEŽITÉ**: Tieto hodnoty NEnastav v `.env.production` súbore (kvôli bezpečnosti), ale priamo v Lightsail Console pri deployi!

### 2. Migrácie

**Nie je potrebné spúšťať migrácie** - tvoja databáza už beží a má dáta! 

Pokiaľ nepridávaš nové zmeny v schéme, migrácie preskočíš.

### 3. Build a Push Docker image

#### Jednoduchý spôsob (automatický script):

```bash
# Spraviť script executable
chmod +x deploy-quick.sh

# Spustiť deployment
./deploy-quick.sh casebook-prod
```

#### Manuálny spôsob:

```bash
# Build image
docker build -t casebook:latest .

# Test lokálne (voliteľné)
docker run -p 3000:3000 --env-file .env casebook:latest

# Push do Lightsail
aws lightsail push-container-image \
  --service-name casebook-prod \
  --label casebook \
  --image casebook:latest
```

### 4. Deploy do Lightsail

Po úspešnom push, dostaneš výstup s názvom image, napr:
`:casebook-prod.casebook.1`

#### Použitím CLI:

```bash
# Uprav containers.json - nahraď image placeholdrom skutočným názvom
# Napr. ":casebook-prod.casebook.1" namiesto ":casebook.latest"

# Deploy
aws lightsail create-container-service-deployment \
  --service-name casebook-prod \
  --containers file://containers.json \
  --public-endpoint file://public-endpoint.json
```

#### Alebo cez Web Console (ODPORÚČAM):

1. Choď do Lightsail Console -> Container Services -> casebook-prod
2. Klikni "Create your first deployment"
3. Vyber image (najnovší pushed image)
4. **Nastav environment variables** (KĽÚČOVÉ!):
   - `DATABASE_URL` = tvoj MySQL connection string
   - `SHADOW_DATABASE_URL` = tvoj shadow DB string
   - `SMTP_HOST` = smtp.m1.websupport.sk
   - `SMTP_PORT` = 465
   - `SMTP_SECURE` = true
   - `SMTP_USER` = nutricia@bincik.sk
   - `SMTP_PASS` = tvoje SMTP heslo
   - `JWT_SECRET` = tvoj JWT secret
   - `NEXTAUTH_SECRET` = tvoj secret
   - `NEXTAUTH_URL` = https://tvoja-url.amazonaws.com
   - `NODE_ENV` = production
5. Open ports: 3000 (HTTP)
6. Public endpoint: Container `casebook`, Port `3000`
7. Klikni "Save and deploy"

**TIP**: Po deployi získaš URL (napr. `casebook-prod.xxxxx.eu-central-1.cs.amazonlightsail.com`). Túto URL potom nastav ako `NEXTAUTH_URL` a updatni deployment.

### 5. Nastavenie Custom Domain (voliteľné)

1. V Lightsail Container Service, choď na "Custom domains"
2. Pridaj svoj domain (napr. casebook.nutricia.sk)
3. Vytvor SSL certifikát (zadarmo od AWS)
4. Uprav DNS recordy u tvojho domain providera (Websupport?)
5. Po aktivácii SSL, updatni `NEXTAUTH_URL` na https://tvoj-domain.sk

## Aktualizácia aplikácie

Kedykoľvek chceš nasadiť novú verziu:

```bash
# 1. Push zmeny do gitu (good practice)
git add .
git commit -m "Update: ..."
git push

# 2. Build a deploy
./deploy-quick.sh casebook-prod

# 3. V Lightsail Console, vytvor nový deployment s novým image
```

## Monitoring & Logs

```bash
# Zobraz logy
aws lightsail get-container-log \
  --service-name casebook-prod \
  --container-name casebook

# Sleduj logy v reálnom čase (cez AWS Console je lepšie)
```

## Troubleshooting

### Container sa nespustí
- Skontroluj logy v AWS Console
- Over, či sú všetky environment variables nastavené
- Over DATABASE_URL connection

### Database connection issues
- **NAJČASTEJŠÍ PROBLÉM**: Websupport môže blokovať pripojenia mimo SK/whitelist
- Over, či je databáza accessible z AWS (firewall rules)
- Kontaktuj Websupport support a požiadaj o whitelist AWS IP
- Alternatíva: Presunúť DB na cloud (PlanetScale, Railway, Lightsail DB)

### Build fails
- Skontroluj Docker build lokálne: `docker build -t casebook:latest .`
- Over, či sú všetky dependencies v package.json

### SMTP issues
- Over SMTP credentials
- Websupport SMTP môže vyžadovať whitelist IP adries

## Náklady (orientačne)

**Keďže používaš existujúcu DB na Websupporte:**

- **Micro** (256 MB RAM, 0.25 vCPU): $7/mesiac
- **Small** (512 MB RAM, 0.5 vCPU): $10/mesiac  ⭐ ODPORÚČAM
- **Medium** (1 GB RAM, 1 vCPU): $20/mesiac

**Total**: Len $10/mesiac (Small container) + tvoj existujúci Websupport hosting

**Úspora**: ~$15/mesiac oproti riešeniu s Lightsail DB

## Bezpečnostné poznámky

1. **NIKDY** necommituj `.env` súbor do gitu
2. Environment variables nastav iba v Lightsail Console
3. Použi silné NEXTAUTH_SECRET (minimálne 32 znakov)
4. Aktivuj HTTPS cez custom domain + SSL certifikát
5. Pravidelne aktualizuj dependencies (`npm audit`)

## Alternatívy (ak Websupport blokuje pripojenie)

Ak Websupport neumožní pripojenie z AWS:

1. **PlanetScale** - MySQL compatible, free tier, globálne dostupné
2. **Railway** - $5 credit/mesiac, MySQL podporovaný
3. **Lightsail MySQL Database** - $15/mesiac, ale 100% kompatibilné
4. **DigitalOcean Managed MySQL** - od $15/mesiac

## Quick Start

```bash
# 1. Vytvor Container Service v AWS Lightsail Console
# 2. Nainštaluj AWS CLI a nakonfiguruj
brew install awscli
aws configure

# 3. Build a push
chmod +x deploy-quick.sh
./deploy-quick.sh casebook-prod

# 4. V Lightsail Console nastav environment variables a deploy
```

## Podpora

Ak máš problémy:
1. Skontroluj logy v Lightsail Console
2. Over environment variables
3. Over database connection (ping mariadb114.r4.websupport.sk)
4. Kontaktuj Websupport support pre whitelist
5. Pozri DEPLOYMENT_CHECKLIST.md pre kompletný checklist

