import { useState } from "react";
import { useTheme } from "../../context/ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import useActiveSection from "../../hooks/useActiveSection";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", target: "hero" },
    { label: "Work", target: "projects" },
    { label: "Skills", target: "skills" },
    { label: "Testimonials", target: "recommendations" },
    { label: "Contact", target: "contact" },
  ];

  const activeSection = useActiveSection(navLinks.map((link) => link.target));
  
  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-6">
        <h1 className="text-xl font-bold">
          SIM<span className="text-blue-500">BA</span>
        </h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, target }) => (
            <a
              key={label}
              href={`#${target}`}
              className={`transition hover:text-blue-500 ${
                activeSection === target ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {label}
            </a>
          ))}
          {/* Light/Dark Mode Toggle Button*/}
          <button onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 space-y-4">
          {navLinks.map(({ label, target }) => (
            <a
              key={label}
              href={`#${target}`}
              onClick={() => setMenuOpen(false)} // close on click
              className={`transition hover:text-blue-500 ${
                activeSection === target ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {label}
            </a>
          ))}
          {/* Light/Dark Mode Toggle Button*/}
          <button onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;