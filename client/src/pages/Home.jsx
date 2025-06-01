import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <FeaturedDestination></FeaturedDestination>
        <ExclusiveOffers></ExclusiveOffers>
        <Testimonial></Testimonial>
        <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home