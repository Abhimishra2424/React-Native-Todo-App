import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SingleTodo({ todo, setTodos, todos }) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (!edit) setEdit(!edit);
    else {
      setEdit(!edit);
      setTodos(
        todos.map((t) =>
          t.id === todo.id
            ? {
                id: t.id,
                text: editText,
              }
            : t
        )
      );
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <View style={Styles.todo}>
      {!edit ? (
        <Text style={Styles.todoText}>{todo.text}</Text>
      ) : (
        <TextInput
          style={Styles.todoinput}
          value={editText}
          onChangeText={(text) => setEditText(text)}
        />
      )}

      <TouchableOpacity>
        <MaterialIcons
          name="edit"
          size={24}
          color="black"
          style={Styles.todoaction}
          onPress={handleEdit}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons
          name="delete"
          size={24}
          color="black"
          style={Styles.todoaction}
          onPress={() => handleDelete(todo.id)}
        />
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    marginHorizontal: 10,
    elevation: 5,
    backgroundColor: "white",
    shadowColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 50,
  },
  todoText: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  todoaction: {
    marginLeft: 15,
  },
  todoinput: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
  },
});
