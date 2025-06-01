import React from 'react'
import Title from './Title'
import { assets, testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className='bg-[#E4EEF84F] items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
        <Title title='What Our Guest Say' subTitle='Discover why discerning travelers choose QuickStay for their luxury accommodations around the world.'></Title>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
          {
          testimonials.map((item,index) => (
            <div key={item.id} className='bg-white flex flex-col px-6 py-8 rounded-[12px] shadow-xl gap-3'>
              <div className='flex gap-4 items-center'>
                  <img className='w-13 h-13 rounded-full' src={item.image} alt="" />
                  <div>
                    <p className='font-playfair text-[16px] text-[#374151]'>{item.name}</p>
                    <p className='text-[12px]  text-[#374151]/[0.63] '>{item.address}</p>
                  </div>
              </div>
              
              <StarRating></StarRating>
              
              <p className='mt-1 text-[14px] font-medium text-[#374151]/[0.63] text-balance'>"{item.review}"</p>

            </div>
          ))
          }
        </div>
        
    </div>
  )
}

export default Testimonial