import AdminBody from "../../Component/Admin/AdminBody";
import { IoMdTrendingUp } from "react-icons/io";

const Dashboard = () => {
    return (
        <AdminBody 
            content={
                <div className="grid grid-cols-4 gap-5">
                    <div className=" flex justify-between p-4 bg-slate-600 rounded-lg">
                        <IoMdTrendingUp size={45} />
                        <div className="flex flex-col items-end text-slate-400 text-balance">
                            Today Sale
                            <span className="text-2xl font-bold text-slate-300">$234</span>
                        </div>
                    </div>
                    <div className=" flex justify-between p-4 bg-slate-600 rounded-lg">
                        <IoMdTrendingUp size={45} />
                        <div className="flex flex-col items-end text-slate-400 text-balance">
                            Today Sale
                            <span className="text-2xl font-bold text-slate-300">$234</span>
                        </div>
                    </div>
                    <div className=" flex justify-between p-4 bg-slate-600 rounded-lg">
                        <IoMdTrendingUp size={45} />
                        <div className="flex flex-col items-end text-slate-400 text-balance">
                            Today Sale
                            <span className="text-2xl font-bold text-slate-300">$234</span>
                        </div>
                    </div>
                    <div className=" flex justify-between p-4 bg-slate-600 rounded-lg">
                        <IoMdTrendingUp size={45} />
                        <div className="flex flex-col items-end text-slate-400 text-balance">
                            Today Sale
                            <span className="text-2xl font-bold text-slate-300">$234</span>
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default Dashboard;