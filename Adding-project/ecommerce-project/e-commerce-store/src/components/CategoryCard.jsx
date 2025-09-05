const CategoryCard = ({ category }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl cursor-pointer">
      {/* Background Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-300 transition-colors duration-200">
          {category.name}
        </h3>
        <p className="text-sm text-gray-200 mb-3">
          {category.productCount} Products
        </p>
        <button className="text-sm font-medium text-emerald-300 hover:text-white transition-colors duration-200">
          Explore →
        </button>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default CategoryCard;
