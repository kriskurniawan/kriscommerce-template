import React from 'react'
import SideCategories from './SideCategories'
import { Separator } from '@/common/components/elements/Separator'
import SideAvaliability from './SideAvaliability'
import SideProductType from './SideProductType'
import SideBrand from './SideBrand'
import SideColor from './SideColor'
import { SideSize } from './SideSize'

const Categories = () => {
    return (
        <div className="ml-16 container mt-28">
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
        </div>
    )
}

export default Categories