import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className='text-gray-700'>

      {/* ================= CONTACT TITLE ================= */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'STYLEHUB'} />
      </div>


      {/* ================= CONTACT HERO ================= */}
      <div className='my-12 flex flex-col md:flex-row gap-12 lg:gap-20 items-center mb-24'>

        {/* Image */}
        <div className='w-full md:w-1/2 overflow-hidden rounded-md'>
          <img
            className='w-full h-[420px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700'
            src={assets.contact_img}
            alt='Contact StyleHub'
          />
        </div>


        {/* Contact Information */}
        <div className='w-full md:w-1/2 flex flex-col gap-7'>

          <div>
            <p className='text-sm tracking-[3px] text-pink-400 mb-2'>
              GET IN TOUCH
            </p>

            <h2 className='text-3xl md:text-4xl prata-regular text-gray-800 mb-5'>
              We'd love to
              <br />
              <span className='text-pink-400'>hear from you.</span>
            </h2>

            <p className='text-gray-600 leading-7'>
              Have a question about a product, your order, or your StyleHub
              experience? Our team is here to help. Send us a message and we'll
              get back to you as soon as possible.
            </p>
          </div>


          {/* Store */}
          <div>
            <p className='font-semibold text-lg text-gray-800 mb-2'>
              StyleHub Studio
            </p>

            <p className='text-gray-500 leading-7'>
              24 Fashion Avenue <br />
              Pune, Maharashtra, India
            </p>
          </div>


          {/* Contact */}
          <div>
            <p className='font-semibold text-lg text-gray-800 mb-2'>
              Contact Information
            </p>

            <p className='text-gray-500 leading-7'>
              Tel: +91 98765 43210 <br />
              Email: support@stylehub.com
            </p>
          </div>


          {/* Working Hours */}
          <div>
            <p className='font-semibold text-lg text-gray-800 mb-2'>
              Customer Support
            </p>

            <p className='text-gray-500 leading-7'>
              Need help with an order, delivery, return, or product?
              <br />
              Our support team is ready to assist you.
            </p>

            <p className='text-gray-500 mt-3'>
              <b className='text-gray-700'>Working Hours:</b>{' '}
              Monday - Saturday, 9:00 AM - 9:00 PM
            </p>
          </div>

        </div>
      </div>


      {/* ================= CONTACT HIGHLIGHTS ================= */}
      <div className='grid grid-cols-1 md:grid-cols-3 border mb-24'>

        <div className='px-8 py-10 text-center border-b md:border-b-0 md:border-r'>
          <div className='text-2xl text-pink-400 mb-3'>
            ✦
          </div>

          <h3 className='font-semibold text-gray-800 mb-2'>
            Product Support
          </h3>

          <p className='text-sm text-gray-500 leading-6'>
            Questions about sizing, products, availability, or styling?
            We're happy to help.
          </p>
        </div>


        <div className='px-8 py-10 text-center border-b md:border-b-0 md:border-r'>
          <div className='text-2xl text-pink-400 mb-3'>
            ♡
          </div>

          <h3 className='font-semibold text-gray-800 mb-2'>
            Order Assistance
          </h3>

          <p className='text-sm text-gray-500 leading-6'>
            Need help tracking an order or understanding our return process?
            Contact our support team.
          </p>
        </div>


        <div className='px-8 py-10 text-center'>
          <div className='text-2xl text-pink-400 mb-3'>
            ✓
          </div>

          <h3 className='font-semibold text-gray-800 mb-2'>
            Quick Response
          </h3>

          <p className='text-sm text-gray-500 leading-6'>
            We aim to respond to customer questions quickly and make every
            shopping experience better.
          </p>
        </div>

      </div>


      {/* ================= NEWSLETTER ================= */}
      <NewsLetterBox />

    </div>
  )
}

export default Contact  