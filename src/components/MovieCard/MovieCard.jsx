import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material";

// Styled component for the heading
const Heading = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.8),
  "&:hover": {
    color: alpha(theme.palette.common.white, 0.9),
  },
}));

// MovieCard component
export const MovieCard = (props) => {
  // Destructuring the 'data' prop
  const { data } = props;

  return (
    <Card sx={{ boxShadow: "none", background: "rgb(27, 27, 27)" }}>
      {/* Movie poster image */}
      <img
        style={{ width: "100%", aspectRatio: "2 / 3" }}
        src={`https://test.create.diagnal.com/images/${data[`poster-image`]}`}
      />
      <CardContent>
        {/* Movie name */}
        <Heading
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            fontSize: "14px",
            justifyContent: "center",
          }}
        >
          {data?.name}
        </Heading>
      </CardContent>
    </Card>
  );
};
