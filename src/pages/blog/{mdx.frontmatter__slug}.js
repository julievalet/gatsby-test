import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";
import Layout from "../../components/layout";

const BlogPost = ({ data, children }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
            <p>
                <Trans>Photo Credit:</Trans>{" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>{data.mdx.frontmatter.hero_image_credit_text}</a>
            </p>
            {children}
        </Layout>
    );
};

export const query = graphql`
    query ($id: String, $language: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
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

export default BlogPost;
