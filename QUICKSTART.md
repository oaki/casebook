# 🚀 Quick Start - Deployment na Lightsail

Najrýchlejší spôsob ako nasadiť Casebook na AWS Lightsail s tvojou existujúcou MySQL databázou.

## Krok 1: Príprava (5 min)

```bash
# Nainštaluj AWS CLI
brew install awscli

# Nakonfiguruj AWS credentials
aws configure
# AWS Access Key ID: [tvoj key]
# AWS Secret Access Key: [tvoj secret]
# Default region: eu-central-1
# Default output format: json
```

## Krok 2: Vytvor Container Service (2 min)

1. Otvor https://lightsail.aws.amazon.com/
2. Klikni **Containers** → **Create container service**
3. Vyber **EU (Frankfurt)** region
4. Vyber **Small** ($10/mesiac)
5. Názov: `casebook-prod`
6. Klikni **Create container service**

## Krok 3: Deploy (5 min)

```bash
# V termináli, v root priečinku projektu
chmod +x deploy-quick.sh
./deploy-quick.sh casebook-prod
```

Počkaj ~5-10 minút kým sa image uploadne.

## Krok 4: Nastav Environment Variables (3 min)

V Lightsail Console:

1. Choď na **casebook-prod** → **Deployments** tab
2. Klikni **Create your first deployment**
3. Vyber najnovší image
4. V sekcii **Environment variables** pridaj:

```
DATABASE_URL = mysql://kazuistika:O2g%3Ea(giz4ZWc%40YvJ2dj@mariadb114.r4.websupport.sk:3306/kazuistika_prod
SHADOW_DATABASE_URL = mysql://kazuistika:O2g%3Ea(giz4ZWc%40YvJ2dj@mariadb114.r4.websupport.sk:3306/kazuistika_prisma_migrate
SMTP_HOST = smtp.m1.websupport.sk
SMTP_PORT = 465
SMTP_SECURE = true
SMTP_USER = nutricia@bincik.sk
SMTP_PASS = [tvoje SMTP heslo]
JWT_SECRET = [tvoj JWT secret]
NEXTAUTH_SECRET = [tvoj nextauth secret]
NEXTAUTH_URL = https://casebook-prod.xxxxx.eu-central-1.cs.amazonlightsail.com
NODE_ENV = production
```

5. V sekcii **Open ports** skontroluj: `3000` (HTTP)
6. V sekcii **Public endpoint**:
   - Container name: `casebook`
   - Port: `3000`
7. Klikni **Save and deploy**

## Krok 5: Testuj (2 min)

1. Počkaj 2-3 minúty kým container nabehnne
2. Otvor URL z Lightsail (napr. `https://casebook-prod.xxxxx.eu-central-1.cs.amazonlightsail.com`)
3. Skús sa prihlásiť

## ✅ Hotovo!

Aplikácia beží na AWS Lightsail za **$10/mesiac**.

## 🐛 Ak niečo nefunguje

```bash
# Zobraz logy
aws lightsail get-container-log \
  --service-name casebook-prod \
  --container-name casebook
```

Alebo v Lightsail Console → Container → **Logs** tab

## 📝 Custom Domain (voliteľné)

1. V Lightsail → **Custom domains** → **Create certificate**
2. Pridaj svoj domain (napr. `casebook.nutricia.sk`)
3. V DNS (Websupport) pridaj CNAME record
4. Updatni `NEXTAUTH_URL` na tvoj domain

---

**Potrebuješ detaily?** Pozri `DEPLOYMENT_MYSQL.md`

