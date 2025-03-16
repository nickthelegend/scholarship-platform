"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Shield, Globe, Award, Users, ChevronRight } from 'lucide-react';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: <GraduationCap className="h-6 w-6 text-steelgray" />,
      title: "Transparent Scholarships",
      description: "All scholarships are recorded on the blockchain, ensuring complete transparency and accountability."
    },
    {
      icon: <Shield className="h-6 w-6 text-steelgray" />,
      title: "Secure Applications",
      description: "Your application data is encrypted and securely stored, accessible only to authorized reviewers."
    },
    {
      icon: <Globe className="h-6 w-6 text-steelgray" />,
      title: "Global Access",
      description: "Connect with scholarship opportunities from around the world, breaking down geographical barriers."
    },
    {
      icon: <Award className="h-6 w-6 text-steelgray" />,
      title: "Merit-Based Selection",
      description: "Our platform ensures fair, merit-based selection processes for all scholarship applications."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-6 inline-flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 text-sm shadow-sm hover:bg-white/15 transition-all duration-300"
        >
          <span className="text-steelgray font-medium">Blockchain</span>
          <span className="mx-1 text-white/70">•</span>
          <span className="text-white/90">Education Platform</span>
        </motion.div>
        
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 mx-auto"
        >
          <span className="text-white inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-steelgray/30 after:bottom-0 after:left-0">Empowering education</span><br></br>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-steelgray relative">
            through <span className="text-steelgray animate-pulse-subtle">blockchain.</span>
          </span>
        </motion.h1>
        
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-lg md:text-xl mb-10 mx-auto max-w-2xl text-textgray/90 leading-relaxed"
        >
          Access transparent, verifiable education funding through our blockchain-powered scholarship platform.
        </motion.p>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/find-scholarship" className="btn-primary animate-glow-pulse">
            Find Scholarship
          </Link>
          <Link href="/give-scholarship" className="btn-secondary">
            Give Scholarship
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-darkbg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ScholarChain?</h2>
            <p className="text-textgray/90 max-w-2xl mx-auto">Our platform leverages blockchain technology to revolutionize how scholarships are created, discovered, and awarded.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-steelgray/30 transition-all duration-300"
              >
                <div className="bg-darkbg/50 p-3 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-textgray/90">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-textgray/90 max-w-2xl mx-auto">Our platform makes it easy to find or create scholarships with the security and transparency of blockchain technology.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeIn}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full">
                <div className="absolute -top-3 -left-3 bg-steelgray text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold mb-4 mt-4">Create or Find</h3>
                <p className="text-textgray/90 mb-4">Donors create scholarships or students search for opportunities that match their qualifications.</p>
                <Link href="/find-scholarship" className="text-steelgray hover:text-white flex items-center gap-1 transition-colors">
                  Browse Scholarships <ChevronRight size={16} />
                </Link>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="text-steelgray/50" size={24} />
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full">
                <div className="absolute -top-3 -left-3 bg-steelgray text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold mb-4 mt-4">Apply or Review</h3>
                <p className="text-textgray/90 mb-4">Students submit applications, and donors review submissions through our secure platform.</p>
                <Link href="/give-scholarship" className="text-steelgray hover:text-white flex items-center gap-1 transition-colors">
                  Create Scholarship <ChevronRight size={16} />
                </Link>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="text-steelgray/50" size={24} />
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full">
                <div className="absolute -top-3 -left-3 bg-steelgray text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold mb-4 mt-4">Award & Verify</h3>
                <p className="text-textgray/90 mb-4">Scholarships are awarded and recorded on the blockchain, ensuring transparency and verification.</p>
                <Link href="/about" className="text-steelgray hover:text-white flex items-center gap-1 transition-colors">
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-darkbg/0 to-darkbg/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Education Funding?</h2>
            <p className="text-textgray/90 mb-8 text-lg">Join our platform today and be part of the revolution in educational scholarships.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/find-scholarship" className="btn-primary">
                Find Scholarship
              </Link>
              <Link href="/give-scholarship" className="btn-secondary">
                Give Scholarship
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-textgray/90 max-w-2xl mx-auto">Hear from students and donors who have experienced the impact of our platform.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-steelgray/20 rounded-full flex items-center justify-center mr-4">
                  <Users size={20} className="text-steelgray" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-textgray/70 text-sm">Engineering Student</p>
                </div>
              </div>
              <p className="text-textgray/90 mb-4">"The transparency of ScholarChain gave me confidence in the application process. I received a STEM scholarship that changed my academic journey."</p>
              <div className="flex text-steelgray">
                <span>★★★★★</span>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-steelgray/20 rounded-full flex items-center justify-center mr-4">
                  <Users size={20} className="text-steelgray" />
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-textgray/70 text-sm">Scholarship Donor</p>
                </div>
              </div>
              <p className="text-textgray/90 mb-4">"As a donor, I appreciate being able to track exactly how my scholarship funds are distributed. The blockchain verification gives me peace of mind."</p>
              <div className="flex text-steelgray">
                <span>★★★★★</span>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-steelgray/20 rounded-full flex items-center justify-center mr-4">
                  <Users size={20} className="text-steelgray" />
                </div>
                <div>
                  <h4 className="font-bold">Aisha Patel</h4>
                  <p className="text-textgray/70 text-sm">Medical Student</p>
                </div>
              </div>
              <p className="text-textgray/90 mb-4">"Finding and applying for scholarships was seamless. The platform connected me with opportunities I wouldn't have discovered otherwise."</p>
              <div className="flex text-steelgray">
                <span>★★★★★</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
