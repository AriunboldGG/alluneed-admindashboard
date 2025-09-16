"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const videoProductionData = [
  {
    id: 1,
    title: "Corporate Video",
    description: "Company introduction video",
    duration: "3 minutes",
    status: "Active",
    budget: "$12,000",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Product Demo Video",
    description: "Product showcase video",
    duration: "2 minutes",
    status: "Pending",
    budget: "$8,500",
    date: "2024-01-20"
  },
  {
    id: 3,
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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Video Production List
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your video production projects
        </p>
      </div>
      
      <MediaListTable 
        data={videoProductionData}
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
