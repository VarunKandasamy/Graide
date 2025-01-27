"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote: "EduGrade Pro has transformed our grading process. It's efficient, user-friendly, and our teachers love it!",
    author: "Dr. Sarah Johnson",
    role: "Superintendent, Oakwood School District",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The analytics provided by EduGrade Pro have given us valuable insights into student performance. Highly recommended!",
    author: "Michael Chen",
    role: "Principal, Evergreen High School",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">What Educators Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

