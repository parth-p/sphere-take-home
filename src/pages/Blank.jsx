import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
const Blank = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Sidebar />
        <Outlet />
        Under construction
    </div>;
};

export default Blank;

// const AppLayout = () => {
//     return <div style={{
//         padding: '50px 0px 0px 370px'
//     }}>
//         <Sidebar />
//         <Outlet />
//         hi there
//     </div>;
// };

// export default AppLayout;