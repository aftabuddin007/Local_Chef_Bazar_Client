import React, { useState } from 'react';
import { Calendar, Clock, User, Search, ChefHat, ArrowRight, BookOpen, Flame } from 'lucide-react';

const BlogPage = () => {
  

  const blogPosts = [
    {
      id: 1,
      title: '5 Essential Kitchen Tools Every Home Chef Needs',
      excerpt: 'Discover the must-have tools that will elevate your home cooking business.',
      author: 'Sarah Chen',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Cooking Tips',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'From Home Kitchen to Successful Business',
      excerpt: 'How one home cook turned her passion into a thriving business.',
      author: 'Maria Rodriguez',
      date: '2024-03-10',
      readTime: '8 min read',
      category: 'Chef Stories',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Food Safety Guidelines for Home Cooks',
      excerpt: 'Essential safety practices to ensure your homemade meals meet health standards.',
      author: 'Dr. James Wilson',
      date: '2024-03-05',
      readTime: '6 min read',
      category: 'Food Safety',
      image: 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Pricing Your Home-Cooked Meals',
      excerpt: 'Learn how to price your meals competitively while ensuring profitability.',
      author: 'David Kim',
      date: '2024-03-01',
      readTime: '7 min read',
      category: 'Business Tips',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Building Your Brand as a Home Chef',
      excerpt: 'Tips for creating a memorable brand that keeps customers coming back.',
      author: 'Lisa Thompson',
      date: '2024-02-28',
      readTime: '4 min read',
      category: 'Business Tips',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Seasonal Cooking: Spring Recipes',
      excerpt: 'Fresh spring ingredients and recipes that will delight your customers.',
      author: 'Chef Michael',
      date: '2024-02-25',
      readTime: '5 min read',
      category: 'Recipes',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop'
    }
  ];

  const categories = [
    { name: 'All', count: 6, icon: <BookOpen size={16} /> },
    { name: 'Cooking Tips', count: 2, icon: <Flame size={16} /> },
    { name: 'Chef Stories', count: 1, icon: <ChefHat size={16} /> },
    { name: 'Food Safety', count: 1, icon: <Flame size={16} /> },
    { name: 'Business Tips', count: 2, icon: <BookOpen size={16} /> }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
     

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cook. Share. Earn.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover expert tips, inspiring stories, and practical advice for home cooks 
            and food lovers on LocalChefBazaar.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Post Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Post Content */}
              <div className="p-5">
                {/* Category & Metadata */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & Date */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <User size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm text-gray-700">{post.author}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                </div>

                {/* Read More Button */}
                
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try selecting a different category or search term</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white">
          <ChefHat className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Stay Updated with Food Trends</h3>
          <p className="mb-6 max-w-md mx-auto opacity-90">
            Get weekly cooking tips, chef stories, and platform updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-gray-900 hover:bg-black px-3 sm:px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>

    
     
    </div>
  );
};

export default BlogPage;