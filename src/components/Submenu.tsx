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

const SidebarLabel = styled.span``;

const IconOuter = styled.span`
  background-color: #1f4782;
  border-radius: 5px;
  padding: 10px;
`;

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={showSubnav}>
        <IconOuter>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </IconOuter>
      </SidebarLink>
    </>
  );
};

export default Submenu;
