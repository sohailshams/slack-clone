import React from 'react';
import { SidebarOptionContainer } from './SidebarOption.styles';

function SidebarOption({ Icon, title }) {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;
