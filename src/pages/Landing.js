import React from 'react'

// Components
import Banner from '../theme/Banner'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Features from '../components/Features'
import Footer from '../components/Footer'

const Landing = () => (
  <>
    <Banner><span role='img' aria-label='Gratuit'>🤑</span> Un domaine gratuit offert avec tous les hébergements !</Banner>
    <Header />
    <MainContent />
    <Features />
    <Footer />
  </>
)

export default Landing
