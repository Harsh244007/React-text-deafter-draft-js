import {  EditorState } from "draft-js";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type ThemeProviderProps = {
  children: ReactNode;
};

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
  mainEditor: EditorState;
  setMainEditor: Dispatch<SetStateAction<EditorState>>;
};
