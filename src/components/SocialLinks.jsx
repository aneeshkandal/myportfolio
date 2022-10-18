import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillTwitterCircle} from 'react-icons/ai'
const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/aneeshkandal/",
            style: 'rounded-tr-md bg-blue-900 border-t-2 border-black border-r-2'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href:"https://github.com/aneeshkandal",
            style: 'bg-gray-800 border-black border-r-2'
        },
        {
            id: 3,
            child: (
                <>
                    E-mail <HiOutlineMail size={30}/>
                </>
            ),
            href:"mailto:kandal.aneesh25@gmail.com",
            style: 'bg-gray-400 border-black border-r-2'
        },
        {
            id: 4,
            child: (
                <>
                    Twitter <AiFillTwitterCircle size={30}/>
                </>
            ),
            href:"https://twitter.com/KandyAK2195",
            style: 'bg-blue-500 border-black border-r-2'
        },
        {
            id: 5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:"Aneesh A Kandalgaonkar CV.pdf",
            style: 'rounded-br-md bg-red-900 border-b-2 border-black border-r-2',
            download: true,
        }
    ]

  return (
    <div className=' hidden lg:flex flex-col top-[30%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style,download}) =>(
                <li key={id}
                className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md hover:border-0 duration-300 ${style}`} >
                    <a href={href} 
                        className='flex justify-between items-center w-full 
                        text-white '
                        download={download}
                        target='_blank'
                        rel='noreferrer'>
                            
                            {child}
                            
                    </a>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks