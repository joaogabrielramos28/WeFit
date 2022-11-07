import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { Entypo, Octicons } from "@expo/vector-icons";
import { IRepos } from "../../Dtos/repos";

import { useNavigation } from "@react-navigation/native";
import { useRepositories } from "../../context/repositoriesContext";

export const Card = ({
  full_name,
  description,
  html_url,
  id,
  language,
  owner,
  stargazers_count,
}: IRepos) => {
  const { addRepoToFavorite, favoritesRepos, removeRepoFromFavorite } =
    useRepositories();
  const { navigate } = useNavigation();

  const repo = {
    full_name,
    description,
    html_url,
    id,
    language,
    owner,
    stargazers_count,
  };

  const isFavorite =
    favoritesRepos.length > 0
      ? favoritesRepos.some((item) => item.full_name === full_name)
      : false;

  const handleAddRepoToFavorite = () => {
    addRepoToFavorite(repo);
    navigate("FavoritesRepositories");
  };
  const handleRemoveRepoFromFavorite = () => {
    removeRepoFromFavorite(repo);
    navigate("FavoritesRepositories");
  };

  const handleGoToRepoDetailsScreen = () => {
    navigate("Repository", { ...repo });
  };

  const [userName, repoName] = full_name.split("/");

  return (
    <Pressable
      onPress={handleGoToRepoDetailsScreen}
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
        <HStack>
          <Text
            fontSize={"14px"}
            fontFamily={"heading"}
            fontWeight={"400"}
            color={"gray.700"}
          >
            {userName}/
          </Text>
          <Text
            fontSize={"14px"}
            fontFamily={"heading"}
            fontWeight={"700"}
            color={"gray.700"}
          >
            {repoName}
          </Text>
        </HStack>

        <Avatar size={"sm"} source={{ uri: owner.avatar_url }}></Avatar>
      </HStack>

      <Divider height={"2px"} bg={"gray.300"} />

      <VStack marginTop={"16px"} space={"16px"}>
        <Text
          fontFamily={"heading"}
          fontWeight={"400"}
          color={"gray.500"}
          fontSize={"12px"}
        >
          {description}
        </Text>

        <HStack justifyContent={"space-between"}>
          {isFavorite ? (
            <Button
              _pressed={{
                bg: "yellow.300",
                opacity: 0.6,
              }}
              onPress={handleRemoveRepoFromFavorite}
              bg={"yellow.300"}
              _text={{
                color: "yellow.500",
                fontFamily: "heading",
                fontWeight: "700",
              }}
              padding={"10px"}
              startIcon={
                <Icon
                  as={Entypo}
                  name="star-outlined"
                  size={18}
                  color={"yellow.500"}
                />
              }
            >
              Desfavoritar
            </Button>
          ) : (
            <Button
              _pressed={{
                bg: "yellow.300",
                opacity: 0.6,
              }}
              onPress={handleAddRepoToFavorite}
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
          )}

          <HStack alignItems={"center"} space={"8px"}>
            <Icon as={Entypo} name="star" size={18} color={"yellow.500"} />
            <Text
              fontFamily={"heading"}
              fontWeight={"400"}
              fontSize={"12px"}
              color={"gray.500"}
            >
              {stargazers_count}
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
              {language}
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </Pressable>
  );
};
