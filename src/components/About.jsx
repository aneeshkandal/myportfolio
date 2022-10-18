import React from 'react'

const About = () => {
  return (
    <div 
    name='about'
    className=' w-full h-screen bg-gradient-to-b from-blue-500 via-blue-700
    to-blue-900 text-white'>
        <div 
        className=' max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-black'>
                    About
                </p>
            </div>
                <p className=' text-xl mt-20'>
                I like to search about different languages and short 
                projects in my free time which helps me to upgrade myself 
                with more knowledge. 
                Sometimes I keep myself busy buy listening songs or 
                playing games on pc. I like to play cricket, football & 
                badminton.
                </p>
                <br />

                <p className=' text-xl'>
                I have played inter school and intercollege cricket 
                tournaments even tournaments organized by other
                 organizations. I have organized and managed some social 
                events in my society like GaneshUtsav, Blood Camps etc. 
                I like to play instrument like Dhol-Tasha.
                </p>
        </div>
    </div>
  )
}

export default About