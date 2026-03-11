import { View,Text } from "react-native";

export default function BookCard({book}){

  return(

    <View
    style={{
      padding:15,
      borderWidth:1,
      borderRadius:10,
      marginBottom:10
    }}
    >

      <Text style={{fontSize:18,fontWeight:"bold"}}>
        {book.title}
      </Text>

      <Text>
        {book.author}
      </Text>

    </View>

  )

}