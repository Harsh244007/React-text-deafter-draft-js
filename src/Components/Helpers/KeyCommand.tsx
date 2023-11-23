import { EditorState, RichUtils } from "draft-js";
import { Dispatch, SetStateAction } from "react";
// import React, { useContext } from "react";
// import { ThemeContext } from "../../Contexts/ThemeContext";

export const KeyCommands = (
  e: string,
  mainEditor: EditorState,
  setMainEditor: Dispatch<SetStateAction<EditorState>>
) => {
  if (e === "header-one") {
    const newEditorState = RichUtils.toggleBlockType(mainEditor, e);
    if (newEditorState) setMainEditor(newEditorState);
    return "handled";
  }

  if (e === "BOLD" || e === "REDLINE" || e === "UNDERLINE") {
    const newEditorState = RichUtils.toggleInlineStyle(mainEditor, e);
    if (newEditorState) setMainEditor(newEditorState);
    return "handled";
  }
  if (e === "HIGHLIGHT") {
    const newEditorState = RichUtils.toggleCode(mainEditor);
    if (newEditorState) setMainEditor(newEditorState);
    return "handled";
  }
  return "not-handled";
};
