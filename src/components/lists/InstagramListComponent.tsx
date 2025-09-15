"use client";

import React, { useState, useEffect } from "react";
import MediaListTable from "./MediaListTable";
import { InfluencerItem } from "@/types/media";

// Demo Instagram influencers data
const instagramInfluencers: InfluencerItem[] = [
  {
    id: 1,
    username: "@mongolian_beauty",
    name: "Mongolian Beauty",
    category: "Beauty & Fashion",
    followers: 125000,
    engagement: 4.2,
    pricePerPost: 2500000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: true,
    description: "Beauty and fashion influencer specializing in Mongolian traditional and modern styles",
    contact: "contact@mongolianbeauty.com",
    languages: ["Mongolian", "English"],
    specialties: ["Beauty", "Fashion", "Lifestyle"],
    lastPost: "2024-01-15",
    avgLikes: 5200,
    avgComments: 320
  },
  {
    id: 2,
    username: "@ub_foodie",
    name: "UB Foodie",
    category: "Food & Travel",
    followers: 89000,
    engagement: 5.8,
    pricePerPost: 1800000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: true,
    description: "Food blogger showcasing Mongolian cuisine and international restaurants",
    contact: "hello@ubfoodie.mn",
    languages: ["Mongolian", "English", "Korean"],
    specialties: ["Food", "Travel", "Restaurant Reviews"],
    lastPost: "2024-01-14",
    avgLikes: 4800,
    avgComments: 450
  },
  {
    id: 3,
    username: "@mongolian_traveler",
    name: "Mongolian Traveler",
    category: "Travel & Adventure",
    followers: 156000,
    engagement: 3.9,
    pricePerPost: 3200000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: true,
    description: "Travel influencer exploring Mongolia and international destinations",
    contact: "info@mongoliantraveler.com",
    languages: ["Mongolian", "English", "Russian"],
    specialties: ["Travel", "Adventure", "Photography"],
    lastPost: "2024-01-16",
    avgLikes: 6200,
    avgComments: 280
  },
  {
    id: 4,
    username: "@tech_mongolia",
    name: "Tech Mongolia",
    category: "Technology",
    followers: 67000,
    engagement: 6.2,
    pricePerPost: 1500000,
    status: "Pending",
    location: "Ulaanbaatar, Mongolia",
    verified: false,
    description: "Technology reviewer and gadget enthusiast",
    contact: "tech@mongolia.mn",
    languages: ["Mongolian", "English"],
    specialties: ["Technology", "Gadgets", "Reviews"],
    lastPost: "2024-01-13",
    avgLikes: 4200,
    avgComments: 180
  },
  {
    id: 5,
    username: "@fitness_mongolia",
    name: "Fitness Mongolia",
    category: "Fitness & Health",
    followers: 98000,
    engagement: 4.7,
    pricePerPost: 2100000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: true,
    description: "Fitness coach and health advocate promoting healthy lifestyle",
    contact: "fitness@mongolia.com",
    languages: ["Mongolian", "English"],
    specialties: ["Fitness", "Health", "Nutrition"],
    lastPost: "2024-01-15",
    avgLikes: 4600,
    avgComments: 350
  }
];

export default function InstagramListComponent() {
  const [selectedItem, setSelectedItem] = useState<InfluencerItem | null>(null);
  const [editData, setEditData] = useState<InfluencerItem | null>(null);

  // Initialize edit data when item is selected
  useEffect(() => {
    if (selectedItem) {
      setEditData({ ...selectedItem });
    }
  }, [selectedItem]);

  // Hide header when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedItem]);

  const columns = [
    {
      key: 'name',
      label: 'Influencer',
      width: '150px',
      render: (item: InfluencerItem) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {item.name.charAt(0)}
          </div>
          <div>
            <h5 className="font-medium text-black dark:text-white">
              {item.name}
            </h5>
            <p className="text-sm text-body-color dark:text-body-color-dark">
              {item.username}
            </p>
          </div>
        </div>
      )
    },
    {
      key: 'category',
      label: 'Category',
      width: '120px',
      render: (item: InfluencerItem) => (
        <span className="inline-flex rounded-full py-1 px-3 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          {item.category}
        </span>
      )
    },
    {
      key: 'followers',
      label: 'Followers',
      width: '100px',
      render: (item: InfluencerItem) => (
        <p className="text-black dark:text-white font-medium">{item.followers.toLocaleString()}</p>
      )
    },
    {
      key: 'engagement',
      label: 'Engagement',
      width: '100px',
      render: (item: InfluencerItem) => (
        <p className="text-black dark:text-white">{item.engagement}%</p>
      )
    },
    {
      key: 'pricePerPost',
      label: 'Price/Post',
      width: '120px',
      render: (item: InfluencerItem) => (
        <p className="text-black dark:text-white font-medium">₮{item.pricePerPost.toLocaleString()}</p>
      )
    },
    {
      key: 'location',
      label: 'Location',
      width: '100px',
      render: (item: InfluencerItem) => (
        <p className="text-black dark:text-white text-sm">{item.location}</p>
      )
    },
    {
      key: 'verified',
      label: 'Verified',
      width: '100px',
      render: (item: InfluencerItem) => (
        <span className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
          item.verified 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
        }`}>
          {item.verified ? '✓ Verified' : 'Unverified'}
        </span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      width: '100px',
      render: (item: InfluencerItem) => (
        <span className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
          item.status === 'Active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            : item.status === 'Pending'
            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
        }`}>
          {item.status}
        </span>
      )
    }
  ];

  const categories = ["Beauty & Fashion", "Food & Travel", "Travel & Adventure", "Technology", "Fitness & Health"];

  const additionalFilters = [
    {
      key: 'verified',
      label: 'Verification',
      type: 'select' as const,
      options: ['Verified', 'Unverified']
    }
  ];

  const handleItemClick = (item: InfluencerItem) => {
    setSelectedItem(item);
  };

  const handleEdit = (item: InfluencerItem) => {
    console.log('Edit item:', item);
  };

  const handleDelete = (item: InfluencerItem) => {
    console.log('Delete item:', item);
  };

  return (
    <>
      <MediaListTable
        items={instagramInfluencers}
        title="Instagram Influencers"
        themeColor="text-pink-500"
        categories={categories}
        columns={columns}
        additionalFilters={additionalFilters}
        onItemClick={handleItemClick}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {selectedItem.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">{selectedItem.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{selectedItem.username}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{selectedItem.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Profile Information */}
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Профайлын мэдээлэл</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Нэр</label>
                        <input 
                          type="text" 
                          value={editData?.name || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, name: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Хэрэглэгчийн нэр</label>
                        <input 
                          type="text" 
                          value={editData?.username || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, username: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ангилал</label>
                        <input 
                          type="text" 
                          value={editData?.category || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, category: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Байршил</label>
                        <input 
                          type="text" 
                          value={editData?.location || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, location: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Үнэлгээ</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Нэг постны үнэ</label>
                        <input 
                          type="text" 
                          value={editData?.pricePerPost ? `₮${editData.pricePerPost.toLocaleString()}` : ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, pricePerPost: parseInt(e.target.value.replace(/[₮,]/g, '')) || 0} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Нэг хүнд хүрч буй зардал</label>
                        <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-md">
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">₮2.08</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Нийт хүртээмж</label>
                        <div className="bg-green-50 dark:bg-green-900 p-3 rounded-md">
                          <span className="text-2xl font-bold text-green-600 dark:text-green-300">{selectedItem.followers.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle Column - Demographics */}
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Хүйсийн харьцаа</h3>
                    <div className="flex items-center justify-center h-32">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        70/30
                      </div>
                    </div>
                    <div className="flex justify-center space-x-4 mt-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Эмэгтэй</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Эрэгтэй</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Насны харьцаа</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">13-17</span>
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '20%'}}></div>
                        </div>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">18-24</span>
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{width: '40%'}}></div>
                        </div>
                        <span className="text-sm font-medium">40%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">25-34</span>
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '30%'}}></div>
                        </div>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">35+</span>
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '10%'}}></div>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Performance and Settings */}
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Гүйцэтгэл</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Дагагчдын тоо</label>
                        <input 
                          type="text" 
                          value={editData?.followers?.toLocaleString() || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, followers: parseInt(e.target.value.replace(/,/g, '')) || 0} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Оролцооны түвшин</label>
                        <input 
                          type="text" 
                          value={editData?.engagement ? `${editData.engagement}%` : ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, engagement: parseFloat(e.target.value.replace('%', '')) || 0} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Дундаж лайк</label>
                        <input 
                          type="text" 
                          value={editData?.avgLikes?.toLocaleString() || '0'}
                          onChange={(e) => setEditData(prev => prev ? {...prev, avgLikes: parseInt(e.target.value.replace(/,/g, '')) || 0} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Дундаж сэтгэгдэл</label>
                        <input 
                          type="text" 
                          value={editData?.avgComments?.toLocaleString() || '0'}
                          onChange={(e) => setEditData(prev => prev ? {...prev, avgComments: parseInt(e.target.value.replace(/,/g, '')) || 0} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Ангилал</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Одоогийн ангилал</label>
                        <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white">
                          <option>{selectedItem.category}</option>
                          <option>Beauty & Fashion</option>
                          <option>Food & Travel</option>
                          <option>Technology</option>
                          <option>Fitness & Health</option>
                          <option>Parenting & Family</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Тусгай чадварууд</label>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.specialties?.map((specialty, index) => (
                            <span key={index} className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-300 rounded-full text-sm">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Хэл</label>
                        <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white">
                          <option>Монгол хэл</option>
                          <option>Англи хэл</option>
                          <option>Хятад хэл</option>
                          <option>Орос хэл</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Холбоо барих</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Имэйл</label>
                        <input 
                          type="email" 
                          value={editData?.contact || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, contact: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-pink-500 text-white rounded text-sm hover:bg-pink-600 flex-1">
                          Санал илгээх
                        </button>
                        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm flex-1">
                          Профайл үзэх
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                  Цуцлах
                </button>
                <button 
                  onClick={() => {
                    if (editData) {
                      // Here you would typically save the data to your backend
                      console.log('Saving data:', editData);
                      setSelectedItem(null);
                    }
                  }}
                  className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                >
                  Хадгалах
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
