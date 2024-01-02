import InputField from '@/common/components/elements/InputField'
import React from 'react'

const Newsletter = () => {
    return (
        <div className="container mx-auto">
            <div className="flex pt-10">
                <div className="w-[90%] h-36 bg-white rounded-2xl justify-center items-center gap-5 lg:gap-32 flex m-auto">
                    <div className="text-cyan-800 text-2xl font-bold ml-3">Subscribe newsletter</div>
                    <div className="justify-center items-center gap-20 flex mr-3">
                        <div className="relative">
                            <InputField
                                type='text'
                                className="w-96 h-14 pl-6 pr-16 bg-amber-500 rounded-2xl justify-between p-5 flex m-auto text-white placeholder:text-white focus:outline-none focus:border-white"
                                placeholder='Email address'
                            />
                            <svg
                                className="absolute right-5 top-5 cursor-pointer"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.89999 6.31991L16.39 3.48991C20.2 2.21991 22.27 4.29991 21.01 8.10991L18.18 16.5999C16.28 22.3099 13.16 22.3099 11.26 16.5999L10.42 14.0799L7.89999 13.2399C2.18999 11.3399 2.18999 8.22991 7.89999 6.31991Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.61 13.6501L14.19 10.0601"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="justify-center items-center gap-5 hidden lg:flex">
                            <div className="w-11 h-11 justify-center items-center flex">
                                <div className="w-11 h-11 relative">
                                    <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.7375 34.6688V29.1937C10.7375 27.375 12.1625 25.7437 14.1875 25.7437C16.0063 25.7437 17.6375 27.1687 17.6375 29.1937V34.4625C17.6375 38.1187 14.6 41.1563 10.9438 41.1563C7.2875 41.1563 4.25 38.1 4.25 34.4625V22.9125C4.04375 12.375 12.3688 3.84375 22.9063 3.84375C33.4437 3.84375 41.75 12.375 41.75 22.7062V34.2563C41.75 37.9125 38.7125 40.95 35.0563 40.95C31.4 40.95 28.3625 37.9125 28.3625 34.2563V28.9875C28.3625 27.1687 29.7875 25.5375 31.8125 25.5375C33.6313 25.5375 35.2625 26.9625 35.2625 28.9875V34.6688" stroke="#EDA415" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-zinc-600 text-sm font-semibold">Call us 24/7 :<br />(+62) 0123 567 789</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter