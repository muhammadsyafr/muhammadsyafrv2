module.exports = {
  siteMetadata: {
    title: `Muhammad Syafrizal`,
    name: `Syafrizal`,
    siteUrl: `http://localhost:8000`,
    description: ``,
    hero: {
      heading: `It’s a nice to meet you here 👋`,
      headingBlog: `Beberapa tulisan yang mungkin menarik untuk dibaca.`,
      maxWidth: 652,
    },
    siteImg: `https://syafrizal.netlify.app/static/5bb3c2f4f3f22057ad8d196fa9bb7329/a2f5d/saprol.png`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/blog",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/syafrizal.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
