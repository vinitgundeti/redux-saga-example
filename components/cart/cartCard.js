import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/productsSlice";

export default function CartCard({ item }) {
    const dispatch = useDispatch()

    const onRemoveCart = () => {
        dispatch(removeFromCart(item.id))
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.thumbnail }} style={styles.imageStyle} />
            <View style={styles.contentStyle}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>$ {item.price}/-</Text>
                    <TouchableOpacity onPress={onRemoveCart}>
                        <Ionicons name='trash' color={colors.blue} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: colors.white,
        padding: 10,
        flex: 1
    },
    title: {
        fontWeight: '600',
        fontSize: 16
    },
    description: {
        color: colors.gray,
        marginBottom: 10
    },
    imageStyle: {
        width: 100,
        height: 100,
        objectFit: 'fill'
    },
    contentStyle: {
        marginLeft: 10,
        flex: 1
    },
    price: {
        fontWeight: '500'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})