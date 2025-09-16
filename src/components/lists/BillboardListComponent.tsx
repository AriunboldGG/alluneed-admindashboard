"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const billboardData = [
  {
    id: 1,
    title: "Highway Billboard #1",
    description: "Main highway location",
    location: "I-95 North",
    status: "Active",
    price: "$5,000",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "City Center Billboard",
    description: "Downtown location",
    location: "Main Street",
    status: "Pending",
    price: "$3,500",
    date: "2024-01-20"
  },
  {
    id: 3,
    title: "Airport Billboard",
    description: "Airport terminal location",
    location: "Terminal A",
    status: "Completed",
    price: "$7,200",
    date: "2024-01-10"
  }
];

export default function BillboardListComponent() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Billboard List
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your billboard placements
        </p>
      </div>
      
      <MediaListTable 
        data={billboardData}
        columns={[
          { key: 'title', label: 'Title' },
          { key: 'description', label: 'Description' },
          { key: 'location', label: 'Location' },
          { key: 'status', label: 'Status' },
          { key: 'price', label: 'Price' },
          { key: 'date', label: 'Date' }
        ]}
      />
    </div>
  );
}
