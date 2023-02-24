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
`

export const HomeBannerContent = styled.div`
  background-color: ${colors['red-banner']};
  opacity: 75%;
  height: 40%;
  width: 50%;
  position: absolute;
  bottom: 15%;
`

export const LogoBanner = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color:transparent;
  -webkit-text-stroke: 2px ${colors.dark};
  position: absolute;
  width: 20%;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -20%);
`