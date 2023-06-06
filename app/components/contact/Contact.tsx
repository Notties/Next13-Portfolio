"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";

const Contact = () => {
  const formRef: any = useRef();

  const onSubmit = (e: any) => {
    e.preventDefault();
    try {
      "use server";
      emailjs.sendForm(
        "service_vtjmya8",
        "template_ayeb4fb",
        formRef.current,
        "cSjTQ5DtMKtAOrFdE"
      );
      console.log("Send emailjs success: ");
    } catch (error) {
      console.log("Send emailjs error: ", error);
    }
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 className="text-3xl">Contact Me</h2>

      {/* contact__container */}
      <div
        className="container grid grid-cols-[30%_minmax(58%,_1fr)] gap-[10%]
        max-[1220px]:grid-cols-2
        max-[1220px]:gap-[1rem]
        max-[750px]:grid-cols-1
        max-[750px]:gap-[1rem]
        max-[750px]:w-[90%]
      "
        style={{ display: "grid" }}
      >
        {/* contact__options */}
        <div className="flex flex-col gap-[1.2rem]">
          <article
            className="bg-bg-variant border-1 border-solid rounded-[1rem] p-[2rem] text-center
                hover:bg-opacity-10 backdrop-blur-sm hover:bg-gradient-to-b from-primary-variant transition
                duration-700 hover:cursor-default 
          "
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MdOutlineEmail className="text-primary text-[1.4rem] mb-[0.5rem]" />
            </div>
            <h4>Email</h4>
            <h5>akthakorn@gmail.com</h5>
            <a href="mailto:akthakorn@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article
            className="bg-bg-variant border-1 border-solid rounded-[1rem] p-[2rem] text-center
                hover:bg-opacity-10 backdrop-blur-sm hover:bg-gradient-to-b from-primary-variant transition
                duration-700 hover:cursor-default "
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <RiMessageLine className="text-primary text-[1.4rem] mb-[0.5rem]" />
            </div>
            <h4>Messenger</h4>
            <h5>Akthakorn Traimitr</h5>
            <a href="https://m.me/akthakorn" target="_blank">
              Send a message
            </a>
          </article>
          <article
            className="bg-bg-variant border-1 border-solid rounded-[1rem] p-[2rem] text-center
                hover:bg-opacity-10 backdrop-blur-sm hover:bg-gradient-to-b from-primary-variant transition
                duration-700 hover:cursor-default "
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <HiOutlineChatBubbleOvalLeft className="text-primary text-[1.4rem] mb-[0.5rem]" />
            </div>
            <h4>Line</h4>
            <h5>Knot</h5>
            <a href="https://line.me/ti/p/t2uoXufATl" target="_blank">
              Add friend
            </a>
          </article>
        </div>
        {/* End of contact options */}
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="flex flex-col gap-[1.2rem]"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="w-[100%] p-[1.5rem] rounded-[0.5rem] bg-opacity-0 bg-bg-variant 
            resize-none border-2 border-solid border-primary-variant"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-[100%] p-[1.5rem] rounded-[0.5rem] bg-opacity-0 bg-bg-variant 
            resize-none border-2 border-solid border-primary-variant"
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
            className="w-[100%] p-[1.5rem] rounded-[0.5rem] bg-opacity-0 bg-bg-variant 
            resize-none border-2 border-solid border-primary-variant"
          ></textarea>
          <div className="max-[750px]:text-center">
            
          <button type="submit" className="flex btn btn-primary ">
            Send Message
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
