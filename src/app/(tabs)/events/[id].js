
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

import { useLocalSearchParams } from "expo-router";
import events from "../../../../data/events";
import { useFavorites } from "../../../contexts/FavoritesContext";

export default function EventDetails() {
  const { id } = useLocalSearchParams();
  const event = events.find((item) => item.id === id);

  const { favorites, toggleFavorite } = useFavorites();

  if (!event) {
    return (
      <View style={styles.container}>
        <Text>Event not found!</Text>
      </View>
    );
  }

  const isFavorite = favorites.some(
    (item) => item.id === event.id
  );

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: event.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.category}>{event.category}</Text>

        <Text style={styles.title}>{event.title}</Text>

        <Text style={styles.info}>📅 Date: {event.date}</Text>
        <Text style={styles.info}>⏰ Time: {event.time}</Text>
        <Text style={styles.info}>📍 Location: {event.location}</Text>

        <Text style={styles.heading}>About This Event</Text>

        <Text style={styles.description}>
          {event.description}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => toggleFavorite(event)}
        >
          <Text style={styles.buttonText}>
            {isFavorite
              ? "♥ Remove from Favorites"
              : "♡ Add to Favorites"}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 20,
  },
  category: {
    color: "#2563EB",
    fontWeight: "bold",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 12,
  },
  info: {
    fontSize: 15,
    marginVertical: 7,
    color: "#475569",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 25,
    color: "#64748B",
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
