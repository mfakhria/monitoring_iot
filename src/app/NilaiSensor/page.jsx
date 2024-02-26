"use client";
import { getApiResponse } from "@/libs/api.libs";
import Link from "next/link";
import { useEffect, useState } from "react";

const NilaiSensor = () => {
    const [data, setData] = useState(null);

useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
        try {
            const result = await getApiResponse("api", ""); // Ganti sesuai dengan resource dan query Anda

            if (isMounted) {
                setData(result.data);
                console.log("🚀 ~ fetchData ~ data:", result.data);
            }
        } catch (error) {
            console.error("Error in component:", error.message);
        }
    };

    fetchData();

    // Cleanup function to handle unmounting
    return () => {
        isMounted = false;
    };
}, []);
    

    return (
        <>
        {/* LAYOUT */}
        <div className="flex items-center justify-center container mx-auto max-w-6xl mt-4 md:mt-5 mb-12 md:mb-32">
            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cold-3 gap-8 md:w-full w-64 mb-5 ">
            {/* CARD */}
            <div className="rounded-2xl shadow-2xl text-center md:h-96 bg-cyan-600 hover:bg-cyan-700 transition-all hover:scale-105">
                <div className="p-5 flex flex-col">
                <div className="rounded-none overflow-hidden">
                    <h1 className="font-bold rounded-xl text-2xl bg-red-600 p-2 md:p-5 text-white border-2 border-black">
                    SUHU
                    </h1>
                    <p className="md:text-8xl text-4xl md:pt-20 pt-3 text-white font-semibold font">
                    5
                    </p>
                </div>
                </div>
            </div>

            <div className="rounded-2xl shadow-2xl text-center md:h-96 bg-cyan-600 hover:bg-cyan-700 transition-all hover:scale-105">
                <div className="p-5 flex flex-col">
                <div className="rounded-none overflow-hidden ">
                    <h1 className="font-bold rounded-xl text-2xl bg-yellow-400 p-2 md:p-5 text-white border-2 border-black hover:bg-yellow-500">
                    PPM
                    </h1>
                    <p className="md:text-8xl text-4xl md:pt-20 pt-3 text-white font-semibold">
                    5
                    </p>
                </div>
                </div>
            </div>

            <div className="rounded-2xl shadow-2xl text-center md:h-96 bg-cyan-600 hover:bg-cyan-700 transition-all hover:scale-105">
                <div className="p-5 flex flex-col">
                <div className="rounded-none overflow-hidden">
                    <h1 className="font-bold rounded-xl text-2xl bg-green-500 p-2 md:p-5 text-white border-2 border-black hover:bg-green-600">
                    PH
                    </h1>
                    <p className="md:text-8xl text-4xl md:pt-20 pt-3 text-white font-semibold">
                    5
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};
export default NilaiSensor;
