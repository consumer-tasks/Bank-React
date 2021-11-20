import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-blue-400">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-20 w-auto"
                     src="https://www.vectorlogo.zone/logos/monzo/monzo-ar21.svg" alt="Workflow" />
                  <img className="hidden lg:block h-20 w-auto"
                       src="https://www.vectorlogo.zone/logos/monzo/monzo-ar21.svg"
                       alt="Workflow" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

