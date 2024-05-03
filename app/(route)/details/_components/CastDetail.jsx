import { Button } from '@/components/ui/button'
import { GraduationCap, IndianRupee } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment'

function CastDetail({cast}) {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
            {/* Cast Image */}
            <div>
                <Image src={cast.attributes?.Image?.data?.attributes?.url
                }
                alt='profile-image'
                width={200}
                height={200}
                className='rounded-lg h-[270px] object-cover w-full'
                />
            </div>
            {/* Cast Info */}
            <div className='col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline'>
                <h2 className='font-bold text-2xl'>{cast.attributes.Name}</h2>
                <h2 className='flex gap-2 text-gray-500 text-md'>
                    <span>{cast.attributes.Age} years old</span>
                </h2>
                <h2 className='text-md flex gap-2 text-gray-500'>
                    <span>Height : {cast.attributes.Height} m</span>
                </h2>
                <h2 className='text-md flex gap-2 text-gray-500'>
                <IndianRupee />
                    <span>{cast.attributes.CostPerHour} Per Hour</span>
                </h2>
                <h2 className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary">
                    {cast.attributes?.categories?.data[0]?.attributes?.Name}
                  </h2>
                
                <BookAppointment cast={cast} />
            </div>
            
            {/* About Cast */}
        </div>
        <div className='p-3 border-[1px] rounded-lg mt-5'>
        <h2 className='font-bold text-[20px]'>About Me</h2>
        {cast.attributes.About.map((paragraph, index) => (
            <p className='text-gray-500 tracking-wide mt-2' key={index}>{paragraph.children[0].text}</p>
        ))}
    </div>
    </>  
  )
}

export default CastDetail
