import { useState } from "react";

export default function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    technology: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Submitting...");

    try {
      const response = await fetch("http://127.0.0.1:8000/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (data.success) {
        setStatus("🚀 Welcome to TECHNOVA!");

        setForm({
          name: "",
          email: "",
          phone: "",
          technology: "",
          message: ""
        });
      } else {
        setStatus("❌ " + data.error);
      }

    } catch (error) {
      console.error(error);
      setStatus("❌ Server connection failed.");
    }
  };

  return (
    <form className="join-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />

      <select
        name="technology"
        value={form.technology}
        onChange={handleChange}
        required
      >
        <option value="">Select Technology</option>
        <option value="Python">Python</option>
        <option value="React">React</option>
        <option value="FastAPI">FastAPI</option>
        <option value="AI/ML">AI / ML</option>
        <option value="IoT">IoT</option>
        <option value="Docker">Docker</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your idea..."
        value={form.message}
        onChange={handleChange}
        rows="5"
      />

      <button type="submit" className="primary-btn">
        JOIN TECHNOVA →
      </button>

      {status && (
        <p className="form-status">
          {status}
        </p>
      )}

    </form>
  );
}