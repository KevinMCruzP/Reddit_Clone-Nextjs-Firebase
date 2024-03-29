import useDirectory from "@/src/hooks/useDirectory";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Communities from "./Communities";

export default function Directory() {
  const { directoryState, toggleMenuOpen } = useDirectory();

  return (
    <Flex>
      <Menu isOpen={directoryState.isOpen}>
        <MenuButton
          cursor="pointer"
          padding="0px 6px"
          borderRadius={4}
          mr={2}
          ml={{ base: 0, md: 2 }}
          _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
          onClick={toggleMenuOpen}
        >
          <Flex
            align="center"
            justify="space-between"
            width={{ base: "auto", lg: "200px" }}
          >
            <Flex align="center">
              {directoryState.selectedMenuItem.imageUrl ? (
                <Image
                  src={directoryState.selectedMenuItem.imageUrl}
                  borderRadius="full"
                  boxSize="24px"
                  mr={2}
                  alt="Menu image"
                />
              ) : (
                <Icon
                  as={directoryState.selectedMenuItem.icon}
                  color={directoryState.selectedMenuItem.iconColor}
                  mr={{ base: 1, md: 2 }}
                  fontSize={24}
                />
              )}
              <Flex display={{ base: "none", lg: "flex" }}>
                <Text fontWeight={600} fontSize="10pt">
                  {directoryState.selectedMenuItem.displayText}
                </Text>
              </Flex>
            </Flex>
            <ChevronDownIcon />
          </Flex>
        </MenuButton>
        <MenuList>
          <Communities />
        </MenuList>
      </Menu>
    </Flex>
  );
}
