import Link from 'next/link'
import React from 'react'

export const Broadcum = () => {
    return (
        <div className="max-w-full h-12 flex gap-3 ml-16 items-center">
            <Link href="/">Home</Link>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.95001 4.08001L15.47 10.6C16.24 11.37 16.24 12.63 15.47 13.4L8.95001 19.92" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link href="/products">All category</Link>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.95001 4.08001L15.47 10.6C16.24 11.37 16.24 12.63 15.47 13.4L8.95001 19.92" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}
