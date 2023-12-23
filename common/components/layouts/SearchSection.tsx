'use client'

import React from 'react'
import Button from '../elements/Button'

const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert('Search')
}

const SearchSection = () => {
    return (
        <div className="w-96 h-14 justify-center items-center gap-20 inline-flex">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search any things"
                    className="border border-gray-300 w-96 h-14 pl-6 pr-24 bg-white rounded-2xl focus:outline-none focus:border-amber-600"
                />
                <Button
                    onClick={handleClick}
                    type="submit"
                    className="absolute inset-y-0 right-0 px-4 py-2 bg-amber-500 text-white font-semibold hover:bg-amber-600">
                    Search
                </Button>
            </div>
        </div>
    )
}

export default SearchSection