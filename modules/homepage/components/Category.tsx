import { Card } from '@/common/components/elements/Card'
import Link from 'next/link'
import React from 'react'

const Category = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap pt-10 justify-center items-center">
                <div className="gap-8 flex">
                    <Link href="/products">
                        <Card className='w-96 h-36 justify-center items-center gap-11 relative cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 flex m-auto'>
                            <div className="w-9 h-9 bg-gray-200 rounded-full flex cursor-pointer absolute -left-5 hover:bg-amber-400">
                                <div className=" m-auto">
                                    <div className="w-6 h-6">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.07 6.42999L4 12.5L10.07 18.57" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21 12.5H4.17004" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <img className="rounded-lg" src="/assets/img/2-1.png" />
                            <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                                <div className="text-cyan-800 text-2xl font-semibold">Speaker</div>
                                <div className="6Items text-cyan-800 text-lg font-medium">(6 items)</div>
                            </div>
                        </Card>
                    </Link>
                    <Link href="/products">
                        <Card className='w-96 h-36 justify-center items-center gap-11 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 flex m-auto'>
                            <img className="w-32 h-28 rounded-lg" src="/assets/img/5-1.png" />
                            <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                                <div className="text-cyan-800 text-xl font-semibold">Desktop & laptop</div>
                                <div className="text-cyan-800 text-lg font-medium">(6 items)</div>
                            </div>
                        </Card>
                    </Link>
                    <Link href="/products">
                        <Card className='w-96 h-36 justify-center items-center gap-11 relative cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 flex m-auto'>
                            <img className="w-28 h-28 rounded-lg" src="/assets/img/8-1.png" />
                            <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                                <div className="text-cyan-800 text-2xl font-semibold">DSLR camera</div>
                                <div className="text-cyan-800 text-lg font-medium">(6 items)</div>
                            </div>
                            <div className="w-9 h-9 bg-gray-200 rounded-full flex cursor-pointer absolute -right-5 hover:bg-amber-400">
                                <div className="m-auto">
                                    <div className="w-6 h-6">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.93 18.57L21 12.5L14.93 6.43001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4 12.5L20.83 12.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Category