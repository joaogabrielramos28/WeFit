import { Box, FlatList } from "native-base";
import React, { useEffect, useState } from "react";
import { Card, Header } from "../../components";
import { IRepos } from "../../Dtos/repos";
import { api } from "../../services/api";

export const Repositories = () => {
  const [repos, setRepos] = useState<IRepos[]>([]);

  useEffect(() => {
    api.get<IRepos[]>("facebook/repos").then((response) => {
      setRepos(response.data);
    });
  }, []);

  return (
    <Box flex={1} bg={"gray.400"}>
      <Header />
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
    </Box>
  );
};
