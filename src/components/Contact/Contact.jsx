import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ly41o98",
        "template_lvihhm8",
        form.current,
        "nFktUrRLy-ktEbND6"
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();
        toast.success("Message sent successfully! ");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br  py-24 px-6 md:px-12"
    >
      <ToastContainer />

      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white tracking-tight">Let's Talk</h2>
        <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto">
          Whether it’s an idea, question, or opportunity—I'd love to connect.
        </p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className=" bg-opacity-5 backdrop-blur-sm rounded-xl p-8 md:p-10 max-w-xl w-full shadow-2xl border border-white border-opacity-10">
        <h3 className="text-2xl font-semibold text-white text-center mb-6">
          Send Me a Message 
        </h3>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1e1b3a] text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1e1b3a] text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1e1b3a] text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1e1b3a] text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg hover:scale-[1.02] transition-transform shadow-lg"
          >
            {isSent ? "Sent! 🚀" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
