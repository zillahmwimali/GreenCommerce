import React from 'react'
import logo from '../../public/Images/freshfarm.png'


function Header() {
    return ( 
    <header className='absolute sticky left-0 top-0 z-50 bg-white/90 w-fu
     backdrop-blur'>
        <div className='mx-auto h-[90px] max-w-7xl px-8 md:px-6'>
            <div className='relative flex h-full items-center justify-between border-b border-slate-500/10 '>
            
            {/* --logo-- */}

                    <div className='w-[12rem] max-w-full'>
                        <a href="#">
                            <img src="https://t3.ftcdn.net/jpg/03/38/96/32/360_F_338963211_ci8ZBNaZaFbGAQSi5MxSXtv5mzGE55eX.jpg" alt="logo" className='w-full' />
                        </a>

                    </div>

                                {/* --menu-- */}

                    <div className='flex, w-full items-center justify-between'>
                            <nav className='absolute right-0 top-[90px] w-full max-w-[350px] rounded-lg border-blue-200 bg-white py-5 px-6 shadow-lg shadow-blue-400/5 transition-all lg:static lg:block lg:max-w-full lg:border-none lg:shadow-none lg:bg-transparent lg:px-0 lg:py-0'>

                                <ul className='flex flex-col justify-center gap-8 lg:flex-row'>
                                    <li>
                                        <a href='#' className='text-lg font-medium text-slate-700 duration-200 hover:text-[#48BF59] lg:text-base'> 
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'className='text-lg font-medium text-slate-700 duration-200 hover:text-[#48BF59] lg:text-base'> 
                                            About
                                        </a>
                                    </li><li>
                                        <a href='#' className='text-lg font-medium text-slate-700 duration-200 hover:text-[#48BF59] lg:text-base'> 
                                            Services 
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='text-lg font-medium text-slate-700 duration-200 hover:text-[#48BF59] lg:text-base'> 
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='text-lg font-medium text-slate-700 duration-200 hover:text-[#48BF59] lg:text-base'> 
                                            Blog
                                        </a>
                                    </li><li>
                                        <a href='#' className='text-lg font-medium text-slate-700 duration-200 hover:text-[#48BF59] lg:text-base'> 
                                            Contact
                                        </a>
                                    </li>
                                </ul>

                            </nav>
                    </div>

                                {/* --sign up btn-- */}

            <div className='flex'>
                <a href="" className='mr-10'>

                </a>
            </div>




            </div>

        </div>

    </header> 
    );
}

export default Header;
