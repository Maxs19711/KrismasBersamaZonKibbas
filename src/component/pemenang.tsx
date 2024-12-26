import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const items = [
  { id: 1, noTiket: 7066, nama: "Artison", noHp: "0142823292" },
  { id: 2, noTiket: 10859, nama: "Eva", noHp: "-" },
  { id: 3, noTiket: 7884, nama: "Jacee Leona L", noHp: "0107292028" },
  { id: 4, noTiket: 7834, nama: "Vean Vilarie", noHp: "0138841141" },
  { id: 5, noTiket: 5761, nama: "Vanda Steven", noHp: "01126462089" },
  { id: 6, noTiket: 5882, nama: "Lasius", noHp: "0196442889" },
  { id: 7, noTiket: 9599, nama: "Debbie", noHp: "01131631513" },
  { id: 8, noTiket: 11402, nama: "Felicia BD", noHp: "0109584660" },
  { id: 9, noTiket: 7487, nama: "Jean J", noHp: "0148685137" },
  { id: 10, noTiket: 1581, nama: "Jeewe O", noHp: "0178640264" },
  { id: 11, noTiket: 5840, nama: "Rian", noHp: "0178154757" },
  { id: 12, noTiket: 10055, nama: "Cay Motor", noHp: "0168156812" },
  { id: 13, noTiket: 7352, nama: "Davon Chavez Daud", noHp: "0149506906" },
  { id: 14, noTiket: "0020", nama: "Ondry", noHp: "-" },

  { id: 15, noTiket: 4405, nama: "Lucy Danim", noHp: "01118950498" },
  { id: 16, noTiket: 12498, nama: "Jackly Ambrose", noHp: "0109309570" },
  { id: 17, noTiket: 3831, nama: "Kusijih", noHp: "0102108747" },
  { id: 18, noTiket: 6767, nama: "Yura", noHp: "0145773822" },
  { id: 19, noTiket: 5763, nama: "Vanda Stephen", noHp: "01126462089" },
  { id: 20, noTiket: 10398, nama: "Felix Paul", noHp: "-" },
  { id: 21, noTiket: 9383, nama: "Jana", noHp: "016823830" },
  {
    id: 22,
    noTiket: 5758,
    nama: "Ellyeana S. (Lala Sugau)",
    noHp: "01125216702",
  },
  { id: 23, noTiket: 8638, nama: "Jackly Ambrose", noHp: "0109309570" },
  { id: 24, noTiket: 5292, nama: "Carol P.", noHp: "0109575291" },
  { id: 25, noTiket: 9409, nama: "Valerie", noHp: "0135449593" },
  { id: 26, noTiket: 10118, nama: "Jidah Y", noHp: "0147891926" },
  { id: 27, noTiket: 3704, nama: "Paul", noHp: "0139582887" },
  { id: 28, noTiket: "0986", nama: "Tiada Maklumat", noHp: "-" },
  { id: 29, noTiket: "3657, 3654", nama: "Ajilie Lubin", noHp: "01162629226" },
  { id: 30, noTiket: 13246, nama: "Marinus D.", noHp: "-" },
  { id: 31, noTiket: 9187, nama: "Jason", noHp: "01151636838" },
  {
    id: 32,
    noTiket: 5751,
    nama: "Ellyeana S (Lala Sugau)",
    noHp: "01125216702",
  },
  { id: 33, noTiket: 5935, nama: "Wendy K", noHp: "01125201988" },
  { id: 34, noTiket: 7871, nama: "Jackson Jimi", noHp: "0168128207" },
  { id: 35, noTiket: 7051, nama: "Walter M", noHp: "0193318845" },
  { id: 36, noTiket: 3857, nama: "Cay Motor Service", noHp: "0168156812" },
  { id: 37, noTiket: 9036, nama: "Jane F. Namin", noHp: "0128133013" },
  { id: 38, noTiket: 11584, nama: "Tobias Thomas", noHp: "-" },
  { id: 39, noTiket: 5736, nama: "Baxter Jorius", noHp: "0133733371" },
  { id: 40, noTiket: 1400, nama: "Nasta Ptr", noHp: "01129510602" },
  { id: 41, noTiket: 9460, nama: "Mesianah", noHp: "0164695001" },
  { id: 42, noTiket: 6764, nama: "Yura", noHp: "0145773822" },
  { id: 43, noTiket: 7994, nama: "Janetta", noHp: "0168054308" },
  { id: 44, noTiket: 8639, nama: "Jackly Ambrose", noHp: "0109309570" },
  { id: 45, noTiket: 11262, nama: "Chris Victor", noHp: "-" },
  { id: 46, noTiket: 3420, nama: "Paul", noHp: "0139582887" },
  { id: 47, noTiket: 11277, nama: "Chris Victor", noHp: "-" },
  { id: 48, noTiket: "13398", nama: "Lydia B", noHp: "0178156660" },
  { id: 49, noTiket: "3483", nama: "Elzahra/Jannet", noHp: "-" },
  { id: 50, noTiket: "13615", nama: "Rudolf", noHp: "-" },
  { id: 51, noTiket: "7906", nama: "A. John L.", noHp: "-" },
  { id: 52, noTiket: "13209", nama: "Marinus D.", noHp: "-" },
  { id: 53, noTiket: "3195", nama: "Siwo", noHp: "0128372689" },
  { id: 54, noTiket: 1261, nama: "Juhiseh", noHp: "0132937914" },
  { id: 55, noTiket: 9030, nama: "Juan Tristan", noHp: "-" },
  { id: 56, noTiket: 6562, nama: "Jessica Karaki", noHp: "01125200938" },
  { id: 57, noTiket: 4036, nama: "Jiovanna Jios", noHp: "0195883593" },
  { id: 58, noTiket: 12514, nama: "Olivia K", noHp: "0149844159" },
  { id: 59, noTiket: 6337, nama: "Memey John", noHp: "01175346232" },
  { id: 60, noTiket: 8011, nama: "Anna J", noHp: "01126857485" },
  { id: 61, noTiket: 8915, nama: "Saunah B", noHp: "-" },
  { id: 62, noTiket: 14027, nama: "Lyea", noHp: "-" },
  { id: 63, noTiket: 5152, nama: "Juatah Peter", noHp: "0138675414" },
  { id: 64, noTiket: 14222, nama: "DD", noHp: "016355929" },
  { id: 65, noTiket: 7375, nama: "Alvin Suali", noHp: "0165867666" },
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
