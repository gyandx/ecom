import React from "react";
import { FIRST_NAV, SECOND_NAV } from "../../constants/nav.constant";

function Nav() {
  return (
    <>
      <div className="w-full h-10 flex text-center justify-center py-2">
        {FIRST_NAV.map((item) => (
          <p className="mx-2 text-sm hover:border-b-2 hover:border-black cursor-pointer" key={item}>
            {item}
          </p>
        ))}
      </div>
      <div className="w-full h-10 bg-black text-white flex justify-evenly text-center items-center font-bold">
        {SECOND_NAV.map(item => <p className="cursor-pointer" key={item}>{item}</p>)}
      </div>
    </>
  );
}

export default Nav;
