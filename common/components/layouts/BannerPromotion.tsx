export default function BannerPromotion() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center m-10 relative">
                <img className="w-[1350px] h-[417px] rounded-lg" src="https://source.unsplash.com/1350x417?laptop" />
                <div className="w-32 h-11 bg-amber-500 rounded-2xl justify-center items-center gap-2.5 flex absolute right-72 top-20">
                    <div className="text-white text-sm font-medium font-['Poppins']">New laptop </div>
                </div>
                <div className="w-96 h-24 flex-col justify-center items-center gap-3 flex absolute right-40 top-40">
                    <div className="text-cyan-600 text-4xl font-bold font-['Poppins']">Sale up to 50% off</div>
                    <div className="text-white text-lg font-medium font-['Poppins']">12 inch hd display</div>
                </div>
                <div className="w-32 h-11 bg-amber-500 rounded-2xl justify-center items-center gap-2.5 flex absolute right-72 bottom-20">
                    <div className="text-white text-sm font-medium font-['Poppins']">Shop now </div>
                </div>
            </div>
        </div>
    )
}