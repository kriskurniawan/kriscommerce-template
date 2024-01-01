import React from 'react'
import Slider from './Slider'
import Category from './Category'
import PopularProduct from './PopularProduct'
import Product from './Product'
import BannerPromotion from './BannerPromotion'
import TopSeller from './TopSeller'
import Features from './Features'
import Testimoni from './Testimoni'
import Partner from './Partner'

const Homepage = () => {
    return (
        <>
            <Slider />
            <Category />
            <PopularProduct />
            <Product />
            <BannerPromotion />
            <TopSeller />
            <Features />
            <Testimoni />
            <Partner />
        </>
    )
}

export default Homepage