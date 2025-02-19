import Image from "next/image"

export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-800 mb-8 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/About.jfif?height=300&width=300"
          alt="Mehandi Artist"
          width={300}
          height={300}
          className="rounded-full shadow-md"
        />
        <div>
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Certified Beautician & Mehandi Artist</h2>
          <p className="text-gray-600 mb-4">
            With over 10 years of experience in the beauty industry, I specialize in creating stunning bridal mehandi
            designs, flawless makeup looks, and elegant saree draping. My passion for the art of mehandi has led me to
            develop my own line of mehandi products and offer online classes to share my knowledge with enthusiasts
            around the world.
          </p>
          <p className="text-gray-600">
            My goal is to make every client feel beautiful and confident on their special day. I take pride in my
            attention to detail and my ability to bring each client's vision to life.
          </p>
        </div>
      </div>
    </div>
  )
}

