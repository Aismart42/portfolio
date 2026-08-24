const CompanyLogo = ({ logo, idx }) => {
  return (
    <div
      key={idx}
      className="h-10 sm:h-12 transition"
    >
      <img
        src={logo}
        alt={`Company logo ${idx}`}
        className="h-full object-contain transition grayscale hover:grayscale-0 dark:invert"
      />
    </div>
  );
};

export default CompanyLogo;