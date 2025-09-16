"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const designData = [
  {
    id: 1,
    name: "Print Advertisement",
    title: "Print Advertisement",
    description: "Magazine advertisement design",
    type: "Print",
    status: "Active",
    budget: "$2,500",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Social Media Graphics",
    title: "Social Media Graphics",
    description: "Instagram and Facebook posts",
    type: "Digital",
    status: "Pending",
    budget: "$1,800",
    date: "2024-01-20"
  },
  {
    id: 3,
    name: "Packaging Design",
    title: "Packaging Design",
    description: "Product packaging redesign",
    type: "Print",
    status: "Completed",
    budget: "$4,200",
    date: "2024-01-10"
  }
];

export default function DesignListComponent() {
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Design List
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your design projects
          </p>
        </div>
        <button
          onClick={() => console.log('Add new design project')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Item
        </button>
      </div>
      
      <MediaListTable 
        items={designData}
        title=""
        themeColor="text-blue-500"
        categories={["Print", "Digital", "Packaging"]}
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
