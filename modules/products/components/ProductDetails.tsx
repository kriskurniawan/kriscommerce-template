import { Card } from '@/common/components/elements/Card'
import { Separator } from '@/common/components/elements/Separator'
import Star from '@/common/components/elements/Star'
import { PRODUCTS } from '@/common/constant/products'
import React from 'react'

const ProductDetails = () => {
  return (
    <div className='container mx-auto'>
      <div className='min-h-full flex flex-col lg:flex-row py-14'>
        <div className="w-full lg:w-[50%] h-full justify-center items-center gap-5 flex flex-col">
          <Card className="w-[500px] h-96 justify-center items-center gap-5 flex relative cursor-pointer hover:bg-slate-100">
            <img className='p-5' src="/assets/img/cr1.jpg" alt="" />
          </Card>
          <div className="flex m-auto flex-wrap gap-5 group">
            <Card className="w-60 h-32 justify-center items-center gap-5 flex relative cursor-pointer hover:bg-slate-100">
              <img src="/assets/img/ps4c.png" alt="" />
            </Card>
            <Card className="w-60 h-32 justify-center items-center gap-5 flex relative cursor-pointer hover:bg-slate-100">
              <img src="/assets/img/ps4c.png" alt="" />
            </Card>
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-full lg:h-auto lg:flex lg:ml-5">
          <div className="w-[500px] h-full lg:h-auto lg:w-full flex-col gap-2 flex mt-10 lg:mt-0 m-auto">
            <div className="flex-col gap-2.5 flex">
              <div className="text-sky-900 font-semibold text-2xl">Play game</div>
              <div className="text-neutral-600 text-2xl font-semibold">$11,70</div>
            </div>
            <div className="justify-normal gap-2.5 flex">
              <Star count={5} />
              <div className="text-neutral-600 text-sm font-medium">No reviews</div>
            </div>
            <div className="gap-5 flex">
              <div className="text-neutral-800 text-lg font-medium">Availability:</div>
              <div className="gap-3.5 flex">
                <div className="text-green-500 text-lg font-medium">In stock</div>
              </div>
            </div>
            <div className="text-zinc-600 text-base font-small">Hurry up! only 34 product left in stock!</div>
            <Separator />
            <div className="flex items-center">
              <span className='font-semibold'>Color:</span>
              <div className="flex gap-2 ml-3">
                <div className="w-4 h-4 bg-lime-300 rounded-full" />
                <div className="w-4 h-4 bg-neutral-600 rounded-full" />
              </div>
            </div>
            <div className="flex items-center">
              <span className='font-semibold'>Size:</span>
              <div className="flex gap-2 ml-3">
                <button className="w-16 h-8 bg-zinc-100 border items-center justify-center fle focus:bg-blue-200">30</button>
                <button className="w-16 h-8 bg-zinc-100 border items-center justify-center fle focus:bg-blue-200">56</button>
                <button className="w-16 h-8 bg-zinc-100 border items-center justify-center fle focus:bg-blue-200">42</button>
                <button className="w-16 h-8 bg-zinc-100 border items-center justify-center fle focus:bg-blue-200">48</button>
              </div>
            </div>
            <div className="flex items-center">
              <span className='font-semibold'>Quantity:</span>
              <div className="flex gap-0 ml-3">
                <button className="w-10 h-8 bg-zinc-100 border items-center justify-center flex">-</button>
                <input type="text" className="w-14 h-8 bg-zinc-100 border border-slate-200 focus:ring-0 focus:border-slate-200" />
                <button className="w-10 h-8 bg-zinc-100 border items-center justify-center flex">+</button>
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <button className='w-56 h-16 bg-amber-500 text-white text-lg font-medium rounded-full '>Add to cart</button>
              <button className='w-56 h-16 bg-amber-500 text-white text-lg font-medium rounded-full '>Buy it now</button>
              <button className="w-16 h-16 bg-zinc-100 rounded-full justify-center items-center flex hover:bg-amber-600 group">
                <div className="w-9 h-9 justify-center items-center flex">
                  <div className="w-9 h-9 relative">
                    <svg className="group-hover:stroke-white stroke-slate-600" width="36" height="36" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.873 13.4797C7.66835 13.5519 7.33128 13.5519 7.12663 13.4797C5.38111 12.8838 1.48077 10.3979 1.48077 6.18459C1.48077 4.32471 2.97952 2.81995 4.82736 2.81995C5.92283 2.81995 6.89189 3.34962 7.49981 4.16821C8.10774 3.34962 9.08282 2.81995 10.1723 2.81995C12.0201 2.81995 13.5189 4.32471 13.5189 6.18459C13.5189 10.3979 9.61852 12.8838 7.873 13.4797Z" strokeWidth="0.902856" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            <Separator />
            <div className="flex items-center">
              <div className='font-semibold'>Sku:</div>
              <span className='ml-3'>01133-9-9</span>
            </div>
            <div className="flex items-center">
              <div className='font-semibold'>category:</div>
              <div className='flex ml-3 gap-2'>
                <span className='flex text-sm'>20% off,</span>
                <span className='flex text-sm'>49% off</span>
                <span className='flex text-sm'>Alex remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 w-full h-full p-5 justify-center items-center">
        <button className='w-36 h-12 rounded-2xl border border-slate-400 font-semibold'>Description</button>
        <button className='w-36 h-12 rounded-2xl border border-slate-400 bg-sky-900 font-semibold text-white'>Reviews</button>
      </div>
      <div className='p-5 flex justify-center items-center m-auto'>
        <Card className="w-[85%] h-42 p-8 flex flex-col gap-3">
          <span className='font-semibold text-sky-900'>Customer reviews</span>
          <span className='text-slate-500'>No reviews yet</span>
          <button className='bg-sky-900 text-white w-36 h-10 underline'>Write a review</button>
        </Card>
      </div>
    </div>
  )
}

export default ProductDetails