"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const newsData = [
  {
    id: 1,
    name: "Breaking News Coverage",
    title: "Breaking News Coverage",
    description: "Prime time news segment",
    duration: "30 seconds",
    status: "Active",
    price: "$2,500",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Local News Feature",
    title: "Local News Feature",
    description: "Community spotlight story",
    duration: "45 seconds",
    status: "Pending",
    price: "$1,800",
    date: "2024-01-20"
  },
  {
    id: 3,
    name: "Business News Update",
    title: "Business News Update",
    description: "Market analysis segment",
    duration: "60 seconds",
    status: "Completed",
    price: "$3,200",
    date: "2024-01-10"
  }
];

export default function NewsListComponent() {
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            News List
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your news media placements
          </p>
        </div>
        <button
          onClick={() => console.log('Add new news item')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Item
        </button>
      </div>
      
      <MediaListTable 
        items={newsData}
        title=""
        themeColor="text-blue-500"
        categories={["Breaking News", "Local News", "Business News"]}
        columns={[
          { key: 'title', label: 'Title' },
          { key: 'description', label: 'Description' },
          { key: 'duration', label: 'Duration' },
          { key: 'status', label: 'Status' },
          { key: 'price', label: 'Price' },
          { key: 'date', label: 'Date' }
        ]}
      />
    </div>
  );
}
