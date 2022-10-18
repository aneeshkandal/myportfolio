import React from 'react'
import resumeBuilder from '../assets/portfolio/resumeBuilder.png'
const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: resumeBuilder,
            href: "app-debug.apk",
            download: true,
        },
        
       
    ]
    
  return (
    <div name='portfolio' className=' bg-gradient-to-b from-blue-900 via-blue-700
     to-gray-400 w-full text-white md:h-screen'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className='text-4xl font-bold inline 
                border-b-4 border-black'>
                    Portfolio
                </p>
                <p className=' py-8'>
                    Check out some of my work right here
                </p>
            </div>

            

            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 
            sm:px-0'>
                {
                portfolios.map(({id,src,href,download}) =>(
                <div key={id}
                className=' shadow-md shadow-gray-900 rounded-3xl bg-gray-700'>
                    <img src={src} alt="" 
                    className=' rounded-md duration-200 hover:scale-105 mx-auto w-2/3 md:w-full'/>
                    <div className='flex items-center justify-center'>
                        <button 
                        className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={href}
                            download={download}
                            target='_blank'
                            rel='noreferrer'>
                                Demo
                            </a>
                        </button>
                        <button 
                        className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Code
                        </button>
                    </div>
                </div>
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio