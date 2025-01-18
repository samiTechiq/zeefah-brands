"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600">
                We'd love to hear from you. Please fill out this form or reach out using
                our contact information.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Our Office</h3>
                  <p className="text-gray-600">Abuja, Nigeria</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+234 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@zeefahbrands.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-900/5"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 border py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 border shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium  text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border focus:border-blue-500 px-4 py-2 sm:text-sm"
                  placeholder="Your message"
                />
              </div>

              <Button 
                type="button" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
