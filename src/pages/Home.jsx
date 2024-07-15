import React from "react";
import Getquote from "../components/Home/Getquote";
import HeroSection from "../components/Home/Hero";
import InfoSection from "../components/Home/Info";
import TestimonialGrid from "../components/Home/Testimonial";
import MaterialTakeoffs from "../components/Home/MaterialTakeoffs";
import NeedMoreJobs from "../components/Home/Needmorejobs";
import ConstructionInfo from "../components/Home/Detailed";
import WhyHireUs from "../components/Home/WhyHireUs";

function Home() {
  return (
    <div className=" mx-auto">
      <HeroSection></HeroSection>
      <MaterialTakeoffs className="my-[40px]"></MaterialTakeoffs>
      <NeedMoreJobs></NeedMoreJobs>
      <WhyHireUs className="my-[40px]"></WhyHireUs>
      <ConstructionInfo></ConstructionInfo>
      <InfoSection></InfoSection>
      <TestimonialGrid></TestimonialGrid>
      <Getquote></Getquote>
    </div>
  );
}

export default Home;
