import { View, Text, StyleSheet } from "react-native";
import { colors } from "../assets/styles/home.styles";

export default function BookCard({ book }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  card:{
    backgroundColor: colors.card,
    padding:16,
    borderRadius:12,
    marginBottom:12,
    borderWidth:1,
    borderColor:colors.lightBlue
  },

  title:{
    fontSize:18,
    fontWeight:"bold",
    color:colors.primary
  },

  author:{
    marginTop:4,
    color:colors.text
  }

});