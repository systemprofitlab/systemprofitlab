# SystemProfitLab

Audience-routed HighLevel affiliate site built with the Next.js App Router.

## Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Affiliate Click Tracking

Affiliate buttons route through `app/go/[slug]/route.ts` before redirecting to the final offer URL.

Tracked fields:

- `offer`
- `source`
- `audience`
- `destination`
- `clickedAt`
- `userAgent`
- `referer`

By default, click events are written to server logs with `console.info`.

To persist them to your own automation stack, set:

```bash
AFFILIATE_CLICK_WEBHOOK_URL=https://your-webhook-endpoint
```

If the webhook is configured, the app will `POST` the click payload there before redirecting the visitor to the affiliate destination.

## Lead Capture

Lead submissions use `app/api/lead/route.ts`.

To forward captured leads to your own automation, set:

```bash
LEAD_WEBHOOK_URL=https://your-webhook-endpoint
```
