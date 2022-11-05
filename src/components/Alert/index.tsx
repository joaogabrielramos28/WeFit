import React from "react";
import {
  Alert as AlertNativeBase,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
} from "native-base";
import { IAlertProps } from "./types";
export const Alert = ({ status, message, bg, color }: IAlertProps) => {
  return (
    <AlertNativeBase w="100%" status={status} bg={bg}>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <AlertNativeBase.Icon mt="1" color={color} />
            <Text fontSize="md" color="gray.400">
              {message}
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </AlertNativeBase>
  );
};
