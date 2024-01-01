'use client'

import Button from '@/common/components/elements/Button'
import React from 'react'

const PopularProduct = () => {
    return (
        <div className="container mx-auto">
            <div className="w-11/12 justify-between m-auto flex flex-wrap mt-5 mb-5 p-10">
                <div className="text-cyan-800 text-3xl font-semibold">Popular products</div>
                <div className="w-96 h-11 justify-center items-center gap-3 inline-flex">
                    <Button onClick={() => { }} className="w-36 h-11 border border-sky-900 text-sky-900 text-base font-medium hover:bg-slate-200">
                        Cameras
                    </Button>
                    <Button onClick={() => { }} className="w-36 h-11 border border-sky-900 text-sky-900 text-base font-medium hover:bg-slate-200">
                        Laptops
                    </Button>
                    <Button onClick={() => { }} className="w-36 h-11 border border-sky-900 text-sky-900 text-base font-medium hover:bg-slate-200">
                        Tablets
                    </Button>
                    <Button onClick={() => { }} className="w-36 h-11 border border-sky-900 text-sky-900 text-base font-medium hover:bg-slate-200">
                        Mouse
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PopularProduct