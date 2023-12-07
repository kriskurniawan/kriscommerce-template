export default function PopularProduct() {
    return (
        <div className="container mx-auto">
            <div className="w-11/12 justify-between m-auto flex flex-wrap mt-5 mb-5 p-10">
                <div className="PopularProducts text-cyan-800 text-3xl font-semibold font-['Poppins']">Popular products</div>
                <div className="Frame25 w-96 h-11 justify-center items-center gap-3 inline-flex">
                    <div className="Frame21 w-36 h-11 rounded-2xl border border-sky-900 justify-center items-center gap-2.5 flex">
                        <div className="Cameras text-cyan-800 text-base font-medium font-['Poppins']">Cameras</div>
                    </div>
                    <div className="Frame22 w-36 h-11 rounded-2xl border border-zinc-400 justify-center items-center gap-2.5 flex">
                        <div className="Laptops text-cyan-800 text-base font-medium font-['Poppins']">Laptops</div>
                    </div>
                    <div className="Frame23 w-36 h-11 rounded-2xl border border-zinc-400 justify-center items-center gap-2.5 flex">
                        <div className="Tablets text-cyan-800 text-base font-medium font-['Poppins']">Tablets</div>
                    </div>
                    <div className="Frame24 w-36 h-11 rounded-2xl border border-zinc-400 justify-center items-center gap-2.5 flex">
                        <div className="Mouse text-cyan-800 text-base font-medium font-['Poppins']">Mouse</div>
                    </div>
                </div>
            </div>
        </div>
    )
}