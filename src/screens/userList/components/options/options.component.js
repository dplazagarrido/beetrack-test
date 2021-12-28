import { Box, Button, InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import labels from "./labels";

export const options = ({handleOpen, handleSearch}) => {
  return (
    <Box className="header">
      <OutlinedInput
        className="header__searchBar"
        placeholder={labels.descBuscar}
        color="primary"
        onChange={handleSearch}
        startAdornment={
          <InputAdornment position="start">
            <FaSearch className="iconSearch" size='1.3em'/>
          </InputAdornment>
        }
      />
      <Button
        className="header__button"
        variant="contained"
        startIcon={<AiFillPlusCircle />}
        onClick={handleOpen}
      >
        {labels.btnNuevoContacto}
      </Button>
    </Box>
  );
};

export default options;
