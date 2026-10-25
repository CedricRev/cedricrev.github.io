# cedricrev.github.io

My personal website, built with [Astro](https://astro.build), Tailwind CSS and
[Starwind UI](https://starwind.dev), and deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check and build to dist/
npm run preview  # serve the built site
```

## Configuration

Set these as repository variables (Settings → Secrets and variables → Actions → Variables):

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Public URL. Defaults to `https://cedricrev.github.io`. Set it when moving to a custom domain. |
| `PUBLIC_GOATCOUNTER_CODE` | GoatCounter site code. Analytics are off when empty. |

For a custom domain, also add a `public/CNAME` file containing the domain.

## License

Code is MIT licensed. Written content (blog posts, CV, bio) is © Cedric Revestir, all rights reserved.
