import { StyleSheet, Text, View } from "react-native";

export default function ErrorComponent({ message }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message || "Something went wrong"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center'
    }
})