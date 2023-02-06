import { authModalState } from "@/src/atoms/authModalAtom";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";

export default function AuthModal() {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState((prev) => ({ ...prev, open: false }));
  };

  return (
    <Modal isOpen={modalState.open} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {modalState.view === "login" && "Log in"}
          {modalState.view === "signup" && "Sign up"}
          {modalState.view === "resetPassword" && "Reset password"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            w="70"
            border="1px solid red"
          >
            {/* <OAuthButtons /> */}
            <AuthInputs />
            {/* <ResetPassword /> */}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
