import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axiosConfig";

const ContactUs: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);
    try {
      const res = await axios.post("/api/v1/contact", {
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        comment: comment.trim(),
      });
      setSubmitMessage({
        type: "success",
        text: (res.data && (res.data as { message?: string }).message) || "Thank you for contacting us! We will get back to you shortly.",
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setComment("");
    } catch (err: unknown) {
      const ax = err as { response?: { status?: number; data?: { detail?: unknown } }; message?: string };
      const status = ax.response?.status;
      const detail = ax.response?.data?.detail;
      let msg: string;
      if (status === 404) {
        msg = "Contact endpoint not found. Use local backend: set VITE_API_URL=http://localhost:5000 in .env and run backend from newbackend.";
      } else if (status === 503) {
        msg = typeof detail === "string" ? detail : "Database not connected. Check backend .env MONGO_URI and run backend from newbackend.";
      } else if (status === 422) {
        msg = "Invalid form data. Please check all fields.";
      } else if (detail && typeof detail === "string") {
        msg = detail;
      } else if (ax.message === "Network Error" || !status) {
        msg = "Cannot reach server. Is the backend running? For local: set VITE_API_URL=http://localhost:5000 and run backend (python app.py) from newbackend.";
      } else {
        msg = "Something went wrong. Please try again.";
      }
      setSubmitMessage({ type: "error", text: msg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans pt-[120px] pb-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-[26px] md:text-[42px] text-[#1F1F1F] font-medium mb-8 font-sans">
            Contact us
          </h1>

          <h2 className="text-[22px] font-bold text-[#1F1F1F] mb-3 tracking-wide">
            We Love Hearing From You!
          </h2>

          <p className="text-[#525252] text-base font-medium max-w-2xl mx-auto">
            If you have any questions, please fill your queries in the form &
            we'll get back to you shortly.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20 max-w-[900px] mx-auto place-items-center">
          {/* Mail Us */}
          <a
            href="mailto:support@multifolks.com"
            className="bg-white rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.04)] p-10 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 cursor-pointer w-full"
          >
            <div className="w-16 h-16 rounded-full bg-[#025048] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#025048]/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg text-[#1F1F1F] mb-3">Mail us</h3>
            <p className="text-sm text-[#525252] font-medium">
              support@multifolks.com
            </p>
            <p className="text-sm text-[#525252] font-medium">Available 24x7</p>
          </a>

          {/* Let's Chat */}
          <div className="bg-white rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.04)] p-10 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 w-full">
            <div className="w-16 h-16 rounded-full bg-[#025048] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#025048]/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg text-[#1F1F1F] mb-3">
              Let's Chat
            </h3>
            <p className="text-sm text-[#525252] font-medium">
              Available 24*7 Live chat
            </p>
            <p className="text-sm text-[#525252] font-medium">support.</p>
          </div>

          {/* Ask Help */}
          <Link
            to="/help"
            className="bg-white rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.04)] p-10 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 cursor-pointer w-full"
          >
            <div className="w-16 h-16 rounded-full bg-[#025048] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#025048]/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg text-[#1F1F1F] mb-3">Ask Help</h3>
            <p className="text-sm text-[#525252] font-medium">
              Find answers to common
            </p>
            <p className="text-sm text-[#525252] font-medium">questions</p>
          </Link>
        </div>

        

        <hr className="border-gray-100 mb-16 max-w-[1000px] mx-auto" />

        {/* Form & Location Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 max-w-[1000px] mx-auto">
          {/* Left: Form */}
          <div className="flex-1">
            {submitMessage && (
              <div
                className={`mb-4 rounded-lg px-4 py-3 text-sm font-medium ${
                  submitMessage.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitMessage.text}
              </div>
            )}
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-sm font-medium text-[#1F1F1F] outline-none focus:border-[#1F1F1F] focus:ring-0 transition-colors placeholder:text-gray-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-sm font-medium text-[#1F1F1F] outline-none focus:border-[#1F1F1F] focus:ring-0 transition-colors placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-sm font-medium text-[#1F1F1F] outline-none focus:border-[#1F1F1F] focus:ring-0 transition-colors placeholder:text-gray-400"
                  required
                />
                <input
                  type="tel"
                  placeholder="Enter Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-sm font-medium text-[#1F1F1F] outline-none focus:border-[#1F1F1F] focus:ring-0 transition-colors placeholder:text-gray-400"
                  required
                />
              </div>

              <textarea
                placeholder="Write Comment"
                rows={6}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 text-sm font-medium text-[#1F1F1F] outline-none focus:border-[#1F1F1F] focus:ring-0 transition-colors placeholder:text-gray-400 resize-none"
                required
              />

              <div className="mt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#232320] text-white font-bold text-sm uppercase tracking-widest py-4 px-12 rounded hover:bg-black transition-all shadow-lg active:scale-95 w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? "SENDING…" : "SUBMIT"}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Location */}

          <div className="flex flex-col items-start gap-2 lg:w-1/3">
            <h4 className="font-bold text-[#1F1F1F] text-lg whitespace-nowrap">
              Our Location:
            </h4>
            <p className="text-[#525252] text-sm font-medium leading-relaxed">
              2 Leman Street, London, E1W 9US
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
