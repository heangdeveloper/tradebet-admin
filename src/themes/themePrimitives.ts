import { createTheme, alpha } from "@mui/material";

declare module "@mui/material/Paper" {
    interface PaperPropsVariantOverrides {
        highlighted: true;
    }
}

const defaultTheme = createTheme();

export const colorSchemes = {
    light: {
        palette: {
            primary: {
                main: "#000000"
            },
            secondary: {
                main: "#7b809a"
            },
            info: {
                main: "#1A73E8"
            },
            success: {
                main: "#4CAF50"
            },
            warning: {
                main: "#fb8c00"
            },
            error: {
                main: "#f44335"
            },
            light: {
                main: "#f0f2f5"
            },
            dark: {
                main: "#344767"
            },
            background: {
                paper: "rgba(255, 255, 255)",
                default: "rgb(245, 245, 245)"
            },
            text: {
                primary: "rgba(0, 0, 0, 0.87)"
            },
            action: {
                selected: "rgba(0, 0, 0, 0.08)",
                selectedOpacity: 0.04,
            }
        }
    }
}

export const typography = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 18,
    h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
    },
    h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 700,
        color: "#171717",
        lineHeight: 1.375,
        textTransform: "none",
        textDecoration: "none",
        verticalAlign: "unset",
        opacity: 1
    },
    button: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400,
        color: "rgb(115, 115, 115)",
        lineHeight: 0,
        textTransform: "capitalize",
        textDecoration: "none",
        verticalAlign: "unset",
        opacity: 1
    },
    body1: {
        display: "block",
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 400,
        lineHeight: 1.625,
        textTransform: "capitalize",
    },
    caption: {
        display: "block",
        margin: "16px 0px 8px 8px",
        paddingLeft: "16px",
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 700,
        color: "rgb(23, 23, 23)",
        lineHeight: 1.375,
        textTransform: "uppercase",
    },
}

export const shape = {
    borderRadius: 8,
};

export const breakpoints = {
    values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
    }
}

export const shadows = {
    0: "none",
    1: "rgba(0, 0, 0, 0.05) 0rem 0.0625rem 0.125rem 0rem",
    4: "rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
    16: "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)"
};