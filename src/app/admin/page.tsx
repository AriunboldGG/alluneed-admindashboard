import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin Dashboard | AlluNeed",
  description: "AlluNeed Admin Dashboard",
};

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Welcome to Admin Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This is a test of the admin dashboard content.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Test Card 2
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Another test card to verify the layout is working.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Test Card 3
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Third test card for layout verification.
          </p>
        </div>
      </div>
    </div>
  );
}
