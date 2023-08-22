import { Image, Dimensions, StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../../utils/constants";

const cardSize = Dimensions.get('window').width / 2.3
export default function ProductCard({ item, onPress }) {
    const onPressCard=()=>{
        onPress(item.id)
    }    
    return (
        <TouchableOpacity style={styles.cardStyle} onPress={onPressCard}>
            <Image source={{ uri: item.thumbnail }} style={styles.imageStyle} />
            <Text style={styles.titleStyle} numberOfLines={1}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: colors.white,
        margin: 6,
        padding: 6,
        elevation: 6,
        flex: 1
    },
    imageStyle: {
        width: cardSize,
        height: cardSize,
        objectFit: 'fill'
    },
    titleStyle: {
        marginVertical: 10,
        flex: 1,
    }
})