import React from 'react'

const CartSection = () => {
    return (
        <div className="ml-auto mr-24 h-10 hidden md:hidden lg:flex">
            <div className="w-28 h-10 justify-center items-center gap-3 flex hover:bg-amber-600 cursor-pointer rounded-lg">
                <div className="justify-center items-center flex">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7894 12C15.5509 12 17.7894 9.76142 17.7894 7C17.7894 4.23858 15.5509 2 12.7894 2C10.028 2 7.78943 4.23858 7.78943 7C7.78943 9.76142 10.028 12 12.7894 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.3794 22C21.3794 18.13 17.5294 15 12.7894 15C8.04943 15 4.19943 18.13 4.19943 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="text-white text-sm font-normal">Sign in</div>
            </div>
            <div className="w-32 h-10 justify-center items-center gap-3 flex hover:bg-amber-600 cursor-pointer rounded-lg">
                <div className="justify-center items-center flex">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4094 20.81C13.0694 20.93 12.5094 20.93 12.1694 20.81C9.26943 19.82 2.78943 15.69 2.78943 8.69001C2.78943 5.60001 5.27943 3.10001 8.34943 3.10001C10.1694 3.10001 11.7794 3.98001 12.7894 5.34001C13.7994 3.98001 15.4194 3.10001 17.2294 3.10001C20.2994 3.10001 22.7894 5.60001 22.7894 8.69001C22.7894 15.69 16.3094 19.82 13.4094 20.81Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="w-3.5 h-3.5 bg-amber-500 rounded-full flex-col justify-center items-center gap-2 inline-flex">
                        <div className="text-white text-xs font-normal">0</div>
                    </div>
                </div>
                <div className="text-white text-sm font-normal">Wishlist</div>
            </div>
            <div className="w-32 h-10 justify-center items-center gap-3 flex hover:bg-amber-600 cursor-pointer rounded-lg">
                <div className="justify-center items-center flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.99995 2H3.73996C4.81996 2 5.66996 2.93 5.57996 4L4.74995 13.96C4.60995 15.59 5.89995 16.99 7.53995 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.5399 6.88C21.6599 5.22 20.3999 3.87 18.7299 3.87H5.81996" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.25 22C16.9403 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9403 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.24995 22C8.94031 22 9.49995 21.4404 9.49995 20.75C9.49995 20.0596 8.94031 19.5 8.24995 19.5C7.5596 19.5 6.99995 20.0596 6.99995 20.75C6.99995 21.4404 7.5596 22 8.24995 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.99995 8H21" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="w-3.5 h-3.5 bg-amber-500 rounded-full flex-col justify-center items-center gap-2 inline-flex">
                        <div className="text-white text-xs font-normal">0</div>
                    </div>
                </div>
                <div className="text-white text-sm font-normal">Cart</div>
            </div>
        </div>
    )
}

export default CartSection