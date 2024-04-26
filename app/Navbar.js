import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <header className="text-black body-font bg-white">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0 cursor-pointer">
                       <Image alt='Sorry' src={'https://th.bing.com/th/id/OIP.XRMwdl7Ffm6Jl_5xOiAJPQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7'} width={40} height={40}/>
                        <span className="ml-3 text-xl">CurrencyConverter</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                        <Link href={'/'} className="mr-5 hover:text-gray-900 cursor-pointer">Home </Link>
                        <Link href={'http://support.openexchangerates.org/'} className="mr-5 hover:text-gray-900 cursor-pointer">Help</Link>
                        <Link href={'https://docs.openexchangerates.org/reference/currencies-json'} className="mr-5 hover:text-gray-900 cursor-pointer">Currency_List_API</Link>
                    </nav>
                    <Link href={'https://www.frankfurter.app/docs'}>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Currency_Converter_Docs
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    </Link>
                </div>
            </header>
        </>
    )
}
