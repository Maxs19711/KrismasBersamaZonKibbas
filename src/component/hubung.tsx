import {
  Box,
  Button,
  Center,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";

const Hubung = () => {
  const toast = useToast();
  // Sample data (can be passed as props or fetched dynamically)
  const items = [
    {
      id: 1,
      nama: "Elizabeth Thomas",
      noHp: "0128157285",
      kgChpl: "St John of The Cross",
    },
    {
      id: 2,
      nama: "Paul Gambisir",
      noHp: "0195326185",
      kgChpl: "St John of The Cross",
    },
    { id: 2, nama: "Walter Sunggin", noHp: "0148597878", kgChpl: "-" },
    {
      id: 2,
      nama: "Lydia Bidi",
      noHp: "0178156660",
      kgChpl: "St John of The Cross",
    },
  ];

  const handleCopy = (number: string) => {
    navigator.clipboard.writeText(number).then(() => {
      toast({
        // title: `Number ${number} copied to clipboard!`, // Dynamic number in title
        description: `Copied: ${number}`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    });
  };

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
            <Th color="black"></Th>
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
              <Td>{item.noHp} </Td>
              <Td>
                <Button
                  colorScheme="orange"
                  onClick={() => handleCopy(item.noHp)}
                  h={"35px"}
                  bg={"#ffc3a7"}
                  fontSize={12}
                >
                  Copy
                </Button>
              </Td>
              <Td textAlign="end">{item.kgChpl}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Hubung;
