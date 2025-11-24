import React from "react";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const ContactUs = () => {
  return (
    <div className="w-full bg-gradient-to-l from-[#f6be6a] to-[#cdbeb5] py-16 px-6">
      
      {/* Section Tag + Heading + Subtitle (ALL LEFT ALIGNED NOW) */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="mb-8">
          <span className="px-4 py-1 border-2  bg-white hover:bg-orange-400 font-bold hover:text-white hover:cursor-pointer border-orange-400 text-black rounded-full text-xs tracking-wide">
            🛑 CONNECT & INQUIRIES
          </span>
        </div>

        <h2 className="text-4xl sm:text-7xl font-semibold text-gray-900 mb-8">
          Get in Touch
        </h2>

        <p className="text-gray-600 max-w-2xl">
          Connect with our team for collaboration, corporate partnership,<br/> or
          technical support
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Orange Card */}
        <div className="bg-orange-500 text-white p-8 rounded-xl shadow-md pt-24">
          <h3 className="text-3xl font-bold mb-3">Get  in  touch</h3>
          <p className="text-sm mb-4">
            We’re here to answer your questions and explore opportunities
            together.
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 mb-6">
            <img src={mail} className="h-5 w-5" />
            <a href="mailto:info@kalingavriti.in" className="">
              info@kalingavriti.in
            </a>
          </div>

          {/* Social Section */}
          <h4 className="text-2xl font-semibold mb-2">Join us on social.</h4>
          <p className="text-sm mb-4">
            Be part of the journey. Follow us for insights, news, and progress.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <img src={linkedin} className="h-6 w-6" />
            <img src={twitter} className="h-6 w-6" />
            <img src={facebook} className="h-6 w-6" />
            <img src={instagram} className="h-6 w-6" />
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Enter Details</h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-md w-full"
              />
            </div>

            <input
              type="text"
              placeholder="Phone"
              className="border p-3 rounded-md w-full"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="border p-3 rounded-md w-full"
            ></textarea>

            <button className="bg-orange-500 text-white px-6 py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
