"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Truck, 
  Store, 
  Home, 
  Sprout, 
  GraduationCap,
  Briefcase,
  PiggyBank
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Business Contacts",
    description: "Building and maintaining valuable business relationships across Nigeria"
  },
  {
    icon: Briefcase,
    title: "General Services",
    description: "Facilitating and procuring comprehensive service contracts"
  },
  {
    icon: Store,
    title: "Trading & Distribution",
    description: "Sales and distribution of general merchandise"
  },
  {
    icon: Truck,
    title: "Logistics Services",
    description: "Comprehensive transportation and logistics solutions"
  },
  {
    icon: Home,
    title: "Property Development",
    description: "Expert property development and estate management services"
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Agricultural produce and livestock farming operations"
  },
  {
    icon: GraduationCap,
    title: "Training & Consultancy",
    description: "Professional training and consultancy services"
  },
  {
    icon: PiggyBank,
    title: "Financial Solutions",
    description: "Strategic financial planning and funding solutions"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to meet your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <service.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
