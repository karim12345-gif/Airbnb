import React from 'react';
import Image from 'next/image'

function MediumCard({img, title}) {
  return (
      <div className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
          <div className="relative h-80 w-80">
              <Image className='rounded-xl'
              src={img}
              layout='fill'
              />
          </div>
        {/* down side  */}
        <div >
            <h2 className='text-2xl mt-3'>{title}</h2>
        </div>


      </div>
  )
  
}

export default MediumCard;
