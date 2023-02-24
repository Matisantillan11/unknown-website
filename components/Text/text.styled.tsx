import styled from "styled-components"
import { colors } from "@/constants/colors"
import { ITextBrand } from "@/interfaces/Text.interface"

export const TextBrand = styled.span<ITextBrand>`
  font-size: ${props => props.fsize ? props.fsize : "6rem"};
  font-weight: ${props => props.fweight ? props.fweight : "700"};
  color: ${props => props.color ? props.color : colors.dark};
  border: ${props => props.border ? props.border : "none"};
  position: absolute;
  top: ${props => props.top ? props.top : "30%"};
  right: ${props => props.right ? props.right : "10%"};
  transform: ${props => props.top && props.right && props.translate && `translate(-${props.top}, -${props.right})`};
  @media (max-width: 768px) {
    font-size: ${props => props.fsize ? props.fsize : "4rem"};
    top: ${props => props.top ? props.top : "13%"};
  right: ${props => props.right ? props.right : "-25%"};
  }

  @media (min-width:380px) and (max-width: 480px) {
    font-size: ${props => props.fsize ? props.fsize : "4rem"};
    top: ${props => props.top ? props.top : "5%"};
    right: ${props => props.right ? props.right : "12.5%"};
  }
`

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.dark};
  position: absolute;
  width: 30%;
  top: 20%;
  left: 95%;
  transform: translate(-105%, -20%);
  @media (max-width: 768px) {
    width: 80%;
    top: 25%;
    left: 105%;
    font-size: 1.05rem;
    font-weight: '300';
    text-align: center;
  }

  @media (min-width:380px) and (max-width: 480px) {
    font-size: 1rem;
    width: 40%;
    top: 25%;
    left: 55%;
    text-align: left;
  }
`
