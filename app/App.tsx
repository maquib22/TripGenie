// App.tsx
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import "../src/navigation/RootStack";
import RootStack from "../src/navigation/RootStack";
// instead of import { SafeAreaView } from 'react-native'


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        <PaperProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
