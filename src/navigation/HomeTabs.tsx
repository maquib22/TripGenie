// src/navigation/HomeTabs.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
// import TrendingScreen from "../screens/TrendingScreen";
// import TestimoniesScreen from "../screens/TestimoniesScreen";
// import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === "HomeScreen") {
            icon = focused
              ? require("../../assets/images/icons/home-active.png")
              : require("../../assets/images/icons/home.png");
          } 
        //   else if (route.name === "Trending") {
        //     icon = focused
        //       ? require("../../assets/images/icons/trending-active.png")
        //       : require("../../assets/images/icons/trending.png");
        //   } else if (route.name === "Testimonies") {
        //     icon = focused
        //       ? require("../../assets/images/icons/test-active.png")
        //       : require("../../assets/images/icons/test.png");
        //   } else if (route.name === "Profile") {
        //     icon = focused
        //       ? require("../../assets/images/icons/profile-active.png")
        //       : require("../../assets/images/icons/profile.png");
        //   }
          return <Image source={icon} style={{ width: 24, height: 24, resizeMode: "contain" }} />;
        },
        tabBarStyle: { height: 60, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Tab.Screen name="Trending" component={TrendingScreen} />
      <Tab.Screen name="Testimonies" component={TestimoniesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
}
