import React from 'react'
import DotSlide from '../elements/DotSlide'

const News = () => {
    return (
        <div className="container mx-auto">
            <div className="w-11/12 h-9 gap-96 flex flex-wrap justify-between m-auto p-10 mb-5">
                <div className="text-cyan-800 text-2xl font-semibold">Latest news</div>
                <div className="text-cyan-800 text-xl font-medium">View all</div>
            </div>
            <div className="flex m-auto gap-5 justify-center mb-5">
                <div className="w-[680px] h-96 rounded-2xl border border-stone-300 justify-center items-center gap-8 flex">
                    <img className="w-80 h-72 rounded-2xl" src="https://source.unsplash.com/320x288?article" />
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                        <div className="w-36 h-10 rounded-2xl border border-neutral-300 justify-center items-center gap-2.5 inline-flex">
                            <div className="text-cyan-800 text-xl font-medium">22,oct,2021</div>
                        </div>
                        <div className="flex-col justify-center items-start gap-11 flex">
                            <div className="flex-col justify-center items-start gap-5 flex">
                                <div className="text-cyan-800 text-2xl font-semibold">Who avoids a <br />pain that produces?</div>
                                <div className="w-64 h-24 text-sky-900 text-sm font-normal">Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</div>
                            </div>
                            <div className="text-sky-900 text-sm font-normal">By spacing tech</div>
                        </div>
                    </div>
                </div>
                <div className="w-[680px] h-96 rounded-2xl border border-stone-300 justify-center items-center gap-8 flex">
                    <img className="w-80 h-72 rounded-2xl" src="https://source.unsplash.com/320x288?blog" />
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                        <div className="w-36 h-10 rounded-2xl border border-neutral-300 justify-center items-center gap-2.5 inline-flex">
                            <div className="text-cyan-800 text-xl font-medium">22,oct,2021</div>
                        </div>
                        <div className="flex-col justify-center items-start gap-11 flex">
                            <div className="flex-col justify-center items-start gap-5 flex">
                                <div className="text-cyan-800 text-2xl font-semibold">Who avoids a <br />pain that produces?</div>
                                <div className="w-64 h-24 text-sky-900 text-sm font-normal">Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</div>
                            </div>
                            <div className="text-sky-900 text-sm font-normal">By spacing tech</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 justify-center items-center flex mb-5">
                <DotSlide count={4} />
            </div>
        </div>
    )
}

export default News