/* eslint-disable @typescript-eslint/ban-ts-comment */
import "draft-js/dist/Draft.css";
import Editor from "@draft-js-plugins/editor";
import "draft-js/dist/Draft.css";
import React, { memo, useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import KeyBindings from "../Helpers/keyBindings";
import { ThemeContextType } from "../../Types/ContextTypes";
import { styleMap } from "../Helpers/StyleMap";
import { blockstylefn } from "../Helpers/BlockStyleFN";
import { KeyCommands } from "../Helpers/KeyCommand";

const Draft: React.FC = () => {
  const { mainEditor, setMainEditor } = useContext<ThemeContextType>(ThemeContext);

  return (
    <article className="border-2 p-2 h-full min-h-80vh mt-5 border-blue-300 relative">
      <Editor
        handleKeyCommand={(e) => KeyCommands(e, mainEditor, setMainEditor)}
        editorState={mainEditor}
        blockStyleFn={blockstylefn}
        customStyleMap={styleMap}
        onChange={(editorState) => setMainEditor(editorState)}
        // @ts-ignore
        keyBindingFn={KeyBindings}
      />
    </article>
  );
};
export default memo(Draft);
