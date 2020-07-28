/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, pageHeaderText, showPageHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {showPageHeader && (
        <div className="boxed-layout-header page-header header-small">
          <div className="container">
            <div className="row"><div className="col-md-10 col-md-offset-1 text-center">
              <h1 className="hestia-title">{pageHeaderText}</h1>
            </div></div>
          </div>
          <div className="header-title header-title-gradient"></div>
        </div>
      )}
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main className="main-raised">
          <div className="blog-post">
            <div className="container" style={{padding: 40}}>{children}</div>
          </div>
        </main>
      </div>
      <footer className="footer footer-black footer-big">
        <div className="container-fluid">
          <ul className="footer-menu list-inline">
            <li className="list-inline-item"><Link to={"/contact"}>CONTACT</Link></li>
            <li className="list-inline-item"><Link to={"/privacy-policy"}>PRIVACY POLICY</Link></li>
            <li className="list-inline-item"><Link to={"/terms-and-conditions"}>TERMS AND CONDITIONS</Link></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showPageHeader: PropTypes.bool,
  pageHeaderText: PropTypes.string
}

Layout.defaultProps = {
  showPageHeader: true
}

export default Layout
