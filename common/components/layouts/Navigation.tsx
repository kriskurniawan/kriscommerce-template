import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div className="w-full h-16 bg-zinc-100 sticky top-16 z-50 hidden lg:block">
            <div className="flex justify-between">
                <div className='flex flex-wrap'>
                    <Link href="/products" className="ml-16 w-52 h-16 bg-amber-500 flex items-center justify-center hover:bg-amber-600">
                        <div className="text-white font-semibold text-base mr-3">Browse categories</div>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.42 9.45001L13.9 15.97C13.13 16.74 11.87 16.74 11.1 15.97L4.58002 9.45001" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <div className='mr-20' />
                    <Link href="/" className="w-32 h-16 flex items-center justify-center hover:bg-amber-500 group">
                        <div className="text-slate-500 font-semibold text-base group-hover:text-white">Home</div>
                        <svg className='ml-2 group-hover:stroke-white stroke-slate-500' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.08002 9.45001" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link href="/products" className="w-32 h-16 flex items-center justify-center hover:bg-amber-500 cursor-pointer group">
                        <div className="text-slate-500 font-semibold text-base group-hover:text-white">Catalog</div>
                        <svg className='ml-2 group-hover:stroke-white stroke-slate-500' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.08002 9.45001" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <div className="w-32 h-16 flex items-center justify-center hover:bg-amber-500 cursor-pointer group">
                        <div className="text-slate-500 font-semibold text-base group-hover:text-white">Blog</div>
                    </div>
                    <div className="w-32 h-16 flex items-center justify-center hover:bg-amber-500 cursor-pointer group">
                        <div className="text-slate-500 font-semibold text-base group-hover:text-white">Pages</div>
                        <svg className='ml-2 group-hover:stroke-white stroke-slate-500' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.92 9.45001L13.4 15.97C12.63 16.74 11.37 16.74 10.6 15.97L4.08002 9.45001" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="w-32 h-16 flex items-center justify-center hover:bg-amber-500 cursor-pointer group">
                        <div className="text-slate-500 font-semibold text-base group-hover:text-white">About us</div>
                    </div>
                </div>
                <div className='font-semibold items-center flex mr-16 text-sky-800'>
                    <a href="">30 Days Free Return</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation