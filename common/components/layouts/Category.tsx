export default function Category() {
    return (
        <div className="min-w-full h-36 justify-center items-center gap-10 inline-flex mt-10">
            <div className="w-96 h-36 rounded-2xl border border-neutral-400 justify-center items-center gap-11 flex">
            <img className="1 w-32 h-28" src="https://via.placeholder.com/122x118" />
                <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="text-cyan-800 text-2xl font-semibold font-['Poppins']">Speaker</div>
                    <div className="text-cyan-800 text-lg font-medium font-['Poppins']">(6 items)</div>
                </div>
            </div>
            <div className="w-96 h-36 rounded-2xl border border-neutral-400 justify-center items-center gap-11 flex">
                <img className="1 w-32 h-28" src="https://via.placeholder.com/122x118" />
                <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="text-cyan-800 text-xl font-semibold font-['Poppins']">Desktop & laptop</div>
                    <div className="text-cyan-800 text-lg font-medium font-['Poppins']">(6 items)</div>
                </div>
            </div>
            <div className="w-96 h-36 rounded-2xl border border-neutral-400 justify-center items-center gap-11 flex">
            <img className="1 w-32 h-28" src="https://via.placeholder.com/122x118" />
                <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className="text-cyan-800 text-2xl font-semibold font-['Poppins']">DSLR camera</div>
                    <div className="text-cyan-800 text-lg font-medium font-['Poppins']">(6 items)</div>
                </div>
            </div>
            <div className="w-9 h-9 origin-top-left -rotate-180 bg-gray-200 rounded-full justify-center items-center gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                    </div>
                </div>
            </div>
        </div>
    )
}