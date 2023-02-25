import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import SmallNav from './SmallNav';

function ModalMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className=" px-2 py-2 -mb-px text-center text-slate-700 bg-transparent border-b-4 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-rose-700 hover:text-blue-600"
        onClick={handleMenuClick}
      >
        <div className="flex justify-center">
          <MenuIcon className=" w-4 h-4 mx-1 sm:w-6 sm:h-6" />
        </div>
        <span className="text-sm">دسته بندی ها </span>
      </button>

      <div>
        {isOpen && (
          <div
            className=" inset-0 z-10 "
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen  px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="w-80 inline-block p-2 overflow-hidden  transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl dark:bg-gray-900 sm:my-8  sm:p-6">
                <div className="mt-5  text-center">
                  <SmallNav />
                </div>

                <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                  <button
                    onClick={handleModalClose}
                    className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                  >
                    بستن
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalMenu;
