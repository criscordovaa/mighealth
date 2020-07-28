import React from "react"
import { useStaticQuery, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query{
      wpcontent {
        posts(first: 10) {
          nodes {
            title
            content
            date
            uri
            link
            id
            featuredImage{
              node{
                sourceUrl,
                title
              }
            }
          }
        }
      }
    }
  `)

  const { nodes } = data.wpcontent.posts
  return (
    <Layout>
      <SEO title="Home"/>
      {nodes.map((node) => {
        const {title, date, uri, link, id, content, featuredImage} = node;
        return (
          <div className="row mt-4">
            <div className="col-md-6">
              <a href={link}><img src={featuredImage.node.sourceUrl} title={featuredImage.node.title.toUpperCase()} alt={featuredImage.node.title}/></a>
            </div>
            <div className="col-md-6">
              <a href={link}><h2 className="post-title">{title}</h2></a>
              <div className="content-post" dangerouslySetInnerHTML={{ __html: content}}></div>
            </div>
          </div>
        );
      })}
    </Layout>
  )
}

export default IndexPage
