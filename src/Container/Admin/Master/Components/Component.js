import AdminBody from "../../../../Component/Admin/AdminBody";
import { FiSearch, FiFilter } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import useApiCallHooks from "../../../../Hooks/useApiCallHooks";

function Component() {
    const [response, loading, error, callApi, statusCode] = useApiCallHooks();
    const [data, setData] = useState([]);
    const [addData, setAddData] = useState([
        {
            name: "",
            image: null
        }
    ]);

    const [search, setSearch] = useState("");

    // Select all logic
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

    // Filter + search
    const filteredData = Array.isArray(data)
        ? data.filter((row) => {
            const searchLower = search.toLowerCase();
            return (
                row.name?.toLowerCase().includes(searchLower) ||
                row.email?.toLowerCase().includes(searchLower) ||
                row.mobile?.includes(searchLower) ||
                row.address?.toLowerCase().includes(searchLower)
            );
        })
        : [];

    // Image upload preview
    const [image, setImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [addImgData, setAddImgData] = useState({ image: null });
    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         // 1. Save file in addData
    //         setAddImgData((prev) => ({ ...prev, image: file }));

    //         // 2. Generate preview URL
    //         setImage(URL.createObjectURL(file));
    //     }
    // };

    // Call API

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAddData((prev) => ({ ...prev, image: file }));
            setImage(URL.createObjectURL(file)); // preview
        }
    };

    useEffect(() => {
        callApi("get", "admin/components");
    }, []);


    // Store API data
    useEffect(() => {
        if (response?.data && statusCode === 200) {
            const rows = Array.isArray(response.data) ? response.data : [response.data];
            setData(
                rows.map((row, index) => ({
                    ...row,
                    checked: false,
                    id: row.id ?? index + 1,
                }))
            );
        }
    }, [response, statusCode]);

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append("name", addData.name);
        formData.append("image", addData.image);

        await callApi("post", "admin/components", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        // Refresh list after add
        callApi("get", "admin/components");

        // Reset form
        setAddData({ name: "", image: null });
        setImage(null);
    };

    const handleDelete = async (id) => {
        try {
            await callApi("delete", `admin/components/${id}`);
            // refresh list after delete
            callApi("get", "admin/components");
        } catch (err) {
            console.error("Delete failed:", err);
        }
    };

    return (
        <AdminBody
            permission={'add-componet'}
            loading={loading}
            content={
                <div className="page-wrapper w-full text-white text-xs">
                    <div className="grid grid-cols-3 gap-4">
                        {/* Left: Add Component Form */}
                        <div className="col-span-1">
                            <h4 className="text-lg font-normal mb-5">Add Components</h4>
                            <div className="card-body bg-slate-950 p-4 rounded mb-5 min-h-[470px]">
                                <div className="font-normal space-y-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-base" htmlFor="title">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="title" onChange={(e) => setAddData({ ...addData, name: e.target.value })}
                                            className="text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-2 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500"
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-base" htmlFor="upload">
                                            Upload Image
                                        </label>

                                        <input
                                            type="file"
                                            id="upload"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="cursor-pointer hover:bg-slate-600 text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-1.5 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500"
                                        />

                                        {image && (
                                            <div className="relative w-28 h-28 group">
                                                <img
                                                    src={image}
                                                    alt="preview"
                                                    className="w-28 h-28 object-cover rounded border"
                                                />
                                                <button
                                                    onClick={() => setShowModal(true)}
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
                                                        src={image}
                                                        alt="big preview"
                                                        className="max-w-[90vw] max-h-[90vh] rounded-md shadow-lg"
                                                    />
                                                    <button
                                                        onClick={() => setShowModal(false)}
                                                        className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-sm font-bold"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex gap-2">
                                        <button onClick={onSubmit} className="py-2 px-5 bg-green-700 hover:bg-green-800 rounded-md text-sm flex gap-2 items-center">
                                            Submit
                                        </button>
                                        <button
                                            type="reset"
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
                            <h4 className="text-lg font-normal mb-5">Components List</h4>
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
                                                onChange={(e) => setSearch(e.target.value)}
                                            />
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
                                                    Component Name
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
                                                                onChange={() => handleRowCheck(row.id)}
                                                            />
                                                        </td>
                                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">
                                                            {index + 1}
                                                        </td>
                                                        <td className="p-1.5 text-sm font-normal text-slate-400">
                                                            {row.name}
                                                        </td>
                                                        <td className="p-1.5 text-sm text-center font-normal text-slate-400">
                                                            <img
                                                                src={row.image || "../assets/img/bg-default.jpg"}
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

};
export default Component;
