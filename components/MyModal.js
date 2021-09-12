import React, { useState } from "react";
import {
  Modal,
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  TextPropTypes,
} from "react-native";

const MyModal = (props) => {
  const [itemText, setItemText] = useState("");

  const onAddHandler = () => {
    let s = Math.random().toString();
    if (itemText !== "") {
      props.onAdd({ id: s, text: itemText });
      props.onRemoveModal();
    }
    setItemText("");
  };
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={props.visible}
      onRequestClose={() => {
        console.log("Modal has been closed.");
      }}
    >
      <View className="modalContainer" style={styles.modalContainer}>
        <View>
          <Text>Add a new shopping item:</Text>
        </View>
        <View className="buttonTextContainer" style={styles.buttonTextContainer}>
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
      </View>
    </Modal>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  input: {
    width: 200,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
  },
  addButton: {
    borderWidth: 1,
    borderRadius: 20,
    width: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "lightgray",
    padding: 100,
  },
  buttonTextContainer: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  }
});
