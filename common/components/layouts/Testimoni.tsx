import React from 'react'
import DotSlide from '../elements/DotSlide'

const Testimoni = () => {
    return (
        <div className="container mx-auto">
            <div className="w-full h-60 justify-center items-center gap-5 flex mb-5">
                <div className="w-[440px] h-60 rounded-2xl border border-zinc-400 flex-col justify-center items-start inline-flex">
                    <div className="justify-center items-center gap-9 inline-flex pl-4 mt-4">
                        <div className="w-24 h-24 relative">
                            <div className="w-24 h-24 left-0 top-0 absolute rounded-full border-2 border-amber-500">
                                <img className="w-20 h-20 left-[6.54px] top-[6.54px] absolute rounded-full" src="https://source.unsplash.com/87x87?profile" />
                            </div>
                        </div>
                        <div className="w-44 text-sky-900 text-base font-medium">Savannah Nguyen</div>
                    </div>
                    <div className="w-[400px] h-20 bg-sky-100 rounded-2xl justify-center items-center flex m-auto">
                        <div className="w-full p-4 text-sky-900 text-sm font-normal">Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</div>
                    </div>
                </div>
                <div className="w-[440px] h-60 rounded-2xl border border-zinc-400 flex-col justify-center items-start inline-flex">
                    <div className="justify-center items-center gap-9 inline-flex pl-4 mt-4">
                        <div className="w-24 h-24 relative">
                            <div className="w-24 h-24 left-0 top-0 absolute rounded-full border-2 border-amber-500">
                                <img className="w-20 h-20 left-[6.54px] top-[6.54px] absolute rounded-full" src="https://source.unsplash.com/87x87?avatar" />
                            </div>
                        </div>
                        <div className="w-44 text-sky-900 text-base font-medium">Esther Howard</div>
                    </div>
                    <div className="w-[400px] h-20 bg-sky-100 rounded-2xl justify-center items-center flex m-auto">
                        <div className="w-full p-4 text-sky-900 text-sm font-normal">Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</div>
                    </div>
                </div>
                <div className="w-[440px] h-60 rounded-2xl border border-zinc-400 flex-col justify-center items-start inline-flex">
                    <div className="justify-center items-center gap-9 inline-flex pl-4 mt-4">
                        <div className="w-24 h-24 relative">
                            <div className="w-24 h-24 left-0 top-0 absolute rounded-full border-2 border-amber-500">
                                <img className="w-20 h-20 left-[6.54px] top-[6.54px] absolute rounded-full" src="https://source.unsplash.com/87x87?people" />
                            </div>
                        </div>
                        <div className="w-44 text-sky-900 text-base font-medium">Esther Howard</div>
                    </div>
                    <div className="w-[400px] h-20 bg-sky-100 rounded-2xl justify-center items-center flex m-auto">
                        <div className="w-full p-4 text-sky-900 text-sm font-normal">Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</div>
                    </div>
                </div>
            </div>
            <DotSlide className='p-5 m-auto' count={5} />
        </div>
    )
}

export default Testimoni