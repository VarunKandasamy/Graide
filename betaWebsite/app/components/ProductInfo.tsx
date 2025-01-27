"use client"

import { motion } from "framer-motion"

const productInfo = [
  "EduGrade Pro revolutionizes the way teachers create and grade assignments.",
  "Our AI-powered tools help craft engaging and effective educational content.",
  "Save time with our efficient grading system and customizable rubrics.",
  "Gain valuable insights into student performance with comprehensive analytics.",
]

const ProductInfo = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why EduGrade Pro?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 text-lg">{info}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductInfo

