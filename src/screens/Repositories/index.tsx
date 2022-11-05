import { Box, FlatList } from "native-base";
import React from "react";
import { ActionSheet, Alert, Card, Header } from "../../components";
import { useRepositories } from "../../context/repositoriesContext";

export const Repositories = () => {
  const { repos, isShowingAlert, isConnectToInternet } = useRepositories();

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

      {!isConnectToInternet ? (
        <Alert
          status={"info"}
          bg={"blue.500"}
          message={"Conecte-se a internet para pesquisar novos repos"}
          color={"white"}
        />
      ) : null}
      <Box paddingX={"16px"}>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 120,
          }}
          data={repos}
          renderItem={({ item }) => <Card {...item} />}
          showsVerticalScrollIndicator={false}
        />
      </Box>

      <ActionSheet />
    </Box>
  );
};
