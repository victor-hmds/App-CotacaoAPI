import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';
;
export default function RootLayout(){
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen 
                    name="index"
                    options={{title: 'Dólar Americano'}}
                />
                <Drawer.Screen 
                    name="euro"
                    options={{title: 'Euro'}}
                />
                <Drawer.Screen 
                    name="bitcoin"
                    options={{title: 'Bitcoin'}}
                />
                <Drawer.Screen 
                    name="ethereum"
                    options={{title: 'Ethereum'}}
                />
                <Drawer.Screen 
                    name="libra"
                    options={{title: 'Libra Esterlina'}}
                />
            </Drawer>
        </GestureHandlerRootView>

    );
}