export default function Home() {
  return (
    <div className="bg-[#ABABAB] w-full h-screen grid lg:grid-cols-7">
      <h1 className="lg:col-span-4 w-full flex justify-center flex-col items-center space-y-5">
        <span className="text-3xl font-semibold text-default">I am</span>
        <span className="text-5xl font-bold">Nathaniel Febiri Obeng</span>
        <span className="text-3xl font-semibold text-default">Fullstack Developer</span>
      </h1>
      <div className="lg:col-span-3 bg-hero w-full bg-cover grayscale"></div>
    </div>
  )
}
