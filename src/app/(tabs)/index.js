
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
import events from "../../../data/events";
import { useFavorites } from "../../contexts/FavoritesContext";

export default function HomeScreen() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();

  const renderEvent = ({ item }) => {
    const isFavorite = favorites.some(
      (event) => event.id === item.id
    );

    return (
      <View style={styles.card}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

        <View style={styles.info}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>

          <View style={styles.buttons}>
            <Pressable
              style={styles.detailsButton}
              onPress={() =>
                router.push(`/events/${item.id}`)
              }
            >
              <Text style={styles.buttonText}>View Details</Text>
            </Pressable>

            <Pressable
              style={styles.favoriteButton}
              onPress={() => toggleFavorite(item)}
            >
              <Text style={styles.favoriteText}>
                {isFavorite ? "♥" : "♡"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to UniEvents</Text>

      <Text style={styles.subtitle}>
        Discover exciting university events!
      </Text>

      <Text style={styles.heading}>Upcoming Events</Text>

      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
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
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1E293B",
  },
  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15,
    color: "#1E293B",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 14,
    marginBottom: 18,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  info: {
    padding: 14,
  },
  category: {
    color: "#2563EB",
    fontWeight: "bold",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 6,
  },
  date: {
    color: "#64748B",
    marginTop: 6,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  detailsButton: {
    backgroundColor: "#2563EB",
    padding: 11,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  favoriteButton: {
    marginLeft: 15,
    padding: 5,
  },
  favoriteText: {
    fontSize: 27,
    color: "#E11D48",
  },
});
