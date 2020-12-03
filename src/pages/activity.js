import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, Link } from "gatsby"
import Button from "../components/Button/Button";
import PersonWrapper from "../components/PersonWrapper/PersonWrapper"
import statutSbt from '../assets/documents/sbt-statut.pdf' 
import statutSbt2 from '../assets/documents/play-poswiadczenie-17-06-2016_(SBT--p93).pdf' 

const ArticleContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  flex-direction: row;
  margin-top: 45px;
  margin-bottom: 45px;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const ArticlesWrapper = styled.div`
  width: 65%;
  z-index: 2;

  .headline-1 {
    font-size: 50px;
  }

  .headline-2 {
    font-size: 45px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
  
`

const UnorderedList = styled.ul`
  width: 80%;
  padding-right: 15px;
  margin-left: 30px;

  li {
    padding: 5px;
  }
`

const StyledImage = styled(Image)`
  width: 35%;
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`
 
const ButtonLink = styled(Link) `
  color: white;
  
`

function Welcome(props) {
  return <h1>Cześć, {props.name}</h1>;
}



const ActivityPage = ({ data }) => (
  <>
    <ArticleContent>
      <ArticlesWrapper>
      <h2 className="headline-2">Referencje</h2>
        <SuperiorsWrapper>
        
          <PersonWrapper title="Doradztwo" 
          details="Tutaj miejse na interesujące detale dotyczące doradztwa albo linki z dokumentami do pobrania
          "/>

          <PersonWrapper title="Nadzory" details={[<a className="downloadLink" href={statutSbt}> Statut SBT </a>]}/>

          <PersonWrapper title="Szkolenia"  details="Tutaj miejse na interesujące detale dotyczące doradztwa albo linki z dokumentami do pobrania"/>

        </SuperiorsWrapper>

        <br></br>
        <br></br>
        <br></br>

          <h2 className="headline-2">Rekomendacje</h2>
            <UnorderedList>
                <li><a className="downloadLink" href={statutSbt2}>Regulamin przyznawania Rekomendacji SBT</a></li>
                <li><a className="downloadLink" href={statutSbt2}>Statute of SBT Recommendation Granting</a></li>
                <li><a className="downloadLink" href={statutSbt2}>Załącznik nr. 1 - Regulamin prac Komisji ds. Rekomendacji SBT</a></li>
                <li><a className="downloadLink" href={statutSbt2}>Annex no. 1 - Commission Work Statute on SBT Recommendation Granting</a></li>
                <li><a className="downloadLink" href={statutSbt2}>Załącznik nr. 2 - Wzór wniosku o udzielenie rekomendacji/Application form</a></li>
                <li><a className="downloadLink" href={statutSbt2}>Załącznik nr. 3 - Wzór dyplomu i znaku Rekomendacji SBT/Forms of the diploma and the mark pattern</a></li>
                <li><a className="downloadLink" href={statutSbt2}>Załącznik nr. 4 - Cennik opłat/Price list</a></li>
                <li><a className="downloadLink" href={statutSbt2}>Komisja ds. Rekomendacji SBT</a></li>
            </UnorderedList>

        

      </ArticlesWrapper>

      <StyledImage fluid={data.file.childImageSharp.fluid} />
    </ArticleContent>
  </>
)

export const query = graphql`
  {
    file(name: { eq: "telekomunikacja4" }) {
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

export default ActivityPage
