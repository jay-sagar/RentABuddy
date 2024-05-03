"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import CastList from "./_components/CastList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {

  const [castList, setCastList] = useState([]);

  useEffect(()=>{
    getCastList();
  }, [])

  const getCastList=()=>{
    GlobalApi.getCastList().then(resp=>{
      console.log(resp.data.data);
      setCastList(resp.data.data);
    })
  }
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Search bar + categories */}
      <CategorySearch />

      {/* popular cast list */}
      <CastList castList={castList}/>
    </div>
  );
}
