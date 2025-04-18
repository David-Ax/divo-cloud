FROM node:22.12.0-alpine AS base

# Installiere corepack und pnpm v9 direkt
RUN corepack enable && corepack prepare pnpm@9.0.6 --activate

# Installiere Abhängigkeiten nur wenn notwendig
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Kopiere package.json und pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Installiere Abhängigkeiten mit pnpm v9
RUN pnpm install --frozen-lockfile

# Rebuild der Quelle nur wenn nötig
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Baue das Projekt mit pnpm
RUN pnpm run build

# Produktionsbild, kopiere alle Dateien und führe next.js aus
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Erstelle Benutzer
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Kopiere Public Ordner
COPY --from=builder /app/public ./public

# Setze die richtigen Berechtigungen für den Cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Kopiere Standalone und statische Dateien
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

# Starte Next.js Anwendung
CMD HOSTNAME="0.0.0.0" node server.js
