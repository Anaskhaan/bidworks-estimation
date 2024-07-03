import React from "react";
import TestimonialGrid from "../components/Testimonial";
import HeroSection from "../components/Hero";
import InfoSection from "../components/Info";

function Home() {
  return (
    <div>
      <HeroSection />
      <h1 className="text-3xl font-bold text-center my-8">
        <InfoSection />
        Your Satisfaction Is Our Top Priority
      </h1>
      <TestimonialGrid />
    </div>
  );
}

export default Home;
