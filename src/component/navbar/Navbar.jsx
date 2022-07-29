//  resuable navbar

const Navbar = ({ data }) => {
  const { logo, navLinks } = data;

  return (
    <div>
      {/* logo */}
      <LogoComp data={logo} />
      {/* menu */}

      {/* others */}
    </div>
  );
};
export default Navbar;
// always make component

const LogoComp = ({ data }) => {
  const dataType = typeof data;
  console.log(dataType);
  if (dataType !== "object" && dataType === null)
    return console.logo("data in logo should be object");
  return <div>{!data.img && !data.text ? "LOGO" : data.img || data.text}</div>;
};

const MenuComp = ({ data }) => {
  return <div></div>;
};
