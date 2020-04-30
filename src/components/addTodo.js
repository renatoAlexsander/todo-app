import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function addTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (text) => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="add new todo..."
        autoFocus
        onChangeText={changeHandler}
      ></TextInput>
      <Button
        title="Add todo"
        color="coral"
        onPress={() => submitHandler(text)}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    borderBottomColor: "#ddd",
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
  },
});
