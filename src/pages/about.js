// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
// Step 2: Define your component
const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <Layout pageTitle={t("About Me")}>
            <p>
                <Trans>Hi there! I'm the proud creator of this site, which I built with Gatsby.</Trans>
            </p>
        </Layout>
    );
};

// Step 3: Export your component
export default AboutPage;

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
