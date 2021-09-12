import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  Button,
} from "react-native";
import ShoppingList from "./components/ShoppingList";
import Title from "./components/Title";
import MyModal from "./components/MyModal";
export default function App() {
  const [shoppingItems, setShoppingItems] = useState([]);

  const addShoppingItemsHandler = (item) => {
    setShoppingItems([...shoppingItems, item]);
  };

  const [modalOn, setModal] = useState(false);

  const deleteShoppingItemsHandler = (id) => {
    setShoppingItems(shoppingItems.filter((sh) => sh.id !== id));
  };

  const setModalHandler = () => {
    setModal(!modalOn);
  };

  return (
    <View style={styles.container}>
      <Title />
        <Button
          title="Add Shopping Item"
          className="addButtonItem"
          onPress={setModalHandler}
          style={styles.addButtonItem}
        />
        <MyModal
          onRemoveModal={setModalHandler}
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
            />
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    marginVertical: 25,
    width: "60%",
  },
  addButtonItem: {
    marginVertical: 15,
  },
});
