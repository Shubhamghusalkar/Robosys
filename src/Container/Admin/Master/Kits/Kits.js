import AdminBody from "../../../../Component/Admin/AdminBody";
import { FiSearch } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import useApiCallHooks from "../../../../Hooks/useApiCallHooks";

const Kits = () => {
    const [response, loading, error, callApi, statusCode] = useApiCallHooks();
    const [data, setData] = useState([]);

    // Add component state
    const [addData, setAddData] = useState({ name: "", image: null });
    const [imagePreview, setImagePreview] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [search, setSearch] = useState("");

    // ✅ Select all logic
    const selectAll = data.length > 0 && data.every((row) => row.checked);
    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setData((prev) => prev.map((row) => ({ ...row, checked })));
    };
    const handleRowCheck = (id) => {
        setData((prev) =>
            prev.map((row) =>
                row.id === id ? { ...row, checked: !row.checked } : row
            )
        );
    };

    // ✅ Filter + search
    const filteredData = Array.isArray(data)
        ? data.filter((row) => {
            const searchLower = search.toLowerCase();
            return (
                row.name?.toLowerCase().includes(searchLower) ||
                row.email?.toLowerCase().includes(searchLower) ||
                row.mobile?.toString().includes(searchLower) ||
                row.address?.toLowerCase().includes(searchLower)
            );
        })
        : [];

    // ✅ File change handler
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAddData((prev) => ({ ...prev, image: file }));
            setImagePreview(URL.createObjectURL(file)); // preview only
        }
    };

    // ✅ Fetch data on mount
    useEffect(() => {
        callApi("get", "admin/kits");
    }, []);

    // ✅ Store API data
    useEffect(() => {
        if (response?.data && statusCode === 200) {
            const rows = Array.isArray(response.data)
                ? response.data
                : [response.data];
            setData(
                rows.map((row, index) => ({
                    ...row,
                    checked: false,
                    id: row.id ?? index + 1,
                }))
            );
        }
    }, [response, statusCode]);

    // ✅ Submit form with validation
    const onSubmit = async () => {
        // if (!addData.name.trim()) {
        //     alert("Please enter a name.");
        //     return;
        // }
        // if (!addData.age_group.trim()) {
        //     alert("Please select age.");
        //     return;
        // }
        // if (!addData.image) {
        //     alert("Please upload an image.");
        //     return;
        // }

        const formData = new FormData();
        formData.append("name", addData.name);
        formData.append("age", addData.age_group);
        formData.append("image", addData.image);

        // Debug formData before sending
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        // ✅ Do not set Content-Type manually!
        await callApi("post", "admin/kits", formData);

        // Refresh list
        callApi("get", "admin/kits");

        // Reset form
        setAddData({ name: "", age_group: "", image: "" });
        setImagePreview(null);
    };

    // ✅ Delete component
    const handleDelete = async (id) => {
        try {
            await callApi("delete", `admin/kits/${id}`);
            callApi("get", "admin/kits");
        } catch (err) {
            console.error("Delete failed:", err);
        }
    };

    return (
        <AdminBody
            content={
                <div className="page-wrapper w-full text-white text-xs">
                    <div className="grid grid-cols-3 gap-4">
                        {/* Left: Add Component Form */}
                        <div className="col-span-1">
                            <h4 className="text-lg font-normal mb-5">
                                Add Kits
                            </h4>
                            <div className="card-body bg-slate-950 p-4 rounded mb-5 min-h-[470px]">
                                <div className="font-normal space-y-5">
                                    {/* Name */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="text-base"
                                            htmlFor="title"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            value={addData.name}
                                            onChange={(e) =>
                                                setAddData({
                                                    ...addData,
                                                    name: e.target.value,
                                                })
                                            }
                                            className="text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-2 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500"
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label for="ageGroup" htmlFor="age" className="text-base">Select Age Group </label>
                                        <select
                                            id="ageGroup"
                                            value={addData.age_group || ""}                // ✅ controlled value
                                            onChange={(e) =>
                                                setAddData((prev) => ({ ...prev, age_group: e.target.value }))
                                            }
                                            className="text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-2 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500"
                                        >
                                            <option value="" disabled>Select</option>
                                            <option value="2-5">2–5</option>
                                            <option value="6-8">6–8</option>
                                            <option value="9-10">9–10</option>
                                        </select>
                                    </div>

                                    {/* Upload Image */}
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="text-base"
                                            htmlFor="upload"
                                        >
                                            Upload Image
                                        </label>

                                        <input
                                            type="file"
                                            id="upload"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="cursor-pointer hover:bg-slate-600 text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-1.5 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500"
                                        />

                                        {imagePreview && (
                                            <div className="relative w-28 h-28 group">
                                                <img
                                                    src={imagePreview}
                                                    alt="preview"
                                                    className="w-28 h-28 object-cover rounded border"
                                                />
                                                <button
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/80 transition duration-300 rounded"
                                                >
                                                    <MdRemoveRedEye className="group-hover:scale-110 text-white w-7 h-7 p-1 bg-black/80 border border-slate-400 rounded-full transition duration-300" />
                                                </button>
                                            </div>
                                        )}

                                        {showModal && (
                                            <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
                                                <div className="relative">
                                                    <img
                                                        src={imagePreview}
                                                        alt="big preview"
                                                        className="max-w-[90vw] max-h-[90vh] rounded-md shadow-lg"
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            setShowModal(false)
                                                        }
                                                        className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-sm font-bold"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-2">
                                        <button
                                            onClick={onSubmit}
                                            className="py-2 px-5 bg-green-700 hover:bg-green-800 rounded-md text-sm flex gap-2 items-center"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="reset"
                                            onClick={() => {
                                                setAddData({
                                                    name: "",
                                                    image: null,
                                                });
                                                setImagePreview(null);
                                            }}
                                            className="py-2 px-5 bg-red-700 hover:bg-red-800 rounded-md text-sm flex gap-2 items-center"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Component List */}
                        <div className="col-span-2">
                            <h4 className="text-lg font-normal mb-5">
                                Kits List
                            </h4>
                            <div className="card-body bg-slate-950 p-4 rounded min-h-[470px] overflow-auto">
                                <div className="card-header flex items-center justify-between flex-wrap gap-3">
                                    <div></div>
                                    <div className="flex gap-3 text-xl items-center ">
                                        {/* Search */}
                                        <div className=" relative font-normal">
                                            <input
                                                type="text"
                                                className="outline-none rounded text-gray-300 px-2.5 p-1.5 text-sm bg-slate-100/20"
                                                placeholder="Search..."
                                                value={search}
                                                onChange={(e) =>
                                                    setSearch(e.target.value)
                                                }
                                            />
                                            {search ? (
                                                <button
                                                    onClick={() =>
                                                        setSearch("")
                                                    }
                                                    className="absolute top-2 right-2 text-white text-sm cursor-pointer"
                                                >
                                                    ✕
                                                </button>
                                            ) : (
                                                <FiSearch className="absolute top-2 right-2 text-white text-base cursor-pointer" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Table */}
                                <div className="mt-6 w-full overflow-auto">
                                    <table className="w-full">
                                        <thead className="bg-slate-800">
                                            <tr>
                                                <th className="p-2.5 text-base font-normal text-slate-200 ps-2">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectAll}
                                                        onChange={handleSelectAll}
                                                    />
                                                </th>
                                                <th className="p-2.5 text-base font-normal text-slate-200">
                                                    Sr. No.
                                                </th>
                                                <th className="p-2.5 text-start text-base font-normal text-slate-200">
                                                    Kits Name
                                                </th>
                                                <th className="p-2.5 text-start text-base font-normal text-slate-200">
                                                    Age
                                                </th>
                                                <th className="p-2.5 text-start text-base font-normal text-slate-200">
                                                    Image
                                                </th>
                                                <th className="p-2.5 text-base font-normal text-slate-200">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredData.length > 0 ? (
                                                filteredData.map((row, index) => (
                                                    <tr
                                                        key={row.id}
                                                        className="border-b border-b-slate-800 hover:bg-slate-900/50"
                                                    >
                                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400 ps-2">
                                                            <input
                                                                type="checkbox"
                                                                checked={row.checked}
                                                                onChange={() =>
                                                                    handleRowCheck(row.id)
                                                                }
                                                            />
                                                        </td>
                                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">
                                                            {index + 1}
                                                        </td>
                                                        <td className="p-1.5 text-sm font-normal text-slate-400">
                                                            {row.name}
                                                        </td>
                                                        <td className="p-1.5 text-sm font-normal text-slate-400">
                                                            {row.age_group}
                                                        </td>
                                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">
                                                            <img
                                                                src={row.image || "/assets/img/bg-default.jpg"}
                                                                alt="preview"
                                                                className="h-16 w-16 rounded-md shadow-lg object-cover"
                                                            />
                                                        </td>
                                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">
                                                            <div className="flex gap-1 items-center justify-center">
                                                                <Link
                                                                    to={"/add-kits"}
                                                                    type="button"
                                                                    className="bg-green-700 hover:bg-green-800 p-2 rounded text-white "
                                                                    title="Edit"
                                                                >
                                                                    <GoPencil />
                                                                </Link>
                                                                <button
                                                                    type="button"
                                                                    className="bg-red-700 hover:bg-red-800 p-2 rounded text-white "
                                                                    title="Delete"
                                                                    onClick={() => handleDelete(row.id)}
                                                                >
                                                                    <FaRegTrashCan />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td
                                                        colSpan="8"
                                                        className="text-center py-3 text-slate-400"
                                                    >
                                                        No records found
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
}

export default Kits;
