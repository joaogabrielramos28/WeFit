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
  const { addRepoToFavorite } = useRepositories();
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

  const handleAddRepoToFavorite = () => {
    addRepoToFavorite(repo);
  };

  const handleGoToRepoDetailsScreen = () => {
    navigate("Repository", { full_name, description, html_url, language });
  };

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
        <Text
          fontSize={"14px"}
          fontFamily={"heading"}
          fontWeight={"700"}
          color={"gray.700"}
        >
          {full_name}
        </Text>
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
          <Button
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
