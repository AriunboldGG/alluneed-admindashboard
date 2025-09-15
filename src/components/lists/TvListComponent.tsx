"use client";

import React, { useState, useEffect } from "react";
import MediaListTable from "./MediaListTable";
import { TraditionalMediaItem } from "@/types/media";

// Demo TV products data
const tvProducts: TraditionalMediaItem[] = [
  {
    id: 1,
    name: "Mongolian National TV - Prime Time",
    category: "National TV",
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    price: "₮15,000,000",
    area: 30,
    views: 500000,
    circulation: "2.5M",
    publishDate: "2024-01-15",
    section: "Prime Time",
    size: "30 seconds",
    description: "Prime time advertising slot on Mongolian National TV"
  },
  {
    id: 2,
    name: "TV9 Mongolia - Evening News",
    category: "Commercial TV",
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    price: "₮8,500,000",
    area: 15,
    views: 300000,
    circulation: "1.8M",
    publishDate: "2024-01-14",
    section: "Evening News",
    size: "15 seconds",
    description: "Evening news advertising slot on TV9 Mongolia"
  },
  {
    id: 3,
    name: "Eagle TV - Morning Show",
    category: "Commercial TV",
    status: "Pending",
    location: "Ulaanbaatar, Mongolia",
    price: "₮6,200,000",
    area: 20,
    views: 180000,
    circulation: "1.2M",
    publishDate: "2024-01-16",
    section: "Morning Show",
    size: "20 seconds",
    description: "Morning show advertising slot on Eagle TV"
  },
  {
    id: 4,
    name: "C1 TV - Sports Channel",
    category: "Sports TV",
    status: "Active",
    location: "Ulaanbaatar, Mongolia",
    price: "₮4,800,000",
    area: 10,
    views: 120000,
    circulation: "800K",
    publishDate: "2024-01-13",
    section: "Sports",
    size: "10 seconds",
    description: "Sports channel advertising slot on C1 TV"
  },
  {
    id: 5,
    name: "Mongolian Music TV - Music Videos",
    category: "Music TV",
    status: "Completed",
    location: "Ulaanbaatar, Mongolia",
    price: "₮3,500,000",
    area: 25,
    views: 95000,
    circulation: "600K",
    publishDate: "2024-01-10",
    section: "Music Videos",
    size: "25 seconds",
    description: "Music video advertising slot on Mongolian Music TV"
  }
];

export default function TvListComponent() {
  const [selectedItem, setSelectedItem] = useState<TraditionalMediaItem | null>(null);
  const [editData, setEditData] = useState<TraditionalMediaItem | null>(null);
  const [adminSettings, setAdminSettings] = useState({
    broadcastTime: "17:00 - 00:00",
    dailyFrequency: "1",
    broadcastDays: "1 хоног",
    adDuration: "1 секунд",
    location: "Бүх байршил",
    broadcastDaysCount: 1,
    adDurationCount: 1
  });
  const [pricingSettings, setPricingSettings] = useState({
    basePrice: "2500000",
    pricePerDay: "100000",
    pricePerCount: "50000",
    pricePerSecond: "10000",
    pricePerBroadcastDay: "500000",
    pricePerDuration: "20000"
  });
  const [demographics, setDemographics] = useState({
    malePercentage: 65,
    femalePercentage: 35,
    ageGroups: [
      { range: "0-10", percentage: 15, color: "green" },
      { range: "11-20", percentage: 25, color: "orange" },
      { range: "21-35", percentage: 35, color: "purple" },
      { range: "35-50", percentage: 20, color: "red" },
      { range: "50+", percentage: 5, color: "gray" }
    ]
  });
  const [performanceMetrics, setPerformanceMetrics] = useState({
    costPerPerson: "2500",
    totalReach: "1200"
  });
  const [locationPerformance, setLocationPerformance] = useState([
    { name: "Улаанбаатар", percentage: 45 },
    { name: "Дархан", percentage: 40 },
    { name: "Орхон", percentage: 30 },
    { name: "Сэлэнгэ", percentage: 25 },
    { name: "Төв", percentage: 20 }
  ]);

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
      width: '200px',
      render: (item: TraditionalMediaItem) => (
        <div>
          <h5 className="font-medium text-black dark:text-white">
            {item.name}
          </h5>
          <p className="text-sm text-body-color dark:text-body-color-dark">
            {item.description}
          </p>
        </div>
      )
    },
    {
      key: 'category',
      label: 'Channel',
      width: '120px',
      render: (item: TraditionalMediaItem) => (
        <span className="inline-flex rounded-full py-1 px-3 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          {item.category}
        </span>
      )
    },
    {
      key: 'section',
      label: 'Time Slot',
      width: '120px',
      render: (item: TraditionalMediaItem) => (
        <p className="text-black dark:text-white">{item.section}</p>
      )
    },
    {
      key: 'size',
      label: 'Duration',
      width: '100px',
      render: (item: TraditionalMediaItem) => (
        <p className="text-black dark:text-white">{item.size}</p>
      )
    },
    {
      key: 'views',
      label: 'Viewers',
      width: '100px',
      render: (item: TraditionalMediaItem) => (
        <p className="text-black dark:text-white font-medium">{item.views?.toLocaleString()}</p>
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
      key: 'publishDate',
      label: 'Air Date',
      width: '100px',
      render: (item: TraditionalMediaItem) => (
        <p className="text-black dark:text-white">{item.publishDate}</p>
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

  const categories = ["National TV", "Commercial TV", "Sports TV", "Music TV"];

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
        items={tvProducts}
        title="TV Advertising Products"
        themeColor="text-blue-500"
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
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white">{selectedItem.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{selectedItem.description}</p>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Суваг</label>
                        <input 
                          type="text" 
                          value={editData?.category || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, category: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Цаг</label>
                        <input 
                          type="text" 
                          value={editData?.section || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, section: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Үргэлжлэх хугацаа</label>
                        <input 
                          type="text" 
                          value={editData?.size || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, size: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Үзэгчдийн тоо</label>
                        <input 
                          type="text" 
                          value={editData?.views?.toLocaleString() || ''}
                          onChange={(e) => setEditData(prev => prev ? {...prev, views: parseInt(e.target.value.replace(/,/g, '')) || 0} : null)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Үнэлгээ</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Өдөрт цацах давтамж</label>
                          <select 
                            value={adminSettings.dailyFrequency}
                            onChange={(e) => setAdminSettings(prev => ({...prev, dailyFrequency: e.target.value}))}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Үндсэн үнэ</label>
                          <input 
                            type="text" 
                            value={`₮${pricingSettings.basePrice}`}
                            onChange={(e) => setPricingSettings(prev => ({...prev, basePrice: e.target.value.replace(/[₮,]/g, '')}))}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Цацах хоногийн тоо</label>
                          <select 
                            value={adminSettings.broadcastDays}
                            onChange={(e) => setAdminSettings(prev => ({...prev, broadcastDays: e.target.value}))}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                          >
                            <option value="1 хоног">1 хоног</option>
                            <option value="3 хоног">3 хоног</option>
                            <option value="7 хоног">7 хоног</option>
                            <option value="14 хоног">14 хоног</option>
                            <option value="30 хоног">30 хоног</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Үнэ</label>
                          <input 
                            type="text" 
                            value={`₮${pricingSettings.pricePerBroadcastDay}`}
                            onChange={(e) => setPricingSettings(prev => ({...prev, pricePerBroadcastDay: e.target.value.replace(/[₮,]/g, '')}))}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Рекламны үргэлжлэх хугацаа</label>
                          <select 
                            value={adminSettings.adDuration}
                            onChange={(e) => setAdminSettings(prev => ({...prev, adDuration: e.target.value}))}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                          >
                            <option value="1 секунд">1 секунд</option>
                            <option value="5 секунд">5 секунд</option>
                            <option value="10 секунд">10 секунд</option>
                            <option value="15 секунд">15 секунд</option>
                            <option value="30 секунд">30 секунд</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Үнэ</label>
                          <input 
                            type="text" 
                            value={`₮${pricingSettings.pricePerDuration}`}
                            onChange={(e) => setPricingSettings(prev => ({...prev, pricePerDuration: e.target.value.replace(/[₮,]/g, '')}))}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Нэг хоногт</label>
                        <input 
                          type="text" 
                          value={`₮${pricingSettings.pricePerDay}`}
                          onChange={(e) => setPricingSettings(prev => ({...prev, pricePerDay: e.target.value.replace(/[₮,]/g, '')}))}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Нэг удаа</label>
                        <input 
                          type="text" 
                          value={`₮${pricingSettings.pricePerCount}`}
                          onChange={(e) => setPricingSettings(prev => ({...prev, pricePerCount: e.target.value.replace(/[₮,]/g, '')}))}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Нэг секундэд</label>
                        <input 
                          type="text" 
                          value={`₮${pricingSettings.pricePerSecond}`}
                          onChange={(e) => setPricingSettings(prev => ({...prev, pricePerSecond: e.target.value.replace(/[₮,]/g, '')}))}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                        />
                      </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Нэг хүнд хүрч буй зардал</label>
                              <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-md">
                                <div className="flex items-center space-x-2">
                                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">₮</span>
                                  <input 
                                    type="text" 
                                    value={performanceMetrics.costPerPerson}
                                    onChange={(e) => setPerformanceMetrics(prev => ({...prev, costPerPerson: e.target.value}))}
                                    className="text-2xl font-bold text-blue-600 dark:text-blue-300 bg-transparent border-none outline-none w-24"
                                  />
                                </div>
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Нийт хүртээмж</label>
                              <div className="bg-green-50 dark:bg-green-900 p-3 rounded-md">
                                <input 
                                  type="text" 
                                  value={performanceMetrics.totalReach}
                                  onChange={(e) => setPerformanceMetrics(prev => ({...prev, totalReach: e.target.value}))}
                                  className="text-2xl font-bold text-green-600 dark:text-green-300 bg-transparent border-none outline-none w-24"
                                />
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
                        {demographics.malePercentage}/{demographics.femalePercentage}
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
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Эрэгтэй %</label>
                        <input 
                          type="number" 
                          value={demographics.malePercentage}
                          onChange={(e) => {
                            const maleValue = parseInt(e.target.value) || 0;
                            const femaleValue = 100 - maleValue;
                            setDemographics(prev => ({
                              ...prev,
                              malePercentage: maleValue,
                              femalePercentage: femaleValue
                            }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                          min="0"
                          max="100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Эмэгтэй %</label>
                        <input 
                          type="number" 
                          value={demographics.femalePercentage}
                          onChange={(e) => {
                            const femaleValue = parseInt(e.target.value) || 0;
                            const maleValue = 100 - femaleValue;
                            setDemographics(prev => ({
                              ...prev,
                              malePercentage: maleValue,
                              femalePercentage: femaleValue
                            }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                          min="0"
                          max="100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-semibold text-black dark:text-white mb-4">Насны харьцаа</h3>
                    <div className="space-y-2">
                      {demographics.ageGroups.map((group, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-16">{group.range}</span>
                          <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div 
                              className={`bg-${group.color}-500 h-2 rounded-full`} 
                              style={{width: `${group.percentage}%`}}
                            ></div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="number" 
                              value={group.percentage}
                              onChange={(e) => {
                                const newPercentage = parseInt(e.target.value) || 0;
                                setDemographics(prev => ({
                                  ...prev,
                                  ageGroups: prev.ageGroups.map((g, i) => 
                                    i === index ? {...g, percentage: newPercentage} : g
                                  )
                                }));
                              }}
                              className="w-16 px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
                              min="0"
                              max="100"
                            />
                            <span className="text-sm font-medium">%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-md">
                      <div className="text-sm text-blue-600 dark:text-blue-300">
                        <strong>Нийт:</strong> {demographics.ageGroups.reduce((sum, group) => sum + group.percentage, 0)}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Settings and Performance */}
                <div className="space-y-6">
                       

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold text-black dark:text-white mb-4">Их үзэлттэй байршил</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Байршил</label>
                          <select 
                            value={adminSettings.location}
                            onChange={(e) => setAdminSettings(prev => ({...prev, location: e.target.value}))}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                          >
                            <option value="Бүх байршил">Бүх байршил</option>
                            <option value="Улаанбаатар">Улаанбаатар</option>
                            <option value="Дархан">Дархан</option>
                            <option value="Орхон">Орхон</option>
                            <option value="Сэлэнгэ">Сэлэнгэ</option>
                            <option value="Төв">Төв</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          {locationPerformance.map((location, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-sm text-gray-600 dark:text-gray-400 w-20">{location.name}</span>
                              <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                <div 
                                  className="bg-blue-500 h-2 rounded-full" 
                                  style={{width: `${location.percentage}%`}}
                                ></div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <input 
                                  type="number" 
                                  value={location.percentage}
                                  onChange={(e) => {
                                    const newPercentage = parseInt(e.target.value) || 0;
                                    setLocationPerformance(prev => 
                                      prev.map((loc, i) => 
                                        i === index ? {...loc, percentage: newPercentage} : loc
                                      )
                                    );
                                  }}
                                  className="w-16 px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
                                  min="0"
                                  max="100"
                                />
                                <span className="text-sm font-medium">%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-md">
                          <div className="text-sm text-blue-600 dark:text-blue-300">
                            <strong>Нийт:</strong> {locationPerformance.reduce((sum, location) => sum + location.percentage, 0)}%
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
                      const saveData = {
                        ...editData,
                        adminSettings,
                        pricingSettings,
                        demographics,
                        performanceMetrics,
                        locationPerformance
                      };
                      console.log('Saving data:', saveData);
                      setSelectedItem(null);
                    }
                  }}
                  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
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
