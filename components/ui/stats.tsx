"use client";

import { motion } from "framer-motion";
import { Users, Building, Globe, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Years of Experience",
    value: "10+",
    icon: Building,
    description: "Serving Nigeria's business needs"
  },
  {
    id: 2,
    name: "Happy Clients",
    value: "500+",
    icon: Users,
    description: "Across multiple sectors"
  },
  {
    id: 3,
    name: "Projects Completed",
    value: "1000+",
    icon: Globe,
    description: "Nationwide coverage"
  },
  {
    id: 4,
    name: "Awards Won",
    value: "25+",
    icon: Award,
    description: "Recognition for excellence"
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5"
            >
              <dt>
                <div className="absolute rounded-lg bg-blue-600 p-3">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-600">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </dd>
              <p className="ml-16 text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
