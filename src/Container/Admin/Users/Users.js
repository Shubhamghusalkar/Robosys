import AdminBody from "../../../Component/Admin/AdminBody";
import { FiSearch, FiFilter, FiEye } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom"

const Users = () => {

    const [isFilter, setIsFilter] = useState(false);
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const [rows, setRows] = useState([
        { id: 1, date: "2025-06-10", name: "Shubham Ghusalkar", email: "shubham@gmail.com", mobile: "1234567890", address: "Dighi Pune, India", checked: false },
        { id: 2, date: "2025-06-15", name: "Rutik Vyawahare", email: "rutik@gmail.com", mobile: "1234567890", address: "Alandi Pune, India", checked: false },
        { id: 3, date: "2025-08-20", name: "Jambwant Awhale", email: "jam@gmail.com", mobile: "1234567890", address: "Vishrantwadi Pune, India", checked: false },
    ]);

    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = () => {
        const newState = !selectAll;
        setSelectAll(newState);
        setRows(rows.map((row) => ({ ...row, checked: newState })));
    };

    const handleRowCheck = (id) => {
        const updated = rows.map((row) =>
            row.id === id ? { ...row, checked: !row.checked } : row
        );
        setRows(updated);

        setSelectAll(updated.every((row) => row.checked));
    };

    const getFilteredData = () => {
        const today = new Date();
        let filtered = [...rows];

        if (filter === "Today") {
            filtered = filtered.filter((item) => new Date(item.date).toDateString() === today.toDateString());
        }
        if (filter === "Yesterday") {
            const yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);
            filtered = filtered.filter((item) => new Date(item.date).toDateString() === yesterday.toDateString());
        }
        if (filter === "30 Days") {
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(today.getDate() - 30);
            filtered = filtered.filter((item) => new Date(item.date) >= thirtyDaysAgo);
        }

        if (search.trim() !== "") {
            filtered = filtered.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.email.toLowerCase().includes(search.toLowerCase()) ||
                item.mobile.includes(search) ||
                item.address.toLowerCase().includes(search.toLowerCase())
            );
        }

        return filtered;
    };


    const filteredData = getFilteredData();

    return (
        <AdminBody
            content={
                <div className="page-wrapper w-full text-white text-xs">
                    <h4 className="text-lg font-normal mb-3">Users</h4>

                    <div className="card-body bg-slate-950 p-4 rounded">
                        <div className="card-header flex items-center justify-between">
                            <div className="">
                                {/* <Link to={'/add-kits'} className="p-1.5 px-4 bg-green-700 hover:bg-green-800 rounded-md text-sm flex gap-2 items-center"><FaPlus /> Add Kits </Link> */}
                            </div>
                            <div className="flex gap-3 text-xl items-center ">
                                <div className=" relative font-normal">
                                    <input type="text" className="outline-none rounded text-gray-300 px-2.5 p-1.5 text-sm bg-slate-100/20" placeholder="Search..." value={search}
                                        onChange={(e) => setSearch(e.target.value)} />
                                    {search ? (
                                        <button
                                            onClick={() => setSearch("")}
                                            className="absolute top-2 right-2 text-white text-sm cursor-pointer"
                                        >
                                            ✕
                                        </button>
                                    ) : (
                                        <FiSearch className="absolute top-2 right-2 text-white text-base cursor-pointer" />
                                    )}
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
                                        <th className="p-2.5 text-base font-normal text-slate-200 ps-2"><input type="checkbox" checked={selectAll}
                                            onChange={handleSelectAll} /></th>
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
                                        filteredData.map((row, index) => (
                                            <tr key={row.id} className="border-b border-slate-800">
                                                <td className="text-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={row.checked}
                                                        onChange={() => handleRowCheck(row.id)}
                                                    />
                                                </td>
                                                <td className="p-2 text-sm text-center text-slate-400">{index + 1}</td>
                                                <td className="p-2 text-sm text-center text-slate-400">
                                                    {new Date(row.date).toLocaleDateString("en-GB", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric",
                                                    })}
                                                </td>
                                                <td className="p-2 text-sm text-slate-400">{row.name}</td>
                                                <td className="p-2 text-sm text-slate-400">{row.email}</td>
                                                <td className="p-2 text-sm text-center text-slate-400">{row.mobile}</td>
                                                <td className="p-2 text-sm text-slate-400">{row.address}</td>
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
                                            <td colSpan="8" className="text-center py-3 text-slate-400">
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
                                        {/* <div className="w-full">
                                        <ul className="flex gap-1 items-center">
                                            <li className="px-2.5 py-1 bg-slate-700">&#129168;</li>
                                            <li className="px-2.5 py-1 hover:bg-slate-700">1</li>
                                            <li className="px-2.5 py-1 hover:bg-slate-700">2</li>
                                            <li className="px-2.5 py-1 hover:bg-slate-700">3</li>
                                            <li className="px-2.5 py-1 hover:bg-slate-700">...</li>
                                            <li className="px-2.5 py-1 hover:bg-slate-700">54</li>
                                            <li className="px-2.5 p-1.5 bg-slate-700">&#129170;</li>
                                        </ul>
                                    </div> */}
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

export default Users;