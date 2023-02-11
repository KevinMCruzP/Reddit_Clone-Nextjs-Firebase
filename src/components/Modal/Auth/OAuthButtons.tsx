import { Button, Flex, Image } from "@chakra-ui/react";

export default function OAuthButtons() {
  return (
    <Flex direction="column" w="100%" mb={4}>
      <Button variant="oauth" mb={2}>
        <Image src="/images/googlelogo.png" alt="Google logo" h="20px" mr={4} />
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Provider</Button>
    </Flex>
  );
}