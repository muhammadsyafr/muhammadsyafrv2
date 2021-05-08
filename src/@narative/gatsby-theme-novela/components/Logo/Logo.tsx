import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from '@types';

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <LogoText dangerouslySetInnerHTML={{ __html: 'Syafrizal' }} />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;

const LogoText = styled.p`
  max-width: 430px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1.5px;
  color: ${p => p.theme.colors.accent};
 
`;
