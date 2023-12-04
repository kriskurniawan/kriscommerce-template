export default function Navigation() {
    return (
        <div className="max-w-full h-16 bg-zinc-100 flex">
            <div className="ml-16 w-56 h-16 bg-amber-500 justify-center items-center gap-4 flex">
                <div className="text-white text-base font-medium font-['Poppins']">Browse categories</div>
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.42 9.45001L13.9 15.97C13.13 16.74 11.87 16.74 11.1 15.97L4.58002 9.45001" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full justify-between m-auto flex">
                <div className="ml-5 justify-center items-center gap-7 flex">
                    <div className="justify-center items-center gap-4 flex">
                        <div className="text-neutral-700 text-base font-medium font-['Poppins']">Home</div>
                        <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.08002 9.45001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center gap-4 flex">
                        <div className="text-neutral-700 text-base font-medium font-['Poppins']">Catalog</div>
                        <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.08002 9.45001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center gap-4 flex">
                        <div className="text-neutral-700 text-base font-medium font-['Poppins']">Blog</div>
                    </div>
                    <div className="justify-center items-center gap-4 flex">
                        <div className="text-neutral-700 text-base font-medium font-['Poppins']">Pages</div>
                        <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.07999 9.45001" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center gap-4 flex">
                        <div className="text-neutral-700 text-base font-medium font-['Poppins']">About us</div>
                    </div>
                </div>
                <div className="text-sky-900 text-base font-bold font-['Poppins'] mr-16">30 Days Free Return</div>
            </div>
        </div>
    )
}