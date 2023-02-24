import React from "react"
import { NavbarContainer, NavbarItem, NavbarList } from "./styled/navbar.styled"

const NavbarItems = [
  'COLLECTIONS',
  'SHOP',
  'NEW ARRIVALS',
];

export const NavbarComponent = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        {NavbarItems?.map((item, index) => (
          <NavbarItem key={index}>{item}</NavbarItem>
        ))}
      </NavbarList>
    </NavbarContainer>
  );
}