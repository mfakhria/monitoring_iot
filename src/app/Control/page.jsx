"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ControlInput = ({ label, id, placeholder, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    // Perform any necessary validations or API calls here

    // Alert Notification
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: `${label} value ${inputValue} submitted successfully.`,
    });

    // Invoke the onSubmit callback with the input value
    onSubmit(inputValue);

    // Reset the input field value
    setInputValue("");
  };

  // Label 
  return (
    <div className="text-center text-white text-2xl font-bold mb-3">
      <label htmlFor={id}>{label}</label>
      <div className="md:flex justify-center items-center gap-5 mt-3">
        <input
          placeholder={`${placeholder}`}
          id={id}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="md:w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-lg sm:leading-6"
          type="number"
        />
      </div>

      {/* Button Submit */}
      <button
        id={`${id}_button`}
        className="lex w-fill mt-4 mb-3 justify-center rounded-md bg-slate-800 hover:bg-slate-900 transition-all px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="button"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
};

const ControlSwitch = ({ label, id, onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);

    // Invoke the onToggle callback with the current state of the switch
    onToggle(!isChecked);
  };

  // Switch Button
  return (
    <div className="flex gap-5 max-w-6xl mx-auto items-center justify-center text-center text-white text-2xl font-bold w-40  bg-cyan-600 hover:bg-cyan-700 rounded-lg p-3 transition-all mb-4">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        role="switch"
        onChange={handleToggle}
        className="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
      />
    </div>
  );
};

// Function Switch Control
const Control = () => {
  const handleTimerSubmit = (value) => {
    console.log("Timer value submitted:", value);
  };

  const handlePumpToggle = (isPumpOn) => {
    console.log("Pump state changed:", isPumpOn ? "On" : "Off");
  };

  const handleTapToggle = (isTapOpen) => {
    console.log("Tap state changed:", isTapOpen ? "Open" : "Closed");
  };

  return (
    <>

      {/* Layout */}
      <div className="container items-center justify-center max-w-6xl mx-auto mt-6 md:mt-5 mb-10 md:mb-32">
        <form>
          {/* Control Timer */}
          <ControlInput
            label="Timer"
            id="Set_Timer"
            placeholder="&nbsp;Input Value"
            onSubmit={handleTimerSubmit}
          />

          {/* Control pH UP */}
          <ControlInput
            label="Control pH UP"
            id="ph_up"
            placeholder="&nbsp;Input Value"
            onSubmit={(value) => console.log("pH UP value submitted:", value)}
          />

          {/* Control pH Down */}
          <ControlInput
            label="Control pH Down"
            id="ph_down"
            placeholder="&nbsp;Input Value"
            onSubmit={(value) => console.log("pH Down value submitted:", value)}
          />

          <div className="md:flex">
            {/* Control Pump */}
            <ControlSwitch
              label="Pompa"
              id="control_pompa"
              onToggle={handlePumpToggle}
            />

            {/* Control Tap */}
            <ControlSwitch
              label="Keran"
              id="control_keran"
              onToggle={handleTapToggle}
            />
          </div>
        </form>
      </div>

    </>
  );
};

export default Control;
