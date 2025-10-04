# Deployment Guide - AWS Lightsail Container Service

## Predpoklady

1. **AWS CLI** nainštalované a nakonfigurované
2. **Docker** nainštalovaný a bežiaci
3. **Lightsail Container Service** vytvorený v AWS Console

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

### Vytvor PostgreSQL databázu v Lightsail

1. V Lightsail Console, klikni "Databases"
2. Create database -> PostgreSQL
3. Vyber plán (napr. Standard - $15/mesiac)
4. Zadaj názov (napr. `casebook-db`)
5. Po vytvorení, získaj connection string z "Connect" tabu

### Alebo použi externe (Supabase, Neon, atď.)

Môžeš použiť aj managed PostgreSQL od:
- [Supabase](https://supabase.com) - Free tier dostupný
- [Neon](https://neon.tech) - Free tier dostupný
- [Railway](https://railway.app) - Free tier dostupný

## Deployment Kroky

### 1. Nastav environment variables

Vytvor súbor `.env.production` (nepridávaj do gitu!):

```bash
DATABASE_URL="postgresql://user:password@host:5432/casebook?schema=public"
NEXTAUTH_URL="https://your-service.amazonaws.com"
NEXTAUTH_SECRET="vygeneruj-silny-secret-min-32-znakov"
JWT_SECRET="iny-silny-secret-pre-jwt"
RESEND_API_KEY="re_..." # z resend.com
EMAIL_FROM="noreply@yourdomain.com"
```

### 2. Spusti migrácie (prvý krát)

```bash
# Nastav DATABASE_URL
export DATABASE_URL="your-production-database-url"

# Spusti migrácie
npx prisma migrate deploy

# Seedni dáta (ak potrebuješ)
npm run db:seed
```

### 3. Build a Push Docker image

#### Jednoduchý spôsob (automatický script):

```bash
chmod +x deploy.sh
./deploy.sh casebook-prod
```

#### Manuálny spôsob:

```bash
# Build image
docker build -t casebook:latest .

# Test lokálne (voliteľné)
docker run -p 3000:3000 --env-file .env.production casebook:latest

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

#### Alebo cez Web Console:

1. Choď do Lightsail Console -> Container Services -> casebook-prod
2. Klikni "Create your first deployment"
3. Vyber image (najnovší pushed image)
4. Nastav environment variables:
   - `DATABASE_URL`
   - `NEXTAUTH_URL`
   - `NEXTAUTH_SECRET`
   - `JWT_SECRET`
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `NODE_ENV` = `production`
5. Open ports: 3000 (HTTP)
6. Public endpoint: Container `casebook`, Port `3000`
7. Klikni "Save and deploy"

### 5. Nastavenie Custom Domain (voliteľné)

1. V Lightsail Container Service, choď na "Custom domains"
2. Pridaj svoj domain
3. Vytvor SSL certifikát (zadarmo od AWS)
4. Uprav DNS recordy u tvojho domain providera

## Aktualizácia aplikácie

Kedykoľvek chceš nasadiť novú verziu:

```bash
# 1. Push zmeny do gitu (good practice)
git add .
git commit -m "Update: ..."
git push

# 2. Build a deploy
./deploy.sh casebook-prod

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
- Over, či je databáza accessible (firewall rules)
- Over connection string
- Over, či sú migrácie spustené

### Build fails
- Skontroluj Docker build lokálne
- Over, či sú všetky dependencies v package.json

## Náklady (orientačne)

- **Micro** (256 MB RAM, 0.25 vCPU): $7/mesiac
- **Small** (512 MB RAM, 0.5 vCPU): $10/mesiac
- **Medium** (1 GB RAM, 1 vCPU): $20/mesiac
- **Database Standard** (1 GB RAM): $15/mesiac

**Total minimum**: ~$22/mesiac (Small + DB) pre production-ready setup

## Alternatívy

Ak hľadáš lacnejšie riešenie:
- **Vercel** - Free tier, ale platené features (okrem hobby projektov)
- **Railway** - $5 credit/mesiac zadarmo
- **Fly.io** - Free tier dostupný
- **DigitalOcean App Platform** - Od $5/mesiac

## Podpora

Ak máš problémy:
1. Skontroluj logy v Lightsail Console
2. Over environment variables
3. Over database connection
4. Kontaktuj support alebo skontroluj AWS dokumentáciu

