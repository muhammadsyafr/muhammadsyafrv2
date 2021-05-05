import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';
import { IAuthor } from '@types';

const Bio: React.FC<IAuthor> = ({ author }) => {
  return (
    <BioContainer>
      <BioAvatar
        data-a11y="false"
        aria-label="Author's bio"
      >
        <BioAvatarInner>
          <RoundedImage style={author.style} src={author.avatar.medium} />
        </BioAvatarInner>
      </BioAvatar>
    </BioContainer>
  );
};

export default Bio;

const BioContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
`;

const BioAvatar = styled.div`
  display: block;
  position: relative;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  margin: 10px 26px 10px 10px;

  // &::after {
  //   content: '';
  //   position: absolute;
  //   left: -10px;
  //   top: -10px;
  //   width: 64px;
  //   height: 64px;
  //   border-radius: 50%;
  //   border: 1px solid rgba(0, 0, 0, 0.25);
  // }

  // &[data-a11y='true']:focus::after {
  //   content: '';
  //   position: absolute;
  //   left: -10px;
  //   top: -10px;
  //   width: 64px;
  //   height: 64px;
  //   border: 2px solid ${p => p.theme.colors.accent};
  // }
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
`;

const BioAvatarInner = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;
`;

const BioText = styled.p`
  max-width: 430px;
  font-size: 14px;
  line-height: 1.45;
  color: ${p => p.theme.colors.grey};

  a {
    color: ${p => p.theme.colors.grey};
    text-decoration: underline;
  }
`;
