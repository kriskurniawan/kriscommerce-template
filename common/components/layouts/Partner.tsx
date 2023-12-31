import React from 'react'
import { PARTNERS } from '@/common/constant/partners'

const Partner = () => {
    return (
        <div className="container mx-auto">
            <div className="felx p-7">
                <div className="flex w-[93%] h-32 bg-sky-100 justify-center items-center gap-14 rounded-2xl m-auto">
                    {PARTNERS.map((partner, index) => (
                        <div key={index} className='transition ease-in-out hover:-translate-y-1 hover:scale-110'>
                            <a href={partner.url} target='_blank' className='cursor-pointer rounded-lg'>
                                <img className="rounded-xl p-2" src={partner.logo} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partner