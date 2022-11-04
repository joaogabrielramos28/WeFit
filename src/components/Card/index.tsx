import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "native-base";
import { Entypo, Octicons } from "@expo/vector-icons";

export const Card = () => {
  return (
    <Box
      bg={"white"}
      borderRadius={"4px"}
      padding={"12px 16px"}
      marginTop={"16px"}
      shadow={"4"}
    >
      <HStack
        paddingY={"19px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text
          fontSize={"14px"}
          fontFamily={"heading"}
          fontWeight={"700"}
          color={"gray.700"}
        >
          appswefit/create-react-app
        </Text>
        <Avatar>Nome</Avatar>
      </HStack>

      <Divider height={"2px"} bg={"gray.300"} />

      <VStack marginTop={"16px"} space={"16px"}>
        <Text
          fontFamily={"heading"}
          fontWeight={"400"}
          color={"gray.500"}
          fontSize={"12px"}
        >
          Yarn Workspaces Monorepo support for Create-React-App / React-Scripts.
        </Text>

        <HStack justifyContent={"space-between"}>
          <Button
            bg={"yellow.300"}
            _text={{
              color: "yellow.500",
              fontFamily: "heading",
              fontWeight: "700",
            }}
            padding={"10px"}
            startIcon={
              <Icon as={Entypo} name="star" size={18} color={"yellow.500"} />
            }
          >
            Favoritar
          </Button>

          <HStack alignItems={"center"} space={"8px"}>
            <Icon as={Entypo} name="star" size={18} color={"yellow.500"} />
            <Text
              fontFamily={"heading"}
              fontWeight={"400"}
              fontSize={"12px"}
              color={"gray.500"}
            >
              9
            </Text>
          </HStack>
          <HStack alignItems={"center"}>
            <Icon as={Octicons} name="dot-fill" size={18} color={"red.500"} />
            <Text
              fontFamily={"heading"}
              fontWeight={"400"}
              fontSize={"12px"}
              color={"gray.500"}
            >
              Typescript
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};
