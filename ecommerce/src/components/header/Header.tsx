import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";

function Header() {
  return (
    <div className="w-full h-[100px] flex">
      <div className="w-1/3 p-2 pl-10 flex py-6">
        <FormControl className="w-3/4 h-[0.5rem] m-0" variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<SearchIcon />}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="What can we help you find"
          />
        </FormControl>
      </div>
      <div className="w-1/3 text-center p-2 flex items-center justify-center">
        <h3 className="font-bold text-5xl">Create&Barrel</h3>
      </div>
      <div className="w-1/3 text-center p-2 flex items-center justify-around">
        <div className="flex cursor-pointer ">
          <p className="mr-2">Order & Sign In </p>
          <PersonIcon className="hover:border-b-4 hover:border-black" />
        </div>
        <div className="cursor-pointer">
          <LocationOnIcon className="hover:border-b-4 hover:border-black"/>
        </div>
        <div className="flex cursor-pointer">
          <FavoriteIcon className="hover:border-b-4 hover:border-black"/>
          <p className="ml-2">0 </p>
        </div>
        <div className="flex cursor-pointer">
          <ShoppingCartIcon className="hover:border-b-4 hover:border-black"/>
          <p className="ml-2">0 </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
