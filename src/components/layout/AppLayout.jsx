import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Available from "./Available";
const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Sidebar />
        <Outlet />
        <Available />
        
    </div>;
};

export default AppLayout;
