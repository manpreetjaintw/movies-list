import React from "react";
import { Box } from "@mui/material";

import { Header } from "../Header";

export const Layouts = ({ children }) => {
  return (
    <Box>
      <main>{children}</main>
    </Box>
  );
};
