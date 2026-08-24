import { ChevronLeft, ChevronRight } from "lucide-react";

const ArrowButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
    >
      {children}
    </button>
  );
};

const ArrowNavigation = ({ prev, next }) => {
  return (
    <div className="flex justify-center gap-6 mb-16">
      <ArrowButton onClick={prev}>
        <ChevronLeft size={20} />
      </ArrowButton>
      <ArrowButton onClick={next}>
        <ChevronRight size={20} />
      </ArrowButton>
    </div>
  );
};

export default ArrowNavigation;