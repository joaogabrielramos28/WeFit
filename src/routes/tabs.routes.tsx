import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import React from "react";

import { Ionicons, Entypo } from "@expo/vector-icons";
import { FavoritesRepositories, Repositories } from "../screens";
import { StackRoutes } from "./stack.routes";

const { Screen, Navigator } = createBottomTabNavigator();

export const TabsRoutes = () => {
  const { colors } = useTheme();
  return (
    <Navigator
      initialRouteName="Repositórios"
      screenOptions={{
        tabBarActiveTintColor: colors.blue[500],
        tabBarInactiveTintColor: colors.gray[800],
        headerShown: false,
      }}
    >
      <Screen
        name="Repositórios"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="logo-github" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="Favoritos"
        component={FavoritesRepositories}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="star" size={20} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
