"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const videoProductionData = [
  {
    id: 1,
    name: "Corporate Video",
    title: "Corporate Video",
    description: "Company introduction video",
    duration: "3 minutes",
    status: "Active",
    budget: "$12,000",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Product Demo Video",
    title: "Product Demo Video",
    description: "Product showcase video",
    duration: "2 minutes",
    status: "Pending",
    budget: "$8,500",
    date: "2024-01-20"
  },
  {
    id: 3,
    name: "Social Media Ad",
    title: "Social Media Ad",
    description: "Short-form social media content",
    duration: "30 seconds",
    status: "Completed",
    budget: "$3,200",
    date: "2024-01-10"
  }
];

export default function VideoProductionListComponent() {
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Video Production List
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your video production projects
          </p>
        </div>
        <button
          onClick={() => console.log('Add new video project')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Item
        </button>
      </div>
      
      <MediaListTable 
        items={videoProductionData}
        title=""
        themeColor="text-blue-500"
        categories={["Corporate", "Product Demo", "Social Media"]}
        columns={[
          { key: 'title', label: 'Title' },
          { key: 'description', label: 'Description' },
          { key: 'duration', label: 'Duration' },
          { key: 'status', label: 'Status' },
          { key: 'budget', label: 'Budget' },
          { key: 'date', label: 'Date' }
        ]}
      />
    </div>
  );
}
