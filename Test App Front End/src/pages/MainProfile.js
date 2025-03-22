import { Flex, Image, Grid, Input, Text, Textarea, Button } from "@chakra-ui/react";

export default function MainProfile() {
  return (
    <Flex direction={["column", "row"]} w="100%" h="100vh">
    {/* Left Half */}
    <Flex
      direction="column"
      align="center"
      justify="center"
      w={["100%", "50%"]}
      p={8}
    >
      <Image
        src="https://bit.ly/dan-abramov"
        boxSize="100px"
        borderRadius="full"
        alt="Naruto Uzumaki"
        mb={6}
      />
      <Grid templateColumns="repeat(2, 1fr)" gap={4}   width="100%" m={6}>
  <Input placeholder="First Name" variant="subtle" p={5} size="xl" fontSize="14px" h="40px" />
  <Input placeholder="Second Name" variant="subtle" p={5} size="xl" fontSize="14px" h="40px"  />
  <Input placeholder="First Major" variant="subtle" p={5} size="xl" fontSize="14px" h="40px"  />
  <Input placeholder="Second Major" variant="subtle" p={5} size="xl" fontSize="14px" h="40px"  />
</Grid>
      <Textarea placeholder="Description" p={5} size="xl" m={6} w="100%" h="20%" fontSize="14px" variant="subtle" />
      <Flex justify="flex-end" w="100%" m={6}>
  <Button  fontSize="16px" px="14px" py="18px">Edit</Button>
</Flex>
    </Flex>
  
    {/* Right Half */}
    <Flex
      direction="column"
      bg="blue.100" // a lighter blue for a balanced look
      align="center"
      justify="center"
      w={["100%", "50%"]}
      p={8}
    >
      {/* Add your desired content for the right side */}
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Welcome 
      </Text>
      <Text textAlign="center">
        More Content
      </Text>
    </Flex>
  </Flex>
  );
}
