import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Icon } from "@iconify/react";
import { Avatar } from '@mui/material';
import { useLocation, Link as RouterLink } from "react-router";

interface ElevationProps {
    window?: () => Window;
    children?: React.ReactElement<{ elevation?: number }>;
}

interface HeaderProps {
    onToggleSidebar: () => void;
    window?: () => Window;
}

function ElevationScroll(props: ElevationProps) {
    const { children, window } = props

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    })

    return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
    : null;
}

export default function Header({ onToggleSidebar, window }: HeaderProps) {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <>
            <ElevationScroll window={window}>
                <AppBar position="sticky" color="inherit">
                    <Toolbar>
                        <Box>
                            <Stack
                                direction="row"
                                sx={{ alignItems: "center", gap: 2, }}
                            >
                                <IconButton sx={{ display: { xl: "none" } }} onClick={onToggleSidebar}><Icon icon="solar:hamburger-menu-line-duotone" /></IconButton>
                                <Breadcrumbs>
                                    {pathnames.length === 1 && pathnames[0] === "dashboard"
                                        ? (
                                            <Typography variant="button" sx={{ fontWeight: 700 }}> Dashboards </Typography>
                                        )
                                        : [
                                            <Link underline="hover" color="inherit" component={RouterLink} to="/dashboards"><Typography variant="button">Dashboards</Typography></Link>,
                                            ...pathnames
                                            .filter((value) => value !== "dashboards")
                                            .map((value, index) => {
                                                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                                                const isLast = index === pathnames.length - 1;

                                                return isLast ? (
                                                    <Typography key={to} variant="button" sx={{ fontWeight: 700 }}>
                                                        {value.charAt(0).toUpperCase() + value.slice(1)}
                                                    </Typography>
                                                ) : (
                                                    <Link
                                                        key={to}
                                                        underline="hover"
                                                        color="inherit"
                                                        component={RouterLink}
                                                        to={to}
                                                    >
                                                        <Typography variant="button">
                                                            {value.charAt(0).toUpperCase() + value.slice(1)}
                                                        </Typography>
                                                    </Link>
                                                );
                                            })
                                        ]
                                    }
                                </Breadcrumbs>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack
                                direction="row"
                                sx={{
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    flex: "1 1 auto",
                                    gap: 1
                                }}
                            >
                                <IconButton><Icon icon="solar:settings-bold-duotone" /></IconButton>
                                <IconButton><Icon icon="solar:bell-bing-bold-duotone" /></IconButton>
                                <IconButton
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "transparent"
                                        }
                                    }}
                                >
                                    <Avatar alt="Sim Kimheang" src="https://demos.creative-tim.com/material-dashboard-pro-react/static/media/team-3.0ef0be95e6850814c79e.jpg" />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    )
}