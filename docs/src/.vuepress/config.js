const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "C++ Review Dune",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "cpp-review-dune/cpp-review-dune.github.io",
    editLinks: false,
    docsDir: "docs",
    editLinkText: "Edita esta página en GitHub",
    lastUpdated: false,
    navbar: [
      {
        text: "Tutoriales",
        link: "/tutorial/",
      },
      {
        text: "Vídeos 📹",
        link: "/videos/",
      },
      {
        text: "Blog 🗒️",
        link: "/blog/",
      },
      {
        text: "Enlaces de interés",
        children: [
          {
            text: "Grupo de Telegram",
            link: "https://t.me/joinchat/OsfYP1xnFlxjN2Ix",
          },
          {
            text: "DUNE/PDELab Course Material",
            link: "https://dune-pdelab-course.readthedocs.io",
          },
          {
            text: "Standard C++",
            link: "https://isocpp.org",
          },
          {
            text: "Numerical Simulation of Transport Processes in Porous Media",
            link: "https://conan.iwr.uni-heidelberg.de/old-site/teaching/numpormed_ws2009",
          },
        ],
      },
    ],
    sidebar: {
      "/tutorial/": [
        {
          title: "Tutoriales",
          collapsable: false,
          children: ["dune", "hdnum", "using-gitpod", "visualizer"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@renovamen/vuepress-plugin-katex",
    // {
    //   delimiters: "dollars",
    // },
  ],
};
