import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text, View } from "react-native"
import Home from "../screen/Home"
import { BottomTabParamList } from "./RootStackParams"

const Tab = createBottomTabNavigator<BottomTabParamList>()
const BottomTab: React.FC = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
                name="Home"
                component={Home}
            />
            <Tab.Screen 
                name="Settings"
                component={Home}
            />
        </Tab.Navigator>
    )
}

export default BottomTab