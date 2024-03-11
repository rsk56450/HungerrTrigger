import { useEffect } from "react";

const ContactBro = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl p-4 m-4 flex justify-center">
          Contact Us Page{" "}
        </h1>
        <form
          className="flex justify-center flex-col "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="border border-black p-2 m-2 w-screen md:w-1/3 flex justify-center mx-auto"
            placeholder="Enter name"
          />

          <textarea
            rows="4"
            cols="50"
            className="border border-black p-2 m-2 w-screen md:w-1/3 h-40 mx-auto"
            placeholder="Send Message"
          />
          <button className="rounded-lg bg-gray-300 m-2 p-2 hover:opacity-80 w-screen md:w-1/3 mx-auto">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default ContactBro;
