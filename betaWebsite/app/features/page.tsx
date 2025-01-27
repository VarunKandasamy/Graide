import Header from "../components/Header"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, BarChart, Users, Book, Zap } from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="w-12 h-12 text-green-500" />,
    title: "Effortless Assignment Creation",
    description:
      "Create engaging, standards-aligned assignments in minutes with our intuitive interface. Our AI-powered suggestion engine helps you craft perfect questions and prompts.",
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-500" />,
    title: "Time-Saving Grading",
    description:
      "Grade assignments faster with AI-assisted tools and customizable rubrics. Our smart grading feature can automatically assess objective questions and provide suggestions for subjective answers.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-purple-500" />,
    title: "Comprehensive Analytics",
    description:
      "Gain valuable insights into student performance with detailed analytics and reports. Track progress over time, identify areas for improvement, and generate custom reports for parents and administrators.",
  },
  {
    icon: <Users className="w-12 h-12 text-yellow-500" />,
    title: "Collaborative Teaching",
    description:
      "Easily share assignments, rubrics, and best practices with other teachers in your district. Foster a collaborative environment that enhances the overall quality of education.",
  },
  {
    icon: <Book className="w-12 h-12 text-red-500" />,
    title: "Curriculum Alignment",
    description:
      "Ensure all assignments are aligned with state and national standards. Our built-in curriculum mapping tool helps you track coverage and identify gaps in your teaching materials.",
  },
  {
    icon: <Zap className="w-12 h-12 text-indigo-500" />,
    title: "Instant Feedback",
    description:
      "Provide students with immediate feedback on their work. Our system allows for quick annotations, voice notes, and even video feedback to help students understand and improve.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">EduGrade Pro Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-center">{feature.title}</h2>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg"
          >
            Start Free Trial
          </Button>
        </div>
      </main>
    </div>
  )
}

