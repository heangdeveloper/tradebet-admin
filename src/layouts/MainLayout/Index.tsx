import { useState } from "react";
import { Outlet } from 'react-router'
import Box from "@mui/material/Box"

import Header from "./Header/Index"
import Sidebar from "./Sidebar/Index"

const MainLayout = () => {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen((prev) => !prev);
    };


    return (
        <>
            <Sidebar open={open} onClose={toggleSidebar}/>
            <Box
                sx={{
                    position: "relative",
                    height: "100vh",
                    marginLeft: { xl: "230px" },
                    padding: "24px",
                    color: "rgb(23, 23, 23)",
                    backgroundColor: "transparent",
                    opacity: 1,
                    transition: { xl: "margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1), margin-right 300ms cubic-bezier(0.4, 0, 0.2, 1)" }
                }}
            >
                <Header onToggleSidebar={toggleSidebar}/>
                <Box
                    sx={{
                        paddingTop: "24px",
                        color: "rgb(23, 23, 23)",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        opacity: 1
                    }}
                >
                    <Outlet/>
                </Box>
            </Box>
        </>
    )
}

export default MainLayout