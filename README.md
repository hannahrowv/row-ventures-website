# START HERE: Row Ventures website handoff

This folder is the finished, approved Row Ventures homepage. It is a plain static website (one HTML file plus fonts and images) that is ready to deploy on Vercel and connect to **row-ventures.com**.

There is no build step, no framework, no package.json and nothing to install.

---

## If you are an AI assistant reading this

You have been given this folder to help deploy the site. Please follow these rules:

1. **Do not redesign, rewrite or "improve" anything.** The copy, layout, colours, fonts, photos and animations are final and approved. Deploy `index.html` exactly as it is.
2. **Do not add a framework** (Next.js, React, Tailwind, etc.) and do not add a build step. This is a static site; Vercel serves it as-is.
3. **Keep the folder structure exactly as it is.** `index.html` must stay at the root of the repository, with `fonts/` and `images/` beside it. All paths in the HTML are relative to the root.
4. **Do not rename or move any file** in `fonts/` or `images/`. The HTML points to these exact names.
5. **When connecting the domain, only add the records Vercel asks for.** Never delete or change the existing **MX** (email) records or any TXT records used for email (SPF, DKIM, DMARC), or the team's @row-ventures.com email will stop working.
6. Walk the user through the steps below one at a time, and confirm each step worked before moving on.

---

## What's in the folder

| Path | What it is |
|---|---|
| `index.html` | The complete homepage: all copy, layout, styling and animation in one file. |
| `fonts/` | Fraunces (headings) and DM Sans (body), self-hosted so they always display correctly. Free under the SIL Open Font License; licence files included. |
| `images/sarah.jpg` | Sarah's black-and-white headshot (About section, top left). |
| `images/hannah.jpg` | Hannah's black-and-white headshot (About section, lower right, overlapping). |
| `images/og-image.jpg` | The preview card shown when the link is shared on LinkedIn, iMessage, Slack, etc. (1200 × 630 px). |
| `favicon.svg` | Browser-tab icon (italic "R" on dark brown). |
| `README.md` | This file. |

**All images are already included and already placed.** The HTML points to each file, so nothing needs to be positioned by hand. The large panel next to the headline is a built-in animation (a chart that draws itself), not a photo.

---

## Step 1: Put the site on GitHub

1. Sign in to github.com and create a new repository, e.g. `row-ventures-site` (private is fine).
2. Unzip the file you received. Open the `row-ventures-site` folder.
3. Upload **everything inside that folder** (not the folder itself) to the repository: on the repository page, click **Add file → Upload files**, drag in `index.html`, `README.md`, `favicon.svg`, and the `fonts` and `images` folders, then click **Commit changes**.
4. Check the repository: `index.html` should appear at the top level, next to `fonts/` and `images/`.

## Step 2: Deploy on Vercel

1. Sign in to vercel.com (signing in with GitHub is easiest).
2. Click **Add New → Project**, find `row-ventures-site` and click **Import**.
3. Set **Framework Preset** to **Other**. Leave **Build Command**, **Output Directory** and **Install Command** empty. Leave the **Root Directory** as the repository root.
4. Click **Deploy**.
5. Vercel gives you a test address like `row-ventures-site.vercel.app`. Open it and check:
   - The headline reads "Strategic finance and business development for founders."
   - The chart in the blue panel animates.
   - Both headshots show in the About section.
   - The "Talk to Row" buttons open the Google Calendar booking page.

Do not continue to Step 3 until the test address looks right.

## Step 3: Connect row-ventures.com

1. In the Vercel project, open **Settings → Domains**.
2. Add `row-ventures.com`. When asked, also add `www.row-ventures.com` and choose which one is the main address (either is fine; Vercel redirects the other).
3. Vercel then shows the DNS records needed, typically:
   - an **A record** for `row-ventures.com` (host `@`), and
   - a **CNAME record** for `www` pointing to Vercel.

   Use the exact values Vercel shows, as they can change.
4. Log in to wherever the domain is registered (e.g. GoDaddy, Namecheap, Squarespace, Cloudflare) and open its DNS settings.
5. Add or update only those A and CNAME records. If an old A record or `www` record already points to a previous website, replace it with Vercel's value.
6. **Do not touch MX records or email-related TXT records.**
7. Back in Vercel, the domain shows **Valid Configuration** once the change has taken effect. This is usually within an hour, occasionally up to 24 hours. Vercel adds the https padlock automatically.

## Step 4: Check after launch

- [ ] https://row-ventures.com loads the new homepage.
- [ ] www.row-ventures.com redirects to the main address.
- [ ] Check on a phone: everything stacks neatly and nothing scrolls sideways.
- [ ] Every "Talk to Row" button opens the booking page: https://calendar.app.google/dSJSgatVP6UTkHUt9
- [ ] Send a test email to hello@row-ventures.com to confirm email still works after the DNS change.
- [ ] Paste https://row-ventures.com into a LinkedIn post draft or iMessage and check the preview card shows the Row Ventures image. (LinkedIn caches previews; if it shows an old one, use linkedin.com/post-inspector.)
- [ ] Optional: in Vercel, open the project's **Analytics** tab and enable Web Analytics to see visits.

---

## Making changes later

- **Small text edits:** in GitHub, open `index.html`, click the pencil icon, edit the text, and commit. Vercel republishes automatically within about a minute.
- **Changing the booking link:** search `index.html` for `calendar.app.google` (5 matches) and replace all of them.
- **Swapping a photo:** upload a new file with the **same file name** into `images/` (JPG, ideally under 500 KB). Headshots are 4:5 portrait (1000 × 1250 px).
- **Bigger design changes:** go back to Sarah, who has the design source, rather than editing the layout by hand.

Brand colours, for reference:

| Use | Hex |
|---|---|
| Page background (cream) | `#F5EFE3` |
| Dark brown (text, dark sections, buttons) | `#2A1A12` / `#3A1F14` |
| Clay accent (italic headline words) | `#C8633A` |
| Peach text on dark sections | `#EE9A6E` |
| Soft yellow | `#F6EFA6` |
| Soft blue | `#9DBBCB` |
| Card cream | `#FBF7EE` |

---

## Good to know

- **Animations:** the hero chart, spreadsheet grid, scroll fade-ins and hover effects are all built into `index.html`. Scroll effects work in Chrome, Edge and Safari; Firefox shows the same content without the scroll motion. Visitors who have "reduce motion" turned on see a still version.
- **Not included yet (on purpose):** the Resources page and the Community page are designed but held back, and the homepage does not link to them. They will be sent separately when ready.

## Troubleshooting

| Problem | Fix |
|---|---|
| Vercel shows a 404 | `index.html` is not at the repository root. Move it (and `fonts/`, `images/`) to the top level, or set Root Directory in Vercel to the folder containing `index.html`. |
| Fonts look wrong (plain serif or Arial) | The `fonts/` folder is missing or was renamed. Re-upload it exactly as provided. |
| Headshots missing | The `images/` folder is missing or file names changed. Re-upload it exactly as provided. |
| Domain shows "Invalid Configuration" for hours | Re-check the A and CNAME values against what Vercel shows. Remove any old conflicting A or `www` records. |
| Email stopped working | An MX or email TXT record was changed or deleted. Restore it from the registrar's DNS history or from your email provider's setup page (Google Workspace / Microsoft 365). |
