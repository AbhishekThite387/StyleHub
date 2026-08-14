import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div className="text-gray-700">

      {/* ================= ABOUT HERO ================= */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"ABOUT"} text2={"STYLEHUB"} />
      </div>

      <div className="my-12 flex flex-col md:flex-row gap-12 lg:gap-20 items-center">

        {/* Image */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-md">
          <img
            className="w-full h-[450px] md:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
            src={assets.about_img}
            alt="StyleHub Fashion"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">

          <p className="text-gray-600 leading-7">
            StyleHub is a modern fashion destination created for people who
            believe that great style should be simple, comfortable, and
            accessible. We bring together carefully selected clothing,
            footwear, and everyday fashion pieces so you can discover styles
            that match your personality.
          </p>

          <p className="text-gray-600 leading-7">
            From everyday essentials to statement pieces, our collections are
            designed to make getting dressed easier. We focus on contemporary
            styles, versatile designs, and products that fit naturally into
            your everyday wardrobe.
          </p>

          <div className="pt-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-7">
              Our mission is to make online fashion shopping effortless and
              enjoyable. We want every customer to discover products they love,
              shop with confidence, and enjoy a smooth experience from browsing
              to delivery.
            </p>
          </div>

          {/* Small Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-4">

            <div className="text-center">
              <p className="text-2xl font-semibold text-pink-400">100%</p>
              <p className="text-xs text-gray-500 mt-1">
                Curated Style
              </p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-semibold text-pink-400">24/7</p>
              <p className="text-xs text-gray-500 mt-1">
                Easy Shopping
              </p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-semibold text-pink-400">∞</p>
              <p className="text-xs text-gray-500 mt-1">
                Everyday Style
              </p>
            </div>

          </div>
        </div>
      </div>


      {/* ================= OUR STORY ================= */}
      <div className="my-20 py-12 px-6 md:px-12 bg-gray-50 rounded-md">

        <div className="text-center mb-10">
          <Title text1={"OUR"} text2={"STORY"} />
        </div>

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-gray-600 leading-8 mb-6">
            StyleHub started with a simple idea — fashion should be easy to
            discover and enjoyable to shop. Instead of spending hours searching
            through different stores, we wanted to create one place where
            modern styles could come together.
          </p>

          <p className="text-gray-600 leading-8">
            Today, StyleHub brings together fashion-forward products with a
            clean and simple shopping experience. Whether you're looking for a
            casual outfit, a new pair of shoes, or something special for your
            next occasion, we're here to help you find your style.
          </p>

        </div>
      </div>


      {/* ================= WHY CHOOSE US ================= */}
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mb-20">

        {/* Card 1 */}
        <div className="border px-8 md:px-12 py-10 flex flex-col gap-5 hover:bg-gray-50 transition-colors duration-300">

          <div className="w-12 h-12 flex items-center justify-center border border-pink-300 rounded-full text-pink-400 text-lg">
            01
          </div>

          <h3 className="font-semibold text-gray-900">
            Curated Fashion
          </h3>

          <p className="text-gray-600 leading-7">
            We carefully select styles that combine modern trends with
            everyday versatility, helping you build a wardrobe that feels
            personal and effortless.
          </p>

        </div>


        {/* Card 2 */}
        <div className="border px-8 md:px-12 py-10 flex flex-col gap-5 hover:bg-gray-50 transition-colors duration-300">

          <div className="w-12 h-12 flex items-center justify-center border border-pink-300 rounded-full text-pink-400 text-lg">
            02
          </div>

          <h3 className="font-semibold text-gray-900">
            Quality & Comfort
          </h3>

          <p className="text-gray-600 leading-7">
            Style should feel as good as it looks. Our collection focuses on
            products that offer a balance of quality, comfort, and contemporary
            design.
          </p>

        </div>


        {/* Card 3 */}
        <div className="border px-8 md:px-12 py-10 flex flex-col gap-5 hover:bg-gray-50 transition-colors duration-300">

          <div className="w-12 h-12 flex items-center justify-center border border-pink-300 rounded-full text-pink-400 text-lg">
            03
          </div>

          <h3 className="font-semibold text-gray-900">
            Simple Shopping
          </h3>

          <p className="text-gray-600 leading-7">
            From discovering a product to placing an order, StyleHub keeps
            everything simple with an intuitive interface and a smooth
            shopping experience.
          </p>

        </div>

      </div>


      {/* ================= FASHION STATEMENT ================= */}
      <div className="my-20 flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-md">
          <img
            src={assets.about_img}
            alt="Fashion at StyleHub"
            className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">

          <p className="text-sm tracking-[3px] text-pink-400 mb-3">
            FIND YOUR STYLE
          </p>

          <h2 className="text-3xl md:text-4xl prata-regular text-gray-800 leading-tight mb-6">
            Wear what makes
            <br />
            <span className="text-pink-400">you feel confident.</span>
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            Fashion is more than what you wear — it's how you express
            yourself. StyleHub gives you the freedom to explore different
            looks, experiment with trends, and create a style that feels
            completely your own.
          </p>

          <p className="text-gray-600 leading-7">
            Discover pieces made for everyday moments, special occasions, and
            everything in between.
          </p>

        </div>

      </div>


      {/* ================= NEWSLETTER ================= */}
      <NewsLetterBox />

    </div>
  );
};

export default About;