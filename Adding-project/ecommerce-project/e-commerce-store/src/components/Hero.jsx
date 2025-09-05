const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover Amazing
              <span className="text-emerald-600 block">Products</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Shop the latest trends with our curated collection of premium
              products. Quality, style, and innovation all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2">50% OFF</div>
                  <div className="text-lg">Limited Time Offer</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
