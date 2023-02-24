import { colors } from "@/constants/colors";
import styled from "styled-components";

export const HomeBanner = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('/images/space-streetwear.png');
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