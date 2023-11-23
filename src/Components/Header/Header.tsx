import React, { memo, useContext } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { EditorState, convertToRaw } from "draft-js";

const Header: React.FC = () => {
  const { theme, toggleTheme, mainEditor, setMainEditor } = useContext(ThemeContext);
  const NavbigationCTA = "Save";
  const NavigationResetCTA = "Reset";
  const NavigationTite = "Demo Editor by Harsh";

  const handleToogle = () => {
    toggleTheme();
  };

  const handleSaveButton = () => {
    const saveEditor = convertToRaw(mainEditor.getCurrentContent());
    console.log(saveEditor);
    const stringifiedEditor = JSON.stringify(saveEditor);
    localStorage.setItem("draftData", stringifiedEditor);
  };
  const handleResetButton = () => {
    const blankTemplate = EditorState.createEmpty();
    setMainEditor(blankTemplate);
  };
  const ButtonJSON = [
    {
      title: NavbigationCTA,
      onClick: handleSaveButton,
    },
    {
      title: NavigationResetCTA,
      onClick: handleResetButton,
    },
  ];
  return (
    <header className="flex justify-between sm:justify-center items-center py-2 relative">
      <h1 className="text-center">{NavigationTite}</h1>
      <div className="flex items-center absolute right-0 gap-2">
        {ButtonJSON.map((item, index) => (
          <button
            key={index}
            className={`${
              theme == "dark" ? "text-white border-white border-2 border-white" : "br-3-tl border-black  text-black"
            } hover:bg-blue-500 font-bold py-1 px-6  `}
            onClick={item.onClick}
          >
            {item.title}
          </button>
        ))}
        <button className="flex items-center" onClick={handleToogle}>
          {theme === "dark" ? (
            <IoSunnyOutline className="text-yellow-500 text-2xl mr-2 cursor-pointer" />
          ) : (
            <IoMoonOutline className="text-gray-800 text-2xl cursor-pointer" />
          )}
        </button>
      </div>
    </header>
  );
};

export default memo(Header);
