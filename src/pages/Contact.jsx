import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto w-6/12 m-5 p-5">
      <h1 className="text-2xl font-bold text-center">Contact Us</h1>
      <form action="" className="w-full text-center mt-5">
        <input
          type="text"
          placeholder="name"
          className="border border-black rounded-md p-2 m-2 w-6/12"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black rounded-md p-2 m-2 w-6/12"
        />
        <button className="border border-black rounded-md p-2 m-2 w-6/12 bg-blue-800 text-white cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
