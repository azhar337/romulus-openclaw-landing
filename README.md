# romulus-openclaw

Landing page + waitlist flow for **Romulus OpenClaw** (OpenClaw-as-a-service for non-technical teams).

## Offer positioning
- Done-for-you OpenClaw setup
- Dashboard control for safe operations
- Browse/buy/configure skills
- Custom skill add-on + monthly maintenance

## Stack
- Next.js 14 (App Router)
- Prisma (`WaitlistLead` model)
- MySQL (primary DB via `DATABASE_URL`) with JSONL fallback for resilience

## Waitlist API
`POST /api/waitlist`

Payload:
```json
{
  "name": "Jane Founder",
  "email": "jane@company.com",
  "role": "founder"
}
```

Response includes storage mode:
- `storage: "prisma"` when DB write succeeds
- `storage: "fallback-file"` when DB unavailable (writes to `/tmp/romulus-openclaw-waitlist.jsonl`)

## Local run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Vercel
`vercel.json` is included for Next.js deployment readiness.
