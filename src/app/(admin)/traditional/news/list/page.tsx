"use client";

import { useState, useEffect } from "react";
import type { Metadata } from "next";

// Demo News products data with categories
const newsProducts = [
  {
    id: 1,
    name: "Mongolian National News - Front Page",
    publication: "Mongolian National News",
    category: "Newspaper",
    section: "Front Page",
    size: "Full Page",
    price: "₮8,500,000",
    status: "Active",
    publishDate: "2024-01-15",
    circulation: "150,000",
    description: "Premium front page advertising in Mongolia's leading newspaper"
  },
  {
    id: 2,
    name: "UB Post - Business Section",
    publication: "UB Post",
    category: "Newspaper",
    section: "Business",
    size: "Half Page",
    price: "₮4,200,000",
    status: "Active",
    publishDate: "2024-01-16",
    circulation: "85,000",
    description: "Business section advertising in English-language newspaper"
  },
  {
    id: 3,
    name: "Today News - Sports Section",
    publication: "Today News",
    category: "Newspaper",
    section: "Sports",
    size: "Quarter Page",
    price: "₮2,800,000",
    status: "Pending",
    publishDate: "2024-01-18",
    circulation: "120,000",
    description: "Sports section advertising in popular daily newspaper"
  },
  {
    id: 4,
    name: "Mongolian Times - Lifestyle",
    publication: "Mongolian Times",
    category: "Magazine",
    section: "Lifestyle",
    size: "Full Page",
    price: "₮6,500,000",
    status: "Active",
    publishDate: "2024-01-17",
    circulation: "65,000",
    description: "Lifestyle magazine advertising for premium audience"
  },
  {
    id: 5,
    name: "Business Mongolia - Finance",
    publication: "Business Mongolia",
    category: "Magazine",
    section: "Finance",
    size: "Half Page",
    price: "₮5,200,000",
    status: "Completed",
    publishDate: "2024-01-14",
    circulation: "45,000",
    description: "Finance section in business-focused magazine"
  },
  {
    id: 6,
    name: "Daily News - Classified",
    publication: "Daily News",
    category: "Newspaper",
    section: "Classified",
    size: "Small Ad",
    price: "₮800,000",
    status: "Active",
    publishDate: "2024-01-16",
    circulation: "200,000",
    description: "Classified section small advertisement"
  },
  {
    id: 7,
    name: "Mongolian Weekly - Cover Story",
    publication: "Mongolian Weekly",
    category: "Magazine",
    section: "Cover",
    size: "Back Cover",
    price: "₮12,000,000",
    status: "Active",
    publishDate: "2024-01-19",
    circulation: "90,000",
    description: "Premium back cover advertising in weekly magazine"
  },
  {
    id: 8,
    name: "News Mongolia - Politics",
    publication: "News Mongolia",
    category: "Newspaper",
    section: "Politics",
    size: "Full Page",
    price: "₮7,800,000",
    status: "Pending",
    publishDate: "2024-01-20",
    circulation: "110,000",
    description: "Politics section full page advertisement"
  }
];

export default function NewsAdvertisingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sectionFilter, setSectionFilter] = useState("All");

  // Filter products based on selected filters
  const filteredProducts = newsProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.publication.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || product.status === statusFilter;
    const matchesSection = sectionFilter === "All" || product.section === sectionFilter;
    
    return matchesCategory && matchesSearch && matchesStatus && matchesSection;
  });

  // Get unique sections for filter
  const uniqueSections = [...new Set(newsProducts.map(product => product.section))];

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex justify-between items-center">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 text-red-500" />
              <h3 className="font-medium text-black dark:text-white text-xl">
                News
              </h3>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setSelectedCategory("Newspaper")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                  selectedCategory === "Newspaper"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Newspaper
              </button>
              <button 
                onClick={() => setSelectedCategory("Magazine")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                  selectedCategory === "Magazine"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Magazine
              </button>
              <button 
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                  selectedCategory === "All"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                All
              </button>
            </div>
          </div>
          <div className="p-6.5">
            {/* Search and Filter Bar */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search news products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="flex gap-2">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                >
                  <option value="All">All Categories</option>
                  <option value="Newspaper">Newspaper</option>
                  <option value="Magazine">Magazine</option>
                </select>
                <select 
                  value={sectionFilter}
                  onChange={(e) => setSectionFilter(e.target.value)}
                  className="rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                >
                  <option value="All">All Sections</option>
                  {uniqueSections.map((section) => (
                    <option key={section} value={section}>{section}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* News Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                      Product Name
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Publication
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                      Category
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                      Section
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                      Size
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                      Circulation
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Price
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                      Publish Date
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                      Status
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b border-stroke dark:border-strokedark">
                      <td className="border-b border-stroke py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <div>
                          <h5 className="font-medium text-black dark:text-white">
                            {product.name}
                          </h5>
                          <p className="text-sm text-body-color dark:text-body-color-dark">
                            {product.description}
                          </p>
                        </div>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white font-medium">{product.publication}</p>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <span className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
                          product.category === 'Newspaper' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                            : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                        }`}>
                          {product.category}
                        </span>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">{product.section}</p>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">{product.size}</p>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">{product.circulation}</p>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white font-medium">{product.price}</p>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">{product.publishDate}</p>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <span className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
                          product.status === 'Active' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : product.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button className="hover:text-primary">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <button className="hover:text-primary">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </button>
                          <button className="hover:text-primary">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-stroke py-5 px-4 dark:border-strokedark sm:px-6">
              <div className="flex items-center">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredProducts.length}</span> of <span className="font-medium">{filteredProducts.length}</span> results
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="rounded-md border border-stroke bg-white py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:bg-gray-800">
                  Previous
                </button>
                <button className="rounded-md bg-primary py-2 px-3 text-sm font-medium text-white hover:bg-opacity-90">
                  1
                </button>
                <button className="rounded-md border border-stroke bg-white py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:bg-gray-800">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
