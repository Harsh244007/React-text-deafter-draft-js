import { createContext } from "react";
import { ThemeContextType } from "../Types/ContextTypes";
import { EditorState } from "draft-js";

const defaultThemeContext: ThemeContextType = {
  theme: "light" || "dark",
  toggleTheme: () => null,
  mainEditor: EditorState.createEmpty(),
  setMainEditor: () => null,
};

export const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);
