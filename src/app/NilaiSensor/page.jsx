"use client";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { database } from "../firebaseConfig";

const NilaiSensor = () => {
  const [sensor, setSensor] = useState({ suhu: 0, ph: 0, ppm: 0 });

  useEffect(() => {
    const sensorDataRef = ref(database, "sensorData");

    const fetchData = () => {
      try {
        onValue(sensorDataRef, (snapshot) => {
          if (snapshot.exists()) {
            const timestamps = Object.keys(snapshot.val());
            const latestTimestamp = timestamps[timestamps.length - 1];
            const latestData = snapshot.val()[latestTimestamp];

            setSensor({
              suhu: parseFloat(latestData.suhu),
              ph: parseFloat(latestData.ph),
              ppm: parseFloat(latestData.ppm),
            });
          } else {
            console.log("No Data Available");
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* LAYOUT */}
      <div className="flex items-center justify-center container mx-auto max-w-6xl mt-6 md:mt-5 mb-10 md:mb-32">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cold-3 gap-9 md:w-full w-64 mb-5 ">
          {/* CARD */}
          <div className="rounded-2xl shadow-2xl text-center md:h-96 bg-cyan-600 hover:bg-cyan-700 transition-all hover:scale-105">
            <div className="p-5 flex flex-col">
              <div className="rounded-none overflow-hidden">
                <h1 className="font-bold rounded-xl text-2xl bg-red-600 p-2 md:p-5 text-white border-2 border-black">
                  SUHU
                </h1>
                <p className="md:text-8xl text-4xl md:pt-20 pt-3 text-white font-semibold md:m-0 m-5">
                  {sensor.suhu.toFixed(1)}
                  {sensor.suhu === NaN ? "" : <span style={{ marginLeft: "5px" }}>{'\u00b0'}</span>}
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
                <p className="md:text-8xl text-4xl md:pt-20 pt-3 text-white font-semibold md:m-0 m-5">
                  {sensor.ppm.toFixed(1)}
                  {sensor.ppm === NaN ? "" : <span></span>}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-2xl text-center md:h-96 bg-cyan-600 hover:bg-cyan-700 transition-all hover:scale-105">
            <div className="p-5 flex flex-col">
              <div className="rounded-none overflow-hidden">
                <h1 className="font-bold rounded-xl text-2xl bg-green-500 p-2 md:p-5 text-white border-2 border-black hover:bg-green-600">
                  pH
                </h1>
                <p className="md:text-8xl text-4xl md:pt-20 pt-3 text-white font-semibold md:m-0 m-5">
                  {sensor.ph.toFixed(1)}
                  {sensor.ph === NaN ? "" : <span></span>}
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
