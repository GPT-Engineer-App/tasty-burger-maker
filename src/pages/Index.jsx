import React from "react";
import { Box, Container, Heading, Text, Button, VStack, Image, Stack, Flex, Spacer } from "@chakra-ui/react";
import { FaHamburger, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="tomato" w="100%" p={4} color="white" textAlign="center">
        <Heading>Chud Burger</Heading>
      </Box>

      <Flex direction={{ base: "column-reverse", md: "row" }} align="center" p={8}>
        <VStack align="flex-start" spacing={5} w="full">
          <Heading as="h2" size="xl">
            Taste the Best Burgers in Town!
          </Heading>
          <Text fontSize="lg">At Chud Burger, we’re passionate about serving you the juiciest, most flavorful burgers. Come visit us and find your new favorite!</Text>
          <Button leftIcon={<FaHamburger />} colorScheme="red" size="lg">
            Order Now
          </Button>
        </VStack>
        <Spacer />
        <Box w={{ base: "full", md: "50%" }}>
          <Image src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXJnZXJ8ZW58MHx8fHwxNzEwMjg0NTUyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Chud Burger" />
        </Box>
      </Flex>

      <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center" justify="center" py={5}>
        <Button colorScheme="gray" variant="ghost">
          <FaInstagram />
        </Button>
        <Button colorScheme="gray" variant="ghost">
          <FaTwitter />
        </Button>
        <Button colorScheme="gray" variant="ghost">
          <FaFacebookF />
        </Button>
      </Stack>
    </Container>
  );
};

export default Index;
