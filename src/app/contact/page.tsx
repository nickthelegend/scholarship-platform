"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your backend
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <main className="flex-grow pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-textgray/90 max-w-3xl mx-auto">
            Have questions about ScholarChain? We're here to help. Reach out to our team and we'll get back to you as
            soon as possible.
          </p>
        </motion.div>

        {/* Contact Info and Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-steelgray/20 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-steelgray" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-textgray/90 mb-2">For general inquiries:</p>
                  <a href="mailto:info@scholarchain.com" className="text-steelgray hover:text-white transition-colors">
                    info@scholarchain.com
                  </a>
                  <p className="text-textgray/90 mt-2 mb-2">For support:</p>
                  <a
                    href="mailto:support@scholarchain.com"
                    className="text-steelgray hover:text-white transition-colors"
                  >
                    support@scholarchain.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-steelgray/20 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-steelgray" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-textgray/90 mb-2">Monday to Friday, 9am to 5pm EST</p>
                  <a href="tel:+1-555-123-4567" className="text-steelgray hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-steelgray/20 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-steelgray" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                  <p className="text-textgray/90 mb-2">Our headquarters:</p>
                  <address className="not-italic text-white">
                    123 Education Lane
                    <br />
                    Suite 400
                    <br />
                    San Francisco, CA 94103
                    <br />
                    United States
                  </address>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-textgray mb-1">
                  Your Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-steelgray/50 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textgray mb-1">
                  Your Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-steelgray/50 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-textgray mb-1">
                  Subject<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-steelgray/50 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textgray mb-1">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 bg-darkbg border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-steelgray/50 text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto md:px-8 py-3 bg-steelgray hover:bg-steelgray/90 text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How does blockchain verify scholarships?</h3>
              <p className="text-textgray/90">
                Blockchain technology creates an immutable record of each scholarship, its funding, and disbursement.
                This ensures transparency and prevents fraud or misallocation of funds.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Can I create a scholarship with specific criteria?</h3>
              <p className="text-textgray/90">
                Yes, donors can set specific eligibility criteria for their scholarships, including academic
                requirements, field of study, geographic location, and more.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How are scholarship recipients selected?</h3>
              <p className="text-textgray/90">
                Recipients are selected based on the criteria set by the donor. Our platform uses a combination of
                automated matching and human review to ensure fair selection.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Is my personal information secure?</h3>
              <p className="text-textgray/90">
                Yes, we use advanced encryption and security protocols to protect all personal information. Only the
                necessary information is stored on the blockchain, and it's encrypted.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

