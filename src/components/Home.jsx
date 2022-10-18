import React from 'react'
import heroImage from '../assets/heroImage.JPG'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" 
    className='h-screen w-full  bg-gradient-to-b
     from-blue-900 via-blue-600 to-blue-500 '>

        <div className='max-w-screen-lg mx-auto flex items-center 
        justify-center h-full px-4 md:flex-row'>

            <div className='flex flex-col justify-center h-4 mx-10'>
                <h2 className='text-4xl sm:text-7xl font-bold 
                text-white mt-40 animate-pulse'>
                    I'm a Web Developer
                </h2>

                <p className=' text-white py-4 max-w-md'>
                    To acquire valuable knowledge and skills to complement those that I have learned
                    in an actual job environment. I offer my service and determination
                    to be an asset to your company throughout the duration of my traning period.
                    To work in a challenging and dynamic environment and keep adding value to 
                    organization that I represent and serve, also concurrently upgrading my
                    skills and knowledge. I am up for learning new things and exploring. As 
                    a fresher, I am committed to achieve organization's objectives.
                </p>

                <div >
                    <Link to='portfolio' smooth duration={500}
                    className='group text-white w-fit px-6 py-3 my-2 
                    flex items-center 
                    rounded-md bg-gradient-to-r from-green-600
                    to-green-400 '>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300 px-2 '>
                            <BsArrowRightCircleFill size={25} 
                            className=' ml-1 '/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='hover:scale-105 duration-500'>
                <img 
                    src={heroImage} 
                    alt="my profile" 
                    className='rounded-2xl mx-auto w-2/3 md:w-full sm:w-auto' />
            </div>
        </div>
    </div>
  )
}

export default Home