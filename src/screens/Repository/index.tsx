import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Header } from "./components/Header";
import { Entypo, Octicons, Ionicons } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import { RepositoryNavigateParams } from "../../@types/navigation";

export const Repository = () => {
  const { params } = useRoute();

  const { full_name, description, html_url, language } =
    params as RepositoryNavigateParams;

  return (
    <Box flex={1} bg={"gray.400"}>
      <Header />

      <VStack flex={1} justifyContent={"space-between"}>
        <VStack bg={"white"} padding={"16px"} space={"16px"}>
          <Heading fontFamily={"heading"} fontWeight={"700"} fontSize={"20px"}>
            {full_name}
          </Heading>
          <Text
            fontFamily={"heading"}
            fontWeight={"400"}
            fontSize={"16px"}
            color={"gray.500"}
          >
            {description}
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
              {language}
            </Text>
          </HStack>
        </VStack>

        <VStack padding={"16px"} space={"8px"} bg={"white"}>
          <Link
            justifyContent={"center"}
            alignItems={"center"}
            href={html_url}
            _text={{
              color: "blue.500",
              textTransform: "uppercase",
              fontFamily: "body",
              fontWeight: 500,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Ver repositório{" "}
            <Icon
              as={Ionicons}
              name={"link-outline"}
              size={"24px"}
              color={"blue.500"}
            />
          </Link>
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
