import { View, Text, FlatList } from "react-native";
import { useBooks } from "../../hooks/useBooks";
import BookCard from "../../components/BookCard";

export default function Home() {

  const { books } = useBooks();

  return (
    <View style={{ flex:1, padding:20 }}>

      <Text style={{ fontSize:22, fontWeight:"bold", marginBottom:10 }}>
        Lista de Livros
      </Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <BookCard book={item}/>
        )}
      />

    </View>
  );
}