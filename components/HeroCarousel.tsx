'use client'
import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const heroImages = [
  {imgUrl: 'assets/images/hero-3.svg', alt:'Smartwatch'},
  {imgUrl: 'assets/images/hero-1.svg', alt:'Bag'},
  {imgUrl: 'assets/images/hero-4.svg', alt:'Lamp'},
  {imgUrl: 'assets/images/hero-5.svg', alt:'Air Fryer'},
  {imgUrl: 'assets/images/hero-2.svg', alt:'Chair'}
] 

function HeroCarousel() {
  return (
    <div className='hero-carousel'>
      <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay infiniteLoop interval={2000}>
        {heroImages.map((image) => (
          <Image src={image.imgUrl} alt={image.alt} key={image.alt} width={484} height={484} className='object-contain'/>
        ))}
      </Carousel>

      <Image src='assets/icons/hand-drawn-arrow.svg' alt='Hand Drawn Arrow' width={175} height={175} className='max-xl-hidden absolute -left-[15%] bottom-0 z-0'/>
    </div>
  )
}

export default HeroCarousel