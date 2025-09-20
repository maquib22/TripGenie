import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import MainPage from "../screens/MainPage";
import Signup from "../screens/Signup";
import SplashScreen from "../screens/SplashScreen";
import HomeTabs from "./HomeTabs";

export type RootStackParamList = {
  Splash: undefined;
  MainPage: undefined;
  LogIn: undefined;
  Signup: undefined;
  Home: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="LogIn" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
}
