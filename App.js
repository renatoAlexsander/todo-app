import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./src/components/header";
import TodoItem from "./src/components/todoItem";
import AddTodo from "./src/components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "make a coffee" },
    { id: 2, text: "watch some film" },
    { id: 3, text: "wake up early" },
  ]);

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ id: Math.random().toString(), text }, ...prevTodos];
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}></AddTodo>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
              )}
            ></FlatList>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
