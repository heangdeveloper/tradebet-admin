import { Routes, Route, Navigate } from "react-router";
import AppTheme from "./themes/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";

import MainLayout from './layouts/MainLayout/Index'
import LoginLayout from './layouts/LoginLayout/Index';

import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import ListCustomers from "./pages/Customer/Index";
import CreateCustomers from "./pages/Customer/Create";
import CreateAnnouncement from "./pages/Announcement/Create";
import ListAnnouncement from "./pages/Announcement/Index";

import Users from "./pages/Authentication/Users/Index";
import Roles from "./pages/Authentication/Roles/Index";
import Permissions from "./pages/Authentication/Permissions/Index";

import Subscription from "./pages/Subscription/Index";
import Settings from "./pages/Settings/Index";

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
                        <Route path="analytics" element={<Analytics />} />
                        <Route path="customer/list" element={<ListCustomers />} />
                        <Route path="customer/create" element={<CreateCustomers />} />
                        <Route path="announcement/list" element={<CreateAnnouncement />} />
                        <Route path="announcement/create" element={<ListAnnouncement />} />

                        <Route path="authentication/users" element={<Users />} />
                        <Route path="authentication/roles" element={<Roles />} />
                        <Route path="authentication/permissions" element={<Permissions />} />

                        <Route path="subscription" element={<Subscription />} />
                        <Route path="settings" element={<Settings />} />
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
