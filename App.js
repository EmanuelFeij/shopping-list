import React, { useState } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import MyModal from "./components/MyModal";
import ShoppingList from "./components/ShoppingList";
import Title from "./components/Title";
export default function App() {
  const [shoppingItems, setShoppingItems] = useState([]);

  const addShoppingItemsHandler = (item) => {
    setShoppingItems([...shoppingItems, item]);
    console.log(shoppingItems);
  };

  const [modalOn, setModal] = useState(false);

  const deleteShoppingItemsHandler = (id) => {
    setShoppingItems(shoppingItems.filter((sh) => sh.id !== id));
  };

  const removeModalHandler = () => {
    setModal(false);
  };

  return (
    <View style={styles.container}>
      <Title />
      <MyModal
        onRemoveModal={removeModalHandler}
        visible={modalOn}
        onAdd={addShoppingItemsHandler}
      />
      <FlatList
        className="flatList"
        style={styles.flatList}
        data={shoppingItems}
        keyExtract={(item, index) => item.id}
        renderItem={(itemData) => (
          <ShoppingList
            id={itemData.item.id}
            text={itemData.item.text}
            onDelete={deleteShoppingItemsHandler}
            className="shoppingContainer"
            style={styles.shoppingContainer}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    width: "60%",
  },
});
