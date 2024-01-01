import React from 'react'

const HeaderTop = () => {
    return (
        <div className="justify-between h-12 m-auto mr-16 ml-16 hidden lg:flex md:flex">
            <div className='flex justify-center items-center'>
                <div className="text-slate-600 text-sm hover:text-blue-600 cursor-pointer">Need help? Call us: (+98) 0234 456 789</div>
            </div>
            <div className="justify-center items-center gap-5 flex">
                <div className="w-32 h-10 rounded-lg justify-center items-center gap-3 flex hover:bg-slate-300 cursor-pointer">
                    <div className="justify-center items-center flex">
                        <svg className='stroke-slate-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" strokeWidth="1.5" />
                            <path d="M3.62 8.49C5.59 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <div className="text-slate-600 text-sm font-normal">Our store</div>
                </div>
                <div className="justify-center items-center gap-3 flex">
                    <div className="w-44 h-10 rounded-lg justify-center items-center gap-3 flex hover:bg-slate-300 cursor-pointer">
                        <div className="justify-center items-center flex">
                            <svg className='stroke-slate-600' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="text-slate-600 text-sm font-normal">Track your order</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop