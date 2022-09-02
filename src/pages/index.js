import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = () => {
    const { t } = useTranslation();
    return (
        <Layout pageTitle={t("Home Page")}>
            <p>
                <Trans>I'm making this by following the Gatsby Tutorial.</Trans>
            </p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/logo-rental-compact-en.png"
            />
        </Layout>
    );
};

export default IndexPage;

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
