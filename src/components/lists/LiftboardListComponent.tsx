"use client";

import React from "react";
import MediaListTable from "./MediaListTable";

const liftboardData = [
  {
    id: 1,
    title: "Elevator Display #1",
    description: "Office building elevator",
    location: "Downtown Plaza",
    status: "Active",
    price: "$1,200",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Shopping Mall Display",
    description: "Mall elevator network",
    location: "City Mall",
    status: "Pending",
    price: "$2,800",
    date: "2024-01-20"
  },
  {
    id: 3,
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
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Liftboard List
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your elevator display placements
        </p>
      </div>
      
      <MediaListTable 
        data={liftboardData}
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
