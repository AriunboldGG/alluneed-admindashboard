"use client";

import React, { useState, useEffect } from "react";
import MediaListTable from "./MediaListTable";
import { TraditionalMediaItem } from "@/types/media";

// Demo OOH products data
const oohProducts: TraditionalMediaItem[] = [
  {
    id: 1,
    name: "Strong",
    category: "JCDecaux",
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    price: "₮15,000,000",
    area: 390,
    views: 120000,
    description: "Premium OOH advertising package with multiple facilities"
  },
  {
    id: 2,
    name: "Mini",
    category: "JCDecaux",
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    price: "₮8,500,000",
    area: 180,
    views: 80000,
    description: "Compact OOH advertising solution for targeted reach"
  },
  {
    id: 3,
    name: "Landmark",
    category: "CCTS",
    status: "Pending",
    location: "Ulaanbaatar, Mongolia",
    price: "₮12,000,000",
    area: 320,
    views: 150000,
    description: "High-visibility landmark advertising location"
  },
  {
    id: 4,
    name: "Петит",
    category: "CCTS",
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    price: "₮6,800,000",
    area: 150,
    views: 60000,
    description: "Small format OOH advertising option"
  },
  {
    id: 5,
    name: "Тугт",
    category: "JCDecaux",
    status: "Completed",
    location: "Ulaanbaatar, Mongolia",
    price: "₮9,200,000",
    area: 250,
    views: 95000,
    description: "Standard OOH advertising package"
  }
];

export default function OohListComponent() {
  const [selectedItem, setSelectedItem] = useState<TraditionalMediaItem | null>(null);
  const [editData, setEditData] = useState<TraditionalMediaItem | null>(null);

  // Initialize edit data when item is selected
  useEffect(() => {
    if (selectedItem) {
      setEditData({ ...selectedItem });
    }
  }, [selectedItem]);

  // Hide header when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedItem]);

  const columns = [
    {
      key: 'name',
      label: 'Product Name',
      width: '150px',
      render: (item: TraditionalMediaItem) => (
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏢</span>
          <div>
            <h5 className="font-medium text-black dark:text-white">
              {item.name} / Багц
            </h5>
            <p className="text-sm text-body-color dark:text-body-color-dark">
              {item.category}
            </p>
          </div>
        </div>
      )
    },
    {
      key: 'category',
      label: 'Category',
      width: '100px',
      render: (item: TraditionalMediaItem) => (
        <span className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
          item.category === 'JCDecaux' 
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        }`}>
          {item.category}
        </span>
      )
    },
    {
      key: 'area',
      label: 'Area (m²)',
      width: '100px',
      render: (item: TraditionalMediaItem) => (
        <p className="text-black dark:text-white">{item.area}</p>
      )
    },
    {
      key: 'views',
      label: 'Views',
      width: '100px',
      render: (item: TraditionalMediaItem) => (
        <p className="text-black dark:text-white font-medium">+{item.views?.toLocaleString()}</p>
      )
    },
    {
      key: 'price',
      label: 'Price',
      width: '120px',
      render: (item: TraditionalMediaItem) => (
        <p className="text-black dark:text-white font-medium">{item.price}</p>
      )
    },
    {
      key: 'status',
      label: 'Status',
      width: '100px',
      render: (item: TraditionalMediaItem) => (
        <span className={`inline-flex rounded-full py-1 px-3 text-sm font-medium ${
          item.status === 'Active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            : item.status === 'Pending'
            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
        }`}>
          {item.status}
        </span>
      )
    }
  ];

  const categories = ["JCDecaux", "CCTS"];

  const handleItemClick = (item: TraditionalMediaItem) => {
    setSelectedItem(item);
  };

  const handleEdit = (item: TraditionalMediaItem) => {
    console.log('Edit item:', item);
  };

  const handleDelete = (item: TraditionalMediaItem) => {
    console.log('Delete item:', item);
  };

  return (
    <>
      <MediaListTable
        items={oohProducts}
        title="OOH"
        themeColor="text-orange-500"
        categories={categories}
        columns={columns}
        onItemClick={handleItemClick}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">🏢</span>
                  <div>
                    <h2 className="text-2xl font-bold text-black dark:text-white">{selectedItem.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{selectedItem.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Basic Information */}
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Үндсэн мэдээлэл</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ангилал</label>
                        <input 
                          type="text" 
                          value={editData?.category || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, category: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Талбай</label>
                        <input 
                          type="text" 
                          value={editData?.area ? `${editData.area} m²` : ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, area: parseInt(e.target.value.replace(' m²', '')) || 0} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Үзэлт</label>
                        <input 
                          type="text" 
                          value={editData?.views?.toLocaleString() || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, views: parseInt(e.target.value.replace(/,/g, '')) || 0} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Байршил</label>
                        <input 
                          type="text" 
                          value={editData?.location || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, location: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Үнэлгээ</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Үнэ</label>
                        <input 
                          type="text" 
                          value={editData?.price || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, price: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Нэг хүнд хүрч буй зардал</label>
                        <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-md">
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">₮125</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Нийт хүртээмж</label>
                        <div className="bg-green-50 dark:bg-green-900 p-3 rounded-md">
                          <span className="text-2xl font-bold text-green-600 dark:text-green-300">120,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle Column - Demographics */}
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Хүйсийн харьцаа</h3>
                    <div className="flex items-center justify-center h-32">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        60/40
                      </div>
                    </div>
                    <div className="flex justify-center space-x-4 mt-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Эрэгтэй</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Эмэгтэй</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Насны харьцаа</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">18-25</span>
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '30%'}}></div>
                        </div>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">26-35</span>
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{width: '35%'}}></div>
                        </div>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">36-45</span>
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '25%'}}></div>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">46+</span>
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '10%'}}></div>
                        </div>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Settings and Performance */}
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">OOH тохиргоо</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Харагдах цаг</label>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm">Өдөр</button>
                          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm">Шөнө</button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Харагдах давтамж</label>
                        <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white">
                          <option>Өдөр бүр</option>
                          <option>Даваа-Баасан</option>
                          <option>Амралтын өдөр</option>
                          <option>Тусгай өдөр</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Харагдах хоногийн тоо</label>
                        <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white">
                          <option>7 хоног</option>
                          <option>14 хоног</option>
                          <option>30 хоног</option>
                          <option>60 хоног</option>
                          <option>90 хоног</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Харагдах хугацаа</label>
                        <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white">
                          <option>24 цаг</option>
                          <option>12 цаг</option>
                          <option>8 цаг</option>
                          <option>4 цаг</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Их үзэлттэй байршил</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Байршил</label>
                        <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white">
                          <option>Бүх байршил</option>
                          <option>Төв дүүрэг</option>
                          <option>Сүхбаатар дүүрэг</option>
                          <option>Баянгол дүүрэг</option>
                          <option>Хан-Уул дүүрэг</option>
                          <option>Сонгинохайрхан дүүрэг</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Төв дүүрэг</span>
                          <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '50%'}}></div>
                          </div>
                          <span className="text-sm font-medium">50%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Сүхбаатар дүүрэг</span>
                          <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '35%'}}></div>
                          </div>
                          <span className="text-sm font-medium">35%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Баянгол дүүрэг</span>
                          <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '25%'}}></div>
                          </div>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Хан-Уул дүүрэг</span>
                          <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '20%'}}></div>
                          </div>
                          <span className="text-sm font-medium">20%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Сонгинохайрхан дүүрэг</span>
                          <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '15%'}}></div>
                          </div>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                  Цуцлах
                </button>
                <button 
                  onClick={() => {
                    if (editData) {
                      // Here you would typically save the data to your backend
                      console.log('Saving data:', editData);
                      setSelectedItem(null);
                    }
                  }}
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                >
                  Хадгалах
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
