import React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  DrawerActions,
} from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackground,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LandingScreen from "./screens/Landing";
import HomeScreen from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUpScreen from "./screens/SignUp";
import PasswordForgetScreen from "./screens/PasswordForget";

import Button from "./components/Button";

const RootStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      overlayColor="transparent"
      drawerStyle={{ backgroundColor: "#2e3648" }}
      drawerContentOptions={{
        activeTintColor: "#81E6D9",

        inactiveTintColor: "#6e7688",
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Password Forget" component={PasswordForgetScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleSignIn = () => {
    // TODO implement real sign in mechanism

    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // TODO implement real sign out mechanism

    setIsAuthenticated(false);
  };
  const handleSignUp = () => {
    // TODO implement real sign up mechanism

    setIsAuthenticated(true);
  };
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#1A202C",
          },
        }}
      >
        {isAuthenticated ? (
          <RootStack.Screen
            name="Home"
            component={HomeDrawer}
            options={({ route, navigation }: any) => ({
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#1A202C",
              },
              headerTitle: getFocusedRouteNameFromRoute(route),
              headerLeft: () => (
                <Button
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                  title="Menu"
                  style={{
                    margin: 5,
                  }}
                  textStyle={{
                    color: "#81E6D9",
                  }}
                />
              ),
              headerRight: () => (
                <Button
                  style={{
                    margin: 5,
                  }}
                  textStyle={{
                    color: "#81E6D9",
                  }}
                  onPress={handleSignOut}
                  title="Sign Out"
                />
              ),
            })}
          />
        ) : (
          <>
            <RootStack.Screen
              options={{
                animationTypeForReplace: "pop",
              }}
              name="Landing"
              component={LandingScreen}
            />
            <RootStack.Screen name="Sign In">
              {(props: any) => <SignIn {...props} onSignIn={handleSignIn} />}
            </RootStack.Screen>
            <RootStack.Screen name="Sign Up">
              {(props: any) => (
                <SignUpScreen {...props} onSignUp={handleSignUp} />
              )}
            </RootStack.Screen>
            <RootStack.Screen
              name="Password Forget"
              component={PasswordForgetScreen}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
