import {
  Actionsheet,
  Button,
  HStack,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";

import { useRepositories } from "../../../../context/repositoriesContext";

export const ActionSheet = () => {
  const { handleEditUserName, actionSheetIsOpen, closeActionSheet, userName } =
    useRepositories();

  const [draftUserName, setDraftUserName] = useState(userName);

  const handleCloseActionSheet = () => {
    closeActionSheet();
  };

  useEffect(() => {
    setDraftUserName(userName);
  }, [actionSheetIsOpen]);

  const handleSaveNewUserName = () => {
    handleEditUserName(draftUserName);
    closeActionSheet();
  };

  return (
    <ScrollView>
      <Actionsheet isOpen={actionSheetIsOpen} onClose={handleCloseActionSheet}>
        <KeyboardAvoidingView behavior="padding">
          <Actionsheet.Content>
            <VStack
              w="100%"
              padding={"16px"}
              justifyContent="center"
              space={"8px"}
            >
              <Text
                fontFamily={"body"}
                fontWeight={"400"}
                fontSize={"16px"}
                color={"gray.700"}
              >
                Alterar usuário selecionado
              </Text>
              <Input
                value={draftUserName}
                onChangeText={setDraftUserName}
                variant={"filled"}
                bg={"gray.200"}
                placeholder={"Nome do usuário"}
              />
              <HStack w={"100%"} justifyContent={"space-between"}>
                <Button
                  onPress={handleCloseActionSheet}
                  _text={{
                    fontFamily: "body",
                    fontWeight: "500",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    color: "blue.500",
                  }}
                  variant={"link"}
                  padding={"8px"}
                  width={"170px"}
                >
                  Cancelar
                </Button>
                <Button
                  isDisabled={draftUserName === ""}
                  onPress={handleSaveNewUserName}
                  _text={{
                    fontFamily: "body",
                    fontWeight: "500",
                    fontSize: "14px",
                    textTransform: "uppercase",
                  }}
                  padding={"8px"}
                  bg={"blue.500"}
                  width={"170px"}
                >
                  Salvar
                </Button>
              </HStack>
            </VStack>
          </Actionsheet.Content>
        </KeyboardAvoidingView>
      </Actionsheet>
    </ScrollView>
  );
};
