import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  const gridLayout = {
    base: `"header"
    "main"`,
    lg: `"header header"
    "nav main"`,
  };

  return (
    <Grid templateAreas={gridLayout} color="blackAlpha.700" paddingX={15}>
      <GridItem area={"header"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"nav"}>
          Nav
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
