import { Box } from "@chakra-ui/react";
import React from "react";

const listDesc = () => {
  return (
    <Box as="ul" listStylePosition="inside" textAlign={"left"} margin={3}>
      <li>
        Cabutan akan dilakukan pada 26.12.2024 bermula pada jam 2.00pm hingga
        selesai
      </li>
      <li>Semua pemenang akan dipaparkan melalui link ini</li>
      <li>Tuntutan hadiah adalah dalam tempoh 30 hari</li>
    </Box>
  );
};

export default listDesc;
