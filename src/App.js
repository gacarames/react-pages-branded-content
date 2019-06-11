import React from 'react';
/* import './css/style.css'; */
import './css/main.css';

/* assets */
/* import logo from './assets/icons/brand-logo.png'; */

/* components */
import NavBar from './components/shell/NavBar';
import ShareBar from './components/shell/ShareBar';
import ShareButton from './components/shell/ShareButton';
import HeaderHero from './components/section-headers/HeaderHero';
import HeaderSide from './components/section-headers/HeaderSide';
import Introduction from './components/section-intro/Introduction';
import TextBlock from './components/section-text/TextBlock';
import DisplayHeading from './components/section-text/DisplayHeading';
import Paragraph from './components/section-text/Paragraph';
import Blockquote from './components/section-text/Blockquote';
import List from './components/section-text/List';
import Link from './components/section-text/Link';
import AsideTextImage from './components/section-aside-text-image/AsideTextImage';
import Jumbotron from './components/section-jumbotron/Jumbotron';
import CardsRow from './components/section-cards/CardsRow';
import Card from './components/section-cards/Card';
import SingleImage from './components/section-media/ImageSingle';
import EmbedVideo from './components/section-media/VideoEmbed';
import ParallaxSingle from './components/section-media/ParallaxSingle';
import SliderFull from './components/section-media/SliderFull';
import FooterMega from './components/section-footers/FooterMega';
import Caption from './components/section-footers/Caption';
import RedirectLink from './components/section-footers/RedirectLink';
import FooterSmall from './components/section-footers/FooterSmall';
import Copyright from './components/shell/Copyright';



function App() {

  const list = [
    {
      id: '1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      id: '2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      id: '3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      id: '4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
  ];

  return (
    <div className="App">

      <NavBar />      

      <ShareBar>        
        <ShareButton
          shareLink="https://es-la.facebook.com/fordargentina/?rf=104434659630622"
          socialNet="facebook"

          />

        <ShareButton
          shareLink="https://twitter.com/autosfordarg?lang=es"
          socialNet="twitter"

          />
      </ShareBar>

      <HeaderSide
        image="https://ypf-agro.infobae.com/img/img-3.jpg"
        label="Lorem ipsum dolor"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    
      <HeaderHero
        image="https://clubmed.infobae.com/img/ARPC.jpg"
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />

      <Introduction
        logo={require('./assets/img/brand-logo.png')}
        date="11 de Marzo de 2019"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tenetur voluptate natus illum perferendis accusantium repudiandae reiciendis est aliquam! Nihil excepturi dolorum tempora dicta esse sapiente natus amet modi veritatis.
"

      />

      <TextBlock>

        <Paragraph
          typeParagraph="capital-letter"
          contentParagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tenetur voluptate natus illum perferendis accusantium repudiandae reiciendis est aliquam! Nihil excepturi dolorum tempora dicta esse sapiente natus amet modi veritatis.
"
        />

        <Paragraph
          contentParagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tenetur voluptate natus illum perferendis accusantium repudiandae reiciendis est aliquam! Nihil excepturi dolorum tempora dicta esse sapiente natus amet modi veritatis.
"
        />  

        <DisplayHeading
        TextAlign="center"
        contentHeading="Lorem ipsum dolor sit amet"
        />

        <Paragraph
          contentParagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tenetur voluptate natus illum perferendis accusantium repudiandae reiciendis est aliquam! Nihil excepturi dolorum tempora dicta esse sapiente natus amet modi veritatis.
"
        />

        <Link
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          link="https://www.infobae.com/"
        />

        <Paragraph
          contentParagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tenetur voluptate natus illum perferendis accusantium repudiandae reiciendis est aliquam! Nihil excepturi dolorum tempora dicta esse sapiente natus amet modi veritatis.
"
        />

        <Blockquote
          contentBlockquote="“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tenetur voluptate natus illum perferendis accusantium repudiandae reiciendis est aliquam! Nihil excepturi dolorum tempora dicta esse sapiente natus amet modi veritatis.”"
          contentCite="Santiago Tsin, gerente de Marketing de YPF."
        />

        <List list={list}/>

        </TextBlock>

        <AsideTextImage
        image="https://ypf-agro.infobae.com/img/img-3.jpg"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tenetur voluptate natus illum perferendis accusantium repudiandae reiciendis est aliquam! Nihil excepturi dolorum tempora dicta esse sapiente natus amet modi veritatis."
        />
        
        <AsideTextImage
        image="https://ypf-agro.infobae.com/img/img-3.jpg"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tenetur voluptate natus illum perferendis accusantium repudiandae reiciendis est aliquam! Nihil excepturi dolorum tempora dicta esse sapiente natus amet modi veritatis."
        side="reverse"
        />

      <Jumbotron
        parallax="https://clubmed.infobae.com/img/0FzwEeuA.jpg"
        jumboImage="https://clubmed.infobae.com/img/hFeWfoAi.jpeg"
        jumboCaption="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        captionPosition="top-left"
      />

      <CardsRow>
        <Card
          type="horizontal"
          title="Paisajes de película"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tenetur voluptate natus illum perferendis accusantium repudiandae reiciendis est aliquam!"
        />
        <Card
          type="horizontal reverse"
          title="Paisajes de película"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tenetur voluptate natus illum perferendis accusantium repudiandae reiciendis est aliquam!"
        />
      </CardsRow>

      <CardsRow>
        <Card
          type="vertical material-skin"
          title="Paisajes de película"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt"
        />
        <Card
          type="vertical material-skin"
          title="Paisajes de película"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt"
        />
        <Card
          type="vertical material-skin"
          title="Paisajes de película"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt"
        />
      </CardsRow>

      <SingleImage
        width="large"
        image="https://clubmed.infobae.com/img/ARPC.jpg"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, tenetur voluptate natus illum perferendis."
      />

      <EmbedVideo
        ratio="16-9"
        src="https://www.youtube.com/embed/EIoduZ0A3xY"
      />

      <ParallaxSingle
        image="https://clubmed.infobae.com/img/ARPC.jpg"
        height="260px"
      />

      <SliderFull/>
    
      <FooterMega
        image="https://clubmed.infobae.com/img/KgzxgQz7.jpeg"
        parallax="https://clubmed.infobae.com/img/bg-sections.jpg"
      >

        <Caption
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            position="top-left"
            sizeText="32px"
            lineHeight="36px"
            alignText="center"

        />

        <RedirectLink
          content="Lorem ipsum dolor"
          link="https://www.infobae.com/"
          position="center-right"
        />

      </FooterMega>

      <FooterSmall
        image="https://ypf-agro.infobae.com/img/ypf-agro-footer.png"
        link="https://www.infobae.com/"
        label="Lorem ipsum dolor"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />


      <Copyright
        content="Todos Los Derechos Reservados © 2019 infobae"
      />
      

    </div>
  );
}

export default App;
