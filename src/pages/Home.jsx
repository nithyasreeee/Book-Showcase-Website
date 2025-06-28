import React, { useState, useEffect } from 'react';
import {
  Search, Star, BookOpen, ChevronLeft, ChevronRight, TrendingUp,
  Award, Users
} from 'lucide-react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [
    {
      title: "Discover Your Next Adventure",
      subtitle: "Explore thousands of books across every genre",
      image: "📚",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "Join Our Reading Community",
      subtitle: "Connect with fellow book lovers worldwide",
      image: "🌟",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Unlimited Digital Library",
      subtitle: "Read anywhere, anytime on any device",
      image: "📖",
      gradient: "from-green-600 to-blue-600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[24rem] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} text-white transition-opacity duration-1000 ${
              currentHeroSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-full flex items-center justify-center px-4 text-center">
              <div>
                <div className="text-6xl mb-3 animate-bounce">{slide.image}</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-5">{slide.subtitle}</p>
                <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition">
                  Start Reading
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Search */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for books or authors..."
              className="w-full pl-12 pr-4 py-4 rounded-full border shadow-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: BookOpen, label: "Books", value: "50,000+" },
            { icon: Users, label: "Readers", value: "125,000+" },
            { icon: Award, label: "Awards", value: "2,500+" },
            { icon: TrendingUp, label: "Trending", value: "1,200+" },
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-xl shadow hover:shadow-md transition">
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-xl font-semibold">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
