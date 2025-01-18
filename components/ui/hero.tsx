"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100" id="hero">
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-grid-16" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            CONSOLIDATED ZEEFAH{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              BRANDS LIMITED
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner in business excellence. We specialize in trading, logistics,
            property development, agriculture, and consultancy services across Nigeria.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("services")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-gray-300 hover:border-gray-400"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
