module.exports = {
  base: '/blog/',
  title: 'rico的博客',
  description: '专注于前端的学习',
  themeConfig: {
    // sidebar: 'auto',
    // sidebarDepth: 1,
    sidebar: {
      // "/node/": [
      //   ["", "node目录"],
      //   ["path", "作为前端也需要知道的路径知识"],
      //   ["stream", "node核心模块-stream"]
      // ],
      "/node/": [
        ["", "前端"],
        {
          title: "css",
          name: "css",
          collabsable: false,
          children: [
            ["css/", "目录"],
            ['css/1', "css常考面试题"]
          ]
        }
      ]
    },

    nav: [{ text: "主页", link: "/" },
    { text: "node", link: "/node/" },
    {
      text: "前端",
      items: [
        { text: "html", link: "/web/html/" },
        { text: "css", link: "/web/css/" },
      ]
    },
    { text: "数据库", link: "/database/" },
    { text: "android", link: "/android/" },
    { text: "面试问题", link: "/interview/" }
    ],
  },
  plugins: ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true
  }],
  head: [
    // ['link', { rel: 'icon', href: `/favicon.ico` }],
    //增加manifest.json
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],



}
