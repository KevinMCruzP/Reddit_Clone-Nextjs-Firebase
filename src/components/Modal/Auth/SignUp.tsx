import { authModalState } from "@/src/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

export default function SignUp() {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  //Firebase logic
  const onSubmit = () => {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        mb={2}
        onChange={onChange}
        fontSize="10px"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid blue.500",
        }}
        bg="gray.50"
        required
      />
      <Input
        type="password"
        placeholder="password"
        name="password"
        onChange={onChange}
        mb={2}
        fontSize="10px"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid blue.500",
        }}
        bg="gray.50"
        required
      />
      <Input
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        onChange={onChange}
        mb={2}
        fontSize="10px"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid blue.500",
        }}
        bg="gray.50"
        required
      />

      <Button type="submit" width="100%" height="36px" mb={2} mt={2}>
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "login" }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
}
