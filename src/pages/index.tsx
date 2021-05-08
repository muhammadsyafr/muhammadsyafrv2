import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";

import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

import heroimg from "../assets/heroimg.png";
import content1 from "../assets/content1.png";
import content2 from "../assets/content2.png";
import content3 from "../assets/content3.png";
import rocket from "../assets/rocket-right.png";

const authorQuery = graphql`
  {
    site: allSite {
      edges {
        node {
          siteMetadata {
            name
            siteImg
            title
            description
            hero {
              heading
              maxWidth
            }
          }
        }
      }
    }
  }
`;

function Index() {
  const results = useStaticQuery(authorQuery);
  const desc = results.site.edges[0].node.siteMetadata.description;
  const hero = results.site.edges[0].node.siteMetadata.hero;
  const title = results.site.edges[0].node.siteMetadata.title;
  const siteImg = results.site.edges[0].node.siteMetadata.siteImg;

  const author = {
    authorsPage: desc,
    slug: "/",
    avatar: {
      small: siteImg,
    },
    bio: desc,
  };

  return (
    <Layout>
      <SEO title={title} />
      <Sections>
        <HeadingContainer
          style={{ maxWidth: `${hero.maxWidth}px`, padding: "0 0 24px 0" }}
        >
          <HeroHeading
            dangerouslySetInnerHTML={{ __html: hero.heading }}
            size={{ small: 38, big: 64 }}
            style={{ fontFamily: 'Poppins' }}
          />
          <DescriptionHero>
            Hi, My name is Syafrizal. I am a Student at AMIKOM University
            Yogyakarta. Majoring on informatics engineering. Currently working
            as Freelance Web Programmer.
          </DescriptionHero>
          <FlexRow style={{ flexDirection: 'row', marginTop: 24 }}>
            <StyledButtonFill>See My Project</StyledButtonFill>
            <StyledButton onClick={(e) => {
                e.preventDefault();
                window.open("http://s.id/cv_syafrizal");
              }}> Download Resume 
            </StyledButton>
          </FlexRow>
        </HeadingContainer>
        <HideOnTablet>
          <div style={{ marginBottom: '0px', textAlign: 'center', position: 'absolute', right: 160, top: 100 }}>
            <img src={heroimg} width={360} />
          </div>
        </HideOnTablet>
      </Sections>

      <FooterGradientContainer>
        <Section>
          <HeadingContainer
            style={{ maxWidth: `${hero.maxWidth}px`, padding: "0 0 24px 0" }}
          >
            <HeroHeading
              dangerouslySetInnerHTML={{ __html: 'A few projects that I have worked on' }}
              size={{ small: 38, big: 64 }}
              style={{ padding: '4% 0 8% 0', textAlign: 'center', fontFamily: 'Poppins' }}
            />
            <HideOnTablet>
              <div style={{ marginBottom: '0px', textAlign: 'center', position: 'absolute', right: 240, top: 100, zIndex: '-99' }}>
                <img src={rocket} width={100} />
              </div>
            </HideOnTablet>
          </HeadingContainer>

          <FlexRow style={{ flexWrap: 'nowrap', gap: '0px', paddingTop: '40px' }}>
            <ImgLast
              src={content1}
              style={{ boxShadow: '0px 0px 20px #252F46' }}
            />
            <PaddingFlex>
              <SubHeroHeading
                dangerouslySetInnerHTML={{ __html: "EduPrina " }}
                size={{ small: 10, big: 60 }}
              />
              <Description style={{ fontWeight: 200 }}>
                Exploration about slicing landingpage for alumni website, using bootstrap
              </Description>
              <a href="https://eduprina.netlify.app/">
                <StyledButtonFill style={{ marginTop: 12 }} >
                  Live Preview
                </StyledButtonFill>
              </a>
            </PaddingFlex>
          </FlexRow>

          <Spacer />
          {/* hijabie */}
          <FlexRow style={{ flexWrap: 'nowrap', gap: '0px', paddingTop: '40px' }}>
            <ImgLast
              src={content2}
              style={{ boxShadow: '0px 0px 20px rgb(240, 240, 240)' }}
            />
            <PaddingFlex>
              <SubHeroHeading
                dangerouslySetInnerHTML={{ __html: "Hijabie Exploration" }}
                size={{ small: 10, big: 60 }}
              />
              <Description style={{ fontWeight: 100 }}>
                Non commercial project, slicing landingpage for women to use their hijab on daily activities
              </Description>
              <a href="https://hijabie.netlify.app/">
                <StyledButtonFill style={{ marginTop: 12 }} >
                  Live Preview
                </StyledButtonFill>
              </a>
            </PaddingFlex>
          </FlexRow>
          <Spacer />

          {/* mokima */}
          <FlexRow style={{ flexWrap: 'nowrap', gap: '0px', paddingTop: '40px' }}>
            <ImgLast
              src={content3}
              style={{ boxShadow: '0px 0px 10px rgb(240, 240, 240)' }}
            />
            <PaddingFlex>
              <SubHeroHeading
                dangerouslySetInnerHTML={{ __html: "Landing Page Alumni Exploration" }}
                size={{ small: 10, big: 60 }}
              />
              <Description style={{ fontWeight: 100 }}>
                Exploration about slicing landingpage for alumni website, using bootstrap
              </Description>
              <a href="https://mokima.netlify.app/">
                <StyledButtonFill style={{ marginTop: 12 }} >
                  Live Preview
                </StyledButtonFill>
              </a>
            </PaddingFlex>
          </FlexRow>
          <Spacer />
          <FlexRow>

            <PaddingFlex style={{ padding: 0 }}>
              <SubHeroHeading
                dangerouslySetInnerHTML={{ __html: "Login Exploration using Firebase" }}
                size={{ small: 10, big: 60 }}
              />
              <Description style={{ fontWeight: 100 }}>
                Non commercial project, slicing landingpage and combine login, register with Reactjs & Redux
              </Description>
              <a href="https://loginregredux.netlify.app/">
                <StyledButtonFill style={{ marginTop: 12 }} >
                  Live Preview
                </StyledButtonFill>
              </a>
            </PaddingFlex>
            <PaddingFlex>
              <SubHeroHeading
                dangerouslySetInnerHTML={{ __html: "Premier League Teams Information" }}
                size={{ small: 10, big: 60 }}
              />
              <Description style={{ fontWeight: 100 }}>
                Simple information premier league teams using public API and Ionic React as Frontend library
              </Description>
              <a href="https://premierleague-concept.netlify.app/">
                <StyledButtonFill style={{ marginTop: 12 }} >
                  Live Preview
                </StyledButtonFill>
              </a>
            </PaddingFlex>
            <PaddingFlex>
              <SubHeroHeading
                dangerouslySetInnerHTML={{ __html: "Forecast Weather | openweathermap" }}
                size={{ small: 10, big: 48 }}
              />
              <Description style={{ fontWeight: 100 }}>
                Simple predict weather apps using OpenWeather as API and Ionic React as Frontend library
              </Description>
              <a href="https://weatherandlocal.netlify.app/">
                <StyledButtonFill style={{ marginTop: 12 }} >
                  Live Preview
                </StyledButtonFill>
              </a>
            </PaddingFlex>

          </FlexRow>
        </Section>
      </FooterGradientContainer>
    </Layout>
  );
}

export default Index;

const Spacer = styled.div`
margin: 00px 0 100px 0;
background-color: red;
${mediaqueries.phablet`
    margin: 64px 0 64px 0;
  `}
`;

const FooterGradientContainer = styled.div`
  background: linear-gradient(
    180deg,
    ${(p) => p.theme.colors.card} 0%,
    rgba(249, 250, 252, 0) 91.01%
  );
  display: flex;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  padding-top: 90px;
  padding-bottom: 90px;
`;

const ImgLast = styled.img`
  width: 50%;
  margin: 20px 0 20px 0;
  border-radius: 16px;
  ${mediaqueries.phablet`
    width: 100%;
  `}
`;

const Sections = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 120px;
  ${mediaqueries.phablet`
    margin-top: 64px;
    margin-bottom: 64px;
    flex-direction: column;
  `}
`;

const StyledButton = styled.button`
  cursor: pointer;
  background: ${(p) => p.theme.colors.buttonHero};
  border-radius: 4px;
  color: ${(p) => p.theme.colors.accent};
  border: 1px solid ${(p) => p.theme.colors.accent};
  transition: 0.5s all ease-out;
  font-size: 1.5rem;
  padding: 0.75rem 1rem;
  font-weight: bold;
  margin: 0px 1rem 0.75rem 0px;

  &:hover {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.card};
  }
`;

const StyledButtonFill = styled(StyledButton)`
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.card};
`;

const Description = styled.p`
  margin-top: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 4;
  color: ${(p) => p.theme.colors.description};
  ${mediaqueries.phablet`
    font-size: 16px;
    line-height: 30px;
    margin-top: 12px;
  `}
`;

const DescriptionHero = styled(Description)`
  font-size: 20px;
  line-height: 36px;
  ${mediaqueries.phablet`
    font-size: 16px;
  `}
  `;

// Heading
const HeadingContainer = styled.div`
  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
  `}
`;

const HeroHeading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: ${(p) => p.size.big}px;
  line-height: 1.15;
  color: ${(p) => p.theme.colors.articleText};
  a {
    color: ${(p) => p.theme.colors.accent};
  }

  ${p => mediaqueries.phablet`
    font-size: 38px;
  `}
`;

const SubHeroHeading = styled(HeroHeading)`
  font-size: 32px;
  font-family: 'Poppins';
  line-height: 45px;
  ${p => mediaqueries.phablet`
  font-size: 28px;
`}
`;

const PaddingFlex = styled.div`
margin-top: 20px;
padding-left: 8%;
padding-bottom: 10px;
${mediaqueries.phablet`
  padding-left: 0px;
`}
`;

const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  ${mediaqueries.phablet`
    flex-direction: column-reverse;
  `};
`;

const HideOnTablet = styled.div`
  ${mediaqueries.desktop`
    display: none;
  `};
`;
