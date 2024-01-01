'use client'

import Button from '@/common/components/elements/Button'
import React from 'react'

const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert('Shop now')
}

const handleView = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert('View more')
}

const Slider = () => {
    return (
        <div className="container mx-auto h-[420px] relative">
            <div className="py-24 ml-44 text-cyan-800 text-5xl font-bold">Canon<br />camera</div>
            <img className="left-[932px] top-[38px] absolute rounded-lg" src="/assets/img/8-1.png" />
            <div className="left-[174px] top-[216px] absolute justify-center items-center gap-5 inline-flex">
                <Button
                    onClick={handleClick}
                    type="submit"
                    className="w-32 h-14 bg-amber-500 justify-center text-white text-base font-semibold hover:bg-amber-600">
                    Shop Now
                </Button>
                <Button
                    onClick={handleView}
                    type="submit"
                    className="w-32 h-14 rounded-2xl border border-cyan-800 text-cyan-800 text-base font-semibold hover:bg-slate-200">
                    View more
                </Button>
            </div>
            <div className="w-28 h-28 left-[1174px] top-[227px] absolute bg-amber-500 rounded-full justify-center items-center gap-3.5 inline-flex">
                <div className="text-white text-xl font-semibold">only<br />$89</div>
            </div>
            <div className="left-[296px] top-[326px] absolute justify-center items-center gap-2 inline-flex">
                <div className="w-4 h-4 bg-amber-500 cursor-pointer rounded-full" />
                <div className="w-4 h-4 hover:bg-amber-500 cursor-pointer rounded-full border border-zinc-400" />
                <div className="w-4 h-4 hover:bg-amber-500 cursor-pointer rounded-full border border-zinc-400" />
            </div>
        </div>
    )
}

export default Slider