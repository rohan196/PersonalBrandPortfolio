import React from 'react'
import { images } from '../constants'
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Gerícht Restaurant",
    description: "An elegant brochure that showcases exquisite culinary offerings and a welcoming ambiance.",
    image: images.brochure, // Replace with your project image
    link: "#", // Replace with your project link
  },
  {
    id: 2,
    title: "Offshop",
    description: "An eCommerce website that offers a stunning UI, making product discovery an effortless experience.",
    image: images.offshop, // Replace with your project image
    link: "#", // Replace with your project link
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three, highlighting key features and technologies used.",
    image: "https://via.placeholder.com/400x250", // Replace with your project image
    link: "#", // Replace with your project link
  },
];


const Projects = () => {
  return (
    <div className='mt-6 lg:h-[700px] w-full border-mainPink border py-3 px-8 items-center rounded-3xl' id='contact'>
  <div className='mt-4 justify-center flex'>
    <h1 className='text-mainPink text-4xl font-judson font-bold'>Projects</h1>
  </div>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
    {projects.map((project) => (
      <div key={project.id} className="border-mainPink border-opacity-30 border project-card bg-box shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] relative">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute px-8 inset-0 flex flex-col justify-center items-center bg-customGray bg-opacity-90 opacity-0 transition-opacity duration-300 hover:opacity-100 ">
          <h3 className="text-xl font-semibold text-offWhite mb-4">{project.title}</h3>
          <p className="text-offWhite mb-2">{project.description}</p>
          <div className='mt-4'><a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="bg-brownBtn text-customGray font-semibold py-2 px-4 rounded-full">
              View Project
            </button>
          </a>
            </div>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Projects
