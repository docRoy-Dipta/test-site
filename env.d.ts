declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string
    REDIS_URL: string
    MINIO_URL: string
    MINIO_ACCESS_KEY: string
    MINIO_SECRET_KEY: string
    STRIPE_SECRET_KEY: string
    STRIPE_WEBHOOK_SECRET: string
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
    NEXTAUTH_SECRET?: string   // optional to match Next.js
    NEXTAUTH_URL?: string      // optional to match Next.js
    JWT_SECRET: string
    SENTRY_DSN: string
    PROMETHEUS_ENABLED: string
  }
}