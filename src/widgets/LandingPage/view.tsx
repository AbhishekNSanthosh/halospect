import Header from '@widgets/Header'
import React from 'react'
import Footer from '@widgets/Footer'
import LandingPageContent from './components/content'
import VideoSection from './components/videoSection'
import HowWeWork from './components/HowWeWork'
import Banner2 from './components/Banner2'

export default function LandingPageView() {
  return (
    <main>
      <Header/>
      {/* <LandingPageContent/> */}
      <Banner2/>
      <VideoSection/>
      <HowWeWork/>
      <Footer/>
    </main>
  )
}
