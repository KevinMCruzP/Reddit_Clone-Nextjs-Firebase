import { authModalState } from "@/src/atoms/authModalAtom";
import { auth } from "@/src/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/src/firebase/errors";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

export default function SignUp() {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [SignUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  //Firebase logic
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) {
      setError("");
    }

    if (SignUpForm.password !== SignUpForm.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(SignUpForm.email, SignUpForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
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
      {(error || userError) && (
        <Text textAlign="center" color="red" fontSize="10pt">
          {error ||
            FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}

      <Button
        type="submit"
        width="100%"
        height="36px"
        mb={2}
        mt={2}
        isLoading={loading}
      >
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
