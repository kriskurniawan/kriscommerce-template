import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div className="w-full h-16 bg-zinc-100 flex flex-wrap">
            <div className="ml-16 w-52 h-16 bg-amber-500 flex items-center justify-center hover:bg-amber-600 cursor-pointer">
                <div className="text-white font-semibold text-base font-['Poppins'] mr-3">Browse categories</div>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.42 9.45001L13.9 15.97C13.13 16.74 11.87 16.74 11.1 15.97L4.58002 9.45001" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className='mr-20'/>
            <div className="w-32 h-16 flex items-center justify-center hover:bg-amber-500 cursor-pointer group">
                <div className="text-slate-500 font-semibold text-base font-['Poppins'] group-hover:text-white">Home</div>
                <svg className='ml-2 group-hover:stroke-white stroke-slate-500' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.08002 9.45001" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="w-32 h-16 flex items-center justify-center hover:bg-amber-500 cursor-pointer group">
                <div className="text-slate-500 font-semibold text-base font-['Poppins'] group-hover:text-white">Catalog</div>
                <svg className='ml-2 group-hover:stroke-white stroke-slate-500' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.08002 9.45001" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="w-32 h-16 flex items-center justify-center hover:bg-amber-500 cursor-pointer group">
                <div className="text-slate-500 font-semibold text-base font-['Poppins'] group-hover:text-white">Blog</div>
            </div>
            <div className="w-32 h-16 flex items-center justify-center hover:bg-amber-500 cursor-pointer group">
                <div className="text-slate-500 font-semibold text-base font-['Poppins'] group-hover:text-white">Pages</div>
                <svg className='ml-2 group-hover:stroke-white stroke-slate-500' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.08002 9.45001" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="w-32 h-16 flex items-center justify-center hover:bg-amber-500 cursor-pointer group">
                <div className="text-slate-500 font-semibold text-base font-['Poppins'] group-hover:text-white">About us</div>
            </div>

            {/* <Link href="/categories">
                <div className="ml-16 w-52 h-16 bg-amber-500 justify-center items-center gap-4 flex p-auto">
                    <div className="text-white text-base font-medium font-['Poppins']">Browse categories</div>
                    <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.42 9.45001L13.9 15.97C13.13 16.74 11.87 16.74 11.1 15.97L4.58002 9.45001" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="w-full justify-between m-auto flex">
                <div className="ml-5 justify-center items-center gap-7 flex">
                    <Link href="/">
                        <div className="justify-center items-center gap-4 flex hover:bg-amber-500">
                            <div className="text-neutral-700 text-base font-medium font-['Poppins']">Home</div>
                            <div className="w-6 h-6 justify-center items-center flex">
                                <div className="w-6 h-6 relative">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.08002 9.45001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="justify-center items-center gap-4 flex">
                        <div className="text-neutral-700 text-base font-medium font-['Poppins']">Catalog</div>
                        <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.08002 9.45001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
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
                                    <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.07999 9.45001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center gap-4 flex">
                        <div className="text-neutral-700 text-base font-medium font-['Poppins']">About us</div>
                    </div>
                </div>
                <div className="text-sky-900 text-base font-bold font-['Poppins'] mr-16">30 Days Free Return</div>
            </div> */}
        </div>
    )
}

export default Navigation