import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="navbar bg-gray-900 w-full p-4 flex flex-col md:flex-row items-center justify-between fixed">
        <div className="flex justify-between items-center w-full md:w-fit">
          <p className="text-xl text-white font-bold">FNAXIOM</p>
          <div className="flex md:hidden" onClick={handleOpen}>
            {!open ? (
              <img
                src="/burger-menu.svg"
                alt="navbar-menu"
                width={24}
                height={24}
              />
            ) : (
              <img
                src="/cross-menu.svg"
                alt="navbar-menu"
                width={24}
                height={24}
              />
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center justify-between gap-4">
          <p className="text-lg text-white">Home</p>
          <p className="text-lg text-white">About</p>
          <p className="text-lg text-white">Contact Us</p>
        </div>
        <div className="hidden md:flex p-2 rounded-full bg-orange-600">
          <p className="text-sm text-white font-bold">GET STARTED</p>
        </div>
        <div
          className={`${
            open ? "flex" : "hidden"
          } w-full md:hidden flex-col items-center justify-between gap-4`}
        >
          <p className="text-lg text-white">Home</p>
          <p className="text-lg text-white">About</p>
          <p className="text-lg text-white">Contact Us</p>
          <div className="flex p-2 rounded-full bg-orange-600">
            <p className="text-sm text-white font-bold">GET STARTED</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
