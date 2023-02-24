import { colors } from "@/constants/colors"
import { NavbarController } from "@/controllers/Navbar/Navbar.controller"
import Image from "next/image"
import { Subtitle, TextBrand } from "../Text/text.styled"
import { HomeBanner, HomeBannerContent, LogoBanner } from "./styled/Home.styled"

export const HomeComponent = () => {
  return (
  <>
    <NavbarController /> 
    <HomeBanner>
      <HomeBannerContent/>
      <TextBrand >UNKNOWN.</TextBrand>
      <TextBrand style={{ rotate: '90deg'}} right="1%" fsize='9rem'top='63%'>001</TextBrand>
      <>
      <LogoBanner> X/UNKNOWN</LogoBanner>
      <Subtitle>We are coming. Be ready for an auntum/winter collection never seen before.</Subtitle>
      </>
      
    </HomeBanner>
  </>
  )
}