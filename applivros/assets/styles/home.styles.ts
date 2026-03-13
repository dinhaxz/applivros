import { StyleSheet } from "react-native";

export const colors = {
  primary: "#1E3A8A",
  secondary: "#2563EB",
  lightBlue: "#60A5FA",
  background: "#EFF6FF",
  card: "#FFFFFF",
  text: "#1E293B",
};

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
  },

});