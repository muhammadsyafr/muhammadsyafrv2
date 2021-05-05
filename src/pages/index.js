import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Bio from "@narative/gatsby-theme-novela/src/components/Bio";

import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

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
      slug: '/',
      avatar: {
          medium: siteImg
      },
      bio: desc
  }
    
  return (
    <Layout>
      <SEO title={title}/>
      <Section>
      <HeadingContainer style={{ maxWidth: `${hero.maxWidth}px` }}>
        <HeroHeading dangerouslySetInnerHTML={{ __html: hero.heading }} />
        <Description>Hi, My name is Syafrizal. I am a Student at AMIKOM University Yogyakarta. Majoring on informatics engineering. Currently working as Freelance Web Programmer.</Description>
      </HeadingContainer>
      <SubheadingContainer>
       <HideOnTablet> <Bio author={author} /> </HideOnTablet>
        <div>
          <a href="">
            <button style={{background: '#009688', color: 'white', padding: 12}}>
              See My Project Below&nbsp; 
            </button>
          </a>
          <button style={{background: '#009688', color: 'white', padding: 12, marginLeft: '10px'}}>Download Resume</button>
        </div>
      </SubheadingContainer>
      <SubheadingContainer>

      </SubheadingContainer>
      </Section>
    </Layout>
  );
  
}

export default Index;

const Description = styled.p`
  margin-top: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 4;
  color: ${p => p.theme.colors.secondary};
  ${mediaqueries.phablet`
    font-size: 16px;
  `}
`;

const HeadingContainer = styled.div`
  margin: 100px 0 50px 0;

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
  font-size: 52px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};
  a {
    color: ${p => p.theme.colors.accent};
  }

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const SubheadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 100px;

  ${mediaqueries.desktop`
    margin-bottom: 80px;
  `};

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `};
`;

const HideOnTablet = styled.div`
  ${mediaqueries.tablet`
    display: none;
  `};
`;
