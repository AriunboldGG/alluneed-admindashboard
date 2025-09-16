"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const liftboardData = [
  {
    id: 1,
    name: "Elevator Display #1",
    title: "Elevator Display #1",
    description: "Office building elevator",
    location: "Downtown Plaza",
    status: "Active",
    price: "$1,200",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Shopping Mall Display",
    title: "Shopping Mall Display",
    description: "Mall elevator network",
    location: "City Mall",
    status: "Pending",
    price: "$2,800",
    date: "2024-01-20"
  },
  {
    id: 3,
    name: "Residential Building",
    title: "Residential Building",
    description: "Apartment complex elevators",
    location: "Riverside Apartments",
    status: "Completed",
    price: "$1,500",
    date: "2024-01-10"
  }
];

export default function LiftboardListComponent() {
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Liftboard List
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your elevator display placements
          </p>
        </div>
        <button
          onClick={() => console.log('Add new liftboard')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Item
        </button>
      </div>
      
      <MediaListTable 
        items={liftboardData}
        title=""
        themeColor="text-blue-500"
        categories={["Office", "Mall", "Residential"]}
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
