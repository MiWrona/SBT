import React from "react"
import styled from "styled-components";
import Button from "../components/Button/Button";
import Image from "gatsby-image";
import { graphql } from "gatsby"
import Post from "../components/Post/Post";
import { Link } from 'gatsby'; 

const ContentWrapper = styled.div `
  width: 65%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;


  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 30px;
  }

  h1 {
    font-size: 70px;
    margin: 0
    width: 60%;
    line-height: 0.9;

    @media (max-width: 990px) {
      font-size: 55px;
    }


    @media (max-width: 1024px) {
      font-size: 65px;
      width: 100%;
    }

    @media (max-width: 500px) {
      font-size: 30px;
    }
  }

  p {
    margin: 20px 0 20px;
    width: 40%;

    @media (max-width: 1024px) {
      width: 100%;
    }

  }

`

const StyledImage = styled(Image) `
  position: fixed !important;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  object-fit: cover;
  object-position: 80% 50%;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    opacity: 0.15;
  }
`
 
const ButtonLink = styled(Link) `
  color: white;
`
 
 
 

const IndexPage = ({data}) => (
  <>
  <ContentWrapper>

    <Post />
    <h1>Stowarzyszenie Budowniczych Telekomunikacji</h1>
 
    <p> Stowarzyszenie Budowniczych Telekomunikacji (SBT) jest organizacją ogólnopolską, działającą od 1996r., 
        skupiającą firmy i ekspertów-praktyków szeroko pojętej branży telekomunikacyjnej.
        Przez ponad 20 lat prowadzonej działalności, SBT wypracowało sobie  znaczącą  pozycję w środowisku telekomunikacyjnym, 
        szczególnie w zakresie organizacji i zarządzania procesami budowlanymi infrastruktury telekomunikacyjnej
    </p>

    <Button>
      <ButtonLink to="/about"> 
        Dowiedz się więcej
      </ButtonLink>
    </Button>

  </ContentWrapper>  
  
    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </> 
)

export const query = graphql`
  {
    file(name: {eq: "tower"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90, duotone: {highlight: "#ffffff", shadow: "#192550", opacity:50}) {
          ...GatsbyImageSharpFluid_tracedSVG 
        }
      }
    }
  }
`

export default IndexPage
 
