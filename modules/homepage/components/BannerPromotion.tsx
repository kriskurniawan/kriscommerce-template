import Button from '@/common/components/elements/Button'
import React from 'react'

const BannerPromotion = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center m-10 relative">
                <img className="w-[1350px] h-[417px] rounded-lg" src="/assets/img/pexels-nao-triponez-129208-1.png" />
                <div className="w-32 h-11 bg-amber-500 rounded-2xl justify-center items-center gap-2.5 flex absolute right-72 top-20">
                    <div className="text-white text-sm font-medium">New laptop </div>
                </div>
                <Button className="w-32 h-11 bg-amber-500 justify-center items-center flex absolute right-72 top-20 text-white text-sm font-medium hover:bg-amber-600">
                    New laptop
                </Button>
                <div className="w-96 h-24 flex-col justify-center items-center gap-3 flex absolute right-40 top-40">
                    <div className="text-cyan-600 text-4xl font-bold">Sale up to 50% off</div>
                    <div className="text-white text-lg font-medium">12 inch hd display</div>
                </div>
                <Button className="w-32 h-11 bg-amber-500 justify-center items-center flex absolute right-72 bottom-20 text-white text-sm font-medium hover:bg-amber-600">
                    Shop now
                </Button>
            </div>
        </div>
    )
}

export default BannerPromotion