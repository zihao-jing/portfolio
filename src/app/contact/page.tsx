"use client";

import { motion } from "framer-motion";
import { Github, Mail, Send, Linkedin, Twitter, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          Interested in research collaboration or have questions? Feel free to reach out.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              {status === "success" && (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg p-4 mb-4 text-sm">
                  Message sent! I&apos;ll get back to you within 24–48 hours.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg p-4 mb-4 text-sm">
                  Something went wrong. Please email me directly at zihaoj24@gmail.com.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required disabled={status === "sending"} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required disabled={status === "sending"} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    required
                    disabled={status === "sending"}
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={status === "sending"}>
                  <Send className="w-4 h-4 mr-2" />
                  {status === "sending" ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Other Ways to Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <Link
                href="mailto:zihaoj24@gmail.com"
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>zihaoj24@gmail.com</span>
              </Link>
              <Link
                href="https://github.com/zihao-jing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Github className="w-5 h-5 flex-shrink-0" />
                <span>github.com/zihao-jing</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/zihao-jing-65b506323/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Linkedin className="w-5 h-5 flex-shrink-0" />
                <span>linkedin.com/in/zihao-jing</span>
              </Link>
              <Link
                href="https://x.com/zihao_jing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Twitter className="w-5 h-5 flex-shrink-0" />
                <span>x.com/zihao_jing</span>
              </Link>
              <div className="flex items-center space-x-2 text-gray-500">
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <span>WeChat: A2016A315214</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                I typically respond within 24 hours. For urgent matters, please reach out via my Gmail, which I monitor continuously.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
