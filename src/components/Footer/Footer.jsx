"use client"

import Image from "next/image"

const Footer = () => {
    return(
        <>

        {/* Footer */}
        <div className="bg-cyan-900 w-full md:mt-8 md:p-14 p-5 flex flex-col items-center">
            <Image 
            className="bg-white rounded-xl items-center justify-center"
            src={"/logo.png"} width={70} height={60} priority alt="Logo" />
            <h1 className="text-light text-center text-white md:text-lg mt-3 md:mt-2 text-sm">Jl. Bojong Sari Rt.04/Rw.10, Ciherang, Kec.Ciomas, Kabupaten Bogor.</h1>
        <div className="flex mt-3 md:mt-4">
            <svg width="148" height="40" viewBox="0 0 148 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90.6667 19.9999C90.6667 10.7999 83.2 3.33325 74 3.33325C64.8 3.33325 57.3334 10.7999 57.3334 19.9999C57.3334 28.0666 63.0667 34.7833 70.6667 36.3332V24.9999H67.3334V19.9999H70.6667V15.8333C70.6667 12.6166 73.2834 9.99992 76.5 9.99992H80.6667V14.9999H77.3334C76.4167 14.9999 75.6667 15.7499 75.6667 16.6666V19.9999H80.6667V24.9999H75.6667V36.5833C84.0834 35.7499 90.6667 28.6499 90.6667 19.9999Z" fill="white"/>
                <path d="M135.667 9.7C134.527 8.39937 133.9 6.72905 133.9 5H128.75V25.6667C128.71 26.785 128.238 27.8444 127.433 28.6216C126.628 29.3988 125.552 29.8332 124.433 29.8333C122.067 29.8333 120.1 27.9 120.1 25.5C120.1 22.6333 122.867 20.4833 125.717 21.3667V16.1C119.967 15.3333 114.933 19.8 114.933 25.5C114.933 31.05 119.533 35 124.417 35C129.65 35 133.9 30.75 133.9 25.5V15.0167C135.988 16.5164 138.496 17.3211 141.067 17.3167V12.1667C141.067 12.1667 137.933 12.3167 135.667 9.7Z" fill="white"/>
                <path d="M13 3.33325H27C32.3334 3.33325 36.6667 7.66659 36.6667 12.9999V26.9999C36.6667 29.5637 35.6483 32.0224 33.8354 33.8353C32.0226 35.6481 29.5638 36.6666 27 36.6666H13C7.66671 36.6666 3.33337 32.3333 3.33337 26.9999V12.9999C3.33337 10.4362 4.35182 7.9774 6.16468 6.16455C7.97753 4.3517 10.4363 3.33325 13 3.33325ZM12.6667 6.66659C11.0754 6.66659 9.54928 7.29873 8.42407 8.42394C7.29885 9.54916 6.66671 11.0753 6.66671 12.6666V27.3333C6.66671 30.6499 9.35004 33.3333 12.6667 33.3333H27.3334C28.9247 33.3333 30.4508 32.7011 31.576 31.5759C32.7012 30.4507 33.3334 28.9245 33.3334 27.3333V12.6666C33.3334 9.34992 30.65 6.66659 27.3334 6.66659H12.6667ZM28.75 9.16658C29.3026 9.16658 29.8325 9.38608 30.2232 9.77678C30.6139 10.1675 30.8334 10.6974 30.8334 11.2499C30.8334 11.8025 30.6139 12.3324 30.2232 12.7231C29.8325 13.1138 29.3026 13.3333 28.75 13.3333C28.1975 13.3333 27.6676 13.1138 27.2769 12.7231C26.8862 12.3324 26.6667 11.8025 26.6667 11.2499C26.6667 10.6974 26.8862 10.1675 27.2769 9.77678C27.6676 9.38608 28.1975 9.16658 28.75 9.16658ZM20 11.6666C22.2102 11.6666 24.3298 12.5446 25.8926 14.1074C27.4554 15.6702 28.3334 17.7898 28.3334 19.9999C28.3334 22.2101 27.4554 24.3297 25.8926 25.8925C24.3298 27.4553 22.2102 28.3333 20 28.3333C17.7899 28.3333 15.6703 27.4553 14.1075 25.8925C12.5447 24.3297 11.6667 22.2101 11.6667 19.9999C11.6667 17.7898 12.5447 15.6702 14.1075 14.1074C15.6703 12.5446 17.7899 11.6666 20 11.6666ZM20 14.9999C18.674 14.9999 17.4022 15.5267 16.4645 16.4644C15.5268 17.4021 15 18.6738 15 19.9999C15 21.326 15.5268 22.5978 16.4645 23.5355C17.4022 24.4731 18.674 24.9999 20 24.9999C21.3261 24.9999 22.5979 24.4731 23.5356 23.5355C24.4733 22.5978 25 21.326 25 19.9999C25 18.6738 24.4733 17.4021 23.5356 16.4644C22.5979 15.5267 21.3261 14.9999 20 14.9999Z" fill="white"/>
            </svg>
        </div>
        </div>

        {/* Copyright */}
        <div className="bg-cyan-950 md:p-5 p-2 w-full">
            <h1 className="text-white text-center text-xs md:text-sm">© ZonDev Team 2023. Hak Cipta Dilindungi</h1>
        </div>
        </>
    )
}
export default Footer