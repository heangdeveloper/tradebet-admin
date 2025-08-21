export const navData = [
    {
        header: "Overview",
        items: [
            {
                label: 'Dashboard',
                icon: 'solar:database-bold-duotone',
                href: '/dashboard'
            },
            {
                label: 'Analytics',
                icon: 'solar:chart-square-bold-duotone',
                href: '/analytics'
            },
        ]
    },
    {
        header: "Pages",
        items: [
            {
                label: 'Game Setting',
                icon: 'solar:gamepad-bold-duotone',
                href: '/gamesetting'
            },
            {
                label: 'Customers',
                icon: "solar:user-id-bold-duotone", 
                subMenu: [
                    { label: 'List Customer', href: 'customer/list' },
                    { label: 'Create Customer', href: 'customer/create' },
                ]
            },
            {
                label: 'Announcement',
                icon: "solar:volume-bold-duotone", 
                subMenu: [
                    { label: 'List Announcement', href: 'announcement/list' },
                    { label: 'Create Announcement', href: 'announcement/create' },
                ]
            },
            {
                label: 'Authentication',
                icon: "solar:user-bold-duotone", 
                subMenu: [
                    { label: 'Users', href: 'authentication/users' },
                    { label: 'Roles', href: 'authentication/roles' },
                    { label: 'Permissions', href: 'authentication/permissions' }
                ]
            },
        ]
    },
    {
        header: "Other",
        items: [
            {
                label: 'Subscription',
                icon: 'solar:folder-open-bold-duotone',
                href: '/subscription'
            },
            {
                label: 'Settings',
                icon: 'solar:settings-bold-duotone',
                href: '/settings'
            }
        ]
    }
]