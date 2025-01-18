"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Consolidated Zeefah Brands
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Consolidated Zeefah Brands Limited, we are committed to excellence
              in every aspect of our business operations. As a leading Nigerian
              conglomerate, we have established ourselves as a trusted partner
              across multiple sectors.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    🎯
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
                  <p className="mt-2 text-gray-600">
                    To provide innovative solutions and exceptional services that drive
                    sustainable growth for our clients and communities.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    👁️
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
                  <p className="mt-2 text-gray-600">
                    To be the leading conglomerate in Nigeria, setting standards of
                    excellence in business operations and service delivery.
                  </p>
                </div>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent z-10" />
            <Image
              src="/office-building.jpg"
              alt="Zeefah Brands Office"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
