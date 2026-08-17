/**
 * Main theme configuration.
 *
 * `url` is the deployment origin. For GitHub Pages project sites, keep the
 * repository name in `basePath` (for example `/my-blog`). Use `/` for custom
 * domains and `<username>.github.io` repositories.
 */
export const SITE = {
  title: "Ilya Chang's Blog",
  description: "Ilya Chang 的个人博客，记录技术探索、工程实践与日常思考。",
  author: "Ilya Chang",
  language: "zh-CN",
  locale: "zh-CN",
  url: "https://github.com/Abossss/Ilya-s-Blog",
  basePath: "/",
  brand: {
    name: "Ilya Chang",
    accent: "Blog",
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/Abossss/Ilya-s-Blog",
    },
    {
      label: "RSS",
      href: "/rss.xml",
    },
  ],
  storagePrefix: "astro-bento-blog",
  features: {
    transitions: true,
  },
} as const;

export const GENERATE_SLUG_FROM_TITLE = true;

// Named exports keep imports concise throughout the theme.
export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.description;
export const TRANSITION_API = SITE.features.transitions;
