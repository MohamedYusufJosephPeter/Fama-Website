import Image from "next/image"
import { notFound } from "next/navigation"
import fs from 'fs';
import path from 'path';

const getImagesFromDirectory = (folderName: string) => {
  const directoryPath = path.join(process.cwd(), 'public', folderName);
  try {
    const files = fs.readdirSync(directoryPath);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|svg)$/i.test(file)); // Filter image files
    return imageFiles.map(file => path.join(`/${folderName}`, file)); // Use a path relative to the public directory
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
};

// This would come from your database or CMS
const categories = {
  "bridal-mehandi": {
    title: "Bridal Mehandi",
    description: "Explore our collection of intricate bridal mehandi designs",
    images: getImagesFromDirectory('Bridal Mehandi Gallery'), // Pass folder name
  },
  "bridal-makeup": {
    title: "Bridal Makeup",
    description: "Beautiful bridal makeup transformations",
    images: getImagesFromDirectory('Bridal Makeup Gallery'), // Pass folder name
  },
  "mehandi-products": {
    title: "Mehandi Products",
    description: "Quality mehandi products for professional use",
    images: getImagesFromDirectory('Mehandi Products Gallery'), // Pass folder name
  },
  "online-classes": {
    title: "Online Mehandi Classes",
    description: "Learn the art of mehandi from our expert tutorials",
    images: getImagesFromDirectory('Online Mehandi Classes Gallery'), // Pass folder name
  },
  "saree-draping": {
    title: "Saree Draping",
    description: "Professional saree draping services for all occasions",
    images: getImagesFromDirectory('Saree Draping Gallery'), // Pass folder name
  },
  "other-products": {
    title: "Other Products",
    description: "Explore our range of beauty and mehandi accessories",
    images: getImagesFromDirectory('Other Products Gallery'), // Pass folder name
  },
  "customer-reviews": {
    title: "Customer Reviews",
    description: "Read what our customers have to say about our services",
    images: getImagesFromDirectory('Customer Reviews Gallery'), // Pass folder name
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
              src={image}
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

