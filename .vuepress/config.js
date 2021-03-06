module.exports = {
  // title: 'Laravel Nova',
  description: "Master Your Universe",
  base: "/docs/",

  head: [
    [
      "link",
      {
        href:
          "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i",
        rel: "stylesheet",
        type: "text/css"
      }
    ],
    [
      "meta",
      {
        name: "docsearch:version",
        content: "2.0.0"
      }
    ]
  ],

  themeConfig: {
    logo: "/assets/img/logo.svg",
    displayAllHeaders: true,
    sidebarDepth: 2,

    nav: [
      { text: "Home", link: "https://nova.laravel.com" },
      {
        text: "Version",
        link: "/",
        items: [{ text: "1.0", link: "/1.0/" }, { text: "2.0", link: "/2.0/" }]
      }
    ],

    sidebar: {
      "/1.0/": require("./1.0"),
      "/2.0/": require("./2.0")
    }
  }
};
