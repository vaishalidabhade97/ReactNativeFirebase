import Auth from "../screen/Auth"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./RootStackParams"
import Home from "../screen/Home"
import BottomTab from "./BottomTab"

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator: React.FC = () => {
    return (
       <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen 
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name="BottomTab"
            component={BottomTab}
            options={{headerShown: false}}
        />
       </Stack.Navigator>
    )
}

export default AppNavigator