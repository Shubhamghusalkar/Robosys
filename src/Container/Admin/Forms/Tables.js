import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import AdminBody from "../../../Component/Admin/AdminBody";
import { FiSearch, FiFilter, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { GoPencil } from "react-icons/go";

const Tables = () => {

    const [isFilter, setIsFilter] = useState(false);
    const openFilter = () => {
        setIsFilter(!isFilter);
    }
    const [filter, setFilter] = useState("All");
    const data = [
        { id: 1, date: "2025-06-10", name: "Shubham Ghusalkar", email: "shubham@gmail.com", mobile: "1234567890", address: "Dighi Pune, India" },
        { id: 2, date: "2025-06-15", name: "Rutik Vyawahare", email: "rutik@gmail.com", mobile: "1234567890", address: "Alandi Pune, India" },
        { id: 3, date: "2025-08-20", name: "Jambwant Awhale", email: "jam@gmail.com", mobile: "1234567890", address: "Vishrantwadi Pune, India" },
    ];
    const getFilteredData = () => {
        const today = new Date();
        if (filter === "Today") {
            return data.filter((item) => new Date(item.date).toDateString() === today.toDateString());
        }
        if (filter === "Yesterday") {
            const yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);
            return data.filter((item) => new Date(item.date).toDateString() === yesterday.toDateString());
        }
        if (filter === "30 Days") {
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(today.getDate() - 30);
            return data.filter((item) => new Date(item.date) >= thirtyDaysAgo);
        }
        return data;
    };
    const filteredData = getFilteredData();
    return (
        <AdminBody
            content={
                <div className="page-wrapper w-full text-white text-xs">
                    <h4 className="text-lg font-normal mb-3">Normal Tables</h4>

                    <div className="card-body bg-slate-950 p-4 rounded">
                        <div className="card-header flex items-center justify-between">
                            <div className="">
                                <Link to={'#'} className="p-1.5 px-4 bg-green-900 hover:bg-green-950 rounded-md text-sm flex gap-2 items-center"><FaPlus /> Add </Link>
                            </div>
                            <div className="flex gap-3 text-xl items-center ">
                                <div className=" relative font-normal">
                                    <input type="text" className="outline-none rounded text-gray-300 px-2.5 p-1.5 text-sm bg-slate-100/20" placeholder="Search..." />
                                    <FiSearch className="absolute top-2 right-2 text-white rounded text-base cursor-pointer" />
                                </div>
                                <div className="relative">
                                    <FiFilter className="cursor-pointer text-xl text-white" onClick={() => setIsFilter(!isFilter)} />
                                    {isFilter && (
                                        <div className="absolute top-6 right-0 z-10 bg-slate-900 text-sm shadow-lg shadow-slate-950 rounded">
                                            <ul>
                                                {["All", "Today", "Yesterday", "30 Days"].map((option) => (
                                                    <li
                                                        key={option}
                                                        onClick={() => {
                                                            setFilter(option);
                                                            setIsFilter(false);
                                                        }}
                                                        className={`px-3 py-2 text-slate-300 font-medium cursor-pointer border-b border-slate-800 hover:text-white hover:underline ${filter === option ? "bg-slate-700" : ""
                                                            }`}
                                                    >
                                                        {option}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                </div>

                            </div>
                        </div>

                        <div className="mt-6 w-full overflow-auto">
                            <table className="w-full">
                                <thead className="bg-slate-800">
                                    <tr>
                                        <th className="p-2.5 text-base text-center font-normal text-slate-200">Sr. No.</th>
                                        <th className="p-2.5 text-center text-base font-normal text-slate-200">Date</th>
                                        <th className="p-2.5 text-start text-base font-normal text-slate-200">Name</th>
                                        <th className="p-2.5 text-start text-base font-normal text-slate-200">Email</th>
                                        <th className="p-2.5 text-base text-center font-normal text-slate-200">Mobile No.</th>
                                        <th className="p-2.5 text-start text-base font-normal text-slate-200">Address</th>
                                        <th className="p-2.5 text-base font-normal text-slate-200">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item, index) => (
                                            <tr key={item.id} className="border-b border-slate-800">
                                                <td className="p-2 text-sm text-center text-slate-400">{index + 1}</td>
                                                <td className="p-2 text-sm text-center text-slate-400">
                                                    {new Date(item.date).toLocaleDateString("en-GB", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric",
                                                    })}
                                                </td>
                                                <td className="p-2 text-sm text-slate-400">{item.name}</td>
                                                <td className="p-2 text-sm text-slate-400">{item.email}</td>
                                                <td className="p-2 text-sm text-center text-slate-400">{item.mobile}</td>
                                                <td className="p-2 text-sm text-slate-400">{item.address}</td>
                                                <td className="p-2 text-sm text-center text-slate-400">
                                                    <div className="flex gap-1 items-center justify-center">
                                                        <button className="bg-gray-700 hover:bg-gray-800 p-2 rounded text-white" title="View">
                                                            <FiEye />
                                                        </button>
                                                        <Link
                                                            to="#"
                                                            className="bg-green-700 hover:bg-green-800 p-2 rounded text-white"
                                                            title="Edit"
                                                        >
                                                            <GoPencil />
                                                        </Link>
                                                        <button className="bg-red-700 hover:bg-red-800 p-2 rounded text-white" title="Delete">
                                                            <FaRegTrashCan />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center py-3 text-slate-400">
                                                No records found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <div className="w-full py-3">
                                <div className="flex items-center">
                                    <div className="">
                                        Rows per page:
                                        <select className="bg-slate-700 p-1 rounded ms-2 cursor-pointer">
                                            <option className="bg-transparent">0-10</option>
                                            <option className="bg-transparent">0-25</option>
                                            <option className="bg-transparent">0-50</option>
                                            <option className="bg-transparent">0-100</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-4 items-center ms-5">
                                        <div className="text-nowrap">
                                            1-10 of 345
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />

                    <h4 className="text-lg font-normal mb-3">Hover Tables</h4>

                    <div className="card-body bg-slate-950 p-4 rounded">
                        <div className="card-header flex items-center justify-between">
                            <div className="">
                                <Link to={'#'} className="p-1.5 px-4 bg-green-900 hover:bg-green-950 rounded-md text-sm flex gap-2 items-center"><FaPlus /> Add </Link>
                            </div>
                            <div className="flex gap-3 text-xl items-center ">
                                <div className=" relative font-normal">
                                    <input type="text" className="outline-none rounded text-gray-300 px-2.5 p-1.5 text-sm bg-slate-100/20" placeholder="Search..." />
                                    <FiSearch className="absolute top-2 right-2 text-white rounded text-base cursor-pointer" />
                                </div>
                                <div className="relative">
                                    <FiFilter className="cursor-pointer" onClick={openFilter} />
                                    {
                                        setIsFilter ? <div className={`relative ${!isFilter && 'hidden'}`}>

                                            <div className="absolute top-5 right-0 z-0 bg-slate-900 text-sm shadow-lg shadow-slate-950 after:absolute after:h-3 after:w-3 after:bg-slate-900 after:rotate-45 after:-top-1.5 after:right-2.5 after:-z-1">
                                                <ul>
                                                    <li className="text-nowrap px-3 py-2 text-slate-300 font-medium hover:underline hover:text-white cursor-pointer border-b border-slate-800 "> Today</li>
                                                    <li className="text-nowrap px-3 py-2 text-slate-300 font-medium hover:underline hover:text-white cursor-pointer border-b border-slate-800 "> Yesterday</li>
                                                    <li className="text-nowrap px-3 py-2 text-slate-300 font-medium hover:underline hover:text-white cursor-pointer border-b border-slate-800 "> 30 Days</li>
                                                </ul>
                                            </div></div> : <div></div>
                                    }

                                </div>

                            </div>
                        </div>

                        <div className="mt-6 w-full overflow-auto">
                            <table className="w-full">
                                <thead className="bg-slate-800">
                                    <tr>
                                        <th className="p-2.5 text-base text-center font-normal text-slate-200">Sr. No.</th>
                                        <th className="p-2.5 text-center text-base font-normal text-slate-200">Date</th>
                                        <th className="p-2.5 text-start text-base font-normal text-slate-200">Name</th>
                                        <th className="p-2.5 text-start text-base font-normal text-slate-200">Email</th>
                                        <th className="p-2.5 text-base text-center font-normal text-slate-200">Mobile No.</th>
                                        <th className="p-2.5 text-start text-base font-normal text-slate-200">Address</th>
                                        <th className="p-2.5 text-base font-normal text-slate-200">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-b-slate-800 hover:bg-slate-900/50">
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">1</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">10 June 2025</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Shubham Ghusalkar</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">shubham@gmail.com</td>
                                        <td className="p-1.5 text-sm font-normal text-center text-slate-400">1234567890</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Dighi Pune, India</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">
                                            <div className="flex gap-1 items-center justify-center">
                                                <button type="button" className="bg-gray-700 hover:bg-gray-800 p-2 rounded text-white " title="View"><FiEye /></button>
                                                <Link to={'#'} type="button" className="bg-green-700 hover:bg-green-800 p-2 rounded text-white " title="Edit"><GoPencil /></Link>
                                                <button type="button" className="bg-red-700 hover:bg-red-800 p-2 rounded text-white " title="Delete"><FaRegTrashCan /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-b-slate-800 hover:bg-slate-900/50">
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">2</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">15 June 2025</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Rutik Vyawahare</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">rutik@gmail.com</td>
                                        <td className="p-1.5 text-sm font-normal text-center text-slate-400">1234567890</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Alandi Pune, India</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">
                                            <div className="flex gap-1 items-center justify-center">
                                                <button type="button" className="bg-gray-700 hover:bg-gray-800 p-2 rounded text-white " title="View"><FiEye /></button>
                                                <Link to={'#'} type="button" className="bg-green-700 hover:bg-green-800 p-2 rounded text-white " title="Edit"><GoPencil /></Link>
                                                <button type="button" className="bg-red-700 hover:bg-red-800 p-2 rounded text-white " title="Delete"><FaRegTrashCan /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-b-slate-800 hover:bg-slate-900/50">
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">3</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">20 June 2025</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Jambwant Awhale</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">jam@gmail.com</td>
                                        <td className="p-1.5 text-sm font-normal text-center text-slate-400">1234567890</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Vishrantwadi Pune, India</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">
                                            <div className="flex gap-1 items-center justify-center">
                                                <button type="button" className="bg-gray-700 hover:bg-gray-800 p-2 rounded text-white " title="View"><FiEye /></button>
                                                <Link to={'#'} type="button" className="bg-green-700 hover:bg-green-800 p-2 rounded text-white " title="Edit"><GoPencil /></Link>
                                                <button type="button" className="bg-red-700 hover:bg-red-800 p-2 rounded text-white " title="Delete"><FaRegTrashCan /></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="w-full py-3">
                                <div className="flex items-center">
                                    <div className="">
                                        Rows per page:
                                        <select className="bg-slate-700 p-1 rounded ms-2 cursor-pointer">
                                            <option className="bg-transparent">0-10</option>
                                            <option className="bg-transparent">0-25</option>
                                            <option className="bg-transparent">0-50</option>
                                            <option className="bg-transparent">0-100</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-4 items-center ms-5">
                                        <div className="text-nowrap">
                                            1-10 of 345
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />

                    <h4 className="text-lg font-normal mb-3">Check Box Tables</h4>

                    <div className="card-body bg-slate-950 p-4 rounded">
                        <div className="card-header flex items-center justify-between">
                            <div className="">
                                {/* <Link to={'/add-kits'} className="p-1.5 px-4 bg-green-700 hover:bg-green-800 rounded-md text-sm flex gap-2 items-center"><FaPlus /> Add Kits </Link> */}
                            </div>
                            <div className="flex gap-3 text-xl items-center ">
                                <div className=" relative font-normal">
                                    <input type="text" className="outline-none rounded text-gray-300 px-2.5 p-1.5 text-sm bg-slate-100/20" placeholder="Search..." />
                                    <FiSearch className="absolute top-2 right-2 text-white rounded text-base cursor-pointer" />
                                </div>
                                <div className="relative">
                                    <FiFilter className="cursor-pointer" onClick={openFilter} />
                                    {
                                        setIsFilter ? <div className={`relative ${!isFilter && 'hidden'}`}>

                                            <div className="absolute top-5 right-0 z-0 bg-slate-900 text-sm shadow-lg shadow-slate-950 after:absolute after:h-3 after:w-3 after:bg-slate-900 after:rotate-45 after:-top-1.5 after:right-2.5 after:-z-1">
                                                <ul>
                                                    <li className="text-nowrap px-3 py-2 text-slate-300 font-medium hover:underline hover:text-white cursor-pointer border-b border-slate-800 "> In Stock</li>
                                                    <li className="text-nowrap px-3 py-2 text-slate-300 font-medium hover:underline hover:text-white cursor-pointer border-b border-slate-800 "> Out of Stock</li>
                                                </ul>
                                            </div></div> : <div></div>
                                    }

                                </div>

                            </div>
                        </div>

                        <div className="mt-6 w-full overflow-auto">
                            <table className="w-full">
                                <thead className="bg-slate-800">
                                    <tr>
                                        <th className="p-2.5 text-base font-normal text-slate-200 ps-2"><input type="checkbox" /></th>
                                        <th className="p-2.5 text-base text-center font-normal text-slate-200">Sr. No.</th>
                                        <th className="p-2.5 text-center text-base font-normal text-slate-200">Date</th>
                                        <th className="p-2.5 text-start text-base font-normal text-slate-200">Name</th>
                                        <th className="p-2.5 text-start text-base font-normal text-slate-200">Email</th>
                                        <th className="p-2.5 text-base text-center font-normal text-slate-200">Mobile No.</th>
                                        <th className="p-2.5 text-start text-base font-normal text-slate-200">Address</th>
                                        <th className="p-2.5 text-base font-normal text-slate-200">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-b-slate-800 hover:bg-slate-900/50">
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400 ps-2"><input type="checkbox" /></td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">1</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">10 June 2025</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Shubham Ghusalkar</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">shubham@gmail.com</td>
                                        <td className="p-1.5 text-sm font-normal text-center text-slate-400">1234567890</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Dighi Pune, India</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">
                                            <div className="flex gap-1 items-center justify-center">
                                                <button type="button" className="bg-gray-700 hover:bg-gray-800 p-2 rounded text-white " title="View"><FiEye /></button>
                                                <Link to={'#'} type="button" className="bg-green-700 hover:bg-green-800 p-2 rounded text-white " title="Edit"><GoPencil /></Link>
                                                <button type="button" className="bg-red-700 hover:bg-red-800 p-2 rounded text-white " title="Delete"><FaRegTrashCan /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-b-slate-800 hover:bg-slate-900/50">
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400 ps-2"><input type="checkbox" /></td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">2</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">15 June 2025</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Rutik Vyawahare</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">rutik@gmail.com</td>
                                        <td className="p-1.5 text-sm font-normal text-center text-slate-400">1234567890</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Alandi Pune, India</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">
                                            <div className="flex gap-1 items-center justify-center">
                                                <button type="button" className="bg-gray-700 hover:bg-gray-800 p-2 rounded text-white " title="View"><FiEye /></button>
                                                <Link to={'#'} type="button" className="bg-green-700 hover:bg-green-800 p-2 rounded text-white " title="Edit"><GoPencil /></Link>
                                                <button type="button" className="bg-red-700 hover:bg-red-800 p-2 rounded text-white " title="Delete"><FaRegTrashCan /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-b-slate-800 hover:bg-slate-900/50">
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400 ps-2"><input type="checkbox" /></td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">3</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">20 June 2025</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Jambwant Awhale</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">jam@gmail.com</td>
                                        <td className="p-1.5 text-sm font-normal text-center text-slate-400">1234567890</td>
                                        <td className="p-1.5 text-sm font-normal text-slate-400">Vishrantwadi Pune, India</td>
                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">
                                            <div className="flex gap-1 items-center justify-center">
                                                <button type="button" className="bg-gray-700 hover:bg-gray-800 p-2 rounded text-white " title="View"><FiEye /></button>
                                                <Link to={'#'} type="button" className="bg-green-700 hover:bg-green-800 p-2 rounded text-white " title="Edit"><GoPencil /></Link>
                                                <button type="button" className="bg-red-700 hover:bg-red-800 p-2 rounded text-white " title="Delete"><FaRegTrashCan /></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="w-full py-3">
                                <div className="flex items-center">
                                    <div className="">
                                        Rows per page:
                                        <select className="bg-slate-700 p-1 rounded ms-2 cursor-pointer">
                                            <option className="bg-transparent">0-10</option>
                                            <option className="bg-transparent">0-25</option>
                                            <option className="bg-transparent">0-50</option>
                                            <option className="bg-transparent">0-100</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-4 items-center ms-5">
                                        <div className="text-nowrap">
                                            1-10 of 345
                                        </div>
                                        <div className="w-full">
                                            <ul className="flex gap-1 items-center">
                                                <li className="px-2.5 py-1 bg-slate-700">&#129168;</li>
                                                <li className="px-2.5 py-1 hover:bg-slate-700">1</li>
                                                <li className="px-2.5 py-1 hover:bg-slate-700">2</li>
                                                <li className="px-2.5 py-1 hover:bg-slate-700">3</li>
                                                <li className="px-2.5 py-1 hover:bg-slate-700">...</li>
                                                <li className="px-2.5 py-1 hover:bg-slate-700">54</li>
                                                <li className="px-2.5 py-1 bg-slate-700">&#129170;</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    <h4 className="text-lg font-normal mb-3">Bordered Tables</h4>

                    <div className="card-body bg-slate-950 p-4 rounded">
                        <div className="card-header flex items-center justify-between">
                            <div className="">
                                {/* <Link to={'/add-kits'} className="p-1.5 px-4 bg-green-700 hover:bg-green-800 rounded-md text-sm flex gap-2 items-center"><FaPlus /> Add Kits </Link> */}
                            </div>
                            <div className="flex gap-3 text-xl items-center ">
                                <div className=" relative font-normal">
                                    <input type="text" className="outline-none rounded text-gray-300 px-2.5 p-1.5 text-sm bg-slate-100/20" placeholder="Search..." />
                                    <FiSearch className="absolute top-2 right-2 text-white rounded text-base cursor-pointer" />
                                </div>
                                <div className="relative">
                                    <FiFilter className="cursor-pointer" onClick={openFilter} />
                                    {
                                        setIsFilter ? <div className={`relative ${!isFilter && 'hidden'}`}>

                                            <div className="absolute top-5 right-0 z-0 bg-slate-900 text-sm shadow-lg shadow-slate-950 after:absolute after:h-3 after:w-3 after:bg-slate-900 after:rotate-45 after:-top-1.5 after:right-2.5 after:-z-1">
                                                <ul>
                                                    <li className="text-nowrap px-3 py-2 text-slate-300 font-medium hover:underline hover:text-white cursor-pointer border-b border-slate-800 "> In Stock</li>
                                                    <li className="text-nowrap px-3 py-2 text-slate-300 font-medium hover:underline hover:text-white cursor-pointer border-b border-slate-800 "> Out of Stock</li>
                                                </ul>
                                            </div></div> : <div></div>
                                    }

                                </div>

                            </div>
                        </div>

                        <div className="mt-6 w-full overflow-auto">
                            <table className="w-full">
                                <thead className="bg-slate-800 border border-slate-500">
                                    <tr>
                                        <th className="p-2.5 border-r border-r-slate-600 text-base text-center font-normal text-slate-200">Sr. No.</th>
                                        <th className="p-2.5 border-r border-r-slate-600 text-center text-base font-normal text-slate-200">Date</th>
                                        <th className="p-2.5 border-r border-r-slate-600 text-start text-base font-normal text-slate-200">Name</th>
                                        <th className="p-2.5 border-r border-r-slate-600 text-start text-base font-normal text-slate-200">Email</th>
                                        <th className="p-2.5 border-r border-r-slate-600 text-base text-center font-normal text-slate-200">Mobile No.</th>
                                        <th className="p-2.5 border-r border-r-slate-600 text-start text-base font-normal text-slate-200">Address</th>
                                        <th className="p-2.5 border-r border-r-slate-600 text-base font-normal text-slate-200">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="border border-slate-500">
                                    <tr className="border-b border-b-slate-800 hover:bg-slate-900/50">
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm text-center font-normal text-slate-400">1</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm text-center font-normal text-slate-400">10 June 2025</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-slate-400">Shubham Ghusalkar</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-slate-400">shubham@gmail.com</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-center text-slate-400">1234567890</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-slate-400">Dighi Pune, India</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm text-center font-normal text-slate-400">
                                            <div className="flex gap-1 items-center justify-center">
                                                <button type="button" className="bg-gray-700 hover:bg-gray-800 p-2 rounded text-white " title="View"><FiEye /></button>
                                                <Link to={'#'} type="button" className="bg-green-700 hover:bg-green-800 p-2 rounded text-white " title="Edit"><GoPencil /></Link>
                                                <button type="button" className="bg-red-700 hover:bg-red-800 p-2 rounded text-white " title="Delete"><FaRegTrashCan /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-b-slate-800 hover:bg-slate-900/50">
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm text-center font-normal text-slate-400">2</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm text-center font-normal text-slate-400">15 June 2025</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-slate-400">Rutik Vyawahare</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-slate-400">rutik@gmail.com</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-center text-slate-400">1234567890</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-slate-400">Alandi Pune, India</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm text-center font-normal text-slate-400">
                                            <div className="flex gap-1 items-center justify-center">
                                                <button type="button" className="bg-gray-700 hover:bg-gray-800 p-2 rounded text-white " title="View"><FiEye /></button>
                                                <Link to={'#'} type="button" className="bg-green-700 hover:bg-green-800 p-2 rounded text-white " title="Edit"><GoPencil /></Link>
                                                <button type="button" className="bg-red-700 hover:bg-red-800 p-2 rounded text-white " title="Delete"><FaRegTrashCan /></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-b-slate-800 hover:bg-slate-900/50">
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm text-center font-normal text-slate-400">3</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm text-center font-normal text-slate-400">20 June 2025</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-slate-400">Jambwant Awhale</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-slate-400">jam@gmail.com</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-center text-slate-400">1234567890</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm font-normal text-slate-400">Vishrantwadi Pune, India</td>
                                        <td className="p-1.5 border-r border-r-slate-600 text-sm text-center font-normal text-slate-400">
                                            <div className="flex gap-1 items-center justify-center">
                                                <button type="button" className="bg-gray-700 hover:bg-gray-800 p-2 rounded text-white " title="View"><FiEye /></button>
                                                <Link to={'#'} type="button" className="bg-green-700 hover:bg-green-800 p-2 rounded text-white " title="Edit"><GoPencil /></Link>
                                                <button type="button" className="bg-red-700 hover:bg-red-800 p-2 rounded text-white " title="Delete"><FaRegTrashCan /></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="w-full py-3">
                                <div className="flex items-center">
                                    <div className="">
                                        Rows per page:
                                        <select className="bg-slate-700 p-1 rounded ms-2 cursor-pointer">
                                            <option className="bg-transparent">0-10</option>
                                            <option className="bg-transparent">0-25</option>
                                            <option className="bg-transparent">0-50</option>
                                            <option className="bg-transparent">0-100</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-4 items-center ms-5">
                                        <div className="text-nowrap">
                                            1-10 of 345
                                        </div>
                                        <div className="w-full">
                                            <ul className="flex gap-1 items-center">
                                                <li className="px-2.5 py-1 bg-slate-700">&#129168;</li>
                                                <li className="px-2.5 py-1 hover:bg-slate-700">1</li>
                                                <li className="px-2.5 py-1 hover:bg-slate-700">2</li>
                                                <li className="px-2.5 py-1 hover:bg-slate-700">3</li>
                                                <li className="px-2.5 py-1 hover:bg-slate-700">...</li>
                                                <li className="px-2.5 py-1 hover:bg-slate-700">54</li>
                                                <li className="px-2.5 py-1 bg-slate-700">&#129170;</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default Tables;