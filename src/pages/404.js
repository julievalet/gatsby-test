import * as React from "react";
import { graphql } from "gatsby";
import { Link, Trans } from "gatsby-plugin-react-i18next";

const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320
};

const paragraphStyles = {
    marginBottom: 48
};
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4
};

const NotFoundPage = () => {
    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>
                <Trans>Page not found</Trans>
            </h1>
            <p style={paragraphStyles}>
                <Trans>Sorry 😔, we couldn't find what you were looking for.</Trans>
                <br />
                {process.env.NODE_ENV === "development" ? (
                    <>
                        <br />
                        <Trans>Try creating a page in</Trans> <code style={codeStyles}>src/pages/</code>.
                        <br />
                    </>
                ) : null}
                <br />
                <Link to="/">
                    <Trans>Go home</Trans>
                </Link>
                .
            </p>
        </main>
    );
};

export default NotFoundPage;

export const Head = () => <Trans>Page not found</Trans>;

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
