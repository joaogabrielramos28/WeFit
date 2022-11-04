import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Header } from "./components/Header";
import { Entypo, Octicons, Ionicons } from "@expo/vector-icons";
export const Repository = () => {
  return (
    <Box flex={1} bg={"gray.400"}>
      <Header />

      <VStack flex={1} justifyContent={"space-between"}>
        <VStack bg={"white"} padding={"16px"} space={"16px"}>
          <Heading fontFamily={"heading"} fontWeight={"700"} fontSize={"20px"}>
            appswefit/create-react-app
          </Heading>
          <Text
            fontFamily={"heading"}
            fontWeight={"400"}
            fontSize={"16px"}
            color={"gray.500"}
          >
            Yarn Workspaces Monorepo support for Create-React-App /
            React-Scripts.
          </Text>
          <Text
            fontFamily={"heading"}
            fontWeight={"400"}
            fontSize={"16px"}
            color={"gray.500"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta
            magna sit amet ante faucibus sodales. Ut tempor massa risus, vel
            consectetur diam efficitur in. Suspendisse ut enim augue. Donec
            ullamcorper odio in tellus feugiat venenatis. Phasellus eleifend
            nisl neque, a pulvinar nisl mattis ac. Phasellus vitae velit eu dui
            tempus ullamcorper eget ut metus. Proin vestibulum sodales justo,
            vitae iaculis ipsum volutpat a. Nam vel leo vitae leo volutpat
            varius.
          </Text>
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
        </VStack>

        <VStack padding={"16px"} space={"8px"} bg={"white"}>
          <Button
            variant={"ghost"}
            endIcon={
              <Icon
                as={Ionicons}
                name={"link-outline"}
                size={"24px"}
                color={"blue.500"}
              />
            }
            _text={{
              color: "blue.500",
              textTransform: "uppercase",
              fontFamily: "body",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Ver repositório
          </Button>
          <Button
            bg={"yellow.500"}
            endIcon={
              <Icon
                as={Entypo}
                name={"star"}
                size={"24px"}
                color={"gray.900"}
              />
            }
            _text={{
              color: "gray.900",
              textTransform: "uppercase",
              fontFamily: "body",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            favoritar
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};
