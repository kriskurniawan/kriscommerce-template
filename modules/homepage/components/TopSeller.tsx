import Button from '@/common/components/elements/Button'
import { Card } from '@/common/components/elements/Card'
import DotSlide from '@/common/components/elements/DotSlide'
import Star from '@/common/components/elements/Star'
import React from 'react'

const TopSeller = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center gap-5 mb-5">
                <Card className="w-[830px] h-[500px] justify-center items-center gap-10 flex relative">
                    <img className="p-3 rounded-2xl" src="/assets/img/jbl-bar.png" />
                    <div className="justify-center items-center flex absolute bottom-10">
                        <DotSlide count={1} />
                    </div>
                    <div className="flex-col justify-center items-start gap-9 inline-flex">
                        <div className="flex-col justify-center items-start gap-4 flex">
                            <div className="text-sky-900 text-xl font-semibold">JBL bar 2.1 deep bass</div>
                            <div className="text-neutral-600 text-lg font-semibold">$11,70</div>
                            <Star count={5} />
                        </div>
                        <div className="justify-center items-center gap-3 flex">
                            <button className="w-20 h-20 bg-sky-100 rounded-full justify-center items-center hover:bg-sky-200">
                                <div className="text-amber-500 text-2xl font-bold">57</div>
                            </button>
                            <button className="w-20 h-20 bg-sky-100 rounded-full justify-center items-center hover:bg-sky-200">
                                <div className="text-amber-500 text-2xl font-bold">11</div>
                            </button>
                            <button className="w-20 h-20 bg-sky-100 rounded-full justify-center items-center hover:bg-sky-200">
                                <div className="text-amber-500 text-2xl font-bold">33</div>
                            </button>
                            <button className="w-20 h-20 bg-sky-100 rounded-full justify-center items-center hover:bg-sky-200">
                                <div className="text-amber-500 text-2xl font-bold">59</div>
                            </button>
                        </div>
                        <div className="justify-center items-center gap-5 inline-flex">
                            <Button className="w-56 h-14 pl-6 justify-between flex items-center bg-blue-300 hover:bg-blue-400 text-slate-800 text-base font-semibold">
                                Add to cart
                                <div className="w-8 h-8 bg-amber-500 rounded-full justify-center items-center flex mr-4">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.89203 1.9411H3.1399C3.91443 1.9411 4.52402 2.60806 4.45947 3.37543L3.86423 10.5184C3.76382 11.6873 4.68896 12.6914 5.86511 12.6914H13.5029C14.5356 12.6914 15.4392 11.8451 15.5181 10.8196L15.9054 5.44086C15.9914 4.25037 15.0878 3.28219 13.8902 3.28219H4.6316" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.1116 16.2844C12.6067 16.2844 13.0081 15.883 13.0081 15.3879C13.0081 14.8928 12.6067 14.4915 12.1116 14.4915C11.6165 14.4915 11.2151 14.8928 11.2151 15.3879C11.2151 15.883 11.6165 16.2844 12.1116 16.2844Z" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.37436 16.2844C6.86946 16.2844 7.27081 15.883 7.27081 15.3879C7.27081 14.8928 6.86946 14.4915 6.37436 14.4915C5.87926 14.4915 5.47791 14.8928 5.47791 15.3879C5.47791 15.883 5.87926 16.2844 6.37436 16.2844Z" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.91217 6.24408H15.5181" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Button>
                            <Button className="w-16 h-14 bg-blue-300 justify-center flex items-center hover:bg-blue-400">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5289 12.1127C15.5289 14.0601 13.9553 15.6338 12.0079 15.6338C10.0605 15.6338 8.48682 14.0601 8.48682 12.1127C8.48682 10.1653 10.0605 8.59167 12.0079 8.59167C13.9553 8.59167 15.5289 10.1653 15.5289 12.1127Z" stroke="#292D32" strokeWidth="1.47531" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.008 20.2465C15.4799 20.2465 18.7157 18.2008 20.968 14.66C21.8532 13.2733 21.8532 10.9423 20.968 9.55549C18.7157 6.01475 15.4799 3.96899 12.008 3.96899C8.53612 3.96899 5.30028 6.01475 3.04798 9.55549C2.1628 10.9423 2.1628 13.2733 3.04798 14.66C5.30028 18.2008 8.53612 20.2465 12.008 20.2465Z" stroke="#292D32" strokeWidth="1.47531" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </Card>
                <div className="flex flex-col">
                    <div className="w-[500px] h-60 rounded-2xl border border-zinc-400 flex-col justify-center items-center gap-4 inline-flex mb-5 cursor-pointer hover:bg-slate-100">
                        <div className="justify-start items-center gap-12 inline-flex">
                            <img className="w-72 h-44 p-2 relative rounded-2xl" src="https://source.unsplash.com/288x176?gaming" />
                            <div className="flex-col justify-center items-start gap-4 inline-flex">
                                <div className="text-sky-900 text-lg font-medium">Play game</div>
                                <div className="text-neutral-600 text-lg font-semibold">$11,70</div>
                                <Star count={5} />
                            </div>
                        </div>
                    </div>
                    <div className="w-[500px] h-60 rounded-2xl border border-zinc-400 flex-col justify-center items-center gap-4 inline-flex cursor-pointer hover:bg-slate-100">
                        <div className="justify-start items-center gap-12 inline-flex">
                            <img className="w-72 h-44 p-2 relative rounded-2xl" src="https://source.unsplash.com/288x176?laptop" />
                            <div className="flex-col justify-center items-start gap-4 inline-flex">
                                <div className="text-sky-900 text-lg font-medium">Play game</div>
                                <div className="text-neutral-600 text-lg font-semibold">$11,70</div>
                                <Star count={5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TopSeller