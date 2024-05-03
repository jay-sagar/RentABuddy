"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import CastDetail from '../_components/CastDetail';
import CastSuggestionList from '../_components/CastSuggestionList';

function Details({params}) {

    const [cast, setCast] = useState();
    useEffect(() => {
        getCastById();
    },[]);

    const getCastById = () => {
        GlobalApi.getCastById(params.recordId).then(resp=>{
            console.log(resp);
            setCast(resp.data.data);
        })
    }
  return (
    <div className='p-5 md:px-20'>
      <h2 className='font-bold text-[22px]'>
        Details
      </h2>
      <div className='grid lg:grid-cols-4 grid-cols-1'>
        {/* Cast Details */}
        <div className='col-span-3'>
            {cast && <CastDetail cast={cast} />}

        </div>
        {/* Cast Suggestions */}
        <div>
            <CastSuggestionList />
        </div>
      </div>
    </div>
  )
}

export default Details
