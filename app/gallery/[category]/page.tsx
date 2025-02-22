import Image from "next/image"
import { notFound } from "next/navigation"

// This would come from your database or CMS
const categories = {
  "bridal-mehandi": {
    title: "Bridal Mehandi",
    description: "Explore our collection of intricate bridal mehandi designs",
    images: Array(12).fill("/placeholder.svg?height=400&width=300"),
  },
  "bridal-makeup": {
    title: "Bridal Makeup",
    description: "Beautiful bridal makeup transformations",
    images: Array(9).fill("/placeholder.svg?height=400&width=300"),
  },
  "mehandi-products": {
    title: "Mehandi Products",
    description: "Quality mehandi products for professional use",
    images: Array(6).fill("/placeholder.svg?height=400&width=300"),
  },
  "online-classes": {
    title: "Online Mehandi Classes",
    description: "Learn the art of mehandi from our expert tutorials",
    images: Array(8).fill("/placeholder.svg?height=400&width=300"),
  },
  "saree-draping": {
    title: "Saree Draping",
    description: "Professional saree draping services for all occasions",
    images: Array(6).fill("/placeholder.svg?height=400&width=300"),
  },
  "other-products": {
    title: "Other Products",
    description: "Explore our range of beauty and mehandi accessories",
    images: Array(10).fill("/placeholder.svg?height=400&width=300"),
  },
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories[params.category as keyof typeof categories]

  if (!category) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.images.map((image, index) => (
          <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${category.title} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm">View larger</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

