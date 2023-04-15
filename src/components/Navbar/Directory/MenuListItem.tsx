import { Flex, Icon, Image, MenuItem } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface MenuListItemProps {
  displayText: string;
  link: string;
  icon: IconType;
  iconColor: string;
  imageUrl?: string;
}

function MenuListItem({
  displayText,
  link,
  icon,
  iconColor,
  imageUrl,
}: MenuListItemProps) {
  return (
    <MenuItem
      width="100%"
      fontSize="10pt"
      _hover={{ bg: "gray.100" }}
      onClick={() => {}}
    >
      <Flex align="center">
        {imageUrl ? (
          <Image
            src={imageUrl}
            borderRadius="full"
            boxSize="18px"
            mr={2}
            alt="Image menu list"
          />
        ) : (
          <Icon as={icon} fontSize={20} mr={2} color={iconColor} />
        )}
        {displayText}
      </Flex>
    </MenuItem>
  );
}

export default MenuListItem;