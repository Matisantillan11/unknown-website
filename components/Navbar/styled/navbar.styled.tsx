import { colors } from '@/constants/colors';
import { NavbarContainerInterface } from '@/interfaces/Navbar';
import styled from 'styled-components';

export const NavbarContainer = styled.div<NavbarContainerInterface>`
  height: 5vh;
  width: 100vw;
  position: relative;
`

export const NavbarList = styled.ul<NavbarContainerInterface>`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
list-style: none;
width: 100%;
height: 100%;
padding: 2.5% 5%;
`

export const NavbarItem = styled.li`
  font-size: .9rem;
  font-weight: 500;
  color: ${colors.dark};
  :first-child{
    margin-right: 75%;
  }
`