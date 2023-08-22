import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartCard from "../components/cart/cartCard";

export default function Cart() {
    const appData = useSelector((state) => state.appData);
    const cartData = appData.products.filter((item) => appData.cart.includes(item.id))
    const renderItem = ({ item }) => {
        return (
            <CartCard item={item} />
        )
    }
    return (
        <View style={styles.container}>
            {cartData?.length > 0 ?
                <FlatList
                    data={cartData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                :
                <Text style={styles.textStyle}>Seems like you haven't added any product into cart.</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    textStyle: {
        textAlign: 'center'
    }
})