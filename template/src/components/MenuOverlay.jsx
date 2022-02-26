import LinksGroup from "./LinksGroup";

export default function MenuOverlay({ onCloseMenu }) {
  const onNavigate = () => {
    onCloseMenu();
    return false;
  };
  return (
    <div className="fixed inset-0 h-screen bg-primary-600 text-white font-bold pt-20 z-10">
      <div className="container">
        <LinksGroup onClick={onNavigate} />
      </div>
    </div>
  );
}
