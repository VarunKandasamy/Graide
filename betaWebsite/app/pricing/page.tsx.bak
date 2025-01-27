import Header from "../components/Header"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$2",
    features: [
      "Up to 500 students",
      "Basic analytics",
      "Email support",
      "Assignment creation tools",
      "Standard grading features",
      "Limited integrations",
    ],
    recommended: false,
  },
  {
    name: "Pro",
    price: "$4",
    features: [
      "Up to 2000 students",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "AI-powered assignment suggestions",
      "Automated grading for objective questions",
      "Curriculum alignment tools",
      "Collaborative teaching features",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited students",
      "Full analytics suite",
      "Dedicated support",
      "Custom features",
      "White-labeling options",
      "API access",
      "On-premise deployment available",
      "Advanced security features",
      "24/7 phone and email support",
    ],
    recommended: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-md ${plan.recommended ? "border-2 border-blue-500" : ""}`}
            >
              {plan.recommended && <div className="text-blue-500 font-semibold text-center mb-4">Recommended</div>}
              <h2 className="text-2xl font-bold mb-4 text-center">{plan.name}</h2>
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
                {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl mb-4">Not sure which plan is right for you?</p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg"
          >
            Schedule a Consultation
          </Button>
        </div>
      </main>
    </div>
  )
}

