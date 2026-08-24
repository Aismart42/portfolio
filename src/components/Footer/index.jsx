const navLinks = [
  { label: "Home", target: "hero" },
  { label: "Work", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Testimonials", target: "recommendations" },
  { label: "Contact", target: "contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-8 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Name */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          SIM<span className="text-blue-500">BA</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 flex-wrap justify-center text-sm">
          {navLinks.map(({ label, target }) => (
            <a
              key={label}
              href={`#${target}`}
              className="hover:text-blue-500 transition"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      
      {/* Copyright */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Simba. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;