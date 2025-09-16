"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const marketingData = [
  {
    id: 1,
    name: "Brand Awareness Campaign",
    title: "Brand Awareness Campaign",
    description: "Multi-channel marketing strategy",
    type: "Digital + Traditional",
    status: "Active",
    budget: "$25,000",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Product Launch Campaign",
    title: "Product Launch Campaign",
    description: "New product marketing initiative",
    type: "Digital",
    status: "Pending",
    budget: "$15,000",
    date: "2024-01-20"
  },
  {
    id: 3,
    name: "Seasonal Promotion",
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
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Marketing List
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your marketing campaigns
          </p>
        </div>
        <button
          onClick={() => console.log('Add new marketing campaign')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Item
        </button>
      </div>
      
      <MediaListTable 
        items={marketingData}
        title=""
        themeColor="text-blue-500"
        categories={["Brand Awareness", "Product Launch", "Seasonal"]}
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
