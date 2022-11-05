import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Repositories, Repository } from "../screens";

const { Navigator, Screen } = createStackNavigator();
export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="RepositoryStack" component={Repositories} />
      <Screen name="Repository" component={Repository} />
    </Navigator>
  );
};
