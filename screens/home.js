import { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { reduxTypes } from "../utils/constants";
import Loader from "../components/common/loader";
import ProductCard from "../components/products/productCard";

export default function Home() {
    const dispatch = useDispatch()
    const homeState = useSelector((state) => state.appData)


    useEffect(() => {
        dispatch({ type: reduxTypes.HOME_DATA_FETCH })
    }, [])

    const renderItem=({item})=>{
        return <ProductCard item={item}/>
    }

    return (
        <View style={styles.container}>
            {homeState.homeLoader ?
                <Loader />
                :
                <FlatList
                    data={homeState.products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})