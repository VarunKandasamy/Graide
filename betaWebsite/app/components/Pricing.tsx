"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$2",
    features: ["Up to 500 students", "Basic analytics", "Email support"],
    recommended: false,
  },
  {
    name: "Pro",
    price: "$4",
    features: ["Up to 2000 students", "Advanced analytics", "Priority support", "Custom integrations"],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited students", "Full analytics suite", "Dedicated support", "Custom features"],
    recommended: false,
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white p-8 rounded-lg shadow-md ${plan.recommended ? "border-2 border-blue-500" : ""}`}
            >
              {plan.recommended && <div className="text-blue-500 font-semibold text-center mb-4">Recommended</div>}
              <h3 className="text-2xl font-bold mb-4 text-center">{plan.name}</h3>
              <p className="text-4xl font-bold text-center mb-6">
                {plan.price}
                <span className="text-base font-normal"> /student/year</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

