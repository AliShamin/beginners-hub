/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
 module.exports = {
    plugins: ["gatsby-plugin-react-helmet",
    {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'assets',
          path: `${__dirname}/static/`,
        },
     }],
}