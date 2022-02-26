export default function LinksGroup({ linkGroups = [], onClick }) {
  return (
    <>
      {linkGroups.map((linkGroup) => (
        <>
          <a href={linkGroup.href} className="block text-2xl mt-8">
            {linkGroup.text}
          </a>
          {linkGroup.links.map((link) => (
            <a href={link.href} className="block mt-2" onClick={onClick}>
              {link.text}
            </a>
          ))}
        </>
      ))}
    </>
  );
}
