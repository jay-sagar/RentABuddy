"use client"
import CastList from '@/app/_components/CastList';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function Search({params}) {

  const [castList, setCastList] = useState([]);
  
  useEffect(()=>{
    console.log(params.cname);
    getCast();
  },[]
  )
  
  const getCast = () => {
    GlobalApi.getCastByCategory(params.cname).then(resp=>{
      console.log(resp);
      setCastList(resp.data.data);
    })
  }
  return (
    <div className='mt-5'>
      <CastList heading={params.cname} castList={castList}/>
    </div>
  )
}

export default Search
