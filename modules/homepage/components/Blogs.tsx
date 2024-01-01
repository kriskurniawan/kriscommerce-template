import React from 'react'
import { BLOGS } from '@/common/constant/blogs'
import { Card } from '@/common/components/elements/Card'
import DotSlide from '@/common/components/elements/DotSlide'

const Blogs = () => {
    return (
        <div className="container mx-auto">
            <div className="w-11/12 h-9 gap-96 flex flex-wrap justify-between m-auto p-10 mb-5">
                <div className="text-cyan-800 text-2xl font-semibold">Latest news</div>
                <div className="text-cyan-800 text-xl font-medium cursor-pointer hover:text-blue-500">View all</div>
            </div>
            <div className="flex flex-wrap m-auto gap-5 justify-center mb-5">
                {BLOGS.map((blog, index) => (
                    <Card key={index} className="w-[680px] h-96 justify-center items-center gap-5 flex cursor-pointer hover:bg-slate-100">
                        <img className="rounded-2xl p-4" src={blog.image} />
                        <div className="flex-col justify-center items-start gap-2 flex">
                            <div className="w-36 h-10 rounded-2xl border border-neutral-300 justify-center items-center gap-2.5 inline-flex">
                                <div className="text-cyan-800 text-xl font-medium">{blog.date}</div>
                            </div>
                            <div className="flex-col justify-center items-start gap-11 flex">
                                <div className="flex-col justify-center items-start gap-5 flex">
                                    <div className="text-cyan-800 text-2xl font-semibold">{blog.title}</div>
                                    <div className="w-64 h-24 text-sky-900 text-sm font-normal">{blog.description}</div>
                                </div>
                                <div className="text-sky-900 text-sm font-normal">By {blog.author}</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="p-5 justify-center items-center flex mb-5">
                <DotSlide count={4} />
            </div>
        </div>
    )
}

export default Blogs