# IndigoLearn ACCA Landing Page

A responsive ACCA course landing page with learning information and a client-side callback confirmation dialog.

## Run & Operate

- `npm run dev` — run the ACCA landing page from the workspace root
- `pnpm --filter @workspace/acca-landing run dev` — run the landing page directly
- `pnpm run build` — build all workspace packages

## Stack

- pnpm workspaces, Node.js 24, JavaScript (ES modules)
- Frontend: React + Vite
- Page UI: JSX components and plain CSS

## Where things live

- `artifacts/acca-landing/src/components/` — reusable page sections and callback modal
- `artifacts/acca-landing/src/App.css` — landing page styles

## Architecture decisions

- The callback interaction is intentionally client-only and displays a confirmation; it does not submit data to a service.

## Product

Prospective ACCA students can review the course overview, eligibility, curriculum, and placement support, then open a callback confirmation dialog.

## User preferences

- Keep this project beginner-friendly: use React functional components and hooks with plain CSS only; do not add UI frameworks or styling libraries.

## Gotchas

## Pointers

- The API client generation command in `lib/api-spec` converts generated output to JavaScript.
