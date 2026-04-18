import React from "react";

const Modal = ({
  isOpen = false,
  onClose = () => {},
  title = "",
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl relative mx-4 overflow-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "90vh" }}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {title && (
          <h2 className="text-base sm:text-xl font-semibold mb-4 text-center">
            {title}
          </h2>
        )}
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
