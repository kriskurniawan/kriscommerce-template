import React from 'react'

const SideAvaliability = () => {
    return (
        <>
            <div className="flex justify-between mb-3">
                <div className="text-sky-900 font-semibold">Avaliability</div>
            </div>
            <div className="flex justify-between mb-3">
                <div className="text-sky-900">0 selected</div>
                <a href="#" className="text-sky-900 text-sm">Reset</a>
            </div>
            <div className="flex justify-between items-center mb-3">
                <label className="flex items-center space-x-2">
                    <input id='ins' type="checkbox" className="h-6 w-6 rounded-md bg-slate-300 checked:bg-slate-700 focus:ring-0"
                    // checked={}
                    // onChange={} 
                    />
                    <label htmlFor='ins' className='ml-0 text-gray-800'>In stock</label>
                </label>
                <div className="text-sky-900">5</div>
            </div>
            <div className="flex justify-between items-center mb-3">
                <label className="flex items-center space-x-2">
                    <input id='oos' type="checkbox" className="h-6 w-6 rounded-md bg-slate-100"
                        disabled
                    // checked={}
                    // onChange={} 
                    />
                    <label htmlFor='oos' className='ml-0 text-gray-300'>Out of stock</label>
                </label>
                <div className="text-sky-900">0</div>
            </div>
        </>
    )
}

export default SideAvaliability