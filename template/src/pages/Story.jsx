import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
import HTMLFlipBook from "react-pageflip";
import { Button, Container, Box } from "@mui/material";
import Image from "mui-image";

const seaDragonStory = {
  pages: [
    {
      text: `Vincent walks on the beach
        His feet are wet from the sand
        Mum and Dad lift him up over the waves
        “Any higher and you will launch out of orbit” says Dad
        “Maybe Vincent could feed hungry aliens in space” says Mum
        Vincent wants to be a chef just like Grandpa.`,
    },
    {
      text: `Today Vincent has met a new friend called Edward
        Edward promised to help Vincent find fish for his soup.
        They climb up the stairs
        They hop across the rocks
        They splash in pools`,
    },
    {
      text: `Vincent sees so many colourful fish
        He dips his hand into the water
        The fish scuttle away
        “We will never catch one”, Vincent says sadly.
        He throws his bucket away
        “That was my bucket!” says Edward Angrily.
        “I’m sorry, I didn’t mean to…”`,
    },
    {
      text: `“I want my bucket, go and get it back!”
        The bucket lands on the water
        Vincent looks back up at the bucket
        it bobs up and down on the water.`,
    },
    {
      text: `He has an idea
        He climbs into the bucket
        Edward pushes the bucket further out into the water
        “Ed, what are you doing?” Vincent asks
        “You will be okay, trust me”
        Vincent looks worried.
        using his spade as a paddle
        He puts up his towel as a sail
        and sails across the water.`,
    },
    {
      text: `The water is deep and wild, it tosses and turns the wrong way around.
        “Oh no, the bucket!” cries Vincent
        The fish that got away, now watch him sink down into the cold water.
        Vincent wishes he was safe with Mum and Dad again`,
    },
    {
      text: `Out of the deep, a shadow lurked
        It swirled up around the boy, who had all but given up
        A strange blue creature pulled him down to the bottom of the sea…`,
    },
    {
      text: `Vincent wakes up in a mysterious garden
        He sees flowers of colours never seen before
        Dragonflies zoom around, chasing butterflies`,
    },
    {
      text: `A blue creature peers at him from behind the flowers
        It looks scared of the boy
        “Don’t worry, I wont hurt you”
        Vincent reaches out his hand too quickly
        The small creature runs away and hides`,
    },
    {
      text: `Vincent sadly turns away
        “Where on Earth am I?”
        Vincent’s tummy rumbles
        He is so hungry he would even eat almonds!`,
    },
    {
      text: `Vincent begins collecting plants and bugs
        He starts a small fire like his grandpa taught him
        And using a tin of tuna he brought with him, he starts to cook
        “These strange flowers make the stew too sweet”
        Vincent puts in a handful of Bugs
        “These bugs make the stew too slimy”
        He grinds up some seeds and tips them into the tin
        “There!”`,
    },
    {
      text: `The strange creature, who could smell the stew, came out from its hiding place
        “Oh, are you hungry?” Vincent asks
        He offers the stew, served from his spade
        “Are you a dragon?”
        The creature tastes the stew and purrs
        “Haha, you seem to like it”
        The two sat and ate all of the delicious stew together.`,
    },
  ],
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Story() {
  const book = useRef();

  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="h-full p-4 border-2 border-gray-100" ref={ref}>
        <Box sx={{ m: 2 }}>
          <p>{props.children}</p>
        </Box>
      </div>
    );
  });

  const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        {props.children}
      </div>
    );
  });

  return (
    <div className="w-full my-12">
      <DrawerHeader></DrawerHeader>
      <Container>
        <Box sx={{ bgcolor: "primary.main", px: 4, py: 1 }}>
          <Box sx={{ boxShadow: 3 }} bgcolor="#ffffff">
            <HTMLFlipBook
              width={1000}
              height={1200}
              size="stretch"
              drawShadow
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1200}
              maxShadowOpacity={0.1}
              showCover={true}
              mobileScrollSupport={true}
              className="demo-book"
              ref={book}
            >
              <PageCover>
                <Image src="/VincentAndTheSeaDragonCover.png" />
              </PageCover>
              {seaDragonStory.pages.map((page, index) => (
                <Page key={index} number={index}>
                  {page.text}
                </Page>
              ))}
            </HTMLFlipBook>
          </Box>
        </Box>
        <div className="flex justify-between p-4">
          <Button onClick={() => book.current.pageFlip().turnToPrevPage()}>
            Previous page
          </Button>
          <Button onClick={() => book.current.pageFlip().turnToNextPage()}>
            Next page
          </Button>
        </div>
      </Container>
    </div>
  );
}
