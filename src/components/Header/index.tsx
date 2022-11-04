import { Heading, HStack, IconButton } from "native-base";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
export const Header = () => {
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
        size={"xs"}
        icon={<FontAwesome name="gear" size={20} color={"gray.900"} />}
      />
    </HStack>
  );
};
