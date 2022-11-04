import { Heading, HStack, Icon, IconButton } from "native-base";
import React from "react";
import { Ionicons, Octicons, Entypo } from "@expo/vector-icons";
export const Header = () => {
  return (
    <HStack
      space={"8px"}
      bg={"gray.900"}
      w={"100%"}
      safeAreaTop
      alignItems={"center"}
      paddingY={"12px"}
      paddingX={"16px"}
    >
      <IconButton
        size={"xs"}
        icon={
          <Icon as={Ionicons} name={"arrow-back"} size={6} color={"white"} />
        }
      />
      <Heading
        fontFamily={"body"}
        fontWeight={"500"}
        fontSize={"20px"}
        color={"white"}
      >
        Detalhes
      </Heading>
    </HStack>
  );
};
