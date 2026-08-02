# Static export for cPanel

Download **`venifysite-cpanel.zip`**, extract it, and upload all files into your hosting `public_html` folder.

## Rebuild locally

```bash
npm install
npm run build:static
cd out && zip -r ../export/venifysite-cpanel.zip . -x "*.txt"
```
