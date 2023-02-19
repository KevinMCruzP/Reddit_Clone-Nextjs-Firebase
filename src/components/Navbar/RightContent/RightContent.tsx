import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";

type RightContentProps = {
  user?: User | null;
};

export default function RightContent({ user }: RightContentProps) {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        {/* <Menu /> */}
      </Flex>
    </>
  );
}
