import { Box, Center, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const Hubung = () => {
  // Sample data (can be passed as props or fetched dynamically)
  const items = [
    { id: 1, nama: "-", noHp: "-", kgChpl: "-" },
    { id: 2, nama: "-", noHp: "-", kgChpl: "-" },
    { id: 2, nama: "-", noHp: "-", kgChpl: "-" },
    { id: 2, nama: "-", noHp: "-", kgChpl: "-" },
    { id: 2, nama: "-", noHp: "-", kgChpl: "-" },
  ];

  return (
    <Box
      color="black"
      width={{ base: "90%", sm: "90%", md: "500px", lg: "500px" }}
      marginTop="10px"
      borderWidth="1px"
      borderColor="black"
      bg={"white"}
      marginLeft={4}
    >
      <Table size="sm" variant="simple" fontSize={20} colorScheme="red">
        {/* Table Header */}
        <Thead>
          <Tr>
            <Th color="black">Nama</Th>
            <Th color="black">No. HP</Th>
            <Th color="black" textAlign="end">
              Kampung / Chapel
            </Th>
          </Tr>
        </Thead>

        {/* Table Body */}
        <Tbody>
          {items.map((item) => (
            <Tr key={item.id}>
              <Td>{item.nama}</Td>
              <Td>{item.noHp}</Td>
              <Td textAlign="end">{item.kgChpl}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Hubung;
