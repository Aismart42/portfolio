const Hero = () => {
  return (
    <section className="min-h-screen pt-24 flex flex-col md:flex-row items-center justify-between dark:bg-gray-800 px-6 md:px-20 py-10">
      {/* Left Side: Text */}
      <div className="max-w-lg space-y-4">
        <p className="text-lg">👋 Hello, I am</p>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">
          Simba
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-xl">
          Web Developer / Freelancer
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Let’s Connect
          </a>
          <a
            href="#cv"
            className="px-4 py-2 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Download CV
          </a>
        </div>
      </div>
      {/* Right Side: Image + Icons */}
      <div className="relative mt-10 md:mt-0">
        <img
          src="/images/hero/lion.jpg"
          alt="Profile"
          className="rounded-full shadow-lg"
          width={300}
          height={300}
        />
        <div className="absolute top-[-20px] right-[-20px] bg-white dark:bg-gray-700 p-2 rounded-full shadow-md">
          <img
            src="/images/hero/flutter.svg"
            alt="Flutter"
            className="w-8 h-8"
          />
        </div>
        <div className="absolute bottom-[-20px] left-[-20px] bg-white dark:bg-gray-700 p-2 rounded-full shadow-md">
          <img
            src="/images/hero/convex.svg"
            alt="Convex"
            className="w-8 h-8"
          />
        </div>
      </div>        
    </section>
  );
};

export default Hero;