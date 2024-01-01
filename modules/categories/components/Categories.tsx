import React from 'react'
import SideCategories from './SideCategories'
import { Separator } from '@/common/components/elements/Separator'
import SideAvaliability from './SideAvaliability'
import SideProductType from './SideProductType'
import SideBrand from './SideBrand'
import SideColor from './SideColor'
import { SideSize } from './SideSize'
import { Card } from '@/common/components/elements/Card'
import ButtonLove from '@/common/components/elements/ButtonLove'
import Star from '@/common/components/elements/Star'
import { PRODUCTS } from '@/common/constant/products'
import BannerPromotion from '@/modules/homepage/components/BannerPromotion'

const Categories = () => {
    return (
        <>
            <div className="mx-auto min-h-full container mt-28 flex">
                <div className="w-80 h-full">
                    <SideCategories />
                    <Separator />
                    <SideAvaliability />
                    <Separator />
                    <SideProductType />
                    <Separator />
                    <SideBrand />
                    <Separator />
                    <SideColor />
                    <Separator />
                    <SideSize />
                    <Separator />
                </div>
                <div className="max-w-full ml-7 flex flex-wrap gap-5">
                    {PRODUCTS.map((product, index) => (
                        <Card key={index} className="w-80 h-80 justify-center flex relative cursor-pointer hover:bg-slate-100">
                            <img className="w-48 h-44 mt-7 rounded-lg" src={product.image} />
                            <ButtonLove />
                            <div className="gap-2 flex flex-col absolute bottom-5 left-3">
                                <div className="text-sky-900 text-lg font-medium">{product.name}</div>
                                <div className="text-neutral-600 text-lg font-semibold">${product.price}</div>
                                <Star count={product.rating} />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
            <BannerPromotion />
        </>
    )
}

export default Categories