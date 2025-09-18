import { UiRoutes } from "../../Routes/UiRoutes";
import Dashboard from "../Admin/Dashboard"
import Forms from "./Forms/Forms";
import Tables from "./Forms/Tables";
import Add_Kits from "./Kits/Add_Kits";
import Kits from "./Master/Kits/Kits";
import Kits_View from "./Kits/Kits_View";
import Component from "./Master/Components/Component";
// import MasterKit from "./Master/MasterKit";
import MasterProject from "./Master/MasterProject";
import Users from "./Users/Users";

export const adminConfig = [
    {
        path : UiRoutes.admin.dashboard,
        element : <Dashboard />
    },
    {
        path : UiRoutes.admin.admin_kits,
        element : <Kits/>
    },
    {
        path : UiRoutes.admin.admin_add_kits,
        element : <Add_Kits/>
    },
    {
        path : UiRoutes.admin.admin_kits_view,
        element : <Kits_View/>
    },
    {
        path : UiRoutes.admin.admin_users,
        element : <Users/>
    },
    {
        path : UiRoutes.admin.forms,
        element : <Forms/>
    },
    {
        path : UiRoutes.admin.tables,
        element : <Tables/>
    },
    // {
    //     path : UiRoutes.admin.masterkit,
    //     element : <MasterKit/>
    // },
    {
        path : UiRoutes.admin.masterprojects,
        element : <MasterProject/>
    },
    {
        path : UiRoutes.admin.component,
        element : <Component/>
    },
    {
        path : UiRoutes.admin.masterkit,
        element : <Kits/>
    },
];