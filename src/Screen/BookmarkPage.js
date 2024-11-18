import React, { useState } from 'react';

function BookmarkPage() {
    const [bookmarkedItems, setBookmarkedItems] = useState([
        { id: 1, name: 'Item 1', description: 'Description for item 1', imageUrl: 'https://images.unsplash.com/photo-1519664182904-d4e587c9d12a' },
        { id: 2, name: 'Item 2', description: 'Description for item 2', imageUrl: 'https://images.unsplash.com/photo-1518744130740-0f3408e04b16' },
        { id: 3, name: 'Item 3', description: 'Description for item 3', imageUrl: 'https://images.unsplash.com/photo-1603702339301-9a42b378d945' },
      ]);
      

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Your Bookmarked Items</h1>

      {/* Display the bookmarked items */}
      {bookmarkedItems.length === 0 ? (
        <p className="text-center text-gray-500">No items bookmarked yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bookmarkedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookmarkPage;
