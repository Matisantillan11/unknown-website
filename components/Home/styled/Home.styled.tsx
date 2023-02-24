import { colors } from "@/constants/colors";
import styled from "styled-components";

export const HomeBanner = styled.div`
  height: 95vh;
  width: 100%;
  background-image: url('/images/space-streetwear.png');;
  background-repeat: no-repeat;
  background-size: 30% 90%;
  background-position: 200px bottom;
  position: relative;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    background-size: 70% 90%;
    background-position: 200px bottom;
  }

  @media (min-width:380px) and (max-width: 480px) {
    background-size: 90% 90%;
    background-position: 90px bottom;
  }
`

export const HomeBannerContainer = styled.div`
  height: 100%;
  width: 60%;
  position: relative;
  display: flex;
  justify-content: flex-end; 
`

export const HomeBrandContainer = styled.div`
  height: 100%;
  width: 40%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  @media (min-width:380px) and (max-width: 480px) {
    width: 100%;
  }
`

export const HomeBannerContent = styled.div`
  background-color: ${colors['red-banner']};
  opacity: 75%;
  height: 40%;
  width: 50%;
  position: absolute;
  bottom: 15%;
  @media (max-width: 768px) {
    width: 60%;
    height: 50%;
    bottom: 5%;
  }

  @media (min-width:380px) and (max-width: 480px) {
    width: 80%;
  }
`

export const LogoBanner = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color:transparent;
  position: absolute;
  -webkit-text-stroke: 2px ${colors.dark};
  align-self: right;
  width: 30%;
  top: 17%;
  left: 95%;
  transform: translate(-105%, -20%); 
`