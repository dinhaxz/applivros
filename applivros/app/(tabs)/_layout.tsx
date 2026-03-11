import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>

      <Tabs.Screen
        name="index"
        options={{
          title: "Livros",
          tabBarIcon: ({ color }) => (
            <Ionicons name="book" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="adicionar"
        options={{
          title: "Adicionar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: "Usuário",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}