import Image from "next/image"
import { Subtitle, TextBrand } from "../Text/text.styled"
import { HomeBanner, HomeBannerContent } from "./styled/Home.styled"

export const HomeComponent = () => {
  return <HomeBanner>
    <HomeBannerContent/>
    <TextBrand >UNKNOWN.</TextBrand>
    <TextBrand style={{ rotate: '90deg'}} right="3%" fsize='7rem'top='68%'>001</TextBrand>
    <Subtitle>We are coming. Be ready for an auntum/winter collection never seen before.</Subtitle>
  </HomeBanner>
}