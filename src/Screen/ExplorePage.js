import React from 'react';

const ExplorePage = () => {
  // Real image URLs
  const trendingImages = [
    'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
  ];

  const recommendationImages = [
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=300&fit=crop',
    'https://unsplash.com/photos/a-white-vase-sitting-on-top-of-a-table-next-to-a-chair-AMR3Qa0EpyU',
    'https://images.unsplash.com/photo-1549877452-b2a6ad74c75c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    'https://unsplash.com/photos/white-and-black-cat-on-brown-wooden-chair-QoDgd413f6I',
  ]

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Explore</h1>
          <button className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-search text-xl"></i>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold">Discover Amazing Content</h2>
          <p className="text-gray-600 mt-2">
            Explore trending items, personalized recommendations, and popular categories.
          </p>
        </section>

        {/* Trending Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Trending Now</h3>
          <div className="flex gap-4 overflow-x-auto">
            {trendingImages.map((url, index) => (
              <div
                key={index}
                className="w-60 h-40 rounded-lg bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            ))}
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Recommended For You</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recommendationImages.map((url, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
              >
                <div
                  className="h-32 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
                <h4 className="mt-4 font-bold">Item {index + 1}</h4>
                <p className="text-gray-500 text-sm">Short description here</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Categories</h3>
          <div className="flex gap-4">
            {['Technology', 'Lifestyle', 'Education', 'Entertainment'].map((category, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                {category}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExplorePage;
