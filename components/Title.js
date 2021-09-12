import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Title = () => {
    return (
        <View className="titleContainer" style={styles.titleContainer}>
            <Text className="titleText" style={styles.titleText}>Shopping List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer:{
        width: '80%',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor : "lightblue",
        borderColor: "white",
        padding: 10,
        marginTop: 50,
        marginBottom: 30,
    },
    titleText:{
        color: 'white',
        fontSize: 36,
    },
})

export default Title

