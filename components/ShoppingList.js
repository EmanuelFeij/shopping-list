import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const ShoppingList = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View key={props.id} style={styles.shoppingListItem}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shoppingListItem: {
    borderWidth: 1,
    backgroundColor: "#ccc",
    textAlign: "center",
    marginVertical: 10,
    padding: 10,
    width: "100%",
  },
});

export default ShoppingList;
