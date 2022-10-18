import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia, CardHeader } from "@mui/material";
import { useNavigate } from "react-router-dom";

const itemData = [
  {
    id: "vincent-and-the-sea-dragon",
    img: "./VincentAndTheSeaDragonCover.png",
    title: "Vincent and the Sea Dragon",
    description:
      "Vincent gets pushed out to sea by his so-called friend and becomes tangled in the mystery of the sea dragons.",
  },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Stories() {
  const navigate = useNavigate();
  const navToBook = (bookId) => {
    navigate(`/book/${bookId}`);
  };
  return (
    <div className="flex flex-col w-full">
      <DrawerHeader />
      <div className="container">
        <Typography
          variant="h5"
          sx={{ p: 1 }}
          style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
        >
          Stories
        </Typography>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 0 }}
          style={{ marginLeft: "-2rem", marginRight: "-2rem" }}
        >
          <ImageList sx={{ width: "100%" }} cols={3}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <Card
                  className="m-2 cursor-pointer"
                  onClick={() => navToBook(item.id)}
                  sx={{ boxShadow: 3, m: 1, cursor: "pointer" }}
                >
                  <CardHeader
                    title="Vincent and the Sea Dragons"
                    subheader="by Matt Martin"
                  ></CardHeader>
                  <CardMedia component="img" image={item.img} alt={item.alt} />
                  <CardContent>
                    <Typography variant="body2" className="pt-2">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}
