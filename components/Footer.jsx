import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-2 bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-2 sm:mb-0">
            <h2 className="text-white text-lg font-semibold">JOY</h2>
          </div>

          <div className="flex mt-2 sm:mt-0">
            <h3 className="text-white text-lg sm:mr-2">Follow :</h3>
            <div className="flex mx-2">
              <Link href="https://github.com/JyotiJ-2021/">
                <img
                  src="/github.svg"
                  alt="GitHub Logo"
                  className="bg-white w-8 h-8 mx-1 sm:mx-2"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/jyoti-kumari-74b921213/">
                <img
                  src="/linkedln.png"
                  alt="LinkedIn Logo"
                  className="bg-white w-8 h-8 mx-1 sm:mx-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
