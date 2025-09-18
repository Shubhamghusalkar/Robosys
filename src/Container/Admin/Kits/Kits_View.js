import AdminBody from "../../../Component/Admin/AdminBody";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { MdOutlineArrowBack } from "react-icons/md";
import { useState } from "react";

const Kits_View = () => {
    const [selectedImg, setSelectedImg] = useState(null)

    const images = [
        "../assets/img/robot-2-1.png",
        "../assets/img/robot-2-1.png",
        "../assets/img/robot-2-1.png",
        "../assets/img/robot-2-1.png",
    ];

    return (
        <AdminBody
            content={
                <div className="page-wrapper w-full text-white mb-3">
                    <div className="card-header flex justify-between items-center mb-2.5">
                        <h4 className="text-lg font-normal">Kits View</h4>
                        <Link to={'/kit-list'} className="py-1.5 px-4 bg-gray-700 hover:bg-gray-800 rounded-md text-sm flex gap-2 items-center"><MdOutlineArrowBack /> Back </Link>
                    </div>
                    <form >
                        <div className="card-body ">
                            <div className="p-4 bg-slate-800 rounded">
                                <div className="grid grid-cols-6 gap-7">
                                    <div className="col-span-6 flex flex-col gap-2 ">
                                        <label className="font-normal">Title</label>
                                        <p className="text-slate-300 text-sm ps-2">Caretaker Robot</p>
                                    </div>
                                    <div className="col-span-3 md:col-span-2 lg:col-span-1 flex flex-col gap-2 ">
                                        <label className="font-normal">Price</label>
                                        <p className="text-slate-300 text-sm ps-2">₹499.00</p>
                                    </div>
                                    <div className="col-span-3 md:col-span-2  lg:col-span-1 flex flex-col gap-2 ">
                                        <label className="font-normal">Availability</label>
                                        <p className="text-white w-fit bg-green-600 rounded-full text-xs ms-2 px-3.5 py-1">In Stock</p>
                                    </div>
                                    <div className="col-span-6 md:col-span-2 lg:col-span-1 flex flex-col gap-2 ">
                                        <label className="font-normal">Student std</label>
                                        <p className="text-slate-300 text-sm ps-2">4th std</p>
                                    </div>
                                    <div className="col-span-6 md:col-span-3 lg:col-span-3 flex flex-col gap-2 ">
                                        <label className="font-normal">What you get with this</label>
                                        <div className="relative">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="relative px-3.5 py-1 text-sm bg-yellow-700 rounded-full ">Cable</span>
                                                <span className="relative px-3.5 py-1 text-sm bg-yellow-700 rounded-full ">Wires</span>
                                                <span className="relative px-3.5 py-1 text-sm bg-yellow-700 rounded-full ">pcb</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3 lg:col-span-3 flex flex-col gap-2 ">
                                        <label className="font-normal">What you get with this</label>
                                        <div className="relative">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="relative px-3.5 py-1 text-sm bg-yellow-700 rounded-full ">Fire Detection System</span>
                                                <span className="relative px-3.5 py-1 text-sm bg-yellow-700 rounded-full ">Ultrasonic Sensor</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 flex flex-col gap-2 ">
                                        <label className="font-normal">Description</label>
                                        <p className="text-slate-300 text-sm ps-2">This project is an automatic fire detection system that can sense fire or high heat using a flame sensor. When fire is detected, it gives a warning through a buzzer and/or LED</p>
                                    </div>
                                    <div className="col-span-6 flex flex-col gap-2 ">
                                        <label className="font-normal">What You'll Learn</label>
                                        <ul className="text-slate-300 text-sm list-decimal ps-5">
                                            <li>How to use a flame sensor to detect fire.</li>
                                            <li>How to program an Arduino to respond with a buzzer and LED when fire is detected.</li>
                                            <li>The basics of safety and alert systems.</li>
                                            <li>How sensors help in early fire warning.</li>
                                            <li>How to build a simple fire alarm using electronics.</li>
                                            <li>How to use a laser and LDR sensor to detect intrusions.</li>
                                        </ul>
                                    </div>
                                    <div className="col-span-6 flex flex-col gap-2 ">
                                        <label className="font-normal">Uploaded Images</label>
                                        <div className="flex flex-wrap gap-2">
                                            {images.map((src, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-slate-900 rounded cursor-pointer"
                                                    onClick={() => setSelectedImg(src)}
                                                >
                                                    <img src={src} alt="" className="w-28 h-28 md:h-36 lg:h-28 object-contain md:w-36 lg:w-28 rounded" />
                                                </div>
                                            ))}
                                        </div>
                                        {selectedImg && (
                                            <div className="fixed inset-0 bg-black/80 backdrop-blur-[3px] flex items-center justify-center z-50">
                                                <div className="relative">
                                                    <button
                                                        onClick={() => setSelectedImg(null)}
                                                        className="absolute -top-4 -right-4 bg-red-600 text-white p-0.5 rounded-full"
                                                    >
                                                        <IoIosClose className="text-3xl" />
                                                    </button>
                                                    <img
                                                        src={selectedImg}
                                                        alt="Preview"
                                                        className="max-h-[80vh] max-w-[90vw] rounded shadow-lg"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form >
                </div >
            }
        />
    )
}

export default Kits_View; 