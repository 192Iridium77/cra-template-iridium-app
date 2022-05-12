import { useState } from "react";

import MenuTop from "./components/MenuTop";
import MenuLeft from "./components/MenuLeft";
// import MenuOverlay from "./components/MenuOverlay";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    document.body.style.overflow = showMenu ? "auto" : "hidden";
    setShowMenu(!showMenu);
  };

  const topMenuHight = "70px";

  return (
    <div className="relative">
      <MenuTop>Home</MenuTop>
      <MenuLeft onOpenMenu={toggleMenu} />
      {/* {showMenu && <MenuOverlay onCloseMenu={toggleMenu} />} */}
    </div>
  );
}
