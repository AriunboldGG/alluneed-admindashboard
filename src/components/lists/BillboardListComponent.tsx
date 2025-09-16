"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const billboardData = [
  {
    id: 1,
    name: "Highway Billboard #1",
    title: "Highway Billboard #1",
    description: "Main highway location",
    location: "I-95 North",
    status: "Active",
    price: "$5,000",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "City Center Billboard",
    title: "City Center Billboard",
    description: "Downtown location",
    location: "Main Street",
    status: "Pending",
    price: "$3,500",
    date: "2024-01-20"
  },
  {
    id: 3,
    name: "Airport Billboard",
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
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Billboard List
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your billboard placements
          </p>
        </div>
        <button
          onClick={() => console.log('Add new billboard')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Item
        </button>
      </div>
      
      <MediaListTable 
        items={billboardData}
        title=""
        themeColor="text-blue-500"
        categories={["Highway", "City Center", "Airport"]}
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
