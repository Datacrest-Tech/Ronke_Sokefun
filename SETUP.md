# Setup & Deployment

## 1. Install dependencies

```bash
npm install
npm install nodemailer
```

(`nodemailer` is only needed by the serverless function, so add it to
your deployment's dependencies even though the frontend doesn't import it.)

## 2. Local development

```bash
npm run dev
```

The contact form posts to `/api/contact`. On Vercel, `vite dev` alone
won't run the serverless function — use `vercel dev` instead, or point
the fetch call at a local Express server that imports `api/contact.js`
if you prefer to test outside Vercel's CLI.

## 3. Environment variables

Set these in your hosting provider's dashboard (never commit them):

| Variable | Description |
|---|---|
| `SMTP_HOST` | Your SMTP provider's host (e.g. `smtp.zoho.com`) |
| `SMTP_PORT` | `465` (SSL) or `587` (STARTTLS) |
| `SMTP_USER` | SMTP account username |
| `SMTP_PASS` | SMTP account password or app password |
| `CONTACT_RECEIVER_EMAIL` | Inbox that should receive inquiries |

## 4. Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel — `api/contact.js` is auto-detected as a
   Serverless Function; no extra config needed.
3. Add the environment variables above under Project Settings →
   Environment Variables.
4. Deploy.

## 5. Deploying to Netlify instead

Netlify Functions expect a different handler signature. Wrap the
existing logic:

```js
// netlify/functions/contact.js
import handlerLogic from "../../api/contact.js";

export async function handler(event) {
  const req = { method: event.httpMethod, body: JSON.parse(event.body || "{}") };
  let statusCode = 200;
  let payload = {};
  const res = {
    setHeader: () => {},
    status(code) {
      statusCode = code;
      return this;
    },
    json(data) {
      payload = data;
      return this;
    },
  };
  await handlerLogic(req, res);
  return { statusCode, body: JSON.stringify(payload) };
}
```

Then update the frontend fetch URL to `/.netlify/functions/contact`.

## 6. Tailwind

Tailwind is already wired up via `tailwind.config.js` and
`postcss.config.js`, with the executive color tokens (`navy`,
`alabaster`, `emerald`, `terracotta`, etc.) and the two brand
typefaces (`Cormorant Garamond` for display, `Plus Jakarta Sans` for
UI/body) declared as theme extensions. No further setup is required
beyond `npm install`.

## 7. Content

All copy and biographical facts live in `src/data/content.js` — edit
that file to update credentials, insights, or navigation without
touching component code. The executive portrait placeholder in
`Hero.jsx` should be replaced with an actual optimized image (WebP,
~800px tall) once available.
