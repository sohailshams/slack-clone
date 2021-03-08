import React from 'react';
import {
  SidebarOptionChennel,
  SidebarOptionContainer,
} from './SidebarOption.styles';

function SidebarOption({ Icon, title, addChannelOption }) {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChennel>
          <span>#</span> {title}
        </SidebarOptionChennel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;
