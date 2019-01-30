module.exports = {
    siteMetadata: {
        title: 'Gatsby Yakker App',
    },
    plugins: [
    {
     resolve: `gatsby-plugin-typography`,
     options: {
       pathToConfigModule: `src/utils/typography`,
      }
    }
    ],
}