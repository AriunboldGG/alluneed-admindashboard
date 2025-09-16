"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const newsData = [
  {
    id: 1,
    title: "Breaking News Coverage",
    description: "Prime time news segment",
    duration: "30 seconds",
    status: "Active",
    price: "$2,500",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Local News Feature",
    description: "Community spotlight story",
    duration: "45 seconds",
    status: "Pending",
    price: "$1,800",
    date: "2024-01-20"
  },
  {
    id: 3,
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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          News List
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your news media placements
        </p>
      </div>
      
      <MediaListTable 
        data={newsData}
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
