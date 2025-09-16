"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const marketingData = [
  {
    id: 1,
    title: "Brand Awareness Campaign",
    description: "Multi-channel marketing strategy",
    type: "Digital + Traditional",
    status: "Active",
    budget: "$25,000",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Product Launch Campaign",
    description: "New product marketing initiative",
    type: "Digital",
    status: "Pending",
    budget: "$15,000",
    date: "2024-01-20"
  },
  {
    id: 3,
    title: "Seasonal Promotion",
    description: "Holiday marketing campaign",
    type: "Traditional",
    status: "Completed",
    budget: "$8,500",
    date: "2024-01-10"
  }
];

export default function MarketingListComponent() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Marketing List
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your marketing campaigns
        </p>
      </div>
      
      <MediaListTable 
        data={marketingData}
        columns={[
          { key: 'title', label: 'Title' },
          { key: 'description', label: 'Description' },
          { key: 'type', label: 'Type' },
          { key: 'status', label: 'Status' },
          { key: 'budget', label: 'Budget' },
          { key: 'date', label: 'Date' }
        ]}
      />
    </div>
  );
}
