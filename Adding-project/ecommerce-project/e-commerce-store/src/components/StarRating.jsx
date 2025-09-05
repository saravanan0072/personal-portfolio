// components/StarRating.jsx
import { FiStar } from "react-icons/fi";

const StarRating = ({ rating }) => {
  const roundedRating = Math.round(rating); // round to nearest integer
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FiStar
          key={i}
          className={`w-4 h-4 ${
            i < roundedRating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
