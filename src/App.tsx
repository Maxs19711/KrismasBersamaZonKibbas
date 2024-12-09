import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Box,
  Grid,
  GridItem,
  List,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import PhotoHeader from "./component/photoHeader";
import Hubung from "./component/hubung";
import { Text } from "@chakra-ui/react";
import ListDesc from "./component/listDesc";
import Pemenang from "./component/pemenang";
import Infos from "./component/infos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid
      // height="520px" // Full screen height
      maxW={{
        base: "100%", // For screens smaller than 480px
        sm: "500px", // For screens between 480px and 767px
        md: "539px", // For screens between 768px and 991px
        lg: "539px",
      }}
      bg={"#fff"}
      templateColumns="1fr"
      justifyContent="center" // Centers content horizontally
      alignItems="center" // Centers content vertically
      marginX="auto" // Ensures the grid container is centered horizontally
    >
      <GridItem justifyContent="center" textAlign="center" gap={1}>
        <PhotoHeader />

        <Infos />

        <Text textAlign={"left"} marginLeft={2}>
          {" "}
          Untuk info lanjut Sila hubungi:
        </Text>

        <Hubung />

        <Text textAlign={"left"} marginLeft={2} marginTop={5}>
          {" "}
          Senarai pemenang;
        </Text>

        <Pemenang />
      </GridItem>
    </Grid>
  );
}

export default App;
