import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { Header } from "./components/Header";
import { Entypo, Octicons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useRoute } from "@react-navigation/native";
import { RepositoryNavigateParams } from "../../@types/navigation";
import { useRepositories } from "../../context/repositoriesContext";

export const Repository = () => {
  const { favoritesRepos, removeRepoFromFavorite, addRepoToFavorite } =
    useRepositories();
  const { params } = useRoute();
  const { navigate } = useNavigation();

  const {
    full_name,
    description,
    html_url,
    language,
    id,
    owner,
    stargazers_count,
  } = params as RepositoryNavigateParams;

  const repo = {
    full_name,
    description,
    html_url,
    language,
    id,
    owner,
    stargazers_count,
  };

  const isFavorite =
    favoritesRepos.length > 0
      ? favoritesRepos.some((item) => item.full_name === full_name)
      : false;

  const handleRemoveRepoFromFavorites = () => {
    removeRepoFromFavorite(repo);
    navigate("FavoritesRepositories");
  };

  const handleAddRepoToFavorites = () => {
    addRepoToFavorite(repo);
    navigate("FavoritesRepositories");
  };

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
          {isFavorite ? (
            <Button
              onPress={handleRemoveRepoFromFavorites}
              variant={"outline"}
              borderWidth={"2px"}
              borderColor={"gray.900"}
              endIcon={
                <Icon
                  as={Entypo}
                  name={"star-outlined"}
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
              desfavoritar
            </Button>
          ) : (
            <Button
              onPress={handleAddRepoToFavorites}
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
          )}
        </VStack>
      </VStack>
    </Box>
  );
};
