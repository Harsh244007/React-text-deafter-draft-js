/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { ThemeContextType, ThemeProviderProps } from "../Types/ContextTypes";
import { ThemeContext } from "./ThemeContext";
import { EditorState, RawDraftContentState, convertFromRaw } from "draft-js";
import * as DemoExample from "./ExampleData.json";

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const savedEditorContent = localStorage.getItem("draftData");
  const getTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<string>(getTheme || "light");
  // @ts-ignore
  const DemoExampleTSIgnored: RawDraftContentState = DemoExample;
  const [mainEditor, setMainEditor] = useState<EditorState>(
    savedEditorContent
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedEditorContent)))
      : // : EditorState.createEmpty()
        EditorState.createWithContent(convertFromRaw(DemoExampleTSIgnored))
  );

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    mainEditor,
    setMainEditor,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
