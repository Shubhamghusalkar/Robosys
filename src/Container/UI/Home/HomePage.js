import React, { useState } from 'react'
import UIBody from '../../../Component/UI/UIBody'
import HomeBanner from './HomeBanner'
import HomeAbout from './HomeAbout'
import HomeBestSeller from './HomeBestSeller'
import HomeChooseUs from './HomeChooseUs'
import HomeOffer from './HomeOffer'
import HomeTestimonials from './HomeTestimonials'
import { useEffect } from 'react';
import AOS from "aos"
import axios from 'axios'

const HomePage = () => {
  useEffect(() => {
              AOS.init({
                duration: 800,
                easing: "ease-in-out", 
                once: false,
              });
            }, []);
  AOS.refresh();

   const [response,setResponse]=useState("");
   const [error,setError]=useState("");
   const [loading,setLoading]=useState(false);
   const [statusCode,setStatusCode]=useState();

  // const submitData=()=>{
  //   setLoading(true);
  //   axios.post("url",data).then(
  //     (res)=> {
  //       setLoading(false)
  //       setResponse(res.data)
  //     }
  //   ).catch((error)=>{
  //       setLoading(false)
  //       setError(error.response)
  //   })
  // }
   
  return (
    <UIBody 
        content={
            <div>
              <HomeBanner/>
              <HomeAbout />
              <HomeBestSeller />
              <HomeChooseUs />
              <HomeOffer />
              <HomeTestimonials />
            </div>
        }
    />
  )
}

export default HomePage
