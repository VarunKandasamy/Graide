"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, BarChart } from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="w-12 h-12 text-green-500" />,
    title: "Effortless Assignment Creation",
    description: "Create engaging, standards-aligned assignments in minutes with our intuitive interface.",
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-500" />,
    title: "Time-Saving Grading",
    description: "Grade assignments faster with AI-assisted tools and customizable rubrics.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-purple-500" />,
    title: "Comprehensive Analytics",
    description: "Gain valuable insights into student performance with detailed analytics and reports.",
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why Choose EduGrade Pro?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

