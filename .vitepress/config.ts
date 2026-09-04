import { defineConfig } from "vitepress";

export default defineConfig({
  srcDir: "./docs",
  title: "Dix",
  description: "Dix - Dependency Injection for Go",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/guides/getting-started" },
      { text: "Github", link: "https://github.com/smtdfc/dix" },
    ],

    sidebar: {
      "/guides/": [
        {
          text: "Hướng dẫn bắt đầu",
          collapsed: false,
          items: [
            { text: "Bắt đầu", link: "/guides/getting-started" },
            { text: "Cài đặt", link: "/guides/installation" },
            { text: "Annotations", link: "/guides/annotations" },
            { text: "Singleton", link: "/guides/singleton" },
            { text: "Lỗi thường gặp", link: "/guides/common-errors" },
            { text: "Build and Run", link: "/guides/build" },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026-present smtdfc",
    },

    socialLinks: [{ icon: "github", link: "https://github.com/smtdfc/dix" }],
  },
});
