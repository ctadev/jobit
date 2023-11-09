import React from 'react'
import { useSelector } from 'react-redux'

const Title = ({ title }) => {
    const date = new Date()
    return (
        <div className='pb-7'>
            <h1 className={`font-bold text-[22px] md:text-3xl dark:text-[#F5F5F8]`}>{title}</h1>
            <p className='text-[#92929D] md:text-lg mt-2'>{date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
    )
}

export default Title