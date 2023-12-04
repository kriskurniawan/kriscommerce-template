export default function Category() {
    return (
        <div className="w-full pt-10 justify-center items-center gap-10 flex">
            <div className="w-9 h-9 origin-top-left bg-gray-200 rounded-full justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.07 6.42999L4 12.5L10.07 18.57" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 12.5H4.17004" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-96 h-36 rounded-2xl border border-neutral-400 justify-center items-center gap-11 flex">
                <img className="w-40 h-24" src="https://via.placeholder.com/154x94" />
                <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="text-cyan-800 text-2xl font-semibold font-['Poppins']">Speaker</div>
                    <div className="6Items text-cyan-800 text-lg font-medium font-['Poppins']">(6 items)</div>
                </div>
            </div>
            <div className="w-96 h-36 rounded-2xl border border-neutral-400 justify-center items-center gap-11 flex">
                <img className="w-32 h-28" src="https://via.placeholder.com/122x118" />
                <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="text-cyan-800 text-xl font-semibold font-['Poppins']">Desktop & laptop</div>
                    <div className="text-cyan-800 text-lg font-medium font-['Poppins']">(6 items)</div>
                </div>
            </div>
            <div className="w-96 h-36 rounded-2xl border border-neutral-400 justify-center items-center gap-11 flex">
                <img className="w-28 h-28" src="https://via.placeholder.com/110x119" />
                <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="text-cyan-800 text-2xl font-semibold font-['Poppins']">DSLR camera</div>
                    <div className="text-cyan-800 text-lg font-medium font-['Poppins']">(6 items)</div>
                </div>
            </div>
            <div className="w-9 h-9 origin-top-left bg-gray-200 rounded-full justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.93 18.57L21 12.5L14.93 6.43001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 12.5L20.83 12.5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}