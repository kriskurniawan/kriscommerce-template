'use client'

import React from 'react'
import Button from '../elements/Button'

const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('clicked');
}
const SearchSection = () => {
    return (
        <div className="w-96 h-14 justify-center items-center gap-20 inline-flex">
            <div className="w-96 h-14 pl-6 bg-white rounded-2xl justify-start items-center gap-2.5 flex">
                <input
                    type="text"
                    placeholder="Search any things"
                    className="text-zinc-800 text-sm font-normal font-['Poppins'] outline-none bg-transparent w-full"
                />
                {/* <Button>
                    <div className="text-white text-sm font-semibold font-['Poppins']">Search</div>
                </Button> */}
                {/* <div className="w-32 h-14 bg-amber-500 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-sm font-semibold font-['Poppins']">Search</div>
                </div> */}
                <Button onClick={handleClick} type="submit" className="w-32 h-14 bg-amber-500 justify-center items-center gap-2.5 inline-flex text-white text-sm font-semibold">
                    Search
                </Button>
            </div>
        </div>
    )
}

export default SearchSection