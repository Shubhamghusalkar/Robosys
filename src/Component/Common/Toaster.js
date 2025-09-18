import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { MdError } from "react-icons/md";

const Toaster = ({ message, type = "error", onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (type === "processing") return; // no auto-close for processing

    const duration = 5000; // 5 sec
    const interval = 100;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress(100 - (elapsed / duration) * 100);
      if (elapsed >= duration) {
        clearInterval(timer);
        onClose();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onClose, type]);

  // choose icon + color based on type
  const getConfig = () => {
    switch (type) {
      case "success":
        return { icon: <IoCheckmarkCircleSharp size={28} />, color: "bg-green-600 border-green-700" };
      case "processing":
        return {
          icon: <AiOutlineLoading3Quarters size={26} className="animate-spin" />,
          color: "bg-blue-600 border-blue-700",
        };
      case "error":
      default:
        return { icon: <MdError size={28} />, color: "bg-red-600 border-red-700" };
    }
  };

  const { icon, color } = getConfig();

  return (
    <div
      className={`relative flex items-center gap-3 border w-fit py-3 px-6 rounded shadow-xl text-white ${color}`}
    >
      <div>{icon}</div>
      <div>{message}</div>
      {type !== "processing" && (
        <button onClick={onClose}>
          <IoCloseSharp />
        </button>
      )}

      {type !== "processing" && (
        <div
          className="absolute bottom-0 left-0 h-1 bg-white"
          style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
        />
      )}



      {/* buttons */}
      {/* <button
        className="px-4 py-2 bg-red-600 text-white rounded"
        onClick={() => setShowToast({ type: "error", message: "Data not fetched!" })}
      >
        Show Error
      </button>

      <button
        className="px-4 py-2 bg-green-600 text-white rounded"
        onClick={() => setShowToast({ type: "success", message: "Saved successfully!" })}
      >
        Show Success
      </button>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setShowToast({ type: "processing", message: "Processing your request..." })}
      >
        Show Processing
      </button>

      <div className="fixed top-5 right-5 z-[999999999]">
        {showToast && (
          <Toaster
            type={showToast.type}
            message={showToast.message}
            onClose={() => setShowToast(false)}
          />
        )}
      </div> */}
      {/* buttons */}
    </div>
  );
};

export default Toaster;
