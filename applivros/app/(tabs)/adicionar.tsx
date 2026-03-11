import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { useBooks } from "../../hooks/useBooks";

export default function Adicionar(){

  const [title,setTitle] = useState("");
  const [author,setAuthor] = useState("");

  const { addBook } = useBooks();

  function handleAdd(){
    addBook(title,author);
    setTitle("");
    setAuthor("");
  }

  return(

    <View style={{padding:20}}>

      <TextInput
      placeholder="Nome do livro"
      value={title}
      onChangeText={setTitle}
      style={{
        borderWidth:1,
        padding:10,
        marginBottom:10
      }}
      />

      <TextInput
      placeholder="Autor"
      value={author}
      onChangeText={setAuthor}
      style={{
        borderWidth:1,
        padding:10,
        marginBottom:10
      }}
      />

      <Button title="Adicionar livro" onPress={handleAdd}/>

    </View>

  )
}