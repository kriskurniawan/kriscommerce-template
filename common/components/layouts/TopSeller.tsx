export default function TopSeller() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center gap-5 mb-5">
                <div className="w-[830px] h-[500px] rounded-2xl border border-zinc-400 justify-center items-center gap-10 flex relative">
                    <img className="w-80 h-96 p-3 rounded-2xl" src="https://source.unsplash.com/320x384?speaker" />
                    <div className="justify-center items-center gap-2.5 flex absolute bottom-10">
                        <div className="w-5 h-5 bg-amber-500 rounded-full" />
                        <div className="w-5 h-5 rounded-full border border-zinc-400" />
                    </div>
                    <div className="flex-col justify-center items-start gap-9 inline-flex">
                        <div className="flex-col justify-center items-start gap-4 flex">
                            <div className="text-sky-900 text-xl font-semibold font-['Poppins']">JBL bar 2.1 deep bass</div>
                            <div className="text-neutral-600 text-lg font-semibold font-['Poppins']">$11,70</div>
                            <div className="justify-center items-center gap-2.5 inline-flex" />
                        </div>
                        <div className="justify-center items-center gap-2.5 inline-flex">
                            <div className="w-20 h-20 bg-sky-100 rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="text-amber-500 text-2xl font-bold font-['Poppins']">57</div>
                            </div>
                            <div className="w-20 h-20 bg-sky-100 rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="text-amber-500 text-2xl font-bold font-['Poppins']">11</div>
                            </div>
                            <div className="w-20 h-20 bg-sky-100 rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="text-amber-500 text-2xl font-bold font-['Poppins']">33</div>
                            </div>
                            <div className="w-20 h-20 bg-sky-100 rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="text-amber-500 text-2xl font-bold font-['Poppins']">59</div>
                            </div>
                        </div>
                        <div className="justify-center items-center gap-5 inline-flex">
                            <div className="w-52 h-14 pl-6 bg-blue-300 rounded-2xl justify-start items-center gap-1 flex">
                                <div className="text-neutral-800 text-base font-semibold font-['Poppins']">Add to cart</div>
                                <div className="w-8 h-8 bg-amber-500 rounded-full justify-center items-center gap-2.5 flex">
                                    <div className="w-4 h-4 relative">
                                    </div>
                                </div>
                            </div>
                            <div className="w-16 h-14 pl-6 bg-blue-300 rounded-2xl justify-start items-center gap-2.5 flex">
                                <div className="w-6 h-6 justify-center items-center flex">
                                    <div className="w-6 h-6 relative">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="w-[500px] h-60 rounded-2xl border border-zinc-400 flex-col justify-center items-center gap-4 inline-flex mb-5">
                        <div className="justify-start items-center gap-12 inline-flex">
                            <img className="w-72 h-44 p-2 relative rounded-2xl" src="https://source.unsplash.com/288x176?gaming" />
                            <div className="flex-col justify-center items-start gap-4 inline-flex">
                                <div className="text-sky-900 text-lg font-medium font-['Poppins']">Play game</div>
                                <div className="text-neutral-600 text-lg font-semibold font-['Poppins']">$11,70</div>
                                <div className="justify-center items-center gap-2.5 inline-flex" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[500px] h-60 rounded-2xl border border-zinc-400 flex-col justify-center items-center gap-4 inline-flex">
                        <div className="justify-start items-center gap-12 inline-flex">
                            <img className="w-72 h-44 p-2 relative rounded-2xl" src="https://source.unsplash.com/288x176?laptop" />
                            <div className="flex-col justify-center items-start gap-4 inline-flex">
                                <div className="text-sky-900 text-lg font-medium font-['Poppins']">Play game</div>
                                <div className="text-neutral-600 text-lg font-semibold font-['Poppins']">$11,70</div>
                                <div className="justify-center items-center gap-2.5 inline-flex" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}