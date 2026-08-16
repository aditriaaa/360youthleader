# The 360° Youth Leader

This repository is set up as a static website suitable for deployment on Cloudflare Pages.

## Structure

- `index.html` – main landing page
- `about.html` – program overview page
- `journey.html` – journey page
- `contact.html` – contact page
- `signup.html` – interest form page
- `lead.html`, `mind.html`, `future.html`, `voice.html`, `money.html`, `community.html`, `safety.html` – track detail pages
- `styles.css` – shared styling

## Cloudflare Pages

This project does not require a build step. Upload the repository root or connect the repo to Cloudflare Pages and deploy it as a static site.

## Local preview

Open the HTML files directly in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
