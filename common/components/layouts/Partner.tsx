import React from 'react'
import Image from 'next/image'

const Partner = () => {
    return (
        <div className="container mx-auto">
            <div className="felx p-7">
                <div className="flex w-[93%] h-32 bg-sky-100 justify-center items-center gap-14 rounded-2xl m-auto">
                    <img className="rounded-lg" src="/assets/img/brand-4.png" />
                    <img className="rounded-lg" src="/assets/img/brand-5.png" />
                    <img className="rounded-lg" src="/assets/img/brand-6.png" />
                    <img className="rounded-lg" src="/assets/img/brand-7.png" />
                    <img className="rounded-lg" src="/assets/img/brand-8.png" />
                </div>
            </div>
        </div>
    )
}

export default Partner