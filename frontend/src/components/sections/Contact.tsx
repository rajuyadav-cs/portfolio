"use client";

import { useState } from "react";
import { Mail, MapPin, Briefcase, Send } from "lucide-react";
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email");
      return false;
    }

    if (!formData.subject.trim()) {
      toast.error("Please enter subject");
      return false;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter message");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await sendContactMessage(formData);

      toast.success("Message sent successfully!");

      setFormData(initialState);
    } catch (err) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      {/* Heading */}

      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Ready to build something amazing? Feel free to send me a message.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-white/10 bg-card p-5 shadow-xl sm:p-8"
        >
          {/* Name */}

          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              className="peer h-14 w-full rounded-xl border border-white/10 bg-background/40 px-4 pt-5 text-sm outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 sm:h-16 sm:rounded-2xl sm:px-5"
            />

            <label className="pointer-events-none absolute left-4 top-5 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs">
              Name
            </label>
          </div>

          {/* Email */}

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              className="peer h-14 w-full rounded-xl border border-white/10 bg-background/40 px-4 pt-5 text-sm outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 sm:h-16 sm:rounded-2xl sm:px-5"
            />

            <label className="pointer-events-none absolute left-4 top-5 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs">
              Email
            </label>
          </div>

          {/* Subject */}

          <div className="relative">
            <input
              type="text"
              name="subject"
              placeholder=" "
              value={formData.subject}
              onChange={handleChange}
              className="peer h-14 w-full rounded-xl border border-white/10 bg-background/40 px-4 pt-5 text-sm outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 sm:h-16 sm:rounded-2xl sm:px-5"
            />

            <label className="pointer-events-none absolute left-4 top-5 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs">
              Subject
            </label>
          </div>

          {/* Message */}

          <div className="relative">
            <textarea
              rows={6}
              name="message"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              className="peer w-full resize-none rounded-xl border border-white/10 bg-background/40 px-4 pt-5 pb-3 text-sm outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/10 sm:rounded-2xl sm:px-5"
            />

            <label className="pointer-events-none absolute left-4 top-5 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs">
              Message
            </label>
          </div>
          {/* Submit Button */}

          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-primary text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Contact Info */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {/* Email */}

          <div className="rounded-3xl border border-white/10 bg-card p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>

              <div className="min-w-0">
                <p className="mb-1 text-sm text-muted-foreground">Email</p>

                <a
                  href="mailto:rajuyadav242625@gmail.com"
                  className="break-all text-sm text-white transition-colors hover:text-primary sm:text-base"
                >
                  rajuyadav242625@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Location */}

          <div className="rounded-3xl border border-white/10 bg-card p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="mb-1 text-sm text-muted-foreground">Location</p>

                <p className="text-sm text-white sm:text-base">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
          </div>

          {/* Availability */}

          <div className="rounded-3xl border border-white/10 bg-card p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 sm:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="mb-1 text-sm text-muted-foreground">
                  Availability
                </p>

                <p className="font-medium text-green-400">Available for Work</p>
              </div>
            </div>
          </div>

          {/* About Card */}

          <div className="rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 to-transparent p-6 sm:col-span-2 lg:col-span-1">
            <h3 className="mb-3 text-xl font-semibold">
              Let's build something together.
            </h3>

            <p className="leading-7 text-muted-foreground">
              Whether you have a project idea, freelance opportunity,
              internship, collaboration or just want to connect, I'm always
              happy to have a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
