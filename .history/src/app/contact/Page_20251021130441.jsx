"use client";

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";

const socials = {
  github: "https://github.com/sabbirosa/",
  linkedin: "https://www.linkedin.com/in/sabbirosa/",
  email: "mailto:sabbir0727@gmail.com",
  instagram: "https://www.instagram.com/sabbirosa",
  facebook: "https://www.facebook.com/sabbirbinabdullatif",
  twitter: "https://twitter.com/sabbirosa",
};

export default function ContactPage() {
  const [messageVisible, setMessageVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgjwjok", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setMessageVisible(true);
        setFormVisible(false);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Failed to send the message. Please check your connection.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-white text-gray-800 mt-16 px-4 py-20 border-t border-gray-200"
    >
      <div ref={textRef} className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg text-gray-500 mb-1 uppercase tracking-wider">
            Let’s Talk
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Me
          </h3>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Have a question or a project in mind? I’d love to hear from you.
            Fill out the form or connect via social links below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">
              Get in Touch
            </h4>
            <div className="space-y-3 text-gray-600">
              <div>
                <span className="font-medium text-gray-800">Location:</span>{" "}
                Uttara, Dhaka, Bangladesh
              </div>
              <div>
                <span className="font-medium text-gray-800">Email:</span>{" "}
                <a
                  href={socials.email}
                  className="underline hover:text-black transition"
                >
                  sabbir0727@gmail.com
                </a>
              </div>
              <div>
                <span className="font-medium text-gray-800">Phone:</span>{" "}
                <a
                  href="tel:+8801632862927"
                  className="underline hover:text-black transition"
                >
                  +8801632862927
                </a>
              </div>
              <div>
                <span className="font-medium text-gray-800">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/8801632862927"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-black transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-6 text-2xl">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-all"
              >
                <FaGithub />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="text-gray-500 hover:text-black transition-all"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Map */}
            <iframe
              className="mt-8 w-full h-60 rounded-xl border border-gray-300 shadow-sm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.925161647196!2d90.378288!3d23.87664955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1754917737523!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
            {formVisible && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="from_name"
                    className="text-gray-700 font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="reply_to"
                    className="text-gray-700 font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    required
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-gray-700 font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg transition-all hover:bg-black"
                >
                  Send Message
                </button>
              </form>
            )}

            {messageVisible && (
              <div className="mt-4 text-lg text-green-600 font-medium">
                ✅ Thank you for your message!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
