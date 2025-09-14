"use client";

import React, { useState } from "react";

interface AddTvProductFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddTvProductForm({ isOpen, onClose }: AddTvProductFormProps) {
  const [formData, setFormData] = useState({
    // TV Show Details
    showName: "",
    channel: "",
    showDescription: "",
    
    // Ad Configuration
    adBroadcastTime: "17:00-00:00",
    dailyBroadcastFrequency: "1",
    broadcastDays: "1",
    adDuration: "1",
    
    // Demographics
    ageDistribution: {
      "0-10": 0,
      "11-20": 0,
      "21-35": 0,
      "35-50": 0,
      "50+": 0
    },
    genderRatio: {
      male: 0,
      female: 0
    },
    
    // Location Analytics
    locations: [
      { name: "Улаанбаатар", percentage: 45 },
      { name: "Дархан", percentage: 40 },
      { name: "Орхон", percentage: 30 },
      { name: "Төв", percentage: 20 },
      { name: "Сэлэнгэ", percentage: 25 }
    ],
    
    // Additional Details
    price: "",
    category: "",
    airDate: "",
    status: "Active"
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAgeDistributionChange = (ageGroup: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      ageDistribution: {
        ...prev.ageDistribution,
        [ageGroup]: value
      }
    }));
  };

  const handleGenderRatioChange = (gender: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      genderRatio: {
        ...prev.genderRatio,
        [gender]: value
      }
    }));
  };

  const handleLocationChange = (index: number, field: string, value: string | number) => {
    const newLocations = [...formData.locations];
    newLocations[index] = { ...newLocations[index], [field]: value };
    setFormData(prev => ({ ...prev, locations: newLocations }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("TV Product Data:", formData);
    // Here you would typically send the data to your API
    onClose(); // Just close the modal without showing alert
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]" onClick={onClose}>
      <div className="bg-white dark:bg-boxdark rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Add New TV Product
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* TV Show Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Show Name
              </label>
              <input
                type="text"
                value={formData.showName}
                onChange={(e) => handleInputChange("showName", e.target.value)}
                className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                placeholder="Enter show name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Channel
              </label>
              <select
                value={formData.channel}
                onChange={(e) => handleInputChange("channel", e.target.value)}
                className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                required
              >
                <option value="">Select Channel</option>
                <option value="MNB TV">MNB TV</option>
                <option value="Eagle TV">Eagle TV</option>
                <option value="TV5">TV5</option>
                <option value="UBS TV">UBS TV</option>
                <option value="C1 TV">C1 TV</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black dark:text-white mb-2">
              Show Description
            </label>
            <textarea
              value={formData.showDescription}
              onChange={(e) => handleInputChange("showDescription", e.target.value)}
              rows={3}
              className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
              placeholder="Enter show description"
            />
          </div>

          {/* Ad Configuration */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Ad Configuration
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Ad Broadcast Time
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    className={`w-full py-2 px-3 rounded text-sm font-medium ${
                      formData.adBroadcastTime === "17:00-00:00"
                        ? "bg-purple-500 text-white"
                        : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                    onClick={() => handleInputChange("adBroadcastTime", "17:00-00:00")}
                  >
                    17:00 - 00:00
                  </button>
                  <button
                    type="button"
                    className={`w-full py-2 px-3 rounded text-sm font-medium ${
                      formData.adBroadcastTime === "other"
                        ? "bg-purple-500 text-white"
                        : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                    onClick={() => handleInputChange("adBroadcastTime", "other")}
                  >
                    Other
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Daily Broadcast Frequency
                </label>
                <select
                  value={formData.dailyBroadcastFrequency}
                  onChange={(e) => handleInputChange("dailyBroadcastFrequency", e.target.value)}
                  className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Broadcast Days
                </label>
                <select
                  value={formData.broadcastDays}
                  onChange={(e) => handleInputChange("broadcastDays", e.target.value)}
                  className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                >
                  <option value="1">1 day</option>
                  <option value="7">1 week</option>
                  <option value="30">1 month</option>
                  <option value="90">3 months</option>
                  <option value="365">1 year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Ad Duration
                </label>
                <select
                  value={formData.adDuration}
                  onChange={(e) => handleInputChange("adDuration", e.target.value)}
                  className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                >
                  <option value="1">1 second</option>
                  <option value="5">5 seconds</option>
                  <option value="10">10 seconds</option>
                  <option value="15">15 seconds</option>
                  <option value="30">30 seconds</option>
                  <option value="45">45 seconds</option>
                  <option value="60">60 seconds</option>
                </select>
              </div>
            </div>
          </div>

          {/* Demographics */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Audience Demographics
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Age Distribution */}
              <div>
                <h4 className="text-md font-medium text-black dark:text-white mb-3">
                  Age Distribution (%)
                </h4>
                <div className="space-y-3">
                  {Object.entries(formData.ageDistribution).map(([ageGroup, percentage]) => (
                    <div key={ageGroup} className="flex items-center justify-between">
                      <label className="text-sm text-black dark:text-white w-16">
                        {ageGroup}:
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={percentage}
                        onChange={(e) => handleAgeDistributionChange(ageGroup, parseInt(e.target.value) || 0)}
                        className="w-20 rounded border border-stroke bg-white py-1 px-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      />
                      <span className="text-sm text-gray-500">%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gender Ratio */}
              <div>
                <h4 className="text-md font-medium text-black dark:text-white mb-3">
                  Gender Ratio (%)
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-black dark:text-white">
                      Male:
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={formData.genderRatio.male}
                      onChange={(e) => handleGenderRatioChange("male", parseInt(e.target.value) || 0)}
                      className="w-20 rounded border border-stroke bg-white py-1 px-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    />
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-black dark:text-white">
                      Female:
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={formData.genderRatio.female}
                      onChange={(e) => handleGenderRatioChange("female", parseInt(e.target.value) || 0)}
                      className="w-20 rounded border border-stroke bg-white py-1 px-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    />
                    <span className="text-sm text-gray-500">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Analytics */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Most Viewed Locations
            </h3>
            
            <div className="space-y-3">
              {formData.locations.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-black dark:text-white mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={location.name}
                      onChange={(e) => handleLocationChange(index, "name", e.target.value)}
                      className="w-full rounded border border-stroke bg-white py-1 px-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="ml-4">
                    <label className="block text-sm font-medium text-black dark:text-white mb-1">
                      Percentage
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={location.percentage}
                      onChange={(e) => handleLocationChange(index, "percentage", parseInt(e.target.value) || 0)}
                      className="w-20 rounded border border-stroke bg-white py-1 px-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Details */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Additional Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Price (₮)
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  placeholder="Enter price"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Prime Time">Prime Time</option>
                  <option value="Morning">Morning</option>
                  <option value="Evening">Evening</option>
                  <option value="Sports">Sports</option>
                  <option value="Weekend">Weekend</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Air Date
                </label>
                <input
                  type="date"
                  value={formData.airDate}
                  onChange={(e) => handleInputChange("airDate", e.target.value)}
                  className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  required
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="border-t pt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add TV Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
