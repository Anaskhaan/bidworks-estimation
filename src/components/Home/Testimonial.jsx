import React from "react";

const testimonials = [
  {
    text: "This product has completely transformed the way I work. I can't imagine going back to how things were before.",
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    text: "Amazing service and top-notch quality! Highly recommend to anyone looking for the best experience.",
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    text: "A wonderful experience from start to finish. The team was incredibly helpful and the product is fantastic.",
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    text: "I am extremely satisfied with my purchase. The quality is excellent and the customer service was outstanding.",
    name: "Emily White",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const TestimonialGrid = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[80%] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {testimonials.map((testimonial, index) => (
          <div
            className="bg-white border rounded-lg p-6 text-center shadow-md"
            key={index}
          >
            <img
              src={testimonial.image}
              alt={`Testimonial from ${testimonial.name}`}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic mb-4">"{testimonial.text}"</p>
            <p className="font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;
