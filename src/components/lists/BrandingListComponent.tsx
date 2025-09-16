"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const brandingData = [
  {
    id: 1,
    title: "Logo Design Project",
    description: "Complete brand identity design",
    type: "Visual Identity",
    status: "Active",
    budget: "$5,000",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Brand Guidelines",
    description: "Comprehensive brand manual",
    type: "Documentation",
    status: "Pending",
    budget: "$3,500",
    date: "2024-01-20"
  },
  {
    id: 3,
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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Branding List
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your branding projects
        </p>
      </div>
      
      <MediaListTable 
        data={brandingData}
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
