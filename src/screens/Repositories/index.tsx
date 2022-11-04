import { Box, FlatList } from "native-base";
import React from "react";
import { Card, Header } from "../../components";

export const Repositories = () => {
  return (
    <Box flex={1} bg={"gray.400"}>
      <Header />
      <Box paddingX={"16px"}>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 120,
          }}
          data={[0, 1, 3, 4, 5, 6, 7]}
          renderItem={({ item }) => <Card />}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Box>
  );
};
