// import React, { useState, useRef, useEffect } from "react";

// const ContactForm = () => {
//   const [files, setFiles] = useState([]);
//   const [dragActive, setDragActive] = useState(false);
//   const inputRef = useRef(null);

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles(selectedFiles);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     const droppedFiles = Array.from(e.dataTransfer.files);
//     setFiles(droppedFiles);
//   };

//   const handleClick = () => {
//     inputRef.current.click();
//   };

//   const uploadFilesToDropbox = async (files) => {
//     const ACCESS_TOKEN = process.env.REACT_APP_DROPBOX_ACCESS_TOKEN; // Replace with your access token
//     console.log(ACCESS_TOKEN);
//     try {
//       for (const file of files) {
//         const response = await fetch(
//           "https://content.dropboxapi.com/2/files/upload",
//           {
//             method: "POST",
//             headers: {
//               Authorization: `Bearer ${ACCESS_TOKEN}`,
//               "Content-Type": "application/octet-stream",
//               "Dropbox-API-Arg": JSON.stringify({
//                 path: `/${file.name}`,
//                 mode: "add",
//                 autorename: true,
//                 mute: false,
//               }),
//             },
//             body: file,
//           }
//         );

//         if (!response.ok) {
//           const errorText = await response.text(); // Capture error details
//           console.error(`Error details: ${errorText}`); // Log the error response
//           throw new Error(
//             `Error uploading ${file.name}: ${response.statusText}. Details: ${errorText}`
//           );
//         }

//         const result = await response.json();
//         console.log("File uploaded:", result);
//       }
//     } catch (error) {
//       console.error("Error uploading to Dropbox:", error);
//     }
//   };

//   const [loading, setLoading] = useState(false); // Add loading state

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true
//     await uploadFilesToDropbox(files);
//     setLoading(false); // Reset loading state
//     setFiles([]);
//     // Reset other form fields if needed
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-5">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-screen-lg md:w-4/5 lg:w-3/5 bg-white p-6 md:p-8 rounded-lg shadow-md"
//       >
//         <p className="mb-4 text-center text-gray-600">
//           Please either email your plans at{" "}
//           <a
//             href="mailto:info@bidworksestimating.com"
//             className="text-blue-500 underline"
//           >
//             info@bidworksestimating.com
//           </a>{" "}
//           or use this page to send them to us.
//         </p>

//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="First Name*"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Last Name*"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <input
//             type="email"
//             placeholder="Email Address*"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <input
//             type="tel"
//             placeholder="Phone Number*"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           />
//         </div>

//         <div
//           className={`mb-4 p-4 border-2 border-dashed rounded-lg text-center cursor-pointer ${
//             dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
//           }`}
//           onDragOver={handleDragOver}
//           onDragLeave={handleDragLeave}
//           onDrop={handleDrop}
//           onClick={handleClick}
//         >
//           <input
//             type="file"
//             multiple
//             onChange={handleFileChange}
//             className="hidden"
//             accept=".pdf" /// Allow only video files
//             ref={inputRef}
//           />
//           {files.length > 0 ? (
//             <span>{files.length} file(s) selected</span>
//           ) : (
//             <span>
//               {dragActive
//                 ? "Release to upload your files"
//                 : "Click or Drag files to this area to upload. You can upload videos."}
//             </span>
//           )}
//         </div>

//         <div className="mb-4">
//           <textarea
//             placeholder="Message*"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             required
//           ></textarea>
//         </div>

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             disabled={loading} // Disable button while uploading
//             className={`bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
//               loading ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             {loading ? "Sending..." : "SEND"}{" "}
//             {/* Change button text based on loading */}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com"; // This is correct

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

  const uploadFilesToDropbox = async (files) => {
    const ACCESS_TOKEN = process.env.REACT_APP_DROPBOX_ACCESS_TOKEN; // Replace with your access token
    try {
      for (const file of files) {
        const response = await fetch(
          "https://content.dropboxapi.com/2/files/upload",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              "Content-Type": "application/octet-stream",
              "Dropbox-API-Arg": JSON.stringify({
                path: `/${file.name}`,
                mode: "add",
                autorename: true,
                mute: false,
              }),
            },
            body: file,
          }
        );

        if (!response.ok) {
          const errorText = await response.text(); // Capture error details
          throw new Error(
            `Error uploading ${file.name}: ${response.statusText}. Details: ${errorText}`
          );
        }
      }
    } catch (error) {
      console.error("Error uploading to Dropbox:", error);
    }
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Gather user data from form
    const formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      message: e.target[4].value,
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          ...formData,
        },
        process.env.REACT_APP_PUBLIC_KEY
      ); // Replace with your EmailJS user ID

      // Upload files to Dropbox
      await uploadFilesToDropbox(files);

      // Reset form fields
      setFiles([]);
      e.target.reset(); // Reset the form

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
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
            accept=".pdf" // Allow only PDF files
            ref={inputRef}
          />
          {files.length > 0 ? (
            <span>{files.length} file(s) selected</span>
          ) : (
            <span>
              {dragActive
                ? "Release to upload your files"
                : "Click or Drag files to this area to upload. You can upload videos."}
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
            disabled={loading} // Disable button while uploading
            className={`bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "SEND"}
            {/* Change button text based on loading */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
