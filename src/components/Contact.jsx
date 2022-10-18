import React from 'react'

const Contact = () => {
  return (
    <div 
    name='contact' 
    className=' bg-gradient-to-b from-black via-green-800 to-green-400 w-full md:h-screen
     p-4 text-white'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col 
        justify-center w-full h-full text-white mt-40 sm:mt-1' >
            <div className=' pb-8'>
                <p className=' text-4xl font-bold border-b-4
                 border-black p-2 inline'>
                    Contact
                </p>
                <p className=' py-6'>
                    Submit the form below to contact me
                </p>
            </div>

            <div className='flex justify-center items-center'>
                <form 
                action="https://getform.io/f/6dfa4fce-c00a-405a-9a66-6c004a20a6dc" 
                method='POST'
                className=' flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' 
                    placeholder='Enter your full name'
                    className=' p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none'/>

                    <input type="text" name='email' 
                    placeholder='Enter your email'
                    className=' my-4 p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none'/>

                    <textarea 
                    name="message"
                    placeholder='Enter your message'
                    rows="10" 
                    className=' p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none' >

                    </textarea>

                    <button 
                    className=' text-white bg-gradient-to-b 
                    from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex
                     items-center rounded-md hover:scale-110 duration-300'>
                        Let's Connect
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact