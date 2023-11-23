/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DraftEditorCommand, getDefaultKeyBinding } from "draft-js";

export default function KeyBindings(e: KeyboardEvent): DraftEditorCommand | string | null | undefined {
  if (e.key == "#") {
    return "header-one";
  }

  if (e.key == "*") {
    return "BOLD";
  }
  if (e.key == "9") {
    return "REDLINE";
  }

  if (e.key == "0") {
    return "UNDERLINE";
  }

  if (e.key == "`") {
    return "HIGHLIGHT";
  }

  // @ts-ignore
  return getDefaultKeyBinding(e);
}
