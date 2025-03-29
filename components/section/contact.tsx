import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className=" border-2 border-dashed border-black  md:px-20 px-4 md:py-16 py-4 rounded-lg">
        <div className="mb-6 flex items-end md:space-x-10 space-x-4">
          <label
            htmlFor="name"
            className="block text-white text-sm font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full bg-transparent border-b border-white text-white placeholder-white/70 focus:outline-none py-2"
          />
        </div>
        <div className="mb-6 flex items-end md:space-x-10 space-x-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full bg-transparent border-b border-white text-white placeholder-white/70 focus:outline-none py-2"
          />
        </div>
        <div className="mb-6 flex items-end md:space-x-10 space-x-4">
          <label
            htmlFor="subject"
            className="block text-white text-sm font-medium mb-2">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            className="w-full bg-transparent border-b border-white text-white placeholder-white/70 focus:outline-none py-2"
          />
        </div>
        <div className="mb-6 flex items-end md:space-x-10 space-x-4">
          <label
            htmlFor="message"
            className="block text-white text-sm font-medium mb-2">
            Message:
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full bg-transparent border-b border-white text-white placeholder-white/70 focus:outline-none py-2 h-24"
          />
        </div>
        <button
          type="submit"
          className="float-right pb-2 border-b border-yellow-200">
          Send →
        </button>
      </form>
    </div>
  );
}
