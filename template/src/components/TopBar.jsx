import { ReactComponent as Menu } from "./icons/Menu.svg";

export default function TopBar({ menuHeight }) {
  // todo extract into component
  const Title = () => (
    <div className="text-primary-600 text-center text-2xl font-bold">
      App Title
    </div>
  );

  return (
    <div
      className="z-20 fixed bg-white top-0 border-b w-full"
      style={{ minHeight: menuHeight }}
    >
      <div className="flex items-center p-4" style={{ paddingLeft: "1.7rem" }}>
        <Menu className="w-6 h-6 mr-12" />
        {/* <img alt="Logo" src="/Logo.svg" width="40" height="40" /> */}
        <Title />
      </div>
    </div>
  );
}
