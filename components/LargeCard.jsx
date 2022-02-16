import React from 'react';
import Image from "next/image"

function LargeCard({img, title, description, buttonText}) {
  return (
      <section className='relative py-16 cursor-pointer'>
          {/* image */}
          <div className='relative h-96 min-w-[300px]'>
              <Image
              src={img}
              layout='fill'
              objectFit='cover'
              className='rounded-2xl'
              />

          </div>
          {/* text */}
          <div className='absolute top-32 left-12'>
              <h3 className='text-4xl mb-3 w-64 text-gray-900'>
                  {title}
              </h3>
              <p className='text-gray-400'>
                  {description}
              </p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-5 hover:scale-105 ease-out'>
                  {buttonText}
              </button>

          </div>

      </section>
  )
}

export default LargeCard;
