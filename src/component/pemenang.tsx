import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const items = [
  { id: 1, noTiket: "-", nama: "-", noHp: "-" },
  { id: 1, noTiket: "-", nama: "-", noHp: "-" },
  { id: 1, noTiket: "-", nama: "-", noHp: "-" },
  { id: 1, noTiket: "-", nama: "-", noHp: "-" },
  { id: 1, noTiket: "-", nama: "-", noHp: "-" },
];

const pemenang = () => {
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
            <Th color="black">Nombor Tiket</Th>
            <Th color="black">Nama Pemenang</Th>
            <Th color="black" textAlign="end">
              No.Hp
            </Th>
          </Tr>
        </Thead>

        {/* Table Body */}
        <Tbody>
          {items.map((item) => (
            <Tr key={item.id}>
              <Td>{item.noTiket}</Td>
              <Td>{item.nama}</Td>
              <Td textAlign="end">{item.noHp}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default pemenang;
