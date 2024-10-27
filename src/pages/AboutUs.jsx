import React from "react";
import { NavLink } from 'react-router-dom'

function AboutUs() {
  return (
    <>
      <section className="text-white bg-slate-900 bg-[url('/public/hero-bg.webp')] bg-center">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-indigo-100 via-blue-500 to-green-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              About Us
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src=".././public/about-bg.webp"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-20">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  About Bookify
                </h2>

                <p className="mt-4 text-gray-600">
                  Welcome to Bookify, your ultimate destination for accessing a
                  wide variety of book PDFs—for free! Our mission is to make
                  knowledge, stories, and information accessible to everyone, no
                  matter where you are or what you’re interested in. Whether
                  you’re a student, a professional, or a passionate reader, we
                  provide a vast collection of books across numerous genres,
                  including fiction, non-fiction, academic materials, and much
                  more.
                </p>
                <p className="mt-4 text-gray-600">
                  At Bookify, we believe that knowledge should be free and
                  shared. We are dedicated to curating high-quality PDFs of
                  books from various fields, offering you an easy and convenient
                  way to explore the world of literature, education, and
                  research.
                </p>

                <NavLink
                  to="/book-list"
                  className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 transition"
                >
                  Explore More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
              Why Choose Bookify?
              </h2>

              <p className="mt-4 text-gray-600">
              Our goal is to foster a love of reading and learning by breaking down barriers to access. Dive into the world of books today and let Bookify be your companion in discovering new stories and expanding your knowledge!
              </p>
              <p className="mt-2 text-lg text-gray-600 font-semibold">Happy reading!</p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols">
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >

                <h2 className="mt-2 font-bold">Comprehensive Collection</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                We offer an extensive library of books in different categories.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >

                <h2 className="mt-2 font-bold">Completely Free</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                All our book PDFs are available at no cost—download anytime!
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >

                <h2 className="mt-2 font-bold">User-Friendly Interface</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Find your favorite books with ease using our simple and intuitive platform.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >

                <h2 className="mt-2 font-bold">Accessible Anywhere</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Whether on your laptop, tablet, or smartphone, Bookify is designed for easy access on any device.
                </p>
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
