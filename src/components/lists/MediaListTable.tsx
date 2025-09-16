"use client";

import { useState } from "react";
import { BaseMediaItem, FilterState } from "@/types/media";

interface MediaListTableProps<T extends BaseMediaItem> {
  items: T[];
  title: string;
  themeColor: string;
  categories: string[];
  columns: ColumnConfig<T>[];
  onItemClick?: (item: T) => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  additionalFilters?: FilterConfig[];
}

interface ColumnConfig<T> {
  key: keyof T | string;
  label: string;
  width?: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

interface FilterConfig {
  key: string;
  label: string;
  type: 'select' | 'text';
  options?: string[];
}

export default function MediaListTable<T extends BaseMediaItem>({
  items,
  title,
  themeColor,
  categories,
  columns,
  onItemClick,
  onEdit,
  onDelete,
  additionalFilters = []
}: MediaListTableProps<T>) {
  const [filters, setFilters] = useState<FilterState>({
    selectedCategory: "All",
    searchTerm: "",
    statusFilter: "All",
    ...additionalFilters.reduce((acc, filter) => ({ ...acc, [filter.key]: "All" }), {})
  });

  const filteredItems = items.filter((item) => {
    const matchesCategory = filters.selectedCategory === "All" || 
      (item as Record<string, unknown>).category === filters.selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      ((item as Record<string, unknown>).username && 
       String((item as Record<string, unknown>).username).toLowerCase().includes(filters.searchTerm.toLowerCase()));
    const matchesStatus = filters.statusFilter === "All" || item.status === filters.statusFilter;
    
    const matchesAdditionalFilters = additionalFilters.every(filter => {
      const filterValue = filters[filter.key];
      return filterValue === "All" || (item as Record<string, unknown>)[filter.key] === filterValue;
    });
    
    return matchesCategory && matchesSearch && matchesStatus && matchesAdditionalFilters;
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const renderCellContent = (item: T, column: ColumnConfig<T>) => {
    if (column.render) {
      return column.render(item);
    }
    
    const value = column.key.includes('.') 
      ? column.key.split('.').reduce((obj, key) => (obj as Record<string, unknown>)?.[key], item as Record<string, unknown>)
      : (item as Record<string, unknown>)[column.key];
    
    return value?.toString() || '';
  };

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex justify-between items-center">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 text-blue-600" />
              <h3 className="font-medium text-black dark:text-white text-xl">
                {title}
              </h3>
            </div>
            <div className="flex gap-2">
              {categories.slice(0, 2).map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange('selectedCategory', category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                    filters.selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
              <button
                onClick={() => handleFilterChange('selectedCategory', 'All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                  filters.selectedCategory === 'All'
                    ? "bg-blue-500 text-white"
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
                  placeholder={`Search ${title.toLowerCase()}...`}
                  value={filters.searchTerm}
                  onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                  className="w-full rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={filters.statusFilter}
                  onChange={(e) => handleFilterChange('statusFilter', e.target.value)}
                  className="rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
                <select
                  value={filters.selectedCategory}
                  onChange={(e) => handleFilterChange('selectedCategory', e.target.value)}
                  className="rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                >
                  <option value="All">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                {additionalFilters.map((filter) => (
                  <select
                    key={filter.key}
                    value={filters[filter.key]}
                    onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                    className="rounded border border-stroke bg-white py-2 px-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  >
                    <option value="All">All {filter.label}</option>
                    {filter.options?.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    {columns.map((column, index) => (
                      <th
                        key={index}
                        className={`py-4 px-4 font-medium text-black dark:text-white ${
                          index === 0 ? 'xl:pl-11' : ''
                        }`}
                        style={{ minWidth: column.width }}
                      >
                        {column.label}
                      </th>
                    ))}
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item) => (
                    <tr key={item.id} className="border-b border-stroke dark:border-strokedark">
                      {columns.map((column, index) => (
                        <td
                          key={index}
                          className={`border-b border-stroke py-5 px-4 dark:border-strokedark ${
                            index === 0 ? 'pl-9 xl:pl-11' : ''
                          }`}
                        >
                          {renderCellContent(item, column)}
                        </td>
                      ))}
                      <td className="border-b border-stroke py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          {onItemClick && (
                            <button
                              onClick={() => onItemClick(item)}
                              className="hover:text-primary"
                              title="View Details"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                            </button>
                          )}
                          {onEdit && (
                            <button
                              onClick={() => onEdit(item)}
                              className="hover:text-primary"
                              title="Edit"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </button>
                          )}
                          {onDelete && (
                            <button
                              onClick={() => onDelete(item)}
                              className="hover:text-primary"
                              title="Delete"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                            </button>
                          )}
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
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredItems.length}</span> of <span className="font-medium">{filteredItems.length}</span> results
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
