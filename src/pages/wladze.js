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
  margin-top: 10px;
  margin-bottom: 45px;
  margin-top: 80px;
`

const ArticlesWrapper = styled.div`
 
  width: 70%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const UnorderedList = styled.ul`
  width: 70%;
  padding-right: 15px;
  margin-left: 30px;

  @media (max-width: 1024px) {
    width: 80%;
  }
  
  li {
    padding: 10px;
  }
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  
  h1 {
    color: red;
    display: inline-block;
  }

  @media (max-width: 1024px) {
    width: 100%;
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
  @media (max-width: 540px) {
    width: 100%;
  }

`
 
const ButtonLink = styled(Link) `
  color: white;
`

const SuperiorsPage = ({ data }) => (
  <>
    <ArticleContent>
      <ArticlesWrapper>
      <h1 className="headline-1">Władze </h1> 
        <SuperiorsWrapper>
        
          <PersonWrapper>
          <h2>Prezes</h2>
          <p> Łukasz Grabowski</p>
          </PersonWrapper>
<br/>
          <PersonWrapper className="ceo">
          <h2>Wiceprezes</h2>
          <p>Piotr Zychowicz</p>
          </PersonWrapper>
          <PersonWrapper>
          <h2>Wiceprezes</h2>
          <p> Tomasz Bathelt</p>
          </PersonWrapper>
          <PersonWrapper>
          <h2>Sekretarz</h2>
          <p>Joanna Strzelecka</p>
          </PersonWrapper>
          <PersonWrapper>
          <h2>Skarbnik</h2>
          <p>Zbigniew Wasilewski</p>
          </PersonWrapper>
          <PersonWrapper>
 
            <h2>Członkowie:</h2>
 
    <p>Bartosz Wróbel</p>

    <p>Katarzyna Kuna</p>
  
    <p>Zbigniew Kielech</p>

   </PersonWrapper>

        </SuperiorsWrapper>
        
          

 

        <h3>Podstawą działalności SBT są następujące dokumenty:</h3>
        <UnorderedList>
          
          

        <li>Ustawa z dnia 7 kwietnia 1989 Prawo o Stowarzyszeniach (tekst jednolity Dz.U. 2019 poz. 713) </li>

        <li>Statut Stowarzyszenia Budowniczych Telekomunikacji uchwalony w obowiązującej wersji przez XIV Krajowe Zebranie Delegatów SBT w dniu 16 października 2010 roku </li>


        <li>Regulamin wyboru delegatów na Krajowe Zebranie Delegatów SBT </li>

        <li>Ramowy regulamin powoływania i działania Oddziału Stowarzyszenia Budowniczych Telekomunikacji </li>

        <li>Regulamin Zarządu Krajowego Stowarzyszenia Budowniczych Telekomunikacji </li>

        <li>Regulamin Ośrodka Szkoleniowego SBT </li>


        <li>Regulamin Izby Rzeczoznawców Budowlanych w Telekomunikacji przy Stowarzyszeniu Budowniczych Telekomunikacji </li>

        <li>Regulamin przyznawania rekomendacji Stowarzyszenia Budowniczych Telekomunikacji </li>

        <li>Regulamin prac Komisji ds. Rekomendacji SBT </li>

        <li>Regulamin przyjmowania członków zwyczajnych </li>

        <li>Regulamin nadawania godności członka honorowego </li>
        </UnorderedList>
         

        <Button>
          <ButtonLink to="/about"> 
            Statut stowarzyszenia
          </ButtonLink>
        </Button>
      </ArticlesWrapper>

      <StyledImage fluid={data.file.childImageSharp.fluid} />
    </ArticleContent>
  </>
)

export const query = graphql`
  {
    file(name: { eq: "telekomunikacja8" }) {
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

export default SuperiorsPage
