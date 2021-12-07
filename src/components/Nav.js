import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import logo from'../assets/logo.jpeg';
const Nav = ({ setLibraryStatus, libraryStatus, switchSong, tip}) => {
  const openLibraryHandler = () => {
   // setLibraryStatus(!libraryStatus);
   switchSong()
  };

  return (
    <nav>
      <img src={logo} width={100} height={100}/>
      <button
        className={libraryStatus ? "library-active" : ""}
        onClick={openLibraryHandler}
      >
        切换到{tip}
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
