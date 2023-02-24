import { colors } from "@/constants/colors"
import { NavbarController } from "@/controllers/Navbar/Navbar.controller"
import Image from "next/image"
import { Subtitle, TextBrand } from "../Text/text.styled"
import { HomeBanner, HomeBannerContainer, HomeBrandContainer,  HomeBannerContent, LogoBanner } from "./styled/Home.styled"

export const HomeComponent = () => {
  const windowWidth = window.innerWidth
  return (
  <>
    {
    windowWidth > 768 ?
    (
      <>
      <NavbarController /> 
      <HomeBanner>
        <HomeBannerContent/>
        <HomeBannerContainer>
          <>
            <LogoBanner> X/UNKNOWN</LogoBanner>
            <Subtitle>We are coming. Be ready for an auntum/winter collection never seen before.</Subtitle>
          </>
        </HomeBannerContainer>
        <HomeBrandContainer>
        <TextBrand>UNKNOWN.</TextBrand>
        <TextBrand style={{ rotate: '90deg'}} right="5%" fsize='9rem'top='63%'>001</TextBrand>
        </HomeBrandContainer>
      </HomeBanner>
      </>
    )
    :
    (
      <>
      <NavbarController /> 
      <HomeBanner>
        <HomeBannerContent/>
        <HomeBrandContainer>
        <TextBrand>UNKNOWN.</TextBrand>
        <Subtitle>We are coming. Be ready for an auntum/winter collection never seen before.</Subtitle>
         <TextBrand style={{ rotate: '90deg'}} right={windowWidth > 480 ? "50%" : "70%"} fsize={windowWidth > 480 ? '7rem' : '5rem' }top='63%'>001</TextBrand>
        </HomeBrandContainer>
      </HomeBanner>
      </>
    )}
  </>
  )
}