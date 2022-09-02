import * as React from "react";
import { graphql } from "gatsby";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {data.allMdx.nodes.map(node => (
                <article key={node.id}>
                    <h2>
                        <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                    </h2>
                    <p>
                        <Trans>Posted:</Trans> {node.frontmatter.date}
                    </p>
                </article>
            ))}
        </Layout>
    );
};

export const query = graphql`
    query ($language: String!) {
        allMdx(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { lang: { eq: $language } } }
        ) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                    lang
                }
                id
                excerpt
            }
        }
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

export default BlogPage;
