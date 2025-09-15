"use client";

import React, { useState, useEffect } from "react";
import MediaListTable from "./MediaListTable";
import { YouTubeInfluencerItem } from "@/types/media";

// Demo YouTube influencers data
const youtubeInfluencers: YouTubeInfluencerItem[] = [
  {
    id: 1,
    channelName: "Mongolian Life Vlogs",
    username: "@mongolianlife",
    category: "Lifestyle & Vlogs",
    subscribers: 450000,
    avgViews: 125000,
    pricePerVideo: 8500000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: true,
    followers: 450000,
    engagement: 3.2,
    pricePerPost: 8500000
  },
  {
    id: 2,
    channelName: "UB Food Adventures",
    username: "@ubfoodadventures",
    category: "Food & Cooking",
    subscribers: 320000,
    avgViews: 89000,
    pricePerVideo: 6200000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: true,
    followers: 320000,
    engagement: 4.1,
    pricePerPost: 6200000
  },
  {
    id: 3,
    channelName: "Mongolian Travel Guide",
    username: "@mongoliantravelguide",
    category: "Travel & Tourism",
    subscribers: 520000,
    avgViews: 156000,
    pricePerVideo: 12000000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: true,
    followers: 520000,
    engagement: 2.8,
    pricePerPost: 12000000
  },
  {
    id: 4,
    channelName: "Mongolian Tech Reviews",
    username: "@mongoliantech",
    category: "Technology",
    subscribers: 180000,
    avgViews: 45000,
    pricePerVideo: 3500000,
    status: "Pending",
    location: "Ulaanbaatar, Mongolia",
    verified: false,
    followers: 180000,
    engagement: 5.2,
    pricePerPost: 3500000
  },
  {
    id: 5,
    channelName: "Fitness Mongolia",
    username: "@fitnessmongolia",
    category: "Fitness & Health",
    subscribers: 280000,
    avgViews: 67000,
    pricePerVideo: 4800000,
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    verified: true,
    followers: 280000,
    engagement: 3.8,
    pricePerPost: 4800000
  }
];

export default function YouTubeListComponent() {
  const [selectedItem, setSelectedItem] = useState<YouTubeInfluencerItem | null>(null);

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
      key: 'channelName',
      label: 'Channel',
      width: '150px',
      render: (item: YouTubeInfluencerItem) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {item.channelName.charAt(0)}
          </div>
          <div>
            <h5 className="font-medium text-black dark:text-white">
              {item.channelName}
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
      render: (item: YouTubeInfluencerItem) => (
        <span className="inline-flex rounded-full py-1 px-3 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          {item.category}
        </span>
      )
    },
    {
      key: 'subscribers',
      label: 'Subscribers',
      width: '100px',
      render: (item: YouTubeInfluencerItem) => (
        <p className="text-black dark:text-white font-medium">{item.subscribers.toLocaleString()}</p>
      )
    },
    {
      key: 'avgViews',
      label: 'Avg Views',
      width: '100px',
      render: (item: YouTubeInfluencerItem) => (
        <p className="text-black dark:text-white">{item.avgViews.toLocaleString()}</p>
      )
    },
    {
      key: 'pricePerVideo',
      label: 'Price/Video',
      width: '120px',
      render: (item: YouTubeInfluencerItem) => (
        <p className="text-black dark:text-white font-medium">₮{item.pricePerVideo.toLocaleString()}</p>
      )
    },
    {
      key: 'location',
      label: 'Location',
      width: '100px',
      render: (item: YouTubeInfluencerItem) => (
        <p className="text-black dark:text-white text-sm">{item.location}</p>
      )
    },
    {
      key: 'verified',
      label: 'Verified',
      width: '100px',
      render: (item: YouTubeInfluencerItem) => (
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
      render: (item: YouTubeInfluencerItem) => (
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

  const categories = ["Lifestyle & Vlogs", "Food & Cooking", "Travel & Tourism", "Technology", "Fitness & Health"];

  const handleItemClick = (item: YouTubeInfluencerItem) => {
    setSelectedItem(item);
  };

  const handleEdit = (item: YouTubeInfluencerItem) => {
    console.log('Edit item:', item);
  };

  const handleDelete = (item: YouTubeInfluencerItem) => {
    console.log('Delete item:', item);
  };

  return (
    <>
      <MediaListTable
        items={youtubeInfluencers}
        title="YouTube Influencers"
        themeColor="text-red-500"
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
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {selectedItem.channelName.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">{selectedItem.channelName}</h2>
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
                    <span className="text-gray-600 dark:text-gray-400">Subscribers:</span>
                    <span className="font-semibold text-black dark:text-white">{selectedItem.subscribers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Average Views:</span>
                    <span className="font-semibold text-black dark:text-white">{selectedItem.avgViews.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Price per Video:</span>
                    <span className="font-semibold text-black dark:text-white">₮{selectedItem.pricePerVideo.toLocaleString()}</span>
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
