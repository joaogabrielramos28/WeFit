import { Box, FlatList, Heading } from "native-base";
import React from "react";
import { ActionSheet, Alert, Card, Header } from "../../components";
import { useRepositories } from "../../context/repositoriesContext";

export const FavoritesRepositories = () => {
  const { favoritesRepos, isShowingAlert } = useRepositories();
  return (
    <Box flex={1} bg={"gray.400"}>
      <Header />
      {isShowingAlert ? (
        <Alert
          status={"error"}
          bg={"red.500"}
          message={" Nome de usuário inválido"}
          color={"yellow.500"}
        />
      ) : null}
      <Box paddingX={"16px"}>
        {favoritesRepos.length > 0 ? (
          <FlatList
            contentContainerStyle={{
              paddingBottom: 120,
            }}
            data={favoritesRepos}
            renderItem={({ item }) => <Card {...item} />}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Box marginTop={"16px"} w={"100%"} alignItems={"center"}>
            <Heading
              fontFamily={"body"}
              fontWeight={"400"}
              color={"gray.600"}
              fontSize={"24px"}
            >
              Nenhum favorito :(
            </Heading>
          </Box>
        )}
      </Box>

      <ActionSheet />
    </Box>
  );
};
