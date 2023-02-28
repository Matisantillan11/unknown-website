import { NavbarController } from "@/controllers/Navbar/Navbar.controller"
import { useWindowDimensions } from "@/hooks/useWindowDimensions"
import { Subtitle, TextBrand } from "../Text/text.styled"
import { HomeBanner, HomeBannerContainer, HomeBrandContainer,  HomeBannerContent, LogoBanner } from "./styled/Home.styled"

export const HomeComponent = () => {
  const {width, height} = useWindowDimensions()
  return (
  <>
    {
    width > 768 ?
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
          <TextBrand style={{ rotate: '90deg'}} right={width >= 601 ? '5%' : width >= 480 ? "-60%" : "-30%" } fsize={width >= 480 ? '7rem' : '5rem' } top='63%'>001</TextBrand>
        </HomeBrandContainer>
      </HomeBanner>
      </>
    )}
  </>
  )
}