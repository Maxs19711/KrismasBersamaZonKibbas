import {
  Box,
  ListItem,
  OrderedList,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";

const infos = () => {
  return (
    <Box
      width={{ base: "90%", sm: "90%", md: "500px", lg: "500px" }}
      marginLeft={3}
      marginTop={31}
    >
      <Text textAlign={"left"} marginLeft={2}>
        {" "}
        SENARAI HADIAH:
      </Text>
      <UnorderedList textAlign="left" styleType="'-'" spacing={3}>
        <ListItem>
          Satu unit peti sejuk @Sharp Dua pintu bernilai RM1400.00
        </ListItem>
        <ListItem>satu unit freezer @ Media bernilai RM700.00</ListItem>
        <ListItem>
          satu unit mesin pencuci kereta @ IRE 90 BAR, 1400W bernilai RM500.00
        </ListItem>
        <ListItem>
          Dua unit grass cutter @ Tannaka bernilai RM280 seunit
        </ListItem>
        <ListItem>
          Dua unit Sprayer elektrik @ Sprinter Alfarre twin power bernilai RM280
          seunit
        </ListItem>
        <ListItem>
          Dua unit Stand Fan @ Khind 130 Watt bernilai RM140.00 seunit
        </ListItem>
        <ListItem>
          Dua unit rice cooker 2.8L @ Jeban bernilai RM120.00 seunit
        </ListItem>
        <ListItem>
          Dua unit racun rumput @ 20liter bernilai RM150 seunit
        </ListItem>
        <ListItem>Satu unit Hand Mixer @ DEKKA bernilai RM50.00</ListItem>
        <ListItem>
          pelbagai peralatan dan bahan pertanian serta barang keperluan harian
          bernilai melebihi RM100.00 / dibawah RM100.00
        </ListItem>
      </UnorderedList>
      <br />

      <Text textAlign={"left"}> INFO:</Text>
      <OrderedList textAlign="left" spacing={3} marginLeft={4}>
        <ListItem>Harga sekeping tiket adalah RM2.00 Sahaja</ListItem>
        <ListItem>
          Tiket akan mula dijual pada 9.12.2024 melalui wakil disetiap chapel
          Zon Kibbas atau melalui wakil2 jualan yang telah dilantik oleh
          Jawatankuasa
        </ListItem>
        <ListItem>
          Cabutan tiket dan keputusan cabutan akan dijalankan/di umumkan pada
          26.12.2024. Keputusan akan diumumkan juga melalui link yang disediakan
          (Sila rujuk link pada kepingan tiket yang anda beli)
        </ListItem>
        <ListItem>
          Pemenang cabutan yg tidak sempat hadir pada majlis bertarikh
          26.12.2024 boleh menuntut hadiah daripada Jawatankuasa dalam TEMPOH
          SATU BULAN dari tarikh majlis berkenaan
        </ListItem>
      </OrderedList>
      <br />
    </Box>
  );
};

export default infos;
