import { View,Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function User(){

  return(

    <View
    style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }}
    >

      <Ionicons name="person" size={80}/>

      <Text style={{fontSize:20}}>
        Usuário
      </Text>

    </View>

  )

}