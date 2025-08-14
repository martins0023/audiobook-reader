// app/(tabs)/_layout.tsx
import "../../global.css";
import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#1c1c1e",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#5e5e60",
      }}
    >
      <Tabs.Screen
        name="library/index"
        options={{
          title: "My Library",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book-open" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reader/index"
        options={{
          title: "Reader",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="headphones-alt" size={24} color={color} />
          ),
        }}
      />
      {/* This dynamic screen for a single book must be hidden from the tab bar.
        The `href` prop here makes the tab navigate to the Reader home,
        but we hide it so it doesn't appear in the bar.
      */}
      <Tabs.Screen
        name="reader/[bookId]"
        options={{
          href: null, // This hides the tab from the bar
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="headphones-alt" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}