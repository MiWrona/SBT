import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, Link } from "gatsby"
import Button from "../components/Button/Button";

const ArticleContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  flex-direction: row;
  margin-top: 45px;
  margin-bottom: 45px;
`

const ArticlesWrapper = styled.div`
 
  width: 70%;
`

const UnorderedList = styled.ul`
  width: 80%;
  padding-right: 15px;
  margin-left: 30px;
`

const StyledImage = styled(Image)`
  width: 29%;
  top: 0;
  height: 100vh;
  object-fit: cover;
  object-position: 80% 50%;
  position: fixed !important;
  right: 0;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    opacity: 0.15;
  }
`

const SuperiorsWrapper = styled.div`
  width: 70%;

  h1 {
    color: red;
    display: inline;
  }

  p {
    display: block;
  }
`

const PersonWrapper = styled.div`
  width: 33%;
  display: inline-block;


  p {
    font-size: 18px;
  }

  h2 {
    text-decoration: underline;
  }
`
 
const ButtonLink = styled(Link) `
  color: white;
`

const ContactPage = ({ data }) => (
  <>
    <ArticleContent>
      <ArticlesWrapper>
      <h1 class="headline-1">Kontakt</h1> 
      <br/>
        <SuperiorsWrapper>

        <h3>Stowarzyszenie Budowniczych Telekomunikacji</h3>
          <p>00-819 Warszawa</p> 
          <p> ul. Złota 61 lok. 100</p>

          <p>email: sbt@sbt.org.pl</p>

          <p>tel.: 22 813 65 08</p>


          <p>NIP: 521 26 52 365</p>      
          <p>Regon: 012744010</p>
          <p>Nr konta: 89 2530 0008 2059 1068 0484 0001</p>
          <p>KRS: 000220589</p>
        

        </SuperiorsWrapper>

       

        

      </ArticlesWrapper>

      <StyledImage fluid={data.file.childImageSharp.fluid} />
    </ArticleContent>
  </>
)

export const query = graphql`
  {
    file(name: { eq: "telekomunikacja6" }) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 1200
          quality: 90
          duotone: { highlight: "#ffffff", shadow: "#192550", opacity: 50 }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
