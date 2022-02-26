// import { ReactComponent as Home } from "./components/icons/Home.svg";
import Icon from "./Icon";

export default function SideBar({ menuHeight }) {
  return (
    <div
      className="fixed left-0 bottom-0 bg-white w-20"
      style={{ top: menuHeight }}
    >
      <div className="flex flex-col justify-center items-center p-4 text-xs hover:bg-gray-100 h-20 w-20">
        {/* <Home className="w-6 h-6" /> */}
        <Icon type="Home" />
        Item 1
      </div>
    </div>
  );
}
