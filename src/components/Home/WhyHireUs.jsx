import React from "react";

const WhyHireUs = () => {
  return (
    <div
      className="gap-6"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        maxWidth: "80%",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <div className="w-[50%]">
        <h2 className="text-3xl font-bold text-[#022140]">Why Hire Us?</h2>
        <p style={{ textAlign: "justify" }}>
          Hire us to do your tedious takeoff work. You will have more time and
          save more money when you use our services. Focus on what’s really
          important and leave this part to us. Our team of project managers and
          engineers are ready to serve you!
        </p>
        <ul style={{ listStyle: "none", paddingLeft: "0", lineHeight: "1.8" }}>
          <li style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "green", marginRight: "10px" }}>✔️</span>USA
            Based
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "green", marginRight: "10px" }}>✔️</span>
            Affordable
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "green", marginRight: "10px" }}>✔️</span>No
            Contracts & No Set Up Fees
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "green", marginRight: "10px" }}>✔️</span>We
            Never Charge For Quotes
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "green", marginRight: "10px" }}>✔️</span>Track
            Your Order with our Client Login Dashboard
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "green", marginRight: "10px" }}>✔️</span>We
            Are Built On Transparency
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "green", marginRight: "10px" }}>✔️</span>
            Hablamos Español
          </li>
        </ul>
      </div>

      <div className="w-[50%] flex justify-center items-center">
        <img
          src="assets/hire.webp"
          alt="Why Hire Us"
          style={{ maxWidth: "100%", height: "auto" }}
          className=" min-h-[300px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default WhyHireUs;
