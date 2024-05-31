import { Box, Container, Flex, Heading, SimpleGrid, Stat, StatLabel, StatNumber, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="blue.600"
        color="white"
      >
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Business Dashboard
        </Heading>
      </Flex>

      {/* Main Section */}
      <Container maxW="container.xl" py="12">
        <Heading as="h2" size="lg" mb="6">
          Key Metrics
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          <Stat>
            <StatLabel>Sales</StatLabel>
            <StatNumber>$10,000</StatNumber>
            <Text>Feb 2023</Text>
          </Stat>

          <Stat>
            <StatLabel>Revenue</StatLabel>
            <StatNumber>$15,000</StatNumber>
            <Text>Feb 2023</Text>
          </Stat>

          <Stat>
            <StatLabel>Customer Count</StatLabel>
            <StatNumber>500</StatNumber>
            <Text>Feb 2023</Text>
          </Stat>

          <Stat>
            <StatLabel>Average Order Value</StatLabel>
            <StatNumber>$30</StatNumber>
            <Text>Feb 2023</Text>
          </Stat>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;