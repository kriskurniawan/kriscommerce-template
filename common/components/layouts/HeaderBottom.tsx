import React from 'react'
import SearchSection from './SearchSection'
import CartSection from './CartSection'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'

const HeaderBottom = () => {
    return (
        <>
            <div className="w-full h-16 bg-sky-900 items-center gap-20 inline-flex sticky top-0 z-50">
                <Link href="/" className='cursor-pointer'>
                    <Image alt="logo" width="144" height="40" className="ml-16" src="/assets/img/logo.png" />
                </Link>
                <SearchSection />
                <CartSection />
            </div>
            <Navigation />
        </>
    )
}

export default HeaderBottom