import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PaletteIcon from "@mui/icons-material/Palette";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

interface DrawerProps {
  drawerWidth: number;
  open: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

export default function Drawer({
  drawerWidth,
  open,
  handleDrawerOpen,
  handleDrawerClose,
}: DrawerProps) {
  const theme = useTheme();

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const StyledDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader>
        {open && (
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        )}
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <Link to="/">
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary="Books" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <Link to="/artwork">
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PaletteIcon />
              </ListItemIcon>
              <ListItemText primary="Artwork" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </StyledDrawer>
  );
}
