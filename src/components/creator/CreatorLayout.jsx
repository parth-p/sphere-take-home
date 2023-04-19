import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Details from "./details";
const CreatorLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Sidebar />
        <Outlet />
        <Details />
        
    </div>;
};

export default CreatorLayout;
