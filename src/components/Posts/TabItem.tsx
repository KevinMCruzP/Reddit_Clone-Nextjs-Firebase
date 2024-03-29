import { Flex, Icon, Text } from "@chakra-ui/react";
import { TabItem } from "./NewPostForm";

interface TabItemProps {
  item: TabItem;
  selected: boolean;
  setSelectTab: (value: string) => void;
}

export function TabItem({ item, selected, setSelectTab }: TabItemProps) {
  return (
    <Flex
      justify="center"
      align="center"
      flexGrow={1}
      p="14px 0px"
      cursor="pointer"
      fontWeight={700}
      _hover={{
        bg: "gray.50",
      }}
      color={selected ? "blue.500" : "gray.500"}
      borderWidth={selected ? "0px 1px 2px 0px" : "0px 1px 1px 0px"}
      borderBottomColor={selected ? "blue.500" : "gray.200"}
      borderRightColor={selected ? "blue.500" : "gray.200"}
      onClick={() => setSelectTab(item.title)}
    >
      <Flex align="center" height="20px" mr={2}>
        <Icon as={item.icon} />
      </Flex>
      <Text fontSize="10pt">{item.title}</Text>
    </Flex>
  );
}
