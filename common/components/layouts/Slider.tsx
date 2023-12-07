export default function Slider() {
    return (
        <div className="container mx-auto h-[420px] relative">
            <div className="py-24 ml-44 text-cyan-800 text-5xl font-bold font-['Poppins']">Canon<br/>camera</div>
            <img className="1 w-80 h-96 left-[932px] top-[38px] absolute rounded-lg" src="https://source.unsplash.com/331x356?camera" />
            <div className="left-[174px] top-[216px] absolute justify-center items-center gap-5 inline-flex">
                <div className="w-36 h-16 bg-amber-500 rounded-2xl justify-center items-center gap-2.5 flex">
                    <div className="text-white text-base font-semibold font-['Poppins']">Shop now</div>
                </div>
                <div className="w-36 h-16 rounded-2xl border border-cyan-800 justify-center items-center gap-2.5 flex">
                    <div className="text-cyan-800 text-base font-semibold font-['Poppins']">View more</div>
                </div>
            </div>
            <div className="w-28 h-28 left-[1174px] top-[227px] absolute bg-amber-500 rounded-full justify-center items-center gap-3.5 inline-flex">
                <div className="text-white text-xl font-semibold font-['Poppins']">only<br />$89</div>
            </div>
            <div className="left-[296px] top-[326px] absolute justify-center items-center gap-2 inline-flex">
                <div className="w-4 h-4 bg-amber-500 rounded-full" />
                <div className="w-4 h-4 rounded-full border border-zinc-400" />
                <div className="w-4 h-4 rounded-full border border-zinc-400" />
            </div>
        </div>
    )
}