import React, { useState } from "react";
import { Modal, Button, View, Text,TextInput, StyleSheet } from "react-native";

const MyModal = (props) => {
  const [itemText, setItemText] = useState("");

  const onAddHandler = () => {
    let s = Math.random().toString();
    if (itemText !== "") {
      props.onAdd({ id: s, text: itemText });
    }
    setItemText("");
  };
  return (
    <Modal visible={props.visible} animationType="fade">
      <View>
        <Text>Add a new shopping item:</Text>
      </View>
      <View>
        <TextInput
          placeholder="Enter"
          className="input"
          value={itemText}
          style={styles.input}
          onChangeText={setItemText}
        />
        <Button
          title="Add Thing"
          className="addButton"
          onPress={onAddHandler}
          style={styles.addButton}
        />
      </View>
    </Modal>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
  },
  addButton: {},
});
