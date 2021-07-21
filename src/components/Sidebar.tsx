import React, { FC } from "react";

import styled from "styled-components";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
import SideBarInfo from "./SideBarInfo";

const SidebarNav = styled.div`
  /* Rectangle 30 */
  position: absolute;
  width: 60px;
  height: 954px;
  left: 0px;
  top: 0px;
  z-index: 2;

  background: #ffffff;
  /* Elevation / Depth8 */

  box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1),
    0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`;

const SidebarWrap = styled.div``;

const SidebarSetion = styled.div`
  width: 366px;
  height: 100vh;
  background-color: #fbfbfb;
  position: fixed;
  top: 0;
`;

const SidebarParagraph = styled.div`
  width: 306px;
  height: 422px;
  background-color: white;
  color: black;
  position: fixed;
  top: 0;
  margin-left: 60px;
`;


const Sidebar: FC = () => {
  return (
    <IconContext.Provider value={{ color: "#C7C7C7" }}>
      <SidebarSetion>
        <SidebarNav>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        <SidebarParagraph>
            <SideBarInfo />
        </SidebarParagraph>
      </SidebarSetion>
    </IconContext.Provider>
  );
};

export default Sidebar;
