"use client";
import Lottie from "lottie-react";
import contact from "../assets/contact.json";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbFidgetSpinner } from "react-icons/tb";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ac5z6se",
        "template_e1sz7dq",
        form.current,
        "hCegTAUfxk8GFIcW1"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send email. Please try again later.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-6 mb-10  container mx-auto">
      <ToastContainer />
      <h2 className="my-4 font-bold text-3xl text-center mb-16 sm:text-4xl">
        Contact <span className="text-yellow-500">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 flex flex-col items-center justify-center w-full">
          <div className="w-1/2">
            <Lottie animationData={contact} loop={true} />
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 md:w-1/2 w-11/12 mx-auto"
        >
          <div className="space-y-1 text-sm">
            <label className="block">Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="input p-2 text-black w-full rounded-lg border-yellow-500 border"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="input p-2 text-black w-full rounded-lg border-yellow-500 border"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block">Message</label>
            <textarea
              rows={3}
              name="message"
              required
              placeholder="Enter Your message"
              className="input p-2 w-full rounded-lg border-yellow-500 text-black border"
            />
          </div>
          <button
            disabled={loading}
            className="block  w-full p-3 text-center rounded-sm bg-yellow-500 text-white"
            type="submit"
          >
            {loading ? (
              <TbFidgetSpinner className="text-xl text-white animate-spin m-auto" />
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
