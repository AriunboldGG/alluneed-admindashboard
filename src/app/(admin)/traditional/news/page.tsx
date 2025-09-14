import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Advertising | AlluNeed Admin",
  description: "Manage news advertising products and campaigns",
};

export default function NewsAdvertising() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              News Advertising Products
            </h3>
          </div>
          <div className="p-6.5">
            <div className="text-center py-10">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                News Advertising Management
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Add and manage your news advertising products and campaigns.
              </p>
              <div className="mt-6">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
                  Add New News Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
