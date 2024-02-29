"use client"
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const ControlInput = ({ label, id, placeholder }) => {
  useEffect(() => {
    const handleClick = () => {
      const value = document.getElementById(id).value;

      // Perform any necessary validations or API calls here

      // Show SweetAlert success message
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: `${label} value ${value} submitted successfully.`,
      });
    };

    const button = document.getElementById(`${id}_button`);
    if (button) {
      button.addEventListener('click', handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, [id, label]);

  return (
    <div className="text-center text-white text-2xl font-bold mb-3">
      <label htmlFor={id}>{label}</label>
      <div className="md:flex justify-center items-center gap-5 mt-3">
        <input
          placeholder={`${placeholder}`}
          id={id}
          className="md:w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-lg sm:leading-6"
          type="text"
        />
      </div>
      <button
        id={`${id}_button`}
        className="lex w-fill mt-3 justify-center rounded-md bg-slate-800 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="button"
      >
        Submit
      </button>
    </div>
  );
};

const Control = () => {
  return (
    <>
      {/* Layout */}
      <div className="container items-center justify-center max-w-6xl mx-auto mt-6 md:mt-5 mb-10 md:mb-32">
        <form>
          {/* Control PPM */}
          <ControlInput
            label="Control PPM"
            id="Control_PPM"
            placeholder="&nbsp;Input Value"
          />

          {/* Control pH UP */}
          <ControlInput
            label="Control pH UP"
            id="ph_up"
            placeholder="&nbsp;Input Value"
          />

          {/* Control pH Down */}
          <ControlInput
            label="Control pH Down"
            id="ph_down"
            placeholder="&nbsp;Input Value"
          />
        </form>
      </div>
    </>
  );
};

export default Control;
