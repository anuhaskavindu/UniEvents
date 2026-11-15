
import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>S</Text>
      </View>

      <Text style={styles.name}>Student User</Text>
      <Text style={styles.subtitle}>
        University Student
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Student User</Text>

        <Text style={styles.label}>University</Text>
        <Text style={styles.value}>
          University of Kelaniya
        </Text>

        <Text style={styles.label}>Application</Text>
        <Text style={styles.value}>UniEvents</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    alignItems: "center",
    padding: 20,
    paddingTop: 80,
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: "#2563EB",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },
  subtitle: {
    color: "#64748B",
    marginTop: 5,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginTop: 30,
  },
  label: {
    color: "#64748B",
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});
