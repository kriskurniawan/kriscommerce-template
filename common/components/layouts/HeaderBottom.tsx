import React from 'react'
import SearchSection from './SearchSection'
import Link from 'next/link'
import CartSection from '@/common/components/layouts/CartSection'
import Navigation from '@/common/components/layouts/Navigation'

const HeaderBottom = () => {
    return (
        <>
            <div className="w-full h-16 bg-sky-900 items-center gap-20 inline-flex sticky top-0 z-50">
                <Link href="/" className='cursor-pointer'>
                    <img className="ml-16" src="/assets/img/logo.png" />
                </Link>
                <SearchSection />
                <CartSection />
            </div>
            <Navigation />
        </>
    )
}

export default HeaderBottom