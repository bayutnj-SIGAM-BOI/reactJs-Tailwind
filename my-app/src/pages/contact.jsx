import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team_code: "",
    category: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...FormData,
        category: checked ? value : "",
      });
    } else {
      setFormData({ ...FormData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending");

    const serviceId = "service_tebthrr";
    const templateId = "template_9c4zlll";
    const publicKey = "Ekk7jE3rvBYDgJfKA";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      team_code: formData.team_code,
      category: formData.category,
      message: formData.message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          team_code: "",
          category: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setStatus("failed");
      });
  };

  return (
    <section id="Contact" className="min-h-dvd w-screen bg-black-10 text-blue-50">
      <div className="flex size-full flex-col items-center py-5 pb-20">
        <h2 className="font-general text-sm uppercase md:text-[17px]">
          Curious about robots, coding, or STEAM challenges?
        </h2>

        <div className="text-3xl leading-[0.8] uppercase font-bold mt-5 md:text-[5rem]">
          Contact us
        </div>

        <div className="relative mb-7 mt-36 border border-white/20 w-[45vw] h-full overflow-hidden rounded-[1.5rem]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8">
            <label className="flex flex-col">
              <span className="text-white text-lg mb-4">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-neutral-900 border border-neutral-700 
           text-white placeholder-neutral-500 px-6 py-3 
           focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white text-lg mb-4">Team Code</span>
              <input
                type="text"
                name="team_code"
                maxLength={6}
                value={formData.team_code}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-neutral-900 border border-neutral-700 
           text-white placeholder-neutral-500 px-6 py-3 
           focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white text-lg mb-4">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-neutral-900 border border-neutral-700 
           text-white placeholder-neutral-500 px-6 py-3 
           focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white text-lg mb-4">Message</span>
              <textarea
                type="text"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full rounded-lg bg-neutral-900 border border-neutral-700 
           text-white placeholder-neutral-500 px-6 py-3 
           focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
              />
            </label>

            <button
              type="submit"
              disabled={status === "Sending"}
              className="px-10 py-3 rounded-lg w-fit bg-blue-500 hover:bg-blue-600 
text-white font-semibold transition"
            >
              {status === "Sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="success-text">✅ Message sent successfully!</p>
            )}
            {status === "failed" && (
              <p className="error-text">
                ❌ Failed to send message. Check your EmailJS setup.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
