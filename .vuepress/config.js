const { events } = require("./plugins/events");

module.exports = {
  title: "Vue Hyderabad",
  description: "Vue Meetup in Hyderbad, India",
  ga: "UA-150945049-1",
  plugins: [require("./plugins/events"), require("./plugins/social-cards")],
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png"
      }
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicons/favicon.ico"
      }
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#4FC08D"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "#4FC08D"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/icon-144x144.png"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#4FC08D"
      }
    ]
  ],
  serviceWorker: {
    updatePopup: true
  },
  themeConfig: {
    logo: "/logo.png",
    repo: "vuehyd/hub",
    docsDir: "/",
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        nav: [
          {
            text: "Events",
            items: [
              {
                group: "Events",
                items: [
                  ...events.slice(0, 5).map(event => ({
                    text: `#${event.id} ${event.title}`,
                    link: event.link
                  })),
                  {
                    text: "All events",
                    link: "/events"
                  }
                ]
              }
            ]
          },
          {
            text: "Propose a Talk",
            link: "http://bit.ly/vue-hyd-cfp"
          },
          {
            text: "Code of Conduct",
            link: "https://github.com/vuehyd/hub/blob/master/CODE_OF_CONDUCT.md"
          },
          {
            text: "Join Us",
            items: [
              {
                text: "Twitter",
                link: "https://twitter.com/vuehyd"
              },
              {
                text: "Meetup",
                link: "https://www.meetup.com/vue-hyderabad/"
              },
              {
                text: "Facebook Page",
                link: "https://www.facebook.com/vuehyd"
              },
              {
                text: "Facebook Group",
                link: "https://www.facebook.com/groups/vuehyd"
              }
            ]
          }
        ]
      }
    }
  }
};
