import { graphql } from "gatsby"
import React from "react"
import styled from 'styled-components'
import PageInfo from "../components/PageInfo/PageInfo"
import ArticlePreview from "../components/ArticlePreview/ArticlePreview"
import slugify from 'slugify';


const pageData = {
  title: 'Aktualności',
  paragraph: `Bądź na bieżąco z aktualnościami stowarzyszenia`
}

const ArticlesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  h1 {
    padding-top: 50px;
    font-size: 30px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const BlogPage = ({ data }) => {
  const {allDatoCmsArticle: {nodes}}= data;

  return (
    <>

      <PageInfo title={pageData.title} paragraph={pageData.paragraph} /> 
        <ArticlesWrapper>
          {nodes.map(({ title, featuredImage }) => (
            <ArticlePreview key={title} title={title} image={featuredImage.fluid} slug={slugify(title, {lower: true})} />
          ))}

      </ArticlesWrapper>
    
    </> 
  )
}
   

export const query = graphql`
{
  allDatoCmsArticle {
    nodes {
      title
       featuredImage {
        fluid(maxWidth: 500) { 
          ...GatsbyDatoCmsFluid_tracedSVG
        
        }
      }
    }
  }
}
`

export default BlogPage
  