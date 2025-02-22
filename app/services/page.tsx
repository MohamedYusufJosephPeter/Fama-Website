import Image from "next/image"

const services = [
  {
    name: "Bridal Mehandi",
    description: "Intricate and beautiful mehandi designs for your special day",
    image: "/Services/Bridal Mehandi.jpg?height=200&width=300",
  },
  {
    name: "Bridal Makeup",
    description: "Professional makeup services to enhance your natural beauty",
    image: "/Services/Bridal Makeup.jpg?height=200&width=300",
  },
  {
    name: "Pre-Pleating & Saree Draping",
    description: "Expert saree draping for a perfect and comfortable fit",
    image: "/Services/Saree Draping.jpg?height=200&width=300",
  },
  {
    name: "Mehandi Product Creation",
    description: "Custom-made mehandi products for all your needs",
    image: "/Services/Mehandi Product Creation.jpg?height=200&width=300",
  },
  {
    name: "Online Mehandi Classes",
    description: "Learn the art of mehandi from the comfort of your home",
    image: "/Services/Online Mehandi Classes.PNG?height=200&width=300",
  },
]

export default function Services() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-pink-800 mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border border-pink-200 rounded-lg p-4 shadow-md">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.name}
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-pink-700 mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

