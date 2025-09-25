# Prisma Migrations

This folder contains migration files for your Prisma schema.

Since your database schema is not empty, you need to baseline your existing database to avoid applying migrations that recreate existing tables.

To baseline your existing production database, create an initial empty migration with the following command:

\`\`\`
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/000_baseline.sql
\`\`\`

Then mark this migration as applied by creating a migration entry in the \`_prisma_migrations\` table manually or by using the Prisma migrate commands.

After baselining, you can create new migrations for schema changes normally.

For more details, see: https://pris.ly/d/migrate-baseline
