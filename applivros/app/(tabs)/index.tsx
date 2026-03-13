import { View, Text, FlatList } from "react-native";
import { styles } from "../../assets/styles/home.styles";
import { useBooks } from "../../hooks/useBooks";
import BookCard from "../../components/BookCard";

export default function Home(){

  const { books } = useBooks();

  return(

    <View style={styles.container}>

      <Text style={styles.title}>
        📚 Meus Livros
      </Text>

      <FlatList
      data={books}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <BookCard book={item}/>
      )}
      />

    </View>

  )

}