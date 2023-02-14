import { auth } from "@/src/firebase/clientApp";
import { Flex, Image } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

export default function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" alt="reddit face" height="30px" />
        <Image
          src="/images/redditText.svg"
          alt="reddit text"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>

      {/* <Directory /> */}
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
}
