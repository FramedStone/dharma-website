'use client'

import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            testing
          </p>
          <div className="text-center">
            <Button variant="outline" size="lg">Contact Us</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}