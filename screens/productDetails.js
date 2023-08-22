import { Image, StyleSheet, View, Dimensions, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ErrorComponent from "../components/common/error";
import { colors } from "../utils/constants";
import { addToCart } from "../redux/productsSlice";

const screenWidth = Dimensions.get("window").width;

export default function ProductDetails({ navigation, route }) {
    const appData = useSelector((state) => state.appData)
    const dispatch = useDispatch();
    const productInfo = appData?.products?.find((item) => item.id === route?.params?.id || null)
    console.log("cart : ", appData.cart)

    if (productInfo === undefined) {
        return <ErrorComponent />
    }

    const isAddedToCart = appData.cart?.includes(productInfo.id);
    const onPressCart=()=>{
        dispatch(addToCart(productInfo.id))
    }

    return (
        <View>
            <View style={styles.imageWrap}>
                <Image source={{ uri: productInfo.thumbnail }} style={styles.imageStyle} />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.title}>{productInfo.title}</Text>
                <Text style={styles.description}>{productInfo.description}</Text>
                <Text style={styles.price}>{`$ ${productInfo.price}/-`}</Text>
                <TouchableOpacity style={[styles.buttonStyle, isAddedToCart && styles.disabledButton]} onPress={onPressCart} disabled={isAddedToCart}>
                    <Text style={styles.cartText}>{isAddedToCart ? 'Added to cart' : 'Add to cart'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageWrap: {
        backgroundColor: colors.white,
        padding: 10,
        justifyContent: 'center',
        width: screenWidth,
        height: screenWidth / 2,
        elevation: 2
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    wrapper: {
        paddingHorizontal: 16,
        marginTop: 12
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4
    },
    description: {
        color: colors.gray
    },
    buttonStyle: {
        backgroundColor: colors.blue,
        padding: 10,
        marginTop: 20,
        borderRadius: 8
    },
    disabledButton: {
        backgroundColor: colors.lightBlue
    },
    cartText: {
        color: colors.white,
        textAlign: 'center'
    },
    price: {
        marginTop: 12,
        fontWeight: '500',
        fontSize: 16
    }
})