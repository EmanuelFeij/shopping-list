import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const ShoppingList = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View key={props.id} style={styles.shoppingListItem}>
        <Text className={styles.shoppingItemText} style={styles.shoppingItemText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shoppingListItem: {
    borderWidth: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
    padding: 10,
    width: "100%",
  },
  shoppingItemText:{
    textAlign: "center",
  }
});

export default ShoppingList;
