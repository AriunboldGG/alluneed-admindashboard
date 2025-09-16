"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const designData = [
  {
    id: 1,
    title: "Print Advertisement",
    description: "Magazine advertisement design",
    type: "Print",
    status: "Active",
    budget: "$2,500",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Social Media Graphics",
    description: "Instagram and Facebook posts",
    type: "Digital",
    status: "Pending",
    budget: "$1,800",
    date: "2024-01-20"
  },
  {
    id: 3,
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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Design List
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your design projects
        </p>
      </div>
      
      <MediaListTable 
        data={designData}
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
