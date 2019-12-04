import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default Home = (props) => {
    return (
        <View style={styles.container}>
            <Button title="Start" onPress={() => props.navigation.navigate("Game")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})