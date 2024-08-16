import React from "react";
import { useEffect } from "react";

const samples = [
  {
    title: "Concrete & Lumber",
    image: "assets/projects-thumbnails/Concrete_Lumber.png",
    pdf: "assets/project-samples/Concrete&LumberSample.pdf",
  },
  {
    title: "Drywall and Framing",
    image: "assets/projects-thumbnails/drywall_framing.png",
    pdf: "assets/project-samples/Drywall&FramingSample.pdf",
  },
  {
    title: "Electrical",
    image: "assets/projects-thumbnails/electrical.png",
    pdf: "assets/project-samples/ElectricalSample.pdf",
  },
  {
    title: "GC",
    image: "assets/projects-thumbnails/generalcontractor.png",
    pdf: "assets/project-samples/GCSample.pdf",
  },
  {
    title: "Flooring & Ceiling",
    image: "assets/projects-thumbnails/flooring_ceiling.png",
    pdf: "assets/project-samples/Flooring&CeilingSample.pdf",
  },
  {
    title: "Masonary Takeoff",
    image: "assets/projects-thumbnails/masonry.png",
    pdf: "assets/project-samples/MasonryTakeoffSample.pdf",
  },
  {
    title: "Paint",
    image: "assets/projects-thumbnails/paint.png",
    pdf: "assets/project-samples/PaintSample.pdf",
  },
  {
    title: "Waterproofing",
    image: "assets/projects-thumbnails/waterproofing.png",
    pdf: "assets/project-samples/WaterprofingSample.pdf",
  },
  // Add more samples as needed
];

const SamplesSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 mt-8">
          Takeoff Samples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samples.map((sample, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={sample.image}
                alt={sample.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{sample.title}</h3>
                <p className="text-gray-700">{sample.description}</p>
              </div>
              <div className="absolute inset-0  bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-black font-semibold py-2 px-4 rounded">
                  <a
                    href={sample.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black font-semibold py-2 px-4 rounded"
                  >
                    View More
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SamplesSection;
