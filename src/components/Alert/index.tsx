import React from "react";
import {
  Alert as AlertNativeBase,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
} from "native-base";
export const Alert = () => {
  return (
    <AlertNativeBase w="100%" status={"error"} bg={"red.500"}>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <AlertNativeBase.Icon mt="1" color={"yellow.500"} />
            <Text fontSize="md" color="gray.400">
              Nome de usuário inválido
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </AlertNativeBase>
  );
};
