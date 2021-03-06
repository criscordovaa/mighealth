import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"


const TermConditionPage = () => {
  const data = useStaticQuery(graphql`
    query {
      wpcontent{
        page(id: "cG9zdDoxMw=="){
          title,
          content
        }
      }
    }
  `);
  const {title, content} = data.wpcontent.page;
  return (
    <Layout pageHeaderText={title}>
      <Seo title={title}/>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </Layout>
  )
}

export default TermConditionPage
