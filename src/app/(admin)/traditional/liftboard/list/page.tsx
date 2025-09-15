"use client";

import { useState } from "react";

// Demo Liftboard products data with coordinates
const liftboardProducts = [
  {
    id: 1,
    code: "L1",
    name: "Сүхбаатарын талбай - Лифт 1",
    location: "Сүхбаатарын талбай / СБД / Энхтайваны өргөн чөлөө / Төв",
    latitude: 47.9200,
    longitude: 106.9175,
    category: "Digital",
    size: "Large",
    floor: "Ground Floor",
    building: "Sukhbaatar Square Mall",
    views: 25000,
    pricePerView: 120000,
    status: "Active",
    description: "Premium digital liftboard at Sukhbaatar Square Mall",
    street: "Sukhbaatar Square",
    district: "SBD",
    avenue: "Enkhtaivan Avenue"
  },
  {
    id: 2,
    code: "L2",
    name: "Цагаан мөрний дэлгүүр - Лифт 2",
    location: "Цагаан мөрний дэлгүүр / СБД / Чингис хааны өргөн чөлөө / Баруун хойд",
    latitude: 47.9150,
    longitude: 106.9200,
    category: "Digital",
    size: "Medium",
    floor: "2nd Floor",
    building: "Tsagaan Morin Department Store",
    views: 18000,
    pricePerView: 95000,
    status: "Active",
    description: "Digital liftboard at Tsagaan Morin Department Store",
    street: "Tsagaan Morin Street",
    district: "SBD",
    avenue: "Chinggis Khaan Avenue"
  },
  {
    id: 3,
    code: "L3",
    name: "Хан Уул дэлгүүр - Лифт 3",
    location: "Хан Уулын гудамж / ХД / Баянголын өргөн чөлөө / Зүүн өмнөд",
    latitude: 47.9100,
    longitude: 106.9250,
    category: "Traditional",
    size: "Large",
    floor: "1st Floor",
    building: "Khan Uul Shopping Center",
    views: 15000,
    pricePerView: 80000,
    status: "Pending",
    description: "Traditional liftboard at Khan Uul Shopping Center",
    street: "Khan Uul Street",
    district: "HD",
    avenue: "Bayangol Avenue"
  },
  {
    id: 4,
    code: "L4",
    name: "Сансар дэлгүүр - Лифт 4",
    location: "Сансрын гудамж / ХД / Найрамдалын өргөн чөлөө / Баруун өмнөд",
    latitude: 47.9050,
    longitude: 106.9300,
    category: "Digital",
    size: "Small",
    floor: "3rd Floor",
    building: "Sansar Office Complex",
    views: 12000,
    pricePerView: 65000,
    status: "Active",
    description: "Small digital liftboard at Sansar Office Complex",
    street: "Sansar Street",
    district: "HD",
    avenue: "Nairamdal Avenue"
  },
  {
    id: 5,
    code: "L5",
    name: "Төв дэлгүүр - Лифт 5",
    location: "Төвийн гудамж / СБД / Миражийн өргөн чөлөө / Төв",
    latitude: 47.9250,
    longitude: 106.9150,
    category: "Digital",
    size: "Extra Large",
    floor: "Ground Floor",
    building: "Central Business Tower",
    views: 35000,
    pricePerView: 180000,
    status: "Active",
    description: "Premium extra large digital liftboard at Central Business Tower",
    street: "Tov Street",
    district: "SBD",
    avenue: "Mirage Avenue"
  }
];

export default function LiftboardAdvertisingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sizeFilter, setSizeFilter] = useState("All");
  const [floorFilter, setFloorFilter] = useState("All");
  const [selectedLiftboard, setSelectedLiftboard] = useState(null);
  const [viewMode, setViewMode] = useState("list");

  // Filter products based on selected filters
  const filteredProducts = liftboardProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.building.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || product.status === statusFilter;
    const matchesSize = sizeFilter === "All" || product.size === sizeFilter;
    const matchesFloor = floorFilter === "All" || product.floor === floorFilter;
    
    return matchesCategory && matchesSearch && matchesStatus && matchesSize && matchesFloor;
  });

  // Get unique sizes and floors for filter
  const uniqueSizes = [...new Set(liftboardProducts.map(product => product.size))];
  const uniqueFloors = [...new Set(liftboardProducts.map(product => product.floor))];

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex justify-between items-center">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 text-indigo-500" />
              <h3 className="font-medium text-black dark:text-white text-xl">
                Liftboard
              </h3>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setSelectedCategory("Digital")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                  selectedCategory === "Digital"
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Digital
              </button>
              <button 
                onClick={() => setSelectedCategory("Traditional")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                  selectedCategory === "Traditional"
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                Traditional
              </button>
              <button 
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                  selectedCategory === "All"
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setViewMode(viewMode === "list" ? "map" : "list")}
                className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition duration-200"
              >
                {viewMode === "list" ? "Map View" : "List View"}
              </button>
            </div>
          </div>
          <div className="p-6.5">
            {/* Search and Filter Bar */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search liftboard products..."
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
                  <option value="Digital">Digital</option>
                  <option value="Traditional">Traditional</option>
                </select>
                <select 
                  value={sizeFilter}
                  onChange={(e) => setSizeFilter(e.target.value)}
                  className="rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                >
                  <option value="All">All Sizes</option>
                  {uniqueSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <select 
                  value={floorFilter}
                  onChange={(e) => setFloorFilter(e.target.value)}
                  className="rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                >
                  <option value="All">All Floors</option>
                  {uniqueFloors.map((floor) => (
                    <option key={floor} value={floor}>{floor}</option>
                  ))}
                </select>
              </div>
            </div>

            {viewMode === "list" ? (
              /* Liftboard Products Table */
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-2 text-left dark:bg-meta-4">
                      <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                        Code
                      </th>
                      <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                        Location Name
                      </th>
                      <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                        Building
                      </th>
                      <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                        Floor
                      </th>
                      <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                        Category
                      </th>
                      <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                        Size
                      </th>
                      <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                        Views
                      </th>
                      <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                        Price/View
                      </th>
                      <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                        Coordinates
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
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {product.code}
                            </div>
                            <div>
                              <h5 className="font-medium text-black dark:text-white">
                                {product.code}
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                          <div>
                            <h5 className="font-medium text-black dark:text-white">
                              {product.name}
                            </h5>
                            <p className="text-sm text-body-color dark:text-body-color-dark">
                              {product.street}, {product.district}
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white font-medium">{product.building}</p>
                        </td>
                        <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                          <span className="inline-flex rounded-full py-1 px-3 text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                            {product.floor}
                          </span>
                        </td>
                        <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                          <span className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
                            product.category === 'Digital' 
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                              : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          }`}>
                            {product.category}
                          </span>
                        </td>
                        <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">{product.size}</p>
                        </td>
                        <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white font-medium">+{product.views.toLocaleString()}</p>
                        </td>
                        <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white font-medium">₮{product.pricePerView.toLocaleString()}</p>
                        </td>
                        <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white text-sm">
                            {product.latitude.toFixed(4)}, {product.longitude.toFixed(4)}
                          </p>
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
                            <button 
                              onClick={() => setSelectedLiftboard(product)}
                              className="hover:text-primary"
                              title="View Details"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                            </button>
                            <button className="hover:text-primary" title="Edit">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </button>
                            <button className="hover:text-primary" title="Delete">
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
            ) : (
              /* Map View */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {filteredProducts.map((product) => (
                    <div 
                      key={product.id}
                      className="border border-indigo-200 dark:border-indigo-700 rounded-lg p-4 cursor-pointer hover:shadow-md transition duration-200"
                      onClick={() => setSelectedLiftboard(product)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {product.code}
                        </div>
                        <div>
                          <h4 className="font-semibold text-black dark:text-white">{product.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{product.building} - {product.floor}</p>
                        </div>
                        <button className="ml-auto w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                          +
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-center">
                          <div className="text-sm text-gray-600 dark:text-gray-400">Views</div>
                          <div className="font-semibold text-black dark:text-white">+{product.views.toLocaleString()}</div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-center">
                          <div className="text-sm text-gray-600 dark:text-gray-400">Price/View</div>
                          <div className="font-semibold text-black dark:text-white">₮{product.pricePerView.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 px-3 py-1 bg-black text-white rounded text-sm">Day</button>
                        <button className="flex-1 px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm">Week</button>
                        <button className="flex-1 px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm">Month</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-gray-600 dark:text-gray-400">Map View</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Interactive map will be displayed here</p>
                  </div>
                </div>
              </div>
            )}

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

      {/* Liftboard Detail Modal */}
      {selectedLiftboard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {selectedLiftboard.code}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">{selectedLiftboard.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{selectedLiftboard.building} - {selectedLiftboard.floor}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedLiftboard(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Section - Product Details */}
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-3">Liftboard Images</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-200 dark:bg-gray-600 rounded-lg h-32 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Blank Liftboard</span>
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-600 rounded-lg h-32 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">With Advertisement</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-3">Performance</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Views:</span>
                        <span className="font-semibold text-black dark:text-white">+{selectedLiftboard.views.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Price per View:</span>
                        <span className="font-semibold text-black dark:text-white">₮{selectedLiftboard.pricePerView.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Category:</span>
                        <span className="font-semibold text-black dark:text-white">{selectedLiftboard.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Size:</span>
                        <span className="font-semibold text-black dark:text-white">{selectedLiftboard.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Floor:</span>
                        <span className="font-semibold text-black dark:text-white">{selectedLiftboard.floor}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-3">Time Period</h3>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-black text-white rounded text-sm">Day</button>
                      <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm">Week</button>
                      <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm">Month</button>
                    </div>
                  </div>
                </div>

                {/* Right Section - Map */}
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-gray-600 dark:text-gray-400">Interactive Map</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Coordinates: {selectedLiftboard.latitude.toFixed(4)}, {selectedLiftboard.longitude.toFixed(4)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
