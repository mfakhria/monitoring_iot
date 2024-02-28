"use client"
import { User } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"



const Navbar = () => {
    return (
        <nav className="flex md:flex-row md:max-w-6xl md:mx-auto md:justify-between flex-col items-center mt-5 md:pb-12">
            {/* <svg className="" width="51"  height="60" viewBox="0 0 51 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 18.2648C0 16.9695 0.627248 15.7543 1.68317 15.0041L16.4832 4.48828C19.1316 2.60647 22.8 4.50006 22.8 7.74899V56C22.8 58.2091 21.0091 60 18.8 60H4C1.79086 60 0 58.2091 0 56V18.2648Z" fill="#85E087"/>
                <path d="M50.4 35.6648C50.4 34.3695 49.7728 33.1543 48.7169 32.4041L33.9169 21.8883C31.2684 20.0065 27.6 21.9001 27.6 25.149V56C27.6 58.2092 29.3909 60 31.6 60H46.4C48.6092 60 50.4 58.2092 50.4 56V35.6648Z" fill="#374267"/>
                <circle cx="11.4" cy="48.6" r="4.2" fill="#0F1837"/>
                <circle cx="39" cy="48.6" r="4.2" fill="#0F1837"/>
            </svg> */}
            <Image 
            className="bg-white rounded-full w-16 h-16"
            src={"/logo.png"} 
            width="0"
            height="0"
            sizes="100vw" 
            priority alt="Logo"/>
                <ul className="flex flex-row gap-5 md:gap-7 justify-between p-2">
                    <li className="md:text-xl text-gray-200 hover:text-green-500 transition-all"><Link href="/">Home</Link></li>
                    <li className="md:text-xl text-gray-200 hover:text-green-500 transition-all"><Link href="/NilaiSensor">Nilai Sensor</Link></li>
                    <li className="md:text-xl text-gray-200 hover:text-green-500 transition-all"><Link href="/GrafikSensor">Grafik Sensor</Link></li>
                    <li className="md:text-xl text-gray-200 hover:text-green-500 transition-all"><Link href="/About">About</Link></li>
                </ul>
            <div>
                <button className="bg-green-500 md:px-7 md:text-xl text-sm rounded-full p-2 text-white hover:bg-green-600 hover:text-yellow-400"><User size={25}/></button>
            </div>
        </nav>
    )
}

export default Navbar