import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-pink-800 mb-4">Welcome to Fama Makeover & Mehandi Studio
        </h1>
        <p className="text-xl text-gray-600">Certified beautician specializing in bridal mehandi, makeup, and more</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Featured Work</h2>
          <Image
            src="/Featured Work/Featured Work.jpg?height=300&width=400"
            alt="Featured Mehandi Design"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Bridal Mehandi</li>
            <li>Bridal Makeup</li>
            <li>Saree Draping</li>
            <li>Mehandi Product Creation</li>
            <li>Online Mehandi Classes</li>
          </ul>
          <Link
            href="/services"
            className="inline-block mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">Book Your Appointment Today</h2>
        <p className="text-gray-600 mb-4">Transform your special day with our expert mehandi and makeup services</p>
        <Link
          href="/contact"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors text-lg"
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}

