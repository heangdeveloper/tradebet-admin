import type { Theme, Components, alpha } from '@mui/material'

export const inputsCustomizations: Components<Theme> = {
    MuiInputBase: {
        styleOverrides: {
            root: {
                border: "none"
            }
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: "5px",
                fontSize: "24px",
                borderRadius: theme.shape.borderRadius,
                backgroundColor: "transparent",
                boxShadow: 'none',
                variants: [
                    {
                        props: {
                            size: "small",
                        },
                        style: {
                            width: "32px",
                            height: "32px",
                        }
                    }
                ],
                '&:hover': {
                    backgroundColor: (theme.vars || theme).palette.action.selected,
                },
            })
        }
    }
}