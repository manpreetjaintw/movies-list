import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { useState, useEffect } from "react";

const SearchContainer = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0),
  },
  marginLeft: 0,
  width: "100%",
  marginRight: "-1.5rem",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapperStyled = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

const StyledInputBaseStyled = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.5, 0.5, 0.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "0",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const BackButtonStyled = styled("img")({
  height: "2rem",
  width: "2rem",
});

export const Header = ({ searchTerm, handleChange, handleBackButton }) => {
  const [showBack, setShowBack] = useState(true);

  useEffect(() => {
    setShowBack(!!searchTerm);
  }, [searchTerm]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "white",
        }}
      >
        <Toolbar>
          {showBack && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleBackButton}
            >
              <BackButtonStyled
                src={"https://test.create.diagnal.com/images/Back.png"}
              />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            Romantic Comedy
          </Typography>
          <SearchContainer>
            <SearchIconWrapperStyled>
              <img
                src="https://test.create.diagnal.com/images/search.png"
                alt="search icon"
                height="25px"
                width="25px"
              />
            </SearchIconWrapperStyled>
            <StyledInputBaseStyled
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={handleChange}
            />
          </SearchContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
