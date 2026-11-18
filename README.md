# RepX Multi-page QA Demo

A static six-page demo website for testing RepX launcher behavior across internal navigation, page lengths, refreshes, and browser sessions.

## Configure your agent

Edit `config.js`:

```js
window.REPX_SHARE_ID = "ayyefeuvsuln";
```

Replace the value with your own RepX Share ID. The shared `repx-loader.js` reads this value and loads:

`https://js.storylane.io/js/dev/repx.js?data-id=YOUR_SHARE_ID`

All six pages include the same loader:
- `index.html` — Home (medium/long)
- `products.html` — Products (medium)
- `features.html` — Features (medium)
- `pricing.html` — Pricing (short)
- `contact.html` — Contact form (short)
- `dashboard.html` — Dashboard (long)

## Run locally

You can open `index.html` directly, but a local static server is recommended. For example, from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. In repository Settings → Pages, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then Save.
5. Open the published Pages URL.

## QA notes

- The form is a local demo only; it does not submit data.
- This site loads the RepX Dev script from Storylane's hosted URL.
- Verify the deployed domain is trusted/allowed for your RepX agent if the launcher does not load.
- This demo does not change RepX session logic; it provides multiple pages to exercise it.
- Each page is a separate HTML document, so observe whether the product preserves session-level state across full page navigations as intended.
