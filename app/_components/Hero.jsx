import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <section className="bg-gray-900 text-white flex items-center flex-col">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center gap-2">
            <h1 className="bg-gradient-to-r pb-2 from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Manage Your Expense
              <span className="sm:block pb-2"> Control your Money </span>
            </h1>

            <p className=" mx-auto mt-10 max-w-xl sm:text-xl/relaxed">
              Start Creating your budget ans save ton of money
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/sign-in"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <Image
          src="/dashboard.png"
          alt="Dashboard"
          width={700}
          height={300}
          className="mt-5 rounded-xl border-2"
        />
      </section>
    </div>
  );
}

export default Hero;
