"use client";

import React, { useState, useEffect } from "react";
import MediaListTable from "./MediaListTable";
import { FacebookInfluencerItem } from "@/types/media";

// Demo Facebook influencers data
const facebookInfluencers: FacebookInfluencerItem[] = [
  {
    id: 1,
    name: "Mongolian Business Network",
    pageName: "Mongolian Business Network",
    username: "@mongolianbusiness",
    category: "Business & Finance",
    followers: 89000,
    engagement: 3.8,
    pricePerPost: 3200000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: true
  },
  {
    id: 2,
    name: "UB Community News",
    pageName: "UB Community News",
    username: "@ubcommunitynews",
    category: "News & Media",
    followers: 156000,
    engagement: 4.2,
    pricePerPost: 4800000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: true
  },
  {
    id: 3,
    name: "Mongolian Food Lovers",
    pageName: "Mongolian Food Lovers",
    username: "@mongolianfoodlovers",
    category: "Food & Lifestyle",
    followers: 67000,
    engagement: 5.1,
    pricePerPost: 2100000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: false
  },
  {
    id: 4,
    name: "Tech Mongolia Hub",
    pageName: "Tech Mongolia Hub",
    username: "@techmongoliahub",
    category: "Technology",
    followers: 45000,
    engagement: 6.3,
    pricePerPost: 1800000,
    status: "Pending",
    location: "Ulaanbaatar, Mongolia",
    verified: false
  },
  {
    id: 5,
    name: "Mongolian Parents Group",
    pageName: "Mongolian Parents Group",
    username: "@mongolianparents",
    category: "Parenting & Family",
    followers: 120000,
    engagement: 4.7,
    pricePerPost: 3600000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: true
  }
];

export default function FacebookListComponent() {
  const [selectedItem, setSelectedItem] = useState<FacebookInfluencerItem | null>(null);

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
      key: 'pageName',
      label: 'Page',
      width: '150px',
      render: (item: FacebookInfluencerItem) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {item.pageName.charAt(0)}
          </div>
          <div>
            <h5 className="font-medium text-black dark:text-white">
              {item.pageName}
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
      render: (item: FacebookInfluencerItem) => (
        <span className="inline-flex rounded-full py-1 px-3 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          {item.category}
        </span>
      )
    },
    {
      key: 'followers',
      label: 'Followers',
      width: '100px',
      render: (item: FacebookInfluencerItem) => (
        <p className="text-black dark:text-white font-medium">{item.followers.toLocaleString()}</p>
      )
    },
    {
      key: 'engagement',
      label: 'Engagement',
      width: '100px',
      render: (item: FacebookInfluencerItem) => (
        <p className="text-black dark:text-white">{item.engagement}%</p>
      )
    },
    {
      key: 'pricePerPost',
      label: 'Price/Post',
      width: '120px',
      render: (item: FacebookInfluencerItem) => (
        <p className="text-black dark:text-white font-medium">₮{item.pricePerPost.toLocaleString()}</p>
      )
    },
    {
      key: 'location',
      label: 'Location',
      width: '100px',
      render: (item: FacebookInfluencerItem) => (
        <p className="text-black dark:text-white text-sm">{item.location}</p>
      )
    },
    {
      key: 'verified',
      label: 'Verified',
      width: '100px',
      render: (item: FacebookInfluencerItem) => (
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
      render: (item: FacebookInfluencerItem) => (
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

  const categories = ["Business & Finance", "News & Media", "Food & Lifestyle", "Technology", "Parenting & Family"];

  const handleItemClick = (item: FacebookInfluencerItem) => {
    setSelectedItem(item);
  };

  const handleEdit = (item: FacebookInfluencerItem) => {
    console.log('Edit item:', item);
  };

  const handleDelete = (item: FacebookInfluencerItem) => {
    console.log('Delete item:', item);
  };

  return (
    <>
      <MediaListTable
        items={facebookInfluencers}
        title="Facebook Influencers"
        themeColor="text-blue-500"
        categories={categories}
        columns={columns}
        onItemClick={handleItemClick}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {selectedItem.pageName.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">{selectedItem.pageName}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{selectedItem.username}</p>
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Followers:</span>
                    <span className="font-semibold text-black dark:text-white">{selectedItem.followers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Engagement Rate:</span>
                    <span className="font-semibold text-black dark:text-white">{selectedItem.engagement}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Price per Post:</span>
                    <span className="font-semibold text-black dark:text-white">₮{selectedItem.pricePerPost.toLocaleString()}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Category:</span>
                    <span className="font-semibold text-black dark:text-white">{selectedItem.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Location:</span>
                    <span className="font-semibold text-black dark:text-white">{selectedItem.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Verified:</span>
                    <span className={`font-semibold ${selectedItem.verified ? 'text-green-600' : 'text-gray-600'}`}>
                      {selectedItem.verified ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
