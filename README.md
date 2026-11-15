# Kuruva Koushik — Portfolio

A responsive portfolio built with HTML, CSS and vanilla JavaScript. The visual system uses a white and blueprint-blue palette, sharp editorial layouts, Funnel Display/Sans typography, and small, reduced-motion-aware interactions. See `design-system/kuruva-koushik-portfolio/MASTER.md` for the design system.

## Run locally

Open `index.html` directly or serve this folder with any static web server. `404.html` is included for static hosts that support a custom not-found page.

## GitHub Pages

The included GitHub Actions workflow builds the static site and deploys it to GitHub Pages whenever `main` is updated. To publish it, create a GitHub repository, push this project to its `main` branch, then choose **Settings → Pages → Build and deployment → GitHub Actions**. The workflow publishes the generated `dist/` folder and also supports a manual run from the Actions tab.

To build locally, run `npm run build`. This creates a clean `dist/` folder containing only the website and its required assets. No package installation or server runtime is needed. GitHub Actions provides the Node.js runtime for deployment.

## Personal assets

- Add a portrait at `assets/images/profile.jpg` if you want the hero to use a personal photograph; the typographic monogram is the designed default.
- Replace `assets/Kuruva-Koushik-Resume.pdf` with an updated résumé when ready.
- Add authentic project screenshots to `assets/images/projects/` and verified certificate scans to `assets/images/certificates/` when available. Current project visuals are clearly presented as illustrations.

## Contact

The contact section links directly to LinkedIn and GitHub, so visitors can reach Koushik without configuring a third-party form service. Add a verified email address or configure a form provider if direct email form submissions are needed.

## Project links and claims

SpendSense links to the repository supplied in the portfolio brief. TaskFlow and Calculator have no repository or demo URLs here because none were provided. Their cards only use the brief's descriptions.

## Structure

```text
index.html
404.html
css/             style.css, responsive.css, animations.css
js/              main.js
design-system/   generated design direction
assets/images/   portrait and future project/certificate images
assets/icons/    favicon
assets/          résumé PDF
```

