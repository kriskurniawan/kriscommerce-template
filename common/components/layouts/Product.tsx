import React from 'react'
import Star from '../elements/Star'
import DotSlide from '../elements/DotSlide'
import Button from '../elements/Button'

const Product = () => {
    return (
        <div className="container mx-auto">
            <div className="w-full flex flex-wrap justify-center mb-5 gap-5">
                <div className="w-80 h-80 rounded-2xl border border-zinc-400 justify-center gap-9 flex flex-wrap relative">
                    <img className="w-48 h-44 mt-7 rounded-lg" src="https://source.unsplash.com/188x173?camera" />
                    <div className="w-7 h-7 bg-slate-300 rounded-full justify-center items-center gap-1.5 flex absolute top-10 right-7">
                        <div className="w-3.5 h-3.5">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.873 13.4797C7.66835 13.5519 7.33128 13.5519 7.12663 13.4797C5.38111 12.8838 1.48077 10.3979 1.48077 6.18459C1.48077 4.32471 2.97952 2.81995 4.82736 2.81995C5.92283 2.81995 6.89189 3.34962 7.49981 4.16821C8.10774 3.34962 9.08282 2.81995 10.1723 2.81995C12.0201 2.81995 13.5189 4.32471 13.5189 6.18459C13.5189 10.3979 9.61852 12.8838 7.873 13.4797Z" stroke="#292D32" strokeWidth="0.902856" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5 mb-4">
                        {/* <div className="w-56 h-14 pl-6 bg-blue-300 rounded-2xl justify-between flex items-center">
                            <div className="text-neutral-800 text-base font-semibold font-['Poppins']">Add to cart</div>
                            <div className="w-8 h-8 bg-amber-500 rounded-full flex mr-3">
                                <div className="w-4 h-4 m-auto">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.89203 1.9411H3.1399C3.91443 1.9411 4.52402 2.60806 4.45947 3.37543L3.86423 10.5184C3.76382 11.6873 4.68896 12.6914 5.86511 12.6914H13.5029C14.5356 12.6914 15.4392 11.8451 15.5181 10.8196L15.9054 5.44086C15.9914 4.25037 15.0878 3.28219 13.8902 3.28219H4.6316" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.1116 16.2844C12.6067 16.2844 13.0081 15.883 13.0081 15.3879C13.0081 14.8928 12.6067 14.4915 12.1116 14.4915C11.6165 14.4915 11.2151 14.8928 11.2151 15.3879C11.2151 15.883 11.6165 16.2844 12.1116 16.2844Z" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.37436 16.2844C6.86946 16.2844 7.27081 15.883 7.27081 15.3879C7.27081 14.8928 6.86946 14.4915 6.37436 14.4915C5.87926 14.4915 5.47791 14.8928 5.47791 15.3879C5.47791 15.883 5.87926 16.2844 6.37436 16.2844Z" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.91217 6.24408H15.5181" stroke="white" strokeWidth="1.47531" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div> */}
                        <Button className="w-56 h-14 bg-amber-500 text-white font-semibold font-['Poppins']">Add to cart</Button>
                        <div className="w-16 h-14 pl-6 bg-blue-300 rounded-2xl flex items-center">
                            <div className="w-6 h-6 flex">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5289 12.1127C15.5289 14.0601 13.9553 15.6338 12.0079 15.6338C10.0605 15.6338 8.48682 14.0601 8.48682 12.1127C8.48682 10.1653 10.0605 8.59167 12.0079 8.59167C13.9553 8.59167 15.5289 10.1653 15.5289 12.1127Z" stroke="#292D32" strokeWidth="1.47531" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.008 20.2465C15.4799 20.2465 18.7157 18.2008 20.968 14.66C21.8532 13.2733 21.8532 10.9423 20.968 9.55549C18.7157 6.01475 15.4799 3.96899 12.008 3.96899C8.53612 3.96899 5.30028 6.01475 3.04798 9.55549C2.1628 10.9423 2.1628 13.2733 3.04798 14.66C5.30028 18.2008 8.53612 20.2465 12.008 20.2465Z" stroke="#292D32" strokeWidth="1.47531" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-80 h-80 rounded-2xl border border-zinc-400 justify-center flex flex-wrap relative">
                    <img className="w-48 h-44 mt-7 rounded-lg" src="https://source.unsplash.com/188x173?headphones" />
                    <div className="w-7 h-7 bg-slate-300 rounded-full justify-center items-center gap-1.5 flex absolute top-10 right-7">
                        <div className="w-3.5 h-3.5">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.873 13.4797C7.66835 13.5519 7.33128 13.5519 7.12663 13.4797C5.38111 12.8838 1.48077 10.3979 1.48077 6.18459C1.48077 4.32471 2.97952 2.81995 4.82736 2.81995C5.92283 2.81995 6.89189 3.34962 7.49981 4.16821C8.10774 3.34962 9.08282 2.81995 10.1723 2.81995C12.0201 2.81995 13.5189 4.32471 13.5189 6.18459C13.5189 10.3979 9.61852 12.8838 7.873 13.4797Z" stroke="#292D32" strokeWidth="0.902856" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="gap-2 flex flex-col absolute bottom-5 left-3">
                        <div className="text-sky-900 text-lg font-medium font-['Poppins']">Wireless headphones</div>
                        <div className="text-neutral-600 text-lg font-semibold font-['Poppins']">$11,70</div>
                        <Star />
                    </div>
                </div>
                <div className="w-80 h-80 rounded-2xl border border-zinc-400 justify-center flex flex-wrap relative">
                    <img className="w-48 h-44 mt-7 rounded-lg" src="https://source.unsplash.com/188x173?games" />
                    <div className="w-7 h-7 bg-slate-300 rounded-full justify-center items-center gap-1.5 flex absolute top-10 right-7">
                        <div className="w-3.5 h-3.5">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.873 13.4797C7.66835 13.5519 7.33128 13.5519 7.12663 13.4797C5.38111 12.8838 1.48077 10.3979 1.48077 6.18459C1.48077 4.32471 2.97952 2.81995 4.82736 2.81995C5.92283 2.81995 6.89189 3.34962 7.49981 4.16821C8.10774 3.34962 9.08282 2.81995 10.1723 2.81995C12.0201 2.81995 13.5189 4.32471 13.5189 6.18459C13.5189 10.3979 9.61852 12.8838 7.873 13.4797Z" stroke="#292D32" strokeWidth="0.902856" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="gap-2 flex flex-col absolute bottom-5 left-3">
                        <div className="text-sky-900 text-lg font-medium font-['Poppins']">Play games</div>
                        <div className="text-neutral-600 text-lg font-semibold font-['Poppins']">$11,70</div>
                        <Star />
                    </div>
                </div>
                <div className="w-80 h-80 rounded-2xl border border-zinc-400 justify-center flex flex-wrap relative">
                    <img className="w-48 h-44 mt-7 rounded-lg" src="https://source.unsplash.com/188x173?laptop" />
                    <div className="w-7 h-7 bg-slate-300 rounded-full justify-center items-center gap-1.5 flex absolute top-10 right-7">
                        <div className="w-3.5 h-3.5">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.873 13.4797C7.66835 13.5519 7.33128 13.5519 7.12663 13.4797C5.38111 12.8838 1.48077 10.3979 1.48077 6.18459C1.48077 4.32471 2.97952 2.81995 4.82736 2.81995C5.92283 2.81995 6.89189 3.34962 7.49981 4.16821C8.10774 3.34962 9.08282 2.81995 10.1723 2.81995C12.0201 2.81995 13.5189 4.32471 13.5189 6.18459C13.5189 10.3979 9.61852 12.8838 7.873 13.4797Z" stroke="#292D32" strokeWidth="0.902856" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="gap-2 flex flex-col absolute bottom-5 left-3">
                        <div className="text-sky-900 text-lg font-medium font-['Poppins']">Tablet as a laptop</div>
                        <div className="text-neutral-600 text-lg font-semibold font-['Poppins']">$11,70</div>
                        <Star />
                    </div>
                </div>
                <div className="w-80 h-80 rounded-2xl border border-zinc-400 justify-center flex flex-wrap relative">
                    <img className="w-48 h-44 mt-7 rounded-lg" src="https://source.unsplash.com/188x173?computer" />
                    <div className="w-7 h-7 bg-slate-300 rounded-full justify-center items-center gap-1.5 flex absolute top-10 right-7">
                        <div className="w-3.5 h-3.5">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.873 13.4797C7.66835 13.5519 7.33128 13.5519 7.12663 13.4797C5.38111 12.8838 1.48077 10.3979 1.48077 6.18459C1.48077 4.32471 2.97952 2.81995 4.82736 2.81995C5.92283 2.81995 6.89189 3.34962 7.49981 4.16821C8.10774 3.34962 9.08282 2.81995 10.1723 2.81995C12.0201 2.81995 13.5189 4.32471 13.5189 6.18459C13.5189 10.3979 9.61852 12.8838 7.873 13.4797Z" stroke="#292D32" strokeWidth="0.902856" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="gap-2 flex flex-col absolute bottom-5 left-3">
                        <div className="text-sky-900 text-lg font-medium font-['Poppins']">Computer</div>
                        <div className="text-neutral-600 text-lg font-semibold font-['Poppins']">$11,70</div>
                        <Star />
                    </div>
                </div>
                <div className="w-80 h-80 rounded-2xl border border-zinc-400 justify-center flex flex-wrap relative">
                    <img className="w-48 h-44 mt-7 rounded-lg" src="https://source.unsplash.com/188x173?monitor" />
                    <div className="w-7 h-7 bg-slate-300 rounded-full justify-center items-center gap-1.5 flex absolute top-10 right-7">
                        <div className="w-3.5 h-3.5">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.873 13.4797C7.66835 13.5519 7.33128 13.5519 7.12663 13.4797C5.38111 12.8838 1.48077 10.3979 1.48077 6.18459C1.48077 4.32471 2.97952 2.81995 4.82736 2.81995C5.92283 2.81995 6.89189 3.34962 7.49981 4.16821C8.10774 3.34962 9.08282 2.81995 10.1723 2.81995C12.0201 2.81995 13.5189 4.32471 13.5189 6.18459C13.5189 10.3979 9.61852 12.8838 7.873 13.4797Z" stroke="#292D32" strokeWidth="0.902856" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="gap-2 flex flex-col absolute bottom-5 left-3">
                        <div className="text-sky-900 text-lg font-medium font-['Poppins']">Monitor</div>
                        <div className="text-neutral-600 text-lg font-semibold font-['Poppins']">$11,70</div>
                        <Star />
                    </div>
                </div>
                <div className="w-80 h-80 rounded-2xl border border-zinc-400 justify-center flex flex-wrap relative">
                    <img className="w-48 h-44 mt-7 rounded-lg" src="https://source.unsplash.com/188x173?keyboard" />
                    <div className="w-7 h-7 bg-slate-300 rounded-full justify-center items-center gap-1.5 flex absolute top-10 right-7">
                        <div className="w-3.5 h-3.5">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.873 13.4797C7.66835 13.5519 7.33128 13.5519 7.12663 13.4797C5.38111 12.8838 1.48077 10.3979 1.48077 6.18459C1.48077 4.32471 2.97952 2.81995 4.82736 2.81995C5.92283 2.81995 6.89189 3.34962 7.49981 4.16821C8.10774 3.34962 9.08282 2.81995 10.1723 2.81995C12.0201 2.81995 13.5189 4.32471 13.5189 6.18459C13.5189 10.3979 9.61852 12.8838 7.873 13.4797Z" stroke="#292D32" strokeWidth="0.902856" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="gap-2 flex flex-col absolute bottom-5 left-3">
                        <div className="text-sky-900 text-lg font-medium font-['Poppins']">Mechanical keyboard</div>
                        <div className="text-neutral-600 text-lg font-semibold font-['Poppins']">$11,70</div>
                        <Star />
                    </div>
                </div>
                <div className="w-80 h-80 rounded-2xl border border-zinc-400 justify-center flex flex-wrap relative">
                    <img className="w-48 h-44 mt-7 rounded-lg" src="https://source.unsplash.com/188x173?mouse" />
                    <div className="w-7 h-7 bg-slate-300 rounded-full justify-center items-center gap-1.5 flex absolute top-10 right-7">
                        <div className="w-3.5 h-3.5">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.873 13.4797C7.66835 13.5519 7.33128 13.5519 7.12663 13.4797C5.38111 12.8838 1.48077 10.3979 1.48077 6.18459C1.48077 4.32471 2.97952 2.81995 4.82736 2.81995C5.92283 2.81995 6.89189 3.34962 7.49981 4.16821C8.10774 3.34962 9.08282 2.81995 10.1723 2.81995C12.0201 2.81995 13.5189 4.32471 13.5189 6.18459C13.5189 10.3979 9.61852 12.8838 7.873 13.4797Z" stroke="#292D32" strokeWidth="0.902856" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="gap-2 flex flex-col absolute bottom-5 left-3">
                        <div className="text-sky-900 text-lg font-medium font-['Poppins']">Wireless mouse</div>
                        <div className="text-neutral-600 text-lg font-semibold font-['Poppins']">$11,70</div>
                        <Star />
                    </div>
                </div>
            </div>
            <DotSlide className="mx-auto mt-10" count={2} />
        </div>
    )
}

export default Product