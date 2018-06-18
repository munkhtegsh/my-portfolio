module.exports = {
  proxy: {
    prefix: "/api",
    url: "http://localhost:4001"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    `gatsby-plugin-styled-components`
  ],
};