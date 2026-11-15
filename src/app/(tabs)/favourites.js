
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

import { useRouter } from "expo-router";
import { useFavorites } from "../../contexts/FavoritesContext";

export default function FavoritesScreen() {
  const { favorites, toggleFavorite } = useFavorites();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Favorites</Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No favorite events yet.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Pressable
              onPress={() => router.push(`/events/${item.id}`)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </Pressable>

            <Pressable
              style={styles.removeButton}
              onPress={() => toggleFavorite(item)}
            >
              <Text style={styles.removeText}>
                Remove Favorite
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 16,
    paddingTop: 55,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  empty: {
    textAlign: "center",
    marginTop: 50,
    color: "#64748B",
  },
  card: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
  },
  date: {
    color: "#64748B",
    marginTop: 5,
  },
  removeButton: {
    backgroundColor: "#FEE2E2",
    padding: 10,
    marginTop: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  removeText: {
    color: "#DC2626",
    fontWeight: "bold",
  },
});
