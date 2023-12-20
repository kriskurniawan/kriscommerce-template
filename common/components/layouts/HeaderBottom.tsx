import React from 'react'
import SearchSection from './SearchSection'
import CartSection from './CartSection'

const HeaderBottom = () => {
    return (
        <div className="w-full h-24 bg-sky-900 items-center gap-20 inline-flex">
            <img className="w-36 h-10 ml-16" src="https://source.unsplash.com/140x39?logo" />
            <SearchSection />
            <CartSection />
        </div>
    )
}

export default HeaderBottom