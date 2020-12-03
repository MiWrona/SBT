import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"

const ArticleContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 45px;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 30px;
  }
  
  .headline-1 {
    font-size: 50px;
  } 

`

const ArticlesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  flex-direction: row;
  width: 70%;

  h1 {
    padding-top: 40px;
    font-size: 30px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

`

const UnorderedList = styled.ul`
  width: 70%;
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

const AboutPage = ({ data }) => (
  <>
    <ArticleContent>
      <ArticlesWrapper>
        <h1 className="headline-1">O stowarzyszeniu </h1>

        <p>
          Stowarzyszenie Budowniczych Telekomunikacji (SBT) jest organizacją
          ogólnopolską, działającą od 1996r., skupiającą firmy i
          ekspertów-praktyków szeroko pojętej branży telekomunikacyjnej. Przez
          ponad 20 lat prowadzonej działalności, SBT wypracowało sobie znaczącą
          pozycję w środowisku telekomunikacyjnym, szczególnie w zakresie
          organizacji i zarządzania procesami budowlanymi infrastruktury
          telekomunikacyjnej. SBT jest merytorycznym partnerem dla Ministerstwa
          Cyfryzacji, Urzędu Komunikacji Elektronicznej, komisji sejmowych RP,
          jednostek nauki i szkolnictwa wyższego, administracji, organizacji
          pozarządowych (branżowych stowarzyszeń i izb gospodarczych),
          operatorów telekomunikacyjnych oraz firm usługowo – produkcyjno –
          wykonawczych branży telekomunikacyjnej. W ramach prowadzonej przez nas
          działalności gospodarczej zapewniamy doradztwo, projekty i usługi
          doradcze w szeroko pojmowanej dziedzinie telekomunikacyjnej m.in.:
        </p>

        <UnorderedList>
          <li>
            organizowanie i zarządzanie procesem inwestycyjnym, w tym
            wykonywanie samodzielnych funkcji na budowie: projektanta,
            kierownika budowy/robót, wielobranżowego inspektora nadzoru
            inwestorskiego, rzeczoznawcy,
          </li>
          <li>
            opracowywanie dokumentacji technicznej obiektów i urządzeń
            budownictwa telekomunikacyjnego,
          </li>

          <li>
            wykonywanie ekspertyz i opinii stanu technicznego budowli oraz
            sieci, systemów i instalacji telekomunikacyjnych, w tym: w zakresie
            wymagań kompatybilności elektromagnetycznej PEM, w zakresie IMEI tj.
            szkodliwych zakłóceń EM w technologiach GSM, LTE, 5G,
          </li>

          <li>
            doradztwo przedsiębiorcom telekomunikacyjnym w zakresie organizacji
            i prowadzenia budowy infrastruktury telekomunikacyjnej, zgodnie z
            obowiązującymi przepisami prawa i aktualnymi wymaganiami
            techniczno-eksploatacyjnymi,
          </li>

          <li>
            przeprowadzanie przeglądów technicznych budowli oraz sieci i
            systemów telekomunikacyjnych, a także szkolenia i podnoszenia
            kwalifikacji zawodowych w ww. zakresie,
          </li>

          <li> wycena sieci i zasobów przedsiębiorstw telekomunikacyjnych,</li>

          <li>
            prowadzenie doradztwa w zakresie określania wymagań i standardów
            kwalifikacji zawodowych w branży telekomunikacyjnej (-
            przygotowywanie opisów kwalifikacji rynkowych w celu włączenia ich
            do Zintegrowanego Systemu Kwalifikacji (ZSK), określanie i opis
            kompetencji zawodowych oraz wymagań na stanowiskach pracy dla celów
            rekrutacji nowych pracowników prowadzonych przez komórki HR
            przedsiębiorstw telekomunikacyjnych). Prowadzimy także szkolenia i
            warsztaty nt. aktualnie obowiązujących przepisów i ich stosowania w
            budownictwie i telekomunikacji, w zakresie infrastruktury, usług i
            wyrobów, w tym wykorzystujących współfinansowanie UE. Na kursach
            omawiamy wykładnie praktyczne i interpretacje tych przepisów w
            aktualnym orzecznictwie administracyjnym. Bloki tematyczne szkoleń
            dotyczą m.in.:
          </li>

          <li>
            zasad i przepisów budownictwa ogólnego i telekomunikacyjnego w
            zakresie projektów, budowy, eksploatacji i utrzymania obiektów
            telekomunikacyjnych, w tym prowadzenia i zarządzania całym procesem
            inwestycyjnym budowy infrastruktury telekomunikacyjnej, obejmującym:
            projektowanie i budowę, dostęp do infrastruktury technicznej
            operatorów w celu współkorzystania, uzyskiwanie prawa drogi i
            dysponowania nieruchomościami na cele budowlane, a także zarządzanie
            telekomunikacyjnymi obiektami budowlanymi,
          </li>

          <li>
            wymagań uzyskania i wykonywania samodzielnych funkcji na budowie:
            projektanta, kierownika budowy, inspektora nadzoru inwestorskiego w
            telekomunikacji,
          </li>

          <li> zasad BHP przy budowie obiektów telekomunikacyjnych,</li>

          <li>
            ochrony i bezpieczeństwa danych, w tym w zakresie celowych zakłóceń
            elektromagnetycznych (IEMI),
          </li>

          <li>
            wymagań na wyroby budowlane oraz urządzenia telekomunikacyjne i
            sprzęt elektryczno-elektroniczny stosowany w obiektach
            telekomunikacyjnych (certyfikaty, deklaracje zgodności, aprobaty i
            badania laboratoryjne),
          </li>

          <li>
            wymagań na aparaturę, instalacje w zakresie spełniania przepisów i
            norm o kompatybilności elektromagnetycznej PEM,
          </li>

          <li>
            wymagań technicznych, dokumentacji, pomiarów i testów sieci
            szerokopasmowej, badań jakości usług QoS, QoE w technologii GSM,
            LTE, 5G.
          </li>
        </UnorderedList>
        <p>
          Prowadzone przez nas szkolenia i warsztaty mają na celu właściwe
          przygotowanie jego uczestników (firm wykonawczych, dostawców usług,
          przedsiębiorców i operatorów telekomunikacyjnych oraz ich pracowników)
          do wykonywania praktycznej działalności na krajowym i europejskim
          rynku telekomunikacyjnym, a szczególnie w kontekście dostosowania
          rynku usług, wyrobów i budowy infrastruktury telekomunikacyjnej do
          wzrastającej konkurencji na rynku UE. Tematyka szkoleń i warsztatów
          obejmuje zasadnicze cele działalności telekomunikacyjnej
          operatora/inwestora, a ich interaktywna forma umożliwia praktyczne
          przyswajanie przedmiotowych zasad i prawidłowe stosowanie przepisów
          prawa. Szkolenia i warsztaty prowadzone są przez wysokiej klasy
          specjalistów i ekspertów zarówno z wiedzą z zakresu prawa budowlanego
          i telekomunikacyjnego, jak i stosowania przepisów tego prawa w
          bieżących działaniach administracji (regulatora rynku
          telekomunikacyjnego, sądów administracyjnych, samorządów, organów
          architektoniczno-budowlanych, itp.). Istnieje możliwość dostosowania
          zakresu i tematyki szkolenia do indywidualnych potrzeb zamawiającego
          szkolenie. Efektem prowadzonej przez nas działalności, są również
          uwagi i wnioski na temat istotnych problemów stosowania prawa w
          codziennej praktyce budowy infrastruktury telekomunikacyjnej.
          Przekazywane są one zarówno do innych podmiotów środowiska
          telekomunikacyjnego – stowarzyszeń i izb branżowych, jak również
          urzędów administracji państwowej i samorządowej, zajmujących się
          projektami legislacyjnymi prawa polskiego, harmonizującymi prawo UE na
          gruncie krajowym, w zakresie działalności budowlanej i
          telekomunikacyjnej.
        </p>

        <h3>HISTORIA STOWARZYSZENIA</h3>
        <br />
        <p>
          Stowarzyszenie Budowniczych Telekomunikacji powstało w wyniku działań
          Grupy Inicjatywnej, w skład której weszło 26 osób głównie pracowników
          Państwowej Inspekcji Telekomunikacyjnej i Pocztowej. Bezpośrednią
          przyczyną takiego pomysłu było tworzenie się dużego grona specjalistów
          zainteresowanych uprawnieniami budowlanymi w telekomunikacji, którzy w
          sposób entuzjastyczny poparli potrzebę istnienia takiego forum. Na
          zebraniu Grupy Inicjatywnej w dniu 17 września 1996 r. wybrano nazwę
          Stowarzyszenia, opracowano projekt statutu i postanowiono podjąć
          czynności związane z rejestracją. W dniu 2 lutego 1997 r.
          Stowarzyszenie Budowniczych Telekomunikacji zostało zarejestrowane
          przez Sąd Wojewódzki w Warszawie VII Wydział Cywilny i Rejestrowy i
          wpisane do rejestru Stowarzyszeń w dziale A pod poz. RST-3026. W
          czasie I Walnego Zebrania SBT, które odbyło się w dniu 22 maja 1997r.,
          wzięło udział 26 Członków Założycieli.
        </p>
        <p>
          Wybrano władze SBT w składzie: - Kol.Władysław Grabowski - Prezes -
          Kol.Jan Bajorek - Wiceprezes - Kol.Andrzej Król - Sekretarz -
          Kol.Barbara Wichrowska - Skarbnik - Kol.Jan Suchodolski - Członek.
        </p>
        <br />
        <h3>CELE DZIAŁALNOŚCI STOWARZYSZENIA</h3>
        <br />
        <UnorderedList>
          <li>
            dążenie do profesjonalnej obsługi rynku budownictwa
            telekomunikacyjnego oraz jego infrastruktury technicznej,
          </li>
          <li>doskonalenie zawodowe członków,</li>
          <li>wyrażanie dążeń i interesów członków,</li>
          <li>dbałość o nienaganny poziom etyczny członków,</li>
          <li>
            reprezentowanie potrzeb środowiska wobec władz państwowych,
            samorządowych, gospodarczych i organizacji społecznych,
          </li>
          <li>działalność naukowo-techniczna,</li>
          <li>działalność oświatowa,</li>
          <li>
            wspieranie inicjatyw społecznych na rzecz budowy sieci
            telekomunikacyjnej na wsi.
          </li>
        </UnorderedList>

        <br />
        <h3>STOWARZYSZENIE REALIZUJE CELE PRZEZ</h3>
        <br />
        <UnorderedList>
          <li>
            wszechstronne propagowanie metod i technik stosowanych w
            budownictwie telekomunikacyjnym,
          </li>
          <li> współpracę i wzajemną pomoc członków Stowarzyszenia,</li>
          <li>
            współpracę z osobami fizycznymi, firmami i instytucjami związanymi z
            telekomunikacją i uczestniczącymi w budownictwie telekomunikacyjnym,
          </li>
          <li>
            propagowanie zasad dobrej roboty poprzez publikacje, wydawnictwa,
            kształcenie i szkolenie,
          </li>
          <li>
            doradztwo i wszelką możliwą pomoc oraz szkolenie członków i innych
            podmiotów zainteresowanych działalnością Stowarzyszenia, w tym
            prowadzenie różnej działalności integrującej członków Stowarzyszenia
            - działalności kulturalnej , rekreacyjnej i towarzyskiej.
          </li>
        </UnorderedList>
      </ArticlesWrapper>

      <StyledImage fluid={data.file.childImageSharp.fluid} />
    </ArticleContent>
  </>
)

export const query = graphql`
  {
    file(name: { eq: "telekomunikacja1" }) {
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

export default AboutPage
