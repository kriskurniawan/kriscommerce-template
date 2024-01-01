import { Card } from '@/common/components/elements/Card'
import { Separator } from '@/common/components/elements/Separator'
import Star from '@/common/components/elements/Star'
import React from 'react'

const ProductDetails = () => {
  return (
    <div className='min-h-full container mx-auto flex p-14'>
      <div className="w-[50%] h-full justify-center items-center gap-5 flex flex-col">
        <Card className="w-[500px] h-96 justify-center items-center gap-5 flex relative cursor-pointer hover:bg-slate-100">
          tes
        </Card>
        <div className="flex m-auto flex-wrap gap-5">
          <Card className="w-60 h-32 justify-center items-center gap-5 flex relative cursor-pointer hover:bg-slate-100">
            tes
          </Card>
          <Card className="w-60 h-32 justify-center items-center gap-5 flex relative cursor-pointer hover:bg-slate-100">
            tes
          </Card>
        </div>
      </div>
      <div className="w-[50%] h-full flex">
        <div className="w-full h-36 flex-col gap-5 flex">
          <div className="flex-col gap-2.5 flex">
            <div className="text-sky-900 text-3xl font-medium">Play game</div>
            <div className="text-neutral-600 text-3xl font-semibold">$11,70</div>
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
        </div>
      </div>
    </div>
  )
}

export default ProductDetails