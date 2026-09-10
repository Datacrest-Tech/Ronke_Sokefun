import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contact } from "../data/content";

const initialForm = {
  fullName: "",
  titleOrg: "",
  email: "",
  engagementType: contact.engagementTypes[0],
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = "Full name is required.";
  if (!form.titleOrg.trim())
    errors.titleOrg = "Title and organization is required.";
  if (!emailPattern.test(form.email))
    errors.email = "Enter a valid email address.";
  if (!form.message.trim() || form.message.trim().length < 10)
    errors.message = "Please include a brief (at least 10 characters).";
  return errors;
}

export default function ContactDesk() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | pending | success | error
  const [serverError, setServerError] = useState("");

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("pending");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setServerError(err.message);
    }
  };

  return (
    <section id="contact" className="bg-alabaster">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl sm:text-4xl text-slate mb-3">
          {contact.heading}
        </h2>
        <p className="text-slate-muted mb-10 max-w-xl">{contact.body}</p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white border border-stroke rounded-sm p-8 grid sm:grid-cols-2 gap-6"
        >
          <Field
            label="Full Name"
            error={errors.fullName}
          >
            <input
              type="text"
              value={form.fullName}
              onChange={handleChange("fullName")}
              className={inputClass(errors.fullName)}
            />
          </Field>

          <Field label="Professional Title & Organization" error={errors.titleOrg}>
            <input
              type="text"
              value={form.titleOrg}
              onChange={handleChange("titleOrg")}
              className={inputClass(errors.titleOrg)}
            />
          </Field>

          <Field label="Email Address" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              className={inputClass(errors.email)}
            />
          </Field>

          <Field label="Engagement Type">
            <select
              value={form.engagementType}
              onChange={handleChange("engagementType")}
              className={inputClass()}
            >
              {contact.engagementTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label="Strategic Brief / Message"
            error={errors.message}
            full
          >
            <textarea
              rows={5}
              value={form.message}
              onChange={handleChange("message")}
              className={inputClass(errors.message)}
            />
          </Field>

          <div className="sm:col-span-2 flex items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={status === "pending"}
              className="inline-flex items-center gap-2 rounded-sm bg-terracotta px-6 py-3 text-sm font-medium text-white hover:bg-terracotta/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "pending" && <Loader2 size={16} className="animate-spin" />}
              {status === "pending" ? "Sending…" : "Submit Inquiry"}
            </button>

            {status === "success" && (
              <span className="inline-flex items-center gap-2 text-sm text-emerald">
                <CheckCircle2 size={16} />
                Your inquiry has been received.
              </span>
            )}
            {status === "error" && (
              <span className="inline-flex items-center gap-2 text-sm text-red-700">
                <AlertCircle size={16} />
                {serverError}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, children, full }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="block text-sm text-slate mb-1.5">{label}</span>
      {children}
      {error && <span className="block text-xs text-red-700 mt-1">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `w-full rounded-sm border px-3.5 py-2.5 text-sm text-slate bg-alabaster focus:bg-white outline-none transition-colors duration-200 ${
    error ? "border-red-400" : "border-stroke focus:border-terracotta"
  }`;
}
