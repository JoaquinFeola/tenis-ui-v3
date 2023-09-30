import { CssBaseline, ThemeProvider } from "@mui/material"
import { purpleTheme } from "./purple.theme";
import { HigherOrderComponent } from "../interfaces/HigherOrderComponentType";

export const PurpleThemeProvider = ({ children }: HigherOrderComponent) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
