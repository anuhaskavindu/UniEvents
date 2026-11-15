
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  Modal,
  StyleSheet,
} from "react-native";

import { useRouter } from "expo-router";
import events from "../../../../data/events";

export default function EventsScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Entertainment",
    "Education",
    "Sports",
  ];

  const filteredEvents =
    category === "All"
      ? events
      : events.filter(
          (event) => event.category === category
        );

  const renderEvent = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/events/${item.id}`)}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Events</Text>

      <Pressable
        style={styles.filterButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.filterText}>
          Filter: {category}  ▼
        </Text>
      </Pressable>

      <FlatList
        data={filteredEvents}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text>No events found.</Text>
        }
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Select Category
            </Text>

            {categories.map((item) => (
              <Pressable
                key={item}
                style={styles.categoryButton}
                onPress={() => {
                  setCategory(item);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.categoryText}>
                  {item}
                </Text>
              </Pressable>
            ))}

            <Pressable
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.close}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    color: "#1E293B",
  },
  filterButton: {
    backgroundColor: "#DBEAFE",
    padding: 13,
    borderRadius: 9,
    marginVertical: 18,
  },
  filterText: {
    color: "#1D4ED8",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 140,
  },
  info: {
    padding: 13,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  category: {
    color: "#2563EB",
    marginTop: 5,
  },
  date: {
    color: "#64748B",
    marginTop: 5,
  },
  location: {
    color: "#64748B",
    marginTop: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 25,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  categoryButton: {
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  categoryText: {
    fontSize: 16,
  },
  close: {
    color: "#2563EB",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 18,
  },
});
