"use client";

import { useState, useEffect } from "react";
import AddTvProductForm from "@/components/forms/AddTvProductForm";

// Demo data for TV advertising products
const tvProducts = [
  {
    id: 1,
    name: "MNB TV - Prime Time Slot",
    channel: "MNB TV",
    timeSlot: "19:00-20:00",
    duration: "30 seconds",
    price: "₮2,500,000",
    status: "Active",
    category: "Prime Time",
    airDate: "2024-01-15",
    description: "Prime time advertising slot on Mongolia's leading TV channel"
  },
  {
    id: 2,
    name: "Eagle TV - Morning News",
    channel: "Eagle TV",
    timeSlot: "07:00-08:00",
    duration: "15 seconds",
    price: "₮1,200,000",
    status: "Active",
    category: "Morning",
    airDate: "2024-01-16",
    description: "Morning news program advertising slot"
  },
  {
    id: 3,
    name: "TV5 - Evening Drama",
    channel: "TV5",
    timeSlot: "21:00-22:00",
    duration: "45 seconds",
    price: "₮3,800,000",
    status: "Pending",
    category: "Evening",
    airDate: "2024-01-18",
    description: "Popular evening drama series advertising"
  },
  {
    id: 4,
    name: "UBS TV - Sports Program",
    channel: "UBS TV",
    timeSlot: "18:00-19:00",
    duration: "20 seconds",
    price: "₮1,800,000",
    status: "Active",
    category: "Sports",
    airDate: "2024-01-17",
    description: "Sports program advertising slot"
  },
  {
    id: 5,
    name: "C1 TV - Weekend Special",
    channel: "C1 TV",
    timeSlot: "20:00-21:00",
    duration: "60 seconds",
    price: "₮4,200,000",
    status: "Completed",
    category: "Weekend",
    airDate: "2024-01-14",
    description: "Weekend special program advertising"
  }
];

export default function TvAdvertisingList() {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  // Hide header when modal is open
  useEffect(() => {
    if (isAddFormOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isAddFormOpen]);

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex justify-between items-center">
            <h3 className="font-medium text-black dark:text-white">
              TV Advertising Products List
            </h3>
            <button 
              onClick={() => setIsAddFormOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Add New TV Product
            </button>
          </div>
          <div className="p-6.5">
            {/* Search and Filter Bar */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search TV products..."
                  className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="flex gap-2">
                <select className="rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Completed</option>
                </select>
                <select className="rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary">
                  <option>All Channels</option>
                  <option>MNB TV</option>
                  <option>Eagle TV</option>
                  <option>TV5</option>
                  <option>UBS TV</option>
                  <option>C1 TV</option>
                </select>
              </div>
            </div>

            {/* TV Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                      Product Name
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                      Channel
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Time Slot
                    </th>
                    <th className="min-w-[80px] py-4 px-4 font-medium text-black dark:text-white">
                      Duration
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Price
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                      Status
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                      Air Date
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tvProducts.map((product) => (
                    <tr key={product.id} className="border-b border-stroke dark:border-strokedark">
                      <td className="border-b border-stroke py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <h5 className="font-medium text-black dark:text-white">
                          {product.name}
                        </h5>
                        <p className="text-sm text-body-color dark:text-body-color-dark">
                          {product.category}
                        </p>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">{product.channel}</p>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">{product.timeSlot}</p>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">{product.duration}</p>
                      </td>
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white font-medium">{product.price}</p>
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
                        <p className="text-black dark:text-white">{product.airDate}</p>
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
                  Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">5</span> results
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
      
      {/* Add TV Product Form Modal */}
      <AddTvProductForm 
        isOpen={isAddFormOpen} 
        onClose={() => setIsAddFormOpen(false)} 
      />
    </div>
  );
}
