import { colors } from '@/constants/colors';
import { NavbarContainerInterface } from '@/interfaces/Navbar';
import styled from 'styled-components';

export const NavbarContainer = styled.div<NavbarContainerInterface>`
  height: 5vh;
  width: 100vw;
  position: relative;
  @media (max-width: 768px) {
    padding: 2.5% 0;
  }
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
@media (min-width:380px) and (max-width: 480px) {
  justify-content: space-between;
  }
`

export const NavbarItem = styled.li`
  font-size: .9rem;
  font-weight: 500;
  color: ${colors.dark};
  :first-child{
    margin-right: 75%;
  }

  @media (min-width: 769px) and (max-width: 912px){
    font-size: 1.1rem;
    font-weight: 600;
  
    :first-child{
      margin-right: 50%;
    }
  }

  @media (min-width:601px) and (max-width: 768px) {
    :first-child{
      margin-right: 45%;
    }
  }
  @media (min-width:481px) and (max-width: 600px) {
    :first-child{
      margin-right: 35%;
    }
  }

  @media (min-width:380px) and (max-width: 480px) {
    :first-child{
      margin-right: 25%;
    }
  }

  @media (min-width:360px) and (max-width: 379px) {
    :first-child{
      margin-right: 15%;
    }
}
`