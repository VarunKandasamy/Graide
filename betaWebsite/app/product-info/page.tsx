import Header from "../components/Header"
import { CheckCircle } from "lucide-react"

const productInfo = [
  {
    title: "Superior Assignment Creation",
    description:
      "EduGrade Pro simplifies the process of creating engaging and effective assignments. Our intuitive interface and AI-powered suggestions help teachers craft perfect questions and prompts in minutes.",
  },
  {
    title: "Efficient Grading System",
    description:
      "Our advanced grading tools streamline the evaluation process, allowing teachers to provide timely and meaningful feedback. With customizable rubrics and AI-assisted grading, EduGrade Pro significantly reduces the time spent on assessments.",
  },
  {
    title: "Comprehensive Analytics",
    description:
      "EduGrade Pro offers in-depth insights into student performance. Our analytics tools help identify learning gaps, track progress over time, and generate custom reports for parents and administrators.",
  },
  {
    title: "Seamless Integration",
    description:
      "Designed to work harmoniously with existing school systems, EduGrade Pro integrates effortlessly into your current workflow. It's compatible with major learning management systems and student information systems.",
  },
]

export default function ProductInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Why Choose EduGrade Pro?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <h2 className="text-xl font-semibold">{info.title}</h2>
              </div>
              <p className="text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl mb-4">Experience the future of educational technology with EduGrade Pro</p>
          <p className="text-lg text-gray-600">
            Join our beta testing program and be among the first to revolutionize your teaching experience.
          </p>
        </div>
      </main>
    </div>
  )
}

