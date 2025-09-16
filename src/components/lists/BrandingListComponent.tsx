"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const brandingData = [
  {
    id: 1,
    name: "Logo Design Project",
    title: "Logo Design Project",
    description: "Complete brand identity design",
    type: "Visual Identity",
    status: "Active",
    budget: "$5,000",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Brand Guidelines",
    title: "Brand Guidelines",
    description: "Comprehensive brand manual",
    type: "Documentation",
    status: "Pending",
    budget: "$3,500",
    date: "2024-01-20"
  },
  {
    id: 3,
    name: "Website Redesign",
    title: "Website Redesign",
    description: "Complete website rebrand",
    type: "Digital",
    status: "Completed",
    budget: "$15,000",
    date: "2024-01-10"
  }
];

export default function BrandingListComponent() {
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Branding List
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your branding projects
          </p>
        </div>
        <button
          onClick={() => console.log('Add new branding project')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Item
        </button>
      </div>
      
      <MediaListTable 
        items={brandingData}
        title=""
        themeColor="text-blue-500"
        categories={["Visual Identity", "Documentation", "Digital"]}
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
