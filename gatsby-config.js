module.exports = {
    siteMetadata: {
        title: `Web 3.0 Test`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/blog`,
                name: `blog`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/locales`,
                name: `locale`
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
                languages: [`en`, `fr`],
                defaultLanguage: `en`,
                generateDefaultLanguagePage: true,
                redirect: true,
                // if you are using Helmet, you must include siteUrl, and make sure you add http:https
                siteUrl: `https://example.com`,
                // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
                trailingSlash: "always",
                // you can pass any i18next options
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false // not needed for react as it escapes by default
                    },
                    keySeparator: false,
                    nsSeparator: false
                }
            }
        }
    ]
};
