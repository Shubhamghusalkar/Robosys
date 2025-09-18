import { useState } from "react";
import AdminBody from "../../../Component/Admin/AdminBody";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom"
import { FaFileAlt } from "react-icons/fa"; 
const Add_Kits = () => {
    const [isGetOpen, setIsGetOpen] = useState(false);
    const getDropdown = () => setIsGetOpen(!isGetOpen);
    const [selectedGetItems, setSelectedGetItems] = useState([]);
    const optionsGet = [
        "Cable",
        "Wires",
        "PCB"
    ];
    const handleGetSelect = (get) => {
        if (selectedGetItems.includes(get)) {
            setSelectedGetItems(selectedGetItems.filter((i) => i !== get));
        } else {
            setSelectedGetItems([...selectedGetItems, get]);
        }
    };
    const removeGetItem = (get) => {
        setSelectedGetItems(selectedGetItems.filter((i) => i !== get));
    };
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const projectDropdown = () => setIsProjectOpen(!isProjectOpen);
    const [selectedProjectItems, setIsSelectedProjectItems] = useState([]);
    const optionsProject = [
        "Cable",
        "Wires",
        "PCB",
        "Ultrasonic Sensor",
        "Fire Detection System"
    ];
    const handleProjectSelect = (project) => {
        if (selectedProjectItems.includes(project)) {
            setIsSelectedProjectItems(selectedProjectItems.filter((i) => i !== project));
        } else {
            setIsSelectedProjectItems([...selectedProjectItems, project])
        }
    }
    const removeProjectItem = (project) => {
        setIsSelectedProjectItems(selectedProjectItems.filter((i) => i !== project))
    }
    const [files, setFiles] = useState([]);
    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        const newFiles = selectedFiles.map((file) => {
            let type = "other";
            if (file.type.startsWith("image")) type = "image";
            else if (file.type.startsWith("video")) type = "video";

            return {
                id: Math.random().toString(36).substr(2, 9),
                file,
                type,
                name: file.name,
                preview: URL.createObjectURL(file),
            };
        });
        setFiles((prev) => [...prev, ...newFiles]);
        e.target.value = null;
    };
    const removeFile = (id) => {
        setFiles((prev) => prev.filter((f) => f.id !== id));
    };
    return (
        <AdminBody
            content={
                <div className="page-wrapper w-full text-white mb-3">
                    <div className="card-header flex justify-between items-center mb-2.5">
                        <h4 className="text-lg font-normal">Add Kits</h4>
                        <Link to={'/kit-list'} className="py-1.5 px-4 bg-gray-700 hover:bg-gray-800 rounded-md text-sm flex gap-2 items-center"><MdOutlineArrowBack /> Back </Link>
                    </div>
                    <form >
                        <div className="card-body ">
                            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-5">
                                <div className="col-span-2 md:col-span-3 lg:col-span-2 grid grid-cols-6 gap-7 font-normal bg-slate-950 p-4 rounded">
                                    <div className="col-span-6 flex flex-col gap-2">
                                        <label for="title">Title</label>
                                        <input type="text" id="title" className="text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-2 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500" placeholder="Enter Title" />
                                    </div>
                                    <div className="col-span-6 md:col-span-3 flex flex-col gap-2">
                                        <label for="title">Price </label>
                                        <input type="text" id="title" className="text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-2 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500" placeholder="Enter Price" />
                                    </div>
                                    <div className="col-span-6 md:col-span-3 flex flex-col gap-2">
                                        <label for="forAvailability">Availability </label>
                                        <select id="forAvailability" className="text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-2 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500">
                                            <option selected className="bg-slate-700">Select Status</option>
                                            <option className="py-1">In Stock</option>
                                            <option className="py-1">Out of Stock</option>
                                        </select>
                                    </div>
                                    <div className="col-span-6 md:col-span-3 flex flex-col gap-2">
                                        <label for="forAvailability">Student std </label>
                                        <select id="forAvailability" className="text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-2 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500">
                                            <option selected className="bg-slate-700">Select std</option>
                                            <option className="py-1">1st std</option>
                                            <option className="py-1">2nd std</option>
                                            <option className="py-1">3rd std</option>
                                            <option className="py-1">4th std</option>
                                        </select>
                                    </div>
                                    <div className="col-span-6 md:col-span-3 flex flex-col  gap-2">
                                        <label for="forAvailability">What you get with this </label>
                                        <div className="relative">
                                            <div onClick={getDropdown} className="relative text-sm rounded py-2 px-3.5 bg-slate-800 mb-3">Select
                                                <FaAngleDown className="absolute top-3 right-3" />
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedGetItems.map((get) => (
                                                    <span
                                                        key={get}
                                                        className="relative px-3.5 py-1 text-sm bg-green-950 rounded-full"
                                                    >
                                                        {get}
                                                        <IoIosClose
                                                            onClick={() => removeGetItem(get)}
                                                            className="hover:scale-110 font-bold cursor-pointer absolute -top-1 -right-1 bg-white text-red-700 rounded-full"
                                                        />
                                                    </span>
                                                ))}
                                            </div>
                                            {
                                                setIsGetOpen ? <div className={` ${!isGetOpen && 'hidden'}`}>

                                                    <span className="absolute top-12 z-10 right-0 border border-slate-700 shadow-lg shadow-slate-950 text-sm rounded py-2 px-3.5 bg-slate-800 after:absolute after:h-3 after:w-3 after:bg-slate-800 after:rotate-45 after:-top-1.5 after:right-5">
                                                        {/* <li selected className="p-1 border-b border-b-slate-700 pb-2">Select</li> */}
                                                        <div className="flex gap-2 flex-col">
                                                            {optionsGet.map((get) => (
                                                                <label key={get} className="p-1 cursor-pointer hover:underline">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="mr-2"
                                                                        checked={selectedGetItems.includes(get)}
                                                                        onChange={() => handleGetSelect(get)}
                                                                    />
                                                                    {get}
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </span>
                                                </div>
                                                    : <div></div>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-span-6 md:col-span-3 flex flex-col  gap-2">
                                        <label for="forAvailability">Projects </label>
                                        <div className="relative">
                                            <div onClick={projectDropdown} className="relative text-sm rounded py-2 px-3.5 bg-slate-800 mb-3">Select
                                                <FaAngleDown className="absolute top-3 right-3" />
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {
                                                    selectedProjectItems.map((project) => (
                                                        <span key={project} className="relative px-3.5 py-1 text-sm bg-green-950 rounded-full ">{project}
                                                            <IoIosClose onClick={() => removeProjectItem(project)} className="hover:scale-110 font-bold cursor-pointer absolute -top-1 -right-1 bg-white text-red-700 rounded-full" />
                                                        </span>
                                                    ))}
                                            </div>
                                            {
                                                setIsProjectOpen ? <div className={` ${!isProjectOpen && 'hidden'}`}>

                                                    <span className="absolute top-12 right-0 border border-slate-700 shadow-lg shadow-slate-950 text-sm rounded py-2 px-3.5 bg-slate-800 after:absolute after:h-3 after:w-3 after:bg-slate-800 after:rotate-45 after:-top-1.5 after:right-5">
                                                        {/* <li selected className="p-1 border-b border-b-slate-700 pb-2">Select</li> */}
                                                        <div className="flex gap-2 flex-col">
                                                            {
                                                                optionsProject.map((project) => (
                                                                    <label key={project} className="p-1 cursor-pointer hover:underline">
                                                                        <input type="checkbox" checked={selectedProjectItems.includes(project)}
                                                                            onChange={() => handleProjectSelect(project)} className="mr-2" id="uno" /> {project}
                                                                    </label>
                                                                ))
                                                            }
                                                        </div>
                                                    </span>
                                                </div>
                                                    : <div></div>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-span-6 flex flex-col gap-2">
                                        <label for="forAvailability">Description </label>
                                        <textarea className="text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-2 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500" placeholder="Write Description.." rows={4}></textarea>
                                    </div>
                                    <div className="col-span-6 flex flex-col gap-2">
                                        <label for="forAvailability">What You'll Learn </label>
                                        <textarea className="text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-2 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500" placeholder="Write What You'll Learn.." rows={4}></textarea>
                                    </div>

                                </div>
                                <div className="bg-slate-950 p-4 rounded md:col-span-2 lg:col-span-1">
                                    <div className="multiple-file">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="file-upload">Upload Multiple Images</label>
                                            <input type="file" id="file-upload" onChange={handleFileChange} className="hidden text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-1.5 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500" multiple />
                                            <label
                                                htmlFor="file-upload"
                                                className="cursor-pointer  hover:bg-slate-600 text-slate-300 placeholder:text-slate-500 outline-none text-sm rounded py-2.5 px-3.5 bg-slate-800 border border-transparent focus:border focus:border-slate-500"
                                            >
                                                <span className="bg-white py-1 px-2 font-normal rounded-sm text-black">Choose Files</span>
                                            </label>
                                            <span className="text-slate-300 text-sm">
                                                {files.length > 0
                                                    ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
                                                    : "No files selected"}
                                            </span>
                                        </div>
                                        <div className="flex gap-3 flex-wrap">
                                            {files.map((f) => (
                                                <div
                                                    key={f.id}
                                                    className="relative bg-slate-900 mt-3 rounded w-32 md:w-28 lg:w-36 h-32 md:h-28 lg:h-36 flex items-center justify-center"
                                                >
                                                    {f.type === "image" ? (
                                                        <img
                                                            src={f.preview}
                                                            alt="preview"
                                                            className="w-32 md:w-28 lg:w-36 h-32 md:h-28 lg:h-36 object-cover rounded "
                                                        />
                                                    ) : f.type === "video" ? (
                                                        <video
                                                            src={f.preview}
                                                            controls
                                                            className="w-32 md:w-28 lg:w-36 h-32 md:h-28 lg:h-36 object-cover rounded"
                                                        />
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center text-slate-300 p-2">
                                                            <FaFileAlt className="text-4xl mb-1 text-slate-400" />
                                                            <span className="text-xs text-center break-all px-1">
                                                                {f.name}
                                                            </span>
                                                        </div>
                                                    )}

                                                    <IoIosClose
                                                        onClick={() => removeFile(f.id)}
                                                        className="hover:scale-110 font-bold absolute -top-1 -right-1 bg-white text-red-700 rounded-full cursor-pointer"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-start mt-4 mb-8 md:mb-0 lg:mb-8">
                                <Link to={'/add-kits'} className="py-2 px-5 bg-green-700 hover:bg-green-800 rounded-md text-sm flex gap-2 items-center"> Submit </Link>
                                <button type="reset" className="py-2 px-5 bg-red-700 hover:bg-red-800 rounded-md text-sm flex gap-2 items-center"> Cancel </button>
                            </div>
                        </div>
                    </form >
                </div >
            }
        />
    )
}

export default Add_Kits;