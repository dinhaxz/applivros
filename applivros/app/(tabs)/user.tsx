import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../assets/styles/home.styles";
import { useBooks } from "../../hooks/useBooks";

export default function User() {

  const { books } = useBooks();

  return (
    <View style={styles.container}>

      <View style={styles.profileCard}>

        <Ionicons name="person-circle" size={120} color={colors.primary} />

        <Text style={styles.name}>
          Meu Perfil
        </Text>

        <Text style={styles.subtitle}>
          Leitor de livros 📚
        </Text>

      </View>

      <View style={styles.infoCard}>

        <Text style={styles.infoTitle}>
          Livros adicionados
        </Text>

        <Text style={styles.infoNumber}>
          {books.length}
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:colors.background,
    alignItems:"center",
    padding:20
  },

  profileCard:{
    backgroundColor:"#fff",
    width:"100%",
    alignItems:"center",
    padding:25,
    borderRadius:20,
    marginBottom:20,

    shadowColor:"#000",
    shadowOpacity:0.1,
    shadowRadius:5,
    elevation:4
  },

  name:{
    fontSize:24,
    fontWeight:"bold",
    color:colors.primary,
    marginTop:10
  },

  subtitle:{
    color:colors.text,
    marginTop:4
  },

  infoCard:{
    backgroundColor:colors.secondary,
    width:"100%",
    padding:20,
    borderRadius:15,
    alignItems:"center"
  },

  infoTitle:{
    color:"#fff",
    fontSize:16
  },

  infoNumber:{
    color:"#fff",
    fontSize:32,
    fontWeight:"bold",
    marginTop:5
  }

});