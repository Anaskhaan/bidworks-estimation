import React, { useState, useRef } from "react";
import { useEffect } from "react";

const ContactForm = () => {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-screen-lg md:w-4/5 lg:w-3/5 bg-white p-6 md:p-8 rounded-lg shadow-md"
      >
        <p className="mb-4 text-center text-gray-600">
          Please either email your plans at{" "}
          <a
            href="mailto:info@bidworksestimating.com"
            className="text-blue-500 underline"
          >
            info@bidworksestimating.com
          </a>{" "}
          or use this page to send them to us.
        </p>

        <div className="mb-4">
          <input
            type="text"
            placeholder="First Name*"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name*"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div
          className={`mb-4 p-4 border-2 border-dashed rounded-lg text-center cursor-pointer ${
            dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
            accept="image/*,.pdf"
            ref={inputRef}
          />
          {files.length > 0 ? (
            <span>{files.length} file(s) selected</span>
          ) : (
            <span>
              {dragActive
                ? "Release to upload your files"
                : "Click or Drag files to this area to upload. You can upload up to 5 files."}
            </span>
          )}
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Message*"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
