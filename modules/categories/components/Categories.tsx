import React from 'react'
import SideCategories from './SideCategories'
import { Separator } from '@/common/components/elements/Separator'
import SideAvaliability from './SideAvaliability'
import SideProductType from './SideProductType'

const Categories = () => {
    return (
        <div className="ml-16 container mt-28">
            <SideCategories />
            <Separator />
            <SideAvaliability />
            <Separator />
            <SideProductType />
        </div>
    )
}

export default Categories