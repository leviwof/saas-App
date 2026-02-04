import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <section className='cta-section'>
            <div className='cta-badgge'>Start Learning your way with our AI companions</div>
            <h2 className='text-3xl font-bold'>
                Build and enhance your knowledge with personalized sessions
            </h2>
            <p className="text-lg">Experience learning tailored to your needs with our AI companions.</p>
            <img src="/images/cta.svg" alt="CTA Image" className="w-full max-w-2xl mx-auto mt-6" />
            <button className='btn-primary'>
                <img
                    src="/icons/plus.svg"
                    alt="Plus"
                    width={13}
                    height={13}
                />
                <Link href="/companions/new">Create New Companion</Link>
            </button>
        </section >
    )
}

export default CTA
