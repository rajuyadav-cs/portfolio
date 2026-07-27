"use client";

import { useState } from "react";
import { Mail, MapPin, Briefcase, Send, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { sendContactMessage } from "@/lib/api";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const { name, email, subject, message } = formData;

    if (!name.trim()) {
      toast.error("Please enter your name");
      return false;
    }

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (!subject.trim()) {
      toast.error("Please enter a subject");
      return false;
    }

    if (!message.trim()) {
      toast.error("Please enter your message");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      await sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      toast.success("Message sent successfully!");
      setFormData(initialState);
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      {/* Section Header */}
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Ready to build something amazing? Feel free to send me a message and
          I&apos;ll get back to you shortly.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-border bg-card/80 p-5 shadow-2xl backdrop-blur-xl sm:p-8"
          noValidate
        >
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              className="peer h-14 w-full rounded-xl border border-border bg-background/60 px-4 pt-5 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 sm:h-16 sm:rounded-2xl sm:px-5 disabled:opacity-50"
            />
            <label
              htmlFor="name"
              className="pointer-events-none absolute left-4 top-5 text-sm text-muted-foreground transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs sm:left-5"
            >
              Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className="peer h-14 w-full rounded-xl border border-border bg-background/60 px-4 pt-5 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 sm:h-16 sm:rounded-2xl sm:px-5 disabled:opacity-50"
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute left-4 top-5 text-sm text-muted-foreground transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs sm:left-5"
            >
              Email
            </label>
          </div>

          {/* Subject Field */}
          <div className="relative">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder=" "
              value={formData.subject}
              onChange={handleChange}
              disabled={loading}
              className="peer h-14 w-full rounded-xl border border-border bg-background/60 px-4 pt-5 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 sm:h-16 sm:rounded-2xl sm:px-5 disabled:opacity-50"
            />
            <label
              htmlFor="subject"
              className="pointer-events-none absolute left-4 top-5 text-sm text-muted-foreground transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs sm:left-5"
            >
              Subject
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              className="peer w-full resize-none rounded-xl border border-border bg-background/60 px-4 pb-3 pt-5 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 sm:rounded-2xl sm:px-5 disabled:opacity-50"
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-4 top-5 text-sm text-muted-foreground transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs sm:left-5"
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-primary text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        {/* Contact Info Sidebar */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {/* Email Info Card */}
          <div className="rounded-3xl border border-border bg-card p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="mb-1 text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:rajuyadav242625@gmail.com"
                  className="break-all text-sm font-medium text-foreground transition-colors hover:text-primary sm:text-base"
                >
                  rajuyadav242625@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Location Info Card */}
          <div className="rounded-3xl border border-border bg-card p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="mb-1 text-sm text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground sm:text-base">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
          </div>

          {/* Availability Info Card */}
          <div className="rounded-3xl border border-border bg-card p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 sm:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="mb-1 text-sm text-muted-foreground">
                  Availability
                </p>
                <p className="font-medium text-emerald-400">
                  Available for Work
                </p>
              </div>
            </div>
          </div>

          {/* Callout Card */}
          <div className="rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 to-transparent p-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-foreground">
              Let&apos;s Build Something Amazing
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Have a project in mind, a freelance opportunity, or just want to
              say hello? I&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
