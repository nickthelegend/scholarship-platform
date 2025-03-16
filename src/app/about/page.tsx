"use client"

import { motion } from "framer-motion"
import { Shield, GraduationCap, Globe, Award } from "lucide-react"

export default function About() {
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
          <h1 className="text-3xl md:text-5xl font-bold mb-6">About ScholarChain</h1>
          <p className="text-xl text-textgray/90 max-w-3xl mx-auto">
            We're revolutionizing education funding through blockchain technology, making scholarships more transparent,
            accessible, and equitable.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-textgray/90 mb-6">
              ScholarChain was founded with a simple yet powerful mission: to democratize access to education funding
              through blockchain technology. We believe that every student deserves a fair chance at educational
              opportunities, regardless of their background or circumstances.
            </p>
            <p className="text-textgray/90">
              By leveraging the transparency, security, and efficiency of blockchain, we've created a platform that
              connects scholarship donors directly with deserving students, eliminating intermediaries and ensuring that
              funds reach those who need them most.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <blockquote className="text-xl italic text-textgray/90">
              "Education is the most powerful weapon which you can use to change the world. At ScholarChain, we're
              making sure that weapon is accessible to all."
            </blockquote>
            <p className="mt-4 font-semibold">— Dr. Sarah Chen, Founder & CEO</p>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-steelgray/30 transition-all duration-300">
              <div className="bg-darkbg/50 p-3 rounded-lg inline-block mb-4">
                <Shield className="h-6 w-6 text-steelgray" />
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-textgray/90">
                We believe in complete transparency in the scholarship process, from funding to selection.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-steelgray/30 transition-all duration-300">
              <div className="bg-darkbg/50 p-3 rounded-lg inline-block mb-4">
                <GraduationCap className="h-6 w-6 text-steelgray" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-textgray/90">
                Education funding should be accessible to all deserving students, regardless of background.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-steelgray/30 transition-all duration-300">
              <div className="bg-darkbg/50 p-3 rounded-lg inline-block mb-4">
                <Globe className="h-6 w-6 text-steelgray" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-textgray/90">
                We continuously innovate to improve the scholarship experience for both donors and recipients.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-steelgray/30 transition-all duration-300">
              <div className="bg-darkbg/50 p-3 rounded-lg inline-block mb-4">
                <Award className="h-6 w-6 text-steelgray" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-textgray/90">
                We maintain the highest standards of integrity in all our operations and interactions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-steelgray/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-steelgray">SC</span>
              </div>
              <h3 className="text-xl font-bold">Dr. Sarah Chen</h3>
              <p className="text-steelgray">Founder & CEO</p>
              <p className="text-textgray/90 mt-2">
                Former education policy advisor with a passion for educational equity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-steelgray/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-steelgray">MJ</span>
              </div>
              <h3 className="text-xl font-bold">Michael Johnson</h3>
              <p className="text-steelgray">CTO</p>
              <p className="text-textgray/90 mt-2">
                Blockchain expert with 10+ years experience in fintech and education technology.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-steelgray/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-steelgray">AP</span>
              </div>
              <h3 className="text-xl font-bold">Aisha Patel</h3>
              <p className="text-steelgray">Head of Partnerships</p>
              <p className="text-textgray/90 mt-2">
                Former university administrator with extensive experience in scholarship management.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="relative border-l border-steelgray/30 ml-6 pl-8 pb-8">
            <div className="mb-12 relative">
              <div className="absolute -left-14 mt-1.5 h-6 w-6 rounded-full border-4 border-steelgray/30 bg-steelgray"></div>
              <h3 className="text-xl font-bold mb-1">2021</h3>
              <p className="text-textgray/90">
                ScholarChain was founded with a vision to revolutionize education funding.
              </p>
            </div>
            <div className="mb-12 relative">
              <div className="absolute -left-14 mt-1.5 h-6 w-6 rounded-full border-4 border-steelgray/30 bg-steelgray"></div>
              <h3 className="text-xl font-bold mb-1">2022</h3>
              <p className="text-textgray/90">
                Launched our beta platform with 50 initial scholarships and 500 student users.
              </p>
            </div>
            <div className="mb-12 relative">
              <div className="absolute -left-14 mt-1.5 h-6 w-6 rounded-full border-4 border-steelgray/30 bg-steelgray"></div>
              <h3 className="text-xl font-bold mb-1">2023</h3>
              <p className="text-textgray/90">
                Expanded to international scholarships and reached 10,000 users worldwide.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-14 mt-1.5 h-6 w-6 rounded-full border-4 border-steelgray/30 bg-steelgray"></div>
              <h3 className="text-xl font-bold mb-1">2024</h3>
              <p className="text-textgray/90">
                Introduced advanced blockchain verification and smart contract scholarship disbursement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

