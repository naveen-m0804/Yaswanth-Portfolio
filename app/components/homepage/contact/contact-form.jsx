"use client";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { isValidEmail } from "@/utils/check-email"; // Make sure this utility exists

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.name && userInput.email && userInput.message) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    }
    if (error.email) return;

    setIsLoading(true);

    try {
      await emailjs.send(
        "your_service_id",       // e.g. service_123abc
        "your_template_id",      // e.g. template_xyz456
        {
          from_name: userInput.name,
          from_email: userInput.email,
          message: userInput.message,
        },
        "your_public_key"        // e.g. yH2RvwAxxxxxxxxxxxx
      );

      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact Me</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <div className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-md bg-[#15192c] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none"
            value={userInput.name}
            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
            onBlur={checkRequired}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="rounded-md bg-[#15192c] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none"
            value={userInput.email}
            onChange={(e) => {
              const email = e.target.value;
              setUserInput({ ...userInput, email });
              setError({ ...error, email: !isValidEmail(email) });
            }}
            onBlur={checkRequired}
          />
          {error.email && <p className="text-sm text-red-400">Invalid email address!</p>}

          <textarea
            placeholder="Your Message"
            className="rounded-md bg-[#15192c] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none h-32"
            value={userInput.message}
            onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
            onBlur={checkRequired}
          />

          <div className="flex flex-col items-center gap-3">
            {error.required && (
              <p className="text-sm text-red-400">All fields are required!</p>
            )}

            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
