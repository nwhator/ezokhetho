# Ezokhetho

Ezokhetho is a Next.js storefront for runway collections and online-store products.

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Image notes

- Collection and product images are served from `/public/images`.
- Izimbokodo collection assets use:
  - `/public/images/products/Collections/izimbokodo _22`
- Landing-page featured pieces should use online-store products only (`runway !== true`).

## If an image does not display

1. Confirm the file exists in `/public/images/...` and the path matches exactly (including spaces and case).
2. Restart the dev server after image/path changes.
3. Hard refresh the browser to clear cached image responses.
