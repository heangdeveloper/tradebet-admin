import { Routes, Route, Navigate } from "react-router";
import AppTheme from "./themes/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";

import MainLayout from './layouts/MainLayout/Index'
import LoginLayout from './layouts/LoginLayout/Index';

import Dashboard from "./pages/Dashboard"
import ListCustomers from "./pages/Customer/Index";
import CreateCustomers from "./pages/Customer/Create";
import CreateAnnouncement from "./pages/Announcement/Create";
import ListAnnouncement from "./pages/Announcement/Index";

import Login from "./pages/Login";

function App(props: { disableCustomTheme?: boolean }) {

    return (
        <>
            <AppTheme {...props}>
                <CssBaseline enableColorScheme/>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route element={<MainLayout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="customer/list" element={<ListCustomers />} />
                        <Route path="customer/create" element={<CreateCustomers />} />
                        <Route path="announcement/list" element={<CreateAnnouncement />} />
                        <Route path="announcement/create" element={<ListAnnouncement />} />
                    </Route>
                    <Route element={<LoginLayout />}>
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
            </AppTheme>
        </>
    )
}

export default App
