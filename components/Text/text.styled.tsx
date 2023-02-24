import React from "react"
import styled from "styled-components"
import { colors } from "@/constants/colors"
import { ITextBrand } from "@/interfaces/Text.interface"

export const TextBrand = styled.span<ITextBrand>`
  font-size: ${props => props.fsize ? props.fsize : "5rem"};
  font-weight: ${props => props.fweight ? props.fweight : "700"};
  color: ${colors.dark};
  position: absolute;
  top: ${props => props.top ? props.top : "30%"};
  right: ${props => props.right ? props.right : "5%"};
`

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.dark};
  position: absolute;
  width: 20%;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
`
