import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "../src/screens/HomeScreen";
import HomeScreen from "../src/screens/HomeScreen";
import Login from "../src/screens/Login";
import MainPage from "../src/screens/MainPage";
import Signup from "../src/screens/Signup";
import SplashScreen from "../src/screens/SplashScreen";

export type RootStackParamList = {
  Splash: undefined;
  MainPage: undefined;
  LogIn: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Layout() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="LogIn" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
