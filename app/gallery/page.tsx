import Image from "next/image"

const galleryItems = [
  { src: "/placeholder.svg?height=300&width=300", alt: "Bridal Mehandi Design 1" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Bridal Makeup Look 1" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Saree Draping Style 1" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Mehandi Product 1" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Online Class Sample 1" },
  { src: "/placeholder.svg?height=300&width=300", alt: "Bridal Mehandi Design 2" },
]

export default function Gallery() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-pink-800 mb-8 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

