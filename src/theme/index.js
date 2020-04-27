import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#87CEEB"
        }
    },
    typography: {
        fontFamily: "Roboto"
    },
    status: {
        danger: "orange",
    },
    overrides: {
        MuiButton: {
            root: {
                margin: "5px"
            }
        },
        MuiTypography: {
            root: {
            }
        }
    }
})

export default theme