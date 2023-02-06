import { Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  return (
    <form>
      <Input
        type="email"
        name="email"
        mb={2}
        placeholder="Email"
        onChange={() => {}}
      />
      <Input type="password" />
    </form>
  );
}
