# AutoQA SaaS

Production-grade SaaS for automated/manual QA testing of web/mobile apps.

## Architecture
- Frontend: Next.js + TS + Tailwind + shadcn
- Backend: NestJS + TS + Prisma + Postgres
- Queue: Redis + BullMQ
- Workers: Node + Playwright/Appium in Docker
- Storage: MinIO
- Payments: Stripe
- Auth: NextAuth
- CI/CD: GitHub Actions
- Deploy: Docker Compose local, K8s prod

Diagram:
[Frontend] <-> [Backend API] <-> [Postgres, Redis, MinIO]
               |
             [Workers] (queue jobs for tests)

## Tech Decisions
- Next.js for SSR/SEO.
- NestJS for structured backend.
- Prisma for DB.
- BullMQ for jobs.
- Playwright for web, Appium for mobile.
- Stripe for billing.
- Sentry/Prometheus for obs.

## Run Locally
1. Copy .env.example to .env, fill vars (e.g., DATABASE_URL=postgres://user:pass@postgres:5432/autoqa, STRIPE_SECRET_KEY=sk_test_..., etc.)
2. docker-compose up --build
3. Visit http://localhost:3000

## Deploy Prod
1. Build/push Docker images via CI.
2. Apply K8s manifests: kubectl apply -f k8s/
3. Set secrets: kubectl create secret generic autoqa-secrets --from-env-file=.env

## Tests
npm run test (Jest + Playwright)