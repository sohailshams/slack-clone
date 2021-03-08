import React from 'react';
import { SidebarContainer, SidebarHeader, SidebarInfo } from './Sidebar.styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Work Space</h2>
          <h3>
            <FiberManualRecordIcon />
            Sohail Shams
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default Sidebar;
