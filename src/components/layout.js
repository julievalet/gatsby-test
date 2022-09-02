import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import { container, heading, navLinks, navLinkItem, navLinkText } from "./layout.module.css";
import Header from "./header";

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <div className={container}>
            <title>
                {pageTitle} | {data.site.siteMetadata.title}
            </title>
            <Header siteTitle={data.site.siteMetadata.title} />
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            <Trans>Home</Trans>
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            <Trans>About</Trans>
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            <Trans>Blog</Trans>
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;
