import { Heading, HStack, IconButton } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useRepositories } from "../../context/repositoriesContext";

export const Header = () => {
  const { openActionSheet } = useRepositories();
  return (
    <HStack
      w={"100%"}
      bg={"white"}
      safeAreaTop
      justifyContent={"space-between"}
      padding={"12px 16px"}
    >
      <Heading
        fontFamily={"body"}
        fontWeight={"500"}
        color={"gray.900"}
        fontSize={"20px"}
      >
        WeFit
      </Heading>
      <IconButton
        onPress={openActionSheet}
        size={"xs"}
        icon={<FontAwesome name="gear" size={20} color={"gray.900"} />}
      />
    </HStack>
  );
};
