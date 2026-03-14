import React from 'react'
import TagBtn from '../TagBtn'

const OpenPositions = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">
            <div className="flex justify-center mb-3 sm:mb-4">
                <TagBtn name="Open Positions" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-10 sm:mb-12 text-center">
                Interested in Working With Us?
            </h2>

            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-start">
                <div className="rounded-sm shadow-card border border-divider p-4 flex flex-col items-end md:justify-between gap-4">

                        <div className=' text-start w-full'>
                            <h3 className="text-lg font-semibold text-primary underline">
                                Electrician
                            </h3>

                            <p className="text-sm text-text-secondary mt-1 max-w-md">
                                Skilled electricians are invited to apply for training and domestic or international job opportunities.
                            </p>

                            <div className="flex gap-4 text-xs text-text-muted mt-3">
                                <span>Location: Multiple</span>
                                <span>Type: Full Time</span>
                                <span>Experience: 1–3 Years</span>
                            </div>
                        </div>

                        <button className=" w-fit bg-slate-800 text-white px-4 py-1.5 rounded-sm text-sm hover:opacity-90 transition">
                            Apply Now
                        </button>

                </div>
            </div>
        </section>
    )
}

export default OpenPositions