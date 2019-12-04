import React, { useEffect, useState } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground,
    Text
} from 'react-native';

export default Board = (props) => {
    const [coordinates, setCoordinates] = useState
        (
            [
                ["o", "o", "o", "o", "o", "o", "o", "o"],
                ["o", "o", "o", "o", "o", "o", "o", "o"],
                ["o", "o", "o", "o", "o", "o", "o", "o"],
                ["o", "o", "o", "o", "o", "o", "o", "o"],
                ["o", "o", "o", "o", "o", "o", "o", "o"],
                ["o", "o", "o", "o", "o", "o", "o", "o"],
                ["o", "o", "o", "o", "o", "o", "o", "o"],
                ["o", "o", "o", "o", "o", "o", "o", "o"]
            ]
        )
    const random = () => {
        let x = Math.floor(Math.random() * 8)
        let y = Math.floor(Math.random() * 8)
        return [x, y]
    }
    const horsePos = () => {
        const [x, y] = random()
        if (coordinates[x][y] === "o") {
            setCoordinates([...coordinates, coordinates[x][y] = "h"])
        } else if (coordinates[x][y] === "t") {
            horsePos()
        }
    }
    const targetPos = () => {
        const [x, y] = random()
        if (coordinates[x][y] === "o") {
            setCoordinates([...coordinates, coordinates[x][y] = "t"])
        } else if (coordinates[x][y] === "h") {
            targetPos()
        }
    }
    const pressed = (x, y) => {
        if (coordinates[x][y] === "h") {
            triggerPaths(x, y)
        } else if (coordinates[x][y] === "p") {
            coordinates.forEach((row, index1) => {
                row.forEach((_, index2) => {
                    if (coordinates[index1][index2] === "p") {
                        setCoordinates([...coordinates, coordinates[index1][index2] === "o"])
                    }
                })
            })
            setCoordinates([...coordinates, coordinates[x][y] = "h"])
        }
    }
    const triggerPaths = (x, y) => {
        x >= 1 && y >= 2 && setCoordinates([...coordinates, coordinates[x - 1][y - 2] = "p"])
        x >= 2 && y >= 1 && setCoordinates([...coordinates, coordinates[x - 2][y - 1] = "p"])
        x >= 2 && y <= 6 && setCoordinates([...coordinates, coordinates[x - 2][y + 1] = "p"])
        x >= 1 && y <= 5 && setCoordinates([...coordinates, coordinates[x - 1][y + 2] = "p"])
        x <= 6 && y <= 5 && setCoordinates([...coordinates, coordinates[x + 1][y + 2] = "p"])
        x <= 5 && y <= 6 && setCoordinates([...coordinates, coordinates[x + 2][y + 1] = "p"])
        y <= 5 && y >= 1 && setCoordinates([...coordinates, coordinates[x + 2][y - 1] = "p"])
        y <= 6 && y >= 2 && setCoordinates([...coordinates, coordinates[x + 1][y - 2] = "p"])
    }
    useEffect(() => {
        targetPos()
        horsePos()
    }, [])
    return (
        <View style={styles.container}>
            {coordinates.map((row, x) =>
                (<View key={x} style={{ flexDirection: "row" }}>
                    {[...row].map((_, y) => {
                        return x <= 7 && (
                            <TouchableOpacity
                                key={x + y}
                                onPress={() => pressed(x, y)}
                            >
                                {Math.abs(x - y) % 2 === 0 ?
                                    (
                                        <ImageBackground
                                            source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAHlBMVEX///8AAADOzs6GhoZ/f3+CgoLh4eG0tLTk5OS7u7tjQ73pAAABJUlEQVR4nO3Siw1CIQDAQJCHn/0X1iWMKd5t0KRjHO8+z/YYt7muc625P4W/vuir5lJYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX1/Urivc+25x3Oe7fUGG5gO22K6SY0AAAAASUVORK5CYII=" }}
                                            style={styles.img}
                                        >

                                            {coordinates[x][y] === "h" && (
                                                <Image style={[styles.img, styles.stackedImg]}
                                                    source={{ uri: "https://library.kissclipart.com/20180901/uhw/kissclipart-horse-chess-icon-clipart-chessboard-knight-f599f49b06131c7c.png" }}
                                                />
                                            )}
                                            {coordinates[x][y] === "t" && (
                                                <Image style={[styles.img, styles.stackedImg]}
                                                    source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" }}
                                                />
                                            )}
                                            {coordinates[x][y] === "p" && (
                                                <Image style={[styles.img, styles.stackedImg]}
                                                    source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/01anyn9kjAL._SY355_.png" }}
                                                />
                                            )}
                                        </ImageBackground>
                                    ) :
                                    (
                                        <ImageBackground
                                            source={{ uri: "https://www.funkyrugs.co.uk/images/C/ash%20grey-550x550.jpg" }}
                                            style={styles.img}
                                        >
                                            {coordinates[x][y] === "h" && (
                                                <Image style={[styles.img, styles.stackedImg]}
                                                    source={{ uri: "https://library.kissclipart.com/20180901/uhw/kissclipart-horse-chess-icon-clipart-chessboard-knight-f599f49b06131c7c.png" }}
                                                />
                                            )}
                                            {coordinates[x][y] === "t" && (
                                                <Image style={[styles.img, styles.stackedImg]}
                                                    source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" }}
                                                />
                                            )}
                                            {coordinates[x][y] === "p" && (
                                                <Image style={[styles.img, styles.stackedImg]}
                                                    source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/01anyn9kjAL._SY355_.png" }}
                                                />
                                            )}
                                        </ImageBackground>
                                    )
                                }
                            </TouchableOpacity>
                        )
                    })}
                </View>
                )
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 40,
        height: 40
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})