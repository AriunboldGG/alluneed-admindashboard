"use client";

import React from "react";
import Button from "@/components/ui/button/Button";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";

interface AddItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  title: string;
  fields: Array<{
    key: string;
    label: string;
    type: 'text' | 'email' | 'number' | 'select' | 'textarea';
    required?: boolean;
    options?: string[];
    placeholder?: string;
  }>;
  initialData?: any;
}

export default function AddItemModal({
  isOpen,
  onClose,
  onSave,
  title,
  fields,
  initialData = {}
}: AddItemModalProps) {
  const [formData, setFormData] = React.useState(initialData);

  React.useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
      // Add class to body to hide header
      document.body.classList.add('modal-open');
    } else {
      // Remove class from body when modal closes
      document.body.classList.remove('modal-open');
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" style={{ zIndex: 9999 }}>
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Add New {title}
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.map((field) => (
                <div key={field.key} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                  <Label>
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </Label>
                  
                  {field.type === 'select' ? (
                    <select
                      value={formData[field.key] || ''}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      required={field.required}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                    >
                      <option value="">Select {field.label}</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      value={formData[field.key] || ''}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      required={field.required}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
                    />
                  ) : (
                    <Input
                      type={field.type}
                      value={formData[field.key] || ''}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
