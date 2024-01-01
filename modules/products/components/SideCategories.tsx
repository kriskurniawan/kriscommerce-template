'use client'

import React from 'react'
import { useState } from 'react'
import { CATEGORIES } from '@/common/constant/categories'

const SideCategories = () => {
    const [checked, setChecked] = useState(true)
    const [isChecked, setIsChecked] = useState(Array(CATEGORIES.length).fill(false))

    const handleChange = () => {
        setChecked(!checked);
    }

    const handleCheckboxChange = (id: number) => {
        const newIsChecked = [...isChecked];
        newIsChecked[id] = !isChecked[id];
        setIsChecked(newIsChecked);
    }

    return (
        <div className='w-[300px]'>
            <div className="flex justify-between mb-3">
                <div className="text-sky-900 font-semibold">Categories</div>
                <a href="#" className="text-sky-900 text-sm">Reset</a>
            </div>
            <div className="flex justify-between items-center mb-3">
                <label className="flex items-center space-x-2">
                    <input id='allCategories' type="checkbox" className="h-6 w-6 rounded-md bg-slate-400 checked:bg-slate-700 focus:ring-0"
                        checked={checked}
                        onChange={handleChange} />
                    <label htmlFor='allCategories' className='ml-0 text-gray-800'>All Categories</label>
                </label>
                <div className="text-sky-900">10</div>
            </div>
            {CATEGORIES.map((category, index) => (
                <div key={index} className="flex justify-between items-center mb-3">
                    <label className="flex items-center space-x-2">
                        <input id={category.name} type="checkbox" className="h-6 w-6 rounded-md bg-slate-400 checked:bg-slate-700 focus:ring-0"
                            checked={isChecked[index]}
                            onChange={() => handleCheckboxChange(index)} />
                        <label htmlFor={category.name} className='ml-0 text-gray-800'>{category.name}</label>
                    </label>
                    <div className="text-sky-900">5</div>
                </div>
            ))}
            <div className="flex justify-between items-center mb-3">
                <label className="flex items-center space-x-2">
                    <input id='other' type="checkbox" className="h-6 w-6 rounded-md bg-slate-400 checked:bg-slate-700 focus:ring-0"
                        checked={isChecked[CATEGORIES.length]}
                        onChange={() => handleCheckboxChange(CATEGORIES.length)} />
                    <label htmlFor='other' className='ml-0 text-gray-800'>other</label>
                </label>
                <div className="text-sky-900">5</div>
            </div>
        </div>
    )
}

export default SideCategories