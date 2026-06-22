import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProblemReality from '../components/ProblemReality'
import Solution from '../components/Solution'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import ProductCTA from '../components/ProductCTA'
import Footer from '../components/Footer'
import '../App.css'

export default function Home({ cartCount, onAddToCart, onCartClick }) {
    return (
        <div className="min-h-screen bg-[#fdfcf7] text-[#2c2523] selection:bg-burgundy/10 selection:text-burgundy">
            <Header activePage="home" cartCount={cartCount} onShopNowClick={onAddToCart} onCartClick={onCartClick} />

            <main>
                <Hero onShopNowClick={onAddToCart} />

                <ProblemReality />

                <Solution />

                <HowItWorks />

                <Benefits />

                {/* <ProductCTA onAddToCart={onAddToCart} /> */}
            </main>

            <Footer onShopNowClick={onAddToCart} />
        </div>
    )
}
