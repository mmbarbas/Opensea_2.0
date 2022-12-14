import React from 'react'

import Style from "../styles/index.module.css";
import { HeroSection,Service,BigNFTSlider, Subscribe ,Title, Category, Filter, NFTCard, Collection} from '../components/componentsindex';

const Home = () => {
  return (
    <div className={Style.homepage}>
    <HeroSection/>
    <Service/>
    <BigNFTSlider/>
    <Title 
      heading="New Collection" 
      paragraph="Discover the most outstanding NFTs"/>
    <Collection/>
    <Title 
      heading="Featured NFTs" 
      paragraph="Discover the most outstanding NFTs"/>
    <Filter/> 
    <NFTCard/>
    <Title 
      heading="Browse by category" 
      paragraph="Explore the NFTs in the most featured categories"/>
    <Category/>
    <Subscribe/>
    </div>
  )
}

export default Home