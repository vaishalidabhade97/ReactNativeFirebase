import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BottomTabParamList = {
    Home: undefined;
    Settings: undefined; 
}

export type RootStackParamList = {
    Auth: undefined;
    BottomTab: NavigatorScreenParams<BottomTabParamList>;
}