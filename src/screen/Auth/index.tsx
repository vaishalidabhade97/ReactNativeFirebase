import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin"
import React, { useEffect } from "react"
import { Alert, Button, Text, TouchableOpacity, View } from "react-native"
import { getUser, saveData } from "../../helpers"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../container/RootStackParams"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"

GoogleSignin.configure({
    webClientId: "153978791191-68cvitqv09c09uiekse0nkvisqnhe0ti.apps.googleusercontent.com"
})

type Props = NativeStackNavigationProp<RootStackParamList, 'Auth'>
const Auth: React.FC = () => {
    const navigation = useNavigation<Props>()
    const signIn = async () => {
        await GoogleSignin.hasPlayServices();
        const {idToken} = await GoogleSignin.signIn()
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken)
        return auth().signInWithCredential(googleCredentials) 
    }

    const successCallback = (json: any) => {
        navigation.navigate('BottomTab', {screen: 'Home'})
    }

    const errorCallback = (err: any) => {
        Alert.alert("Something went wrong!")
    }
    const saveUser = async(user: FirebaseAuthTypes.User) => {
        const userData = await getUser(user.uid)
        const data = {
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            email: user.email,
            phoneNumber: user.phoneNumber,
            createdAt: Date.now(),
            role: 'Employee'
        }
        if (userData.empty){
            saveData(data, successCallback, errorCallback)
        } else {
            successCallback(userData.docs[0].data())
        }
    }

    const googleSignInButtonOnPress = () => {
        signIn().then(res => {
            saveUser(res.user)
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <View style={styles.container}>
            <GoogleSigninButton
                onPress={googleSignInButtonOnPress}
                color={GoogleSigninButton.Color.Dark}
            />
        </View>
    )
}

export default Auth