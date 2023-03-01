import React from 'react'
import profilePic from '../../public/Images/logo.png'


function Header() {
    return ( 
    <header className='absolute sticky left-0 top-0 z-50 bg-white/90 w-fu
     backdrop-blur'>
        <div className='mx-auto h-[90px] max-w-7xl px-8 md:px-6'>
            <div className='relative flex h-full items-center justify-between border-b border-slate-500/10 '>
            
            {/* --logo-- */}

                    <div className='w-[12rem] max-w-full'>
                        <a href="#">
                            <img src="profilePic" alt="logo" className='w-full' />
                        </a>

                    </div>




            </div>

        </div>

    </header> 
    );
}

export default Header;
