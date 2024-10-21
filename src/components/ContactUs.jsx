import React from 'react'
import { images } from '../constants'
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className='mt-6 lg:h-[700px] w-full border-mainPink border py-3 px-8 items-center rounded-3xl' id='contact'>
      <div className='mt-4 justify-center flex'><h1 className='text-mainPink text-4xl font-judson font-bold'>Get in Touch !!!</h1></div>
      <div className='lg:flex justify-around mt-16'>
        <div className='contact-form'>
          <h1 className='text-3xl text-mainPink font-judson'>Send a Message !</h1>
          <div className='flex'>
            <form className='mt-4'>
              <div className='mt-8'><input type='text' className='bg-box py-2 lg:py-4 px-4  lg:w-[400px] rounded-3xl text-offWhite ' placeholder='Name' /></div>
              <div className='mt-8'><input type='email' className='bg-box py-2 lg:py-4 px-4  lg:w-[400px] rounded-3xl text-offWhite ' placeholder='Email' /></div>
              <div className='mt-8'><input type='number' className='bg-box py-2 lg:py-4 px-4  lg:w-[400px] rounded-3xl text-offWhite ' placeholder='Phone' /></div>
              <div className='mt-8'><textarea type='message' className='bg-box py-2 lg:py-4 px-4  lg:w-[400px] rounded-3xl text-offWhite ' placeholder='Message' /></div>
              <div className='mt-8'><button type='submit' className='bg-box py-2 px-8 rounded-3xl text-offWhite font-arima text-lg'>Submit</button></div>
            </form>
          </div>
        </div>
        <div className='lg:my-0 my-16 contact-details items-center'>
          <h1 className='text-3xl text-mainPink font-judson'>Contact Details...</h1>
          <div className='mt-12'>
            <div className='flex gap-4'>
              <div className='my-auto'><img src={images.mail} width={40} /></div>
              <div className='bg-box px-6 py-3 items-center rounded-3xl'><h3 className='text-offWhite text-lg font-judson italic'><a href="mailto:rajputrohan196@outlook.com">rajputrohan196@outlook.com</a></h3></div>
            </div>
            <div>
              <a href='https://www.youtube.com/@justanengineer9873'><img src={images.logo} width={200} className='my-6 mx-auto opacity-85' /></a>
            </div>
            <div className="bg-box flex justify-around py-3 rounded-3xl space-x-4 px-4">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 hover:text-pink-600" size={24} />
              </a>

              {/* LinkedIn - White Icon on Blue Background */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white bg-blue-600 p-1 rounded-full hover:bg-blue-800" size={24} />
              </a>

              {/* GitHub - White Icon on Black Background */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white bg-gray-900 p-1 rounded-full hover:bg-gray-700" size={24} />
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-red-600 hover:text-red-700" size={24} />
              </a>

              {/* Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 hover:text-blue-500" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
