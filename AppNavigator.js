import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from './screens/home';
import Cart from './screens/cart';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function MainScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Cart'
                component={Cart}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='cart' color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='MainScreen'
                    component={MainScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}