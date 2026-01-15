import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://blackdogstudios.com",
  image: {
    domains: ["images.unsplash.com"],
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr"],
  //   fallback: {
  //     fr: "en",
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },
  prefetch: true,
  integrations: [sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en",
      },
    },
  }), starlight({
    title: "Black Dog Studios Docs",
    defaultLocale: "root",
    locales: {
      root: {
        label: "English",
        lang: "en",
      },
    },
    sidebar: [
      {
        label: "Getting Started",
        autogenerate: { directory: "guides" },
      },
      {
        label: "Products",
        items: [
          { label: "Shopify Themes", link: "products/themes/" },
          { label: "Stock Assets", link: "products/assets/" },
        ],
      },
      {
        label: "Support",
        autogenerate: { directory: "support" },
      },
    ],
    social: [
      { icon: "github", label: "GitHub", href: "https://github.com/blackdogstudios" },
    ],
    disable404Route: true,
    customCss: ["./src/assets/styles/starlight.css"],
    favicon: "/favicon.ico",
    components: {
      SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
      Head: "./src/components/ui/starlight/Head.astro",
      MobileMenuFooter: "./src/components/ui/starlight/MobileMenuFooter.astro",
      ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
    },
    head: [
      {
        tag: "meta",
        attrs: {
          property: "og:image",
          content: "https://blackdogstudios.com" + "/social.webp",
        },
      },
      {
        tag: "meta",
        attrs: {
          property: "twitter:image",
          content: "https://blackdogstudios.com" + "/social.webp",
        },
      },
    ],
  }), compressor({
    gzip: false,
    brotli: true,
  }), mdx()],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
