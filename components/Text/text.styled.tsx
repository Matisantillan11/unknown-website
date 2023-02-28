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
  @media (min-width: 769px) and (max-width: 912px){
    font-size: ${props => props.fsize ? props.fsize : "5rem"};
    top: ${props => props.top ? props.top : "10%"};
    right: ${props => props.right ? props.right : "10%"};
    align-self: center;
    text-align: center;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    width: 50%;
    font-size: ${props => props.fsize ? props.fsize : "4rem"};
    top: ${props => props.top ? props.top : "10%"};
    right: ${props => props.right ? props.right : "45%"};
    left: ${props => props.right ? props.right : "5%"};
    align-self: center;
    text-align: center;
  }

  @media (min-width:481px) and (max-width: 600px){
    position: absolute;
    width: 100vw;
    font-size: ${props => props.fsize ? props.fsize : "4rem"};
    top: ${props => props.top ? props.top : "5%"};
    right: ${props => props.right ? props.right : "25%"};
    left: ${props => props.right ? props.right : "0%"};
    align-self: ${props => props.right ? '' : 'center'};
    text-align: center;
  }

  @media (min-width:380px) and (max-width: 480px) {
    width: 100vw;
    font-size: ${props => props.fsize ? props.fsize : "4rem"};
    top: ${props => props.top ? props.top : "5%"};
    right: ${props => props.right ? props.right : "0%"};
    left: ${props => props.right ? props.right : "0%"};
    align-self: center;
    text-align: center;
    transform: "none";
  }

  @media (min-width:360px) and (max-width: 379px) {
    width: 100vw;
    font-size: ${props => props.fsize ? props.fsize : "3.5rem"};
    top: ${props => props.top ? props.top : "5%"};
    right: ${props => props.right ? props.right : "0%"};
    left: ${props => props.right ? props.right : "0%"};
    align-self: center;
    text-align: center;
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
  @media (min-width: 769px) and (max-width: 912px){
    width: 70%;
    margin: 20% 55%;
    font-size: 1.5rem;
    font-weight: '300';
    align-self: left;
    text-align: center;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    width: 115%;
    margin: 10% 30%;
    font-size: 1.3rem;
    font-weight: '300';
    align-self: left;
    text-align: center;
  }

  @media (min-width:481px) and (max-width: 600px){
    font-size: 1.3rem;
    width: 100%;
    margin: 10% 35%;
    align-self: left;
    text-align: left;
  }

  @media (min-width:380px) and (max-width: 480px) {
    font-size: 1.2rem;
    width: 45%;
    top: 20%;
    left: 55%;
    text-align: left;
  }

  @media (min-width:360px) and (max-width: 379px) {
    font-size: 1rem;
    width: 45%;
    top: 25%;
    left: 55%;
    text-align: left;
  }

  
`
