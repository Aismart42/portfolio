import { useState } from "react";
import testimonials from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import companyLogos from "../../data/companyLogos";
import ArrowNavigation from "./ArrowNavigation";
import CompanyLogo from "./CompanyLogo";

const RecommendationsSection = () => {
  // Set up state to track the current testimonial index
  const [current, setCurrent] = useState(0);

  // Get the currently selected testimonial
  const testimonial = testimonials[current];

  // Function to go to the previous testimonial (loop to last if at beginning)
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  // Function to go to the next testimonial (loop to first if at end)
  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  
  return (
    <section className="min-h-screen py-20 px-4 text-center bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Testimonials
      </h2>
      <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-16">
        What People Say
      </h3>

      {/* Render the current testimonial using TestimonialCard component */}
      <TestimonialCard testimonial={testimonial} />
        
      {/* Navigation Arrows */}
      <ArrowNavigation
        prev={prev}
        next={next}
      />
      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-10 mt-16">
        {companyLogos.map((logo, idx) => (
          <CompanyLogo
            key={idx}
            logo={logo}
            idx={idx}
          />
        ))}
      </div>
      
    </section>
  );
};

export default RecommendationsSection;