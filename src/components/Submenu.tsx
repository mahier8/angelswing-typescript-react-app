import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarItem } from "../models/SidebarItem";

type SidebarLinkProps = {
  item: SidebarItem;
};

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.75rem;
  width: 15px;
  font-size: 1.125rem;
  padding: 2rem;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const [changeColor, setChangeColor] = useState('white');

  const IconOuter = styled.span`
  background-color: ${ changeColor };
  border-radius: 5px;
  padding: 10px;
  width: 44px;
  height: 44px;
  left: 8px;
  top: 8px;
`;

  return (
    <>
      <SidebarLink to={item.path} onClick={showSubnav}>
        <IconOuter onClick={() => setChangeColor('#1F4782')}>
          
          {item.icon}
        </IconOuter>
      </SidebarLink>
    </>
  );
};

export default Submenu;
