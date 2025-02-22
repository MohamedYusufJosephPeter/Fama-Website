import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    title: "Bridal Mehandi",
    slug: "bridal-mehandi",
    image: "/Gallery/Bridal Mehandi.JPG?height=400&width=600",
    count: "50+ Designs",
  },
  {
    title: "Bridal Makeup",
    slug: "bridal-makeup",
    image: "/Gallery/Bridal Makeup.jpg?height=400&width=600",
    count: "30+ Looks",
  },
  {
    title: "Mehandi Products",
    slug: "mehandi-products",
    image: "/Gallery/Mehandi Product Creation.jpg?height=400&width=600",
    count: "20+ Products",
  },
  {
    title: "Online Mehandi Classes",
    slug: "online-classes",
    image: "/Gallery/Online Mehandi Classes.png?height=400&width=600",
    count: "10+ Courses",
  },
  {
    title: "Saree Draping",
    slug: "saree-draping",
    image: "/Gallery/Saree Draping.jpg?height=400&width=600",
    count: "15+ Styles",
  },
  {
    title: "Other Products",
    slug: "other-products",
    image: "/Gallery/Other Products.jpg?height=400&width=600",
    count: "25+ Items",
  },
  {
    title: "Customer Reviews",
    slug: "customer-reviews",
    image: "/Gallery/Customer Reviews.jpg?height=400&width=600",
    count: "100+ Reviews",
  },
]

export default function GalleryPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pink-800 mb-4">Our Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our extensive collection of bridal mehandi designs, makeup transformations, and professional services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/gallery/${category.slug}`}
            className="group relative overflow-hidden rounded-lg aspect-[4/3]"
          >
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold">{category.title}</h3>
              <p className="text-white/80 text-sm">{category.count}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="py-12 bg-pink-50 rounded-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <p className="text-gray-600">What our clients say about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[{
            name: 'Happy Client 1',
            review: 'Amazing service! The mehandi design was exactly what I wanted for my wedding day. Highly recommend!',
            image: '/Logo/logo.jpg'
          }, {
            name: 'Satisfied Client 2',
            review: 'The bridal makeup was stunning and lasted all day. Thank you for making my day special!',
            image: '/Logo/logo.jpg'
          }, {
            name: 'Delighted Client 3',
            review: 'Professional and friendly service. The saree draping was perfect!',
            image: '/Logo/logo.jpg'
          }].map((client, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={client.image} alt={client.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">{client.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, j) => (
                      <span key={j}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "{client.review}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Videos</h2>
          <p className="text-gray-600">Watch our latest tutorials and announcements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt={`Video thumbnail ${i}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-pink-600 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section className="py-12">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Videos</h2>
    <p className="text-gray-600">Watch our latest tutorials and announcements</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {['video3.mp4'].map((video, i) => (
      <div key={i} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
        <video controls className="object-cover w-full h-full">
          <source src={`/Videos/${video}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    ))}
  </div>
</section>
    </div>
  )
}
