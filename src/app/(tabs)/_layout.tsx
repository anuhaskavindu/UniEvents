
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: "#777777",
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home",tabBarIcon: () => <Text>🏠</Text> }}
      />

      <Tabs.Screen
        name="events"
        options={{ title: "Events", tabBarIcon: () => <Text>🎉</Text> }}
      />

      <Tabs.Screen
        name="favourites"
        options={{ title: "Favorites", tabBarIcon: () => <Text>❤️</Text> }}
      />

      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", tabBarIcon: () => <Text>👤</Text> }}
      />
    </Tabs>
  );
}
