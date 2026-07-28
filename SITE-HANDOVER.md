# Surrey Nail Artisan Website Handover

Last updated: 28 July 2026  
Status: Live in production

This document is the durable knowledge base for the Surrey Nail Artisan website. It is intended to let Douglas, Natalia Pol, or another Codex session continue the project from a different computer without relying on the original conversation.

The live repository and website files are always the final source of truth. Read this file first, then inspect the current repository before changing anything.

## 1. Essential links

| Purpose | Address |
| --- | --- |
| Live website | https://www.surreynailartisan.co.uk/ |
| GitHub repository | https://github.com/desantipol-sites/surrey-nail-artisan |
| Cloudflare Worker preview | https://surrey-nail-artisan.desantipol.workers.dev/ |
| Instagram | https://www.instagram.com/surreynailartisan/ |
| Google Business Profile | https://share.google/4GoCXTIuT53ZggbVu |
| Timely booking | https://book.gettimely.com/richmondbeautytherapist/book/embed?location=288017&staff=665857&client-login=true |
| Sitemap | https://www.surreynailartisan.co.uk/sitemap.xml |
| Robots file | https://www.surreynailartisan.co.uk/robots.txt |
| Separate Richmond business website | https://www.richmondbeautytherapist.co.uk/ |

Repository:

```text
desantipol-sites/surrey-nail-artisan
```

Production branch:

```text
main
```

## 2. Business and audience

Surrey Nail Artisan is Natalia Pol's private, appointment-only salon in Hampton.

Important positioning:

- This is not a high-street or busy multi-client salon.
- Natalia Pol works with one client at a time.
- Privacy, calm, hygiene, quality and individual attention are central.
- The audience is primarily women aged approximately 30 to 60.
- Many existing customers speak Russian.
- Customers are willing to pay more for a private and carefully managed appointment.
- Most website traffic is mobile.

Medical pedicure is an important growth area and needs strong visibility. Regular manicure and pedicure services still provide most revenue, so they must remain prominent and appear before the medical-pedicure promotional block on the homepage.

Eye treatments remain available but are not a current growth priority. Eyelash, eyebrow and lash-lift categories use a quieter visual treatment on the homepage.

## 3. Brand and design direction

The desired feeling is:

- Calm
- Premium
- Aesthetically pleasing
- Personal
- Professional
- Practical
- Easy to use on mobile

Current typography:

```css
Display and title font: "Cormorant Garamond", Georgia, serif
Body and interface font: "DM Sans", "Helvetica Neue", Arial, sans-serif
```

Main colour variables from `public/styles.css`:

```css
--paper: #f6fbf4;
--paper-warm: #f5efe8;
--ink: #1d211e;
--muted: #60685f;
--sage: #768a70;
--sage-dark: #35513f;
--sage-deep: #223d31;
--taupe: #9c8674;
--taupe-light: #d8c8b8;
--white: #fff;
```

Visual decisions:

- Use gentle vertical gradients between light content blocks.
- Keep the final transition into the dark-green booking area more definite.
- Use real photos of Natalia's work for hands, feet and treatment results.
- Do not generate hands, nails or treatment results with AI.
- AI-generated images may be used only for props, backgrounds, textures or visual atmosphere.
- Image labels use rounded frosted or translucent pills.
- Labels should sit toward the left without covering the important part of the image.
- Images reveal softly when they enter the viewport.
- The sticky mobile Book Now button uses a subtle glare animation every 3 seconds.
- Other booking buttons do not use the repeating glare animation.
- The homepage service categories use accordions.
- Only one service accordion stays open at a time.
- The circular plus/minus control is the second most important call to action after Book Now.

Copy preferences:

- Use `Natalia Pol`, not only `Natalia`, when her name is necessary.
- Keep references to Natalia Pol restrained rather than repeating her name everywhere.
- Use `appointment` rather than `consultation` for booking language.
- Avoid em dashes in customer-facing copy.
- Use straightforward calls to action such as `See all treatments available`.
- Avoid vague calls to action such as `Discover`.
- Preserve the themes `natural-looking` and `long-lasting through high-quality products`.
- The correct spelling is `nail restoration`, not `nail restauration`.

## 4. Homepage content hierarchy

The homepage is mobile-first and currently follows this broad order:

1. Header and hero
2. Trust points
3. Selected work and real result images
4. Service categories and expandable prices
5. Medical pedicure promotional block
6. Hampton studio and private appointment positioning
7. Dark-green booking call to action
8. Footer
9. Sticky mobile booking bar

Trust points:

- One client at a time
- Natural-looking results
- Long-lasting through high-quality products
- Certified Foot Health Professional
- Fully insured

Homepage service category order:

1. Hands treatment
2. Feet treatment
3. Medical pedicure
4. Hands and feet packages
5. Male hands and feet treatment
6. KART pedicure
7. Eyelash and eyebrows
8. Lash lift

The medical-pedicure feature, including the `Professional care, privately delivered` imagery, appears after the regular service catalogue and before the Hampton studio block.

## 5. Pages and routes

| Page | Canonical route | Source file |
| --- | --- | --- |
| Homepage | `/` | `public/index.html` |
| Hands treatment | `/hands-treatment` | `public/hands-treatment.html` |
| Feet treatment | `/feet-treatment` | `public/feet-treatment.html` |
| Medical pedicure | `/medical-pedicure` | `public/medical-pedicure.html` |
| Hands and feet packages | `/hands-feet-packages` | `public/hands-feet-packages.html` |
| Male hands and feet treatment | `/male-hands-feet-treatment` | `public/male-hands-feet-treatment.html` |
| KART pedicure | `/kart-pedicure` | `public/kart-pedicure.html` |
| Eyelash and eyebrows | `/eyelash-eyebrows` | `public/eyelash-eyebrows.html` |
| Lash lift | `/lash-lift` | `public/lash-lift.html` |

Each category page follows the same broad template:

1. Category hero
2. Short category introduction
3. Treatments and prices
4. Real result or treatment images
5. What to expect
6. Booking call to action
7. Shared footer
8. Sticky mobile booking bar

The medical-pedicure page has a more clinical and professional visual tone while retaining the calm premium character of the main website.

## 6. Current service catalogue

The HTML files are the final source of truth for prices. Whenever a price changes, update:

1. The homepage accordion
2. The relevant category page
3. JSON-LD structured data on that category page
4. Any other page that mentions the same treatment

### Hands treatment

| Treatment | Time | Price |
| --- | ---: | ---: |
| Classic manicure | 45 min | £50 |
| IBX and classic manicure | 1 hour | £55 |
| Gel removal and classic manicure, without new gel | 1 hour | £60 |
| Gel manicure, including removal with new application | 1 hour 30 min | £65 |

`File and Polish` has been removed and must not be restored unless Natalia specifically requests it.

### Feet treatment

| Treatment | Time | Price |
| --- | ---: | ---: |
| Gel removal and classic pedicure, without new application | 1 hour 15 min | £65 |
| Classic pedicure | 1 hour | £65 |
| Gel pedicure | 1 hour 30 min | £70 |
| Luxury pedicure, without colour | 1 hour 30 min | £85 |
| Luxury pedicure, with colour | 1 hour 45 min | £95 |

Men's Classic Pedicure was moved out of this category and into the male treatment category.

### Medical pedicure

| Treatment | Time | Price |
| --- | ---: | ---: |
| Foot care appointment and treatment | 45 min | £75 |
| Foot care follow-up | 45 min | £65 |
| Diabetic foot assessment | 45 min | £75 |
| Ingrown toenail | 30 to 45 min | £60 to £75 |
| Verruca treatment, first session | Approximately 30 min | £65 |
| Verruca treatment, follow-up | Approximately 30 min | £55 |
| Fungal nail treatment | 35 min per session | £75 per session |
| Toenail cutting, after an initial appointment | 30 min | £45 |
| Onyfix correction, one toenail | By assessment | £65 |
| Onyfix correction, two toenails | By assessment | £120 |
| Onyfix follow-up, one toenail | By assessment | £50 |
| Onyfix follow-up, two toenails | By assessment | £90 |
| Nail restoration, one toenail | By assessment | £65 |
| Nail restoration, two toenails | By assessment | £120 |

Medical-pedicure rules:

- `Foot care appointment and treatment` is the required starting point for a new concern.
- Verruca treatment may need more than one session depending on severity.
- Fungal nail treatment may need more than one session depending on severity.
- Nail restoration means restoration of the toenail plate.
- Onyfix initial and follow-up prices must remain visually separated.
- Medical-pedicure prices are aligned on the right on mobile.

### Hands and feet packages

| Treatment | Time | Price |
| --- | ---: | ---: |
| Classic manicure and pedicure | 1 hour 45 min | £90 |
| Gel manicure and classic pedicure | 2 hours 30 min | £110 |
| Classic manicure and gel pedicure | 2 hours 30 min | £110 |
| Gel manicure and gel pedicure | 2 hours 45 min | £125 |

`Male Manicure and Pedicure` was moved out of this category.

### Male hands and feet treatment

Treatments are sorted by price:

| Treatment | Time | Price |
| --- | ---: | ---: |
| Classic manicure, no colour | 30 min | £40 |
| Gel manicure, with colour | 60 to 90 min | £65 |
| Male manicure and pedicure | 1 hour 15 min | £80 |
| Classic manicure and gel pedicure | 2 hours 30 min | £110 |
| Gel manicure and classic pedicure | 2 hours 30 min | £110 |
| Gel manicure and gel pedicure | 2 hours 30 min | £125 |

### KART pedicure

| Treatment | Time | Price |
| --- | ---: | ---: |
| KART pedicure | 1 hour | £70 |
| Callus peel | 1 hour | £70 |
| KART pedicure with colour | 1 hour 30 min | £80 |

### Eyelash and eyebrows

| Treatment | Time | Price |
| --- | ---: | ---: |
| Eyebrow shape | 15 min | £12 |
| Eyebrow tint | 15 min | £13 |
| Eyelash tint | 15 min | £13 |
| Eyebrow shape and tint | 30 min | £25 |
| Eyelash and eyebrow tint | 30 min | £25 |

### Lash lift

| Treatment | Time | Price |
| --- | ---: | ---: |
| LVL Enhance / lash lift | 1 hour | £65 |
| LVL lash lift and eyebrow | 1 hour | £80 |

The standalone `LVL Enhance / eyebrows` treatment was removed.

## 7. Footer

All pages use the same footer pattern:

- Large Surrey Nail Artisan logo
- Natalia Pol's professional credentials
- Instagram icon and link
- A contextual link to Medical Pedicure or Nails and Pedicure

Approved credential text:

> I'm a fully insured and qualified beauty therapist with NVQ Level 2 as well as a registered member of The British Association of Foot Health Professionals.
>
> Natalia Pol

On mobile, the logo sits on the left and the credential text sits to its right to avoid wasted vertical space.

There is no footer `Book online` link on mobile because the sticky booking bar already provides that action.

## 8. Important images and assets

Assets live in:

```text
public/assets/
```

Important files:

| Asset | Purpose |
| --- | --- |
| `surrey-nail-artisan-logo.png` | Header, footer, favicon and social identity |
| `hampton-studio-2026.webp` | Current Hampton studio image, derived from the supplied `Studio2.png` |
| `real-grey-manicure.jpeg` | Homepage hero result |
| `real-sage-manicure.jpg` | Selected manicure work |
| `real-blue-manicure.jpg` | Selected manicure work |
| `real-burgundy-pedicure.jpg` | Selected pedicure work |
| `natalia-foot-care.jpeg` | Medical-pedicure promotion |
| `medical-treatment-nails.jpeg` | Detailed medical treatment |
| `medical-treatment-drill.jpeg` | Specialist equipment and treatment |
| `natalia-studio.jpeg` | Natalia Pol in the studio |
| `hands-classic-manicure.jpg` | Hands page hero |
| `feet-classic-pedicure.jpg` | Feet page imagery |
| `lash-lift.jpg` | Lash-lift imagery |
| `kart-pedicure.jpg` | KART page imagery |

Real treatment images were retrieved from the previous website's category and individual procedure pages where possible.

Some older or unused assets may remain in the folder. Do not delete them casually. Confirm that no HTML, CSS, social metadata or structured data references an asset before removing it.

## 9. Technical architecture

The website is intentionally simple:

- Static HTML
- One shared CSS file
- Small shared JavaScript files
- No frontend framework
- No package build step
- Hosted as Cloudflare Worker static assets

Repository structure:

```text
surrey-nail-artisan/
├── README.md
├── SITE-HANDOVER.md
├── wrangler.jsonc
└── public/
    ├── index.html
    ├── hands-treatment.html
    ├── feet-treatment.html
    ├── medical-pedicure.html
    ├── hands-feet-packages.html
    ├── male-hands-feet-treatment.html
    ├── kart-pedicure.html
    ├── eyelash-eyebrows.html
    ├── lash-lift.html
    ├── styles.css
    ├── script.js
    ├── tracking.js
    ├── robots.txt
    ├── sitemap.xml
    ├── _redirects
    └── assets/
```

`public/script.js` handles:

- Scrolled header state
- Mobile navigation
- One-open-at-a-time service accordions
- Scroll-triggered image reveals
- Reduced-motion accessibility

`public/tracking.js` handles:

- Google Ads global tag
- Google Tag Manager
- Booking conversion events
- Delayed navigation to Timely so the conversion event has time to send

`public/styles.css` contains:

- All desktop and mobile styling
- Design variables
- Gradient sections
- Image-label pills
- Accordion layout
- Image reveal animation
- Sticky mobile booking bar
- Three-second booking glare animation

`wrangler.jsonc`:

```json
{
  "name": "surrey-nail-artisan",
  "compatibility_date": "2026-07-19",
  "assets": {
    "directory": "./public"
  }
}
```

## 10. Hosting and deployment

Hosting:

```text
Cloudflare Workers static assets
```

Worker name:

```text
surrey-nail-artisan
```

Cloudflare's GitHub integration watches the `main` branch. A commit to `main` starts a production deployment automatically.

Current Cloudflare build settings:

```text
Build command: none
Deploy command: npx wrangler deploy --assets ./public
Root directory: /
```

The Worker configuration also points its assets directory to `./public`.

Custom domains connected to the Worker:

```text
surreynailartisan.co.uk
www.surreynailartisan.co.uk
```

Canonical hostname:

```text
www.surreynailartisan.co.uk
```

Cloudflare Single Redirect:

```text
Incoming hostname: surreynailartisan.co.uk
Operator: equals
Target type: Dynamic
Target expression: concat("https://www.surreynailartisan.co.uk", http.request.uri.path)
Status: 301
Preserve query string: enabled
```

This redirect keeps the full page path and query string.

## 11. Domain and DNS

Registrar:

```text
GoDaddy
```

DNS provider and nameservers:

```text
Cloudflare
etienne.ns.cloudflare.com
gloria.ns.cloudflare.com
```

The domain registration remains at GoDaddy. Only authoritative DNS moved to Cloudflare.

Previous Webflow records were removed when the custom domains were connected to the Worker:

```text
Old A record @ -> 198.202.211.1
Old CNAME www -> cdn.webflow.com
```

There is currently no email service using `@surreynailartisan.co.uk`, so there were no MX records to preserve during migration.

Do not change nameservers or custom-domain records casually. A mistake here can take the entire site offline.

## 12. Analytics, advertising and booking conversion

Google Tag Manager container:

```text
GTM-N6DVTSQR
```

Google Ads account/tag:

```text
AW-17380308355
```

Booking conversion destination:

```text
AW-17380308355/evoYCIjej_YaEIPryd9A
```

The existing GA4 configuration remains managed through the existing Google Tag Manager container.

Do not import or recreate the previous broken booking conversion.

Current conversion behaviour:

1. A visitor clicks any link whose address contains `book.gettimely.com` or `/loading-booking`.
2. `tracking.js` prevents immediate navigation.
3. `gtag` sends the Google Ads conversion event.
4. The browser continues to Timely after the event callback or a short timeout.

The conversion fallback timeout is approximately 1.3 seconds.

All booking links use the same Timely account, location and staff:

```text
location=288017
staff=665857
client-login=true
```

## 13. SEO implementation

Indexing was enabled when the custom domain went live.

All production HTML pages currently contain:

```html
<meta name="robots" content="index, follow">
```

`public/robots.txt`:

```text
User-agent: *
Allow: /

Sitemap: https://www.surreynailartisan.co.uk/sitemap.xml
```

Cloudflare may prepend its managed content-signal section to the live `robots.txt`. The live response currently states that search indexing is allowed while several AI-training crawlers are blocked.

SEO features already implemented:

- Unique page titles
- Unique meta descriptions
- `index, follow`
- Canonical URLs using the `www` hostname
- Open Graph tags
- Twitter card tags
- Favicon and Apple touch icon
- Semantic heading structure
- Descriptive image alternative text
- Local business structured data
- Service and offer structured data
- `robots.txt`
- XML sitemap
- Permanent legacy redirects
- HTTPS through Cloudflare
- Root-domain to `www` canonical redirect

The homepage contains `BeautySalon` and `WebSite` JSON-LD including:

- Business name
- Address
- Phone number
- Opening hours
- Google Business Profile
- Instagram
- Founder and professional role
- Service catalogue

The category pages include service and offer details in JSON-LD. When prices or durations change, the visible cards and JSON-LD must both be updated.

Important production SEO release:

```text
9345fb5 - Allow search engines to index the live site
```

### Legacy redirects

`public/_redirects` preserves old Webflow category and procedure addresses using permanent `301` redirects.

Examples:

```text
/prices/hands-treatment -> /hands-treatment
/prices/feet-treatment -> /feet-treatment
/procedure/classic-manicure -> /hands-treatment
/procedure/classic-pedicure -> /feet-treatment
/procedure/verruca-treatment-per-session -> /medical-pedicure
```

The old `/loading-booking` route uses a temporary `302` redirect to Timely.

Do not remove these redirects without checking Google Search Console and existing backlinks. They protect rankings and prevent old search results from returning 404 errors.

## 14. Immediate SEO follow-up

The site is eligible for indexing, but Google indexing is not instantaneous.

Next actions:

1. Open Google Search Console.
2. Use the existing property for `surreynailartisan.co.uk`, or create a Domain property if necessary.
3. Submit:

   ```text
   https://www.surreynailartisan.co.uk/sitemap.xml
   ```

4. Use URL Inspection for:

   ```text
   https://www.surreynailartisan.co.uk/
   https://www.surreynailartisan.co.uk/medical-pedicure
   https://www.surreynailartisan.co.uk/hands-treatment
   https://www.surreynailartisan.co.uk/feet-treatment
   ```

5. Request indexing for the homepage and key service pages.
6. Monitor indexing, Core Web Vitals, 404s and redirect errors.
7. Confirm Google Analytics Realtime activity.
8. Confirm Google Ads booking conversion events.

## 15. Known checks and optional cleanup

These are not launch blockers:

- `kart-pedicure.html` currently has a meta description mentioning men's pedicure even though the male service moved to its own category. Update this during the next SEO refinement.
- The Medical Pedicure `Treatment details` link for the first appointment uses an old procedure URL that redirects back to the Medical Pedicure page. It can be replaced with a direct booking action or removed.
- Some old image assets remain but may no longer be used.
- Continue monitoring mobile title sizes when adding new headings.
- Review search snippets after Google recrawls the new website.
- Test the booking conversion again after any change to `tracking.js`, GTM, Google Ads or Timely.

## 16. Working on another computer

### Required access

Make sure the new computer can access:

- GitHub account `desantipol-sites`
- Cloudflare account containing the Worker and domain
- GoDaddy account containing the domain registration
- Google Tag Manager
- Google Analytics
- Google Ads
- Google Search Console
- Timely

Do not copy passwords, authentication codes or private keys into this file.

### Recommended software

- Git
- Visual Studio Code or another text editor
- A modern browser
- Python or Node.js for local preview
- Codex or ChatGPT desktop, if desired

### Clone the project

```powershell
git clone https://github.com/desantipol-sites/surrey-nail-artisan.git
cd surrey-nail-artisan
```

### Start a local preview

Using Python:

```powershell
python -m http.server 4173 --directory public
```

Then open:

```text
http://127.0.0.1:4173/
```

Using a simple Node server:

```powershell
npx serve public -l 4173
```

### Safe editing workflow

Before editing:

```powershell
git pull
git status
```

Create a backup branch for a large visual or structural change:

```powershell
git switch -c feature/short-description
```

After editing:

```powershell
git diff
git status
git add public SITE-HANDOVER.md
git commit -m "Describe the change"
git push
```

If working directly on `main`, pushing to GitHub triggers the Cloudflare production deployment. For risky work, use a separate branch and merge it only after checking the preview.

### Manual Cloudflare deployment

Normally this is unnecessary because GitHub deploys automatically.

If manual deployment is intentionally required:

```powershell
npx wrangler deploy
```

Use the Cloudflare account that owns the `surrey-nail-artisan` Worker.

## 17. Verification checklist after every release

Check at least:

- Homepage desktop
- Homepage mobile
- Medical Pedicure desktop
- Medical Pedicure mobile
- One regular category page
- Header and mobile menu
- Service accordions
- Sticky Book Now bar
- Book Now conversion and Timely navigation
- Footer
- Root domain redirect
- One old Webflow URL redirect
- `robots.txt`
- `sitemap.xml`
- Browser console for errors

Suggested URLs:

```text
https://www.surreynailartisan.co.uk/
https://www.surreynailartisan.co.uk/medical-pedicure
https://surreynailartisan.co.uk/medical-pedicure?redirect-test=1
https://www.surreynailartisan.co.uk/prices/hands-treatment
https://www.surreynailartisan.co.uk/robots.txt
https://www.surreynailartisan.co.uk/sitemap.xml
```

Expected redirect behaviour:

```text
surreynailartisan.co.uk/* -> www.surreynailartisan.co.uk/* (301)
Old Webflow URLs -> closest new category page (301)
```

## 18. Suggested prompt for a new Codex session

Copy this into the new session:

```text
This is the Surrey Nail Artisan website project.

First, read SITE-HANDOVER.md completely. Then inspect the current repository and the relevant files under public/. Treat the repository as the source of truth and do not rely only on the handover document if they differ.

Before making changes, summarise:
1. the current architecture,
2. the design and copy rules,
3. the deployment workflow,
4. the SEO and tracking requirements,
5. the files you expect to modify.

Do not change the domain, DNS, analytics IDs, booking URL, redirects, robots rules, sitemap or structured data unless the requested task specifically requires it. Keep the site mobile-first and preserve the calm, premium, private-salon character.
```

## 19. Final safety rules

- Never commit passwords, API tokens, authentication codes or private customer data.
- Do not change DNS or nameservers for ordinary website edits.
- Do not remove the old Webflow redirects without an SEO review.
- Do not disable indexing on production.
- Do not change booking URLs without testing the conversion event.
- Do not update a visible price without updating every duplicate and its structured data.
- Do not use generated hands, feet, nails or treatment-result imagery.
- Preserve mobile usability and the sticky Book Now action.
- Make a branch or GitHub commit before significant structural redesigns.

