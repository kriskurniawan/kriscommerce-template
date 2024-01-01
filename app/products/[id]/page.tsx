import { Broadcum } from '@/common/components/layouts/Broadcrum'
import Footer from '@/common/components/layouts/Footer'
import HeaderBottom from '@/common/components/layouts/HeaderBottom'
import HeaderTop from '@/common/components/layouts/HeaderTop'
import ProductDetails from '@/modules/products/components/ProductDetails'
import React from 'react'

const ProductDetail = () => {
    return (
        <main className="bg-white">
            <HeaderTop />
            <HeaderBottom />
            <Broadcum />
            <ProductDetails />
            <Footer />
        </main>
    )
}

export default ProductDetail