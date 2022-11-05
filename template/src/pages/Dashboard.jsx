import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Stories() {
  return (
    <div className="flex flex-col w-full">
      <DrawerHeader />
      <div className="container">
        <Typography
          variant="h5"
          sx={{ p: 1 }}
          style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
        >
          Dashboard
        </Typography>
      </div>
    </div>
  );
}
