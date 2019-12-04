import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default About = (props) => {
    return (
        <View style={styles.container}>
            <Text>Finish</Text>
            <Button title="Play Again" onPress={() => props.navigation.navigate("Game")} />
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