import Header from "../components/Header"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "EduGrade Pro has transformed our grading process. It's efficient, user-friendly, and our teachers love it! The time saved on grading has allowed our educators to focus more on personalized instruction and student engagement.",
    author: "Dr. Sarah Johnson",
    role: "Superintendent, Oakwood School District",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The analytics provided by EduGrade Pro have given us valuable insights into student performance. We've been able to identify learning gaps more quickly and implement targeted interventions. Highly recommended!",
    author: "Michael Chen",
    role: "Principal, Evergreen High School",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "As a teacher, I appreciate how EduGrade Pro streamlines the assignment creation process. The AI-powered suggestions have helped me create more engaging and effective assignments. It's a game-changer!",
    author: "Emily Rodriguez",
    role: "9th Grade English Teacher, Sunnyvale Middle School",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The collaborative features in EduGrade Pro have fostered a sense of community among our teachers. Sharing resources and best practices has never been easier, and it's improving the quality of education across our entire district.",
    author: "David Thompson",
    role: "Director of Curriculum, Pinecrest School District",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">What Educators Are Saying</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

