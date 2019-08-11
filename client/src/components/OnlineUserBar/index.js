import React from 'react';
import styled from 'styled-components';

import Avatar from '../Avatar';
import C from '../../consts';

const OnlineUserBar = ({ user, className }) => {
  return (
    <div className={className}>
      <Avatar src={`${C.IMAGES_FOLDER_URL}/${user.avatar}`} online />
      <span>
        <b>{`${user.name}`}</b>
      </span>
    </div>
  );
};

const StyledOnlineUserBar = styled(OnlineUserBar)`
  display: grid;
  grid-template-columns: 65px auto;
  line-height: 65px;
  grid-gap: 20px;
  margin-bottom: 20px;
`;

export default StyledOnlineUserBar;
