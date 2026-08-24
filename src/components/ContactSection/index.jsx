const labelClass = [
  "block", // Makes the label take up full width
  "mb-2", // Margin bottom
  "text-sm", // Small text
  "font-medium", // Medium font weight
  "text-gray-800", // Text color for light mode
  "dark:text-gray-200", // Text color for dark mode
].join(" ");
const inputClass = [
  "w-full", // Full width
  "px-4",
  "py-2", // Horizontal and vertical padding
  "border", // Default border
  "rounded-lg", // Large border radius
  "bg-white", // Light mode background
  "dark:bg-gray-800", // Dark mode background
  "border-gray-300", // Light mode border color
  "dark:border-gray-700", // Dark mode border color
  "text-gray-800", // Light mode text color
  "dark:text-white", // Dark mode text color
  "focus:outline-none", // Remove default focus outline
  "focus:ring-2", // Add ring on focus
  "focus:ring-blue-500", // Blue ring on focus
  "focus:border-blue-500", // Set border color to match ring
].join(" ");

const ContactSection = () => {
  return (
    <section className="py-20 px-4 text-center bg-white dark:bg-gray-900">
      <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12">
        Contact Me
      </h3>

      {/* Contact Info */}
      <div className="mb-10 text-gray-700 dark:text-gray-300">
        <p className="text-lg">📞 +1 (555) 123-4567</p>
        <p className="text-lg">✉️ simba.dev@example.com</p>
      </div>

      {/* Contact Form */}
      <form className="max-w-3xl mx-auto text-left grid grid-cols-1 gap-6">
        <div>
          <label
            htmlFor="name"
            className={labelClass}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className={labelClass}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className={labelClass}
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            placeholder="Your message ..."
            className={inputClass}
          ></textarea>
        </div>
        <button
          type="submit"
          className={[
            "w-full",
            "sm:w-fit", // Responsive width
            "px-6",
            "py-2", // Padding
            "border",
            "border-blue-500", // Border and color
            "text-blue-500", // Text color
            "rounded", // Rounded corners
            "hover:bg-blue-500", // Hover background
            "hover:text-white", // Hover text color
            "transition", // Smooth transition
          ].join(" ")}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
