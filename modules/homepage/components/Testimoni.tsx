import React from 'react'
import { TESTIMONI } from '@/common/constant/testimoni'
import { Card } from '@/common/components/elements/Card'
import DotSlide from '@/common/components/elements/DotSlide'

const Testimoni = () => {
    return (
        <div className="container mx-auto">
            <div className="w-full h-60 justify-center items-center gap-5 flex mb-5">
                {TESTIMONI.map((testimoni, index) => (
                    <Card key={index} className="w-[440px] h-60 flex-col justify-center items-start flex hover:bg-slate-100 cursor-pointer">
                        <div className="justify-center items-center gap-9 inline-flex pl-4 mt-4">
                            <div className="w-24 h-24 relative">
                                <div className="w-24 h-24 left-0 top-0 absolute rounded-full border-2 border-amber-500">
                                    <img className="w-20 h-20 left-[6.54px] top-[6.54px] absolute rounded-full" src={testimoni.image} />
                                </div>
                            </div>
                            <div className="w-44 text-sky-900 text-base font-medium">{testimoni.name}</div>
                        </div>
                        <div className="w-[400px] h-20 bg-sky-100 rounded-2xl justify-center items-center flex m-auto">
                            <div className="w-full p-4 text-sky-900 text-sm font-normal">{testimoni.description}</div>
                        </div>
                    </Card>
                ))}
            </div>
            <DotSlide className='p-5 m-auto' count={4} />
        </div>
    )
}

export default Testimoni