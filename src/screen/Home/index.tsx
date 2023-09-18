import auth from "@react-native-firebase/auth"
import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin"
import React, { useEffect } from "react"
import { Button, Text, TouchableOpacity, View } from "react-native"
import { Role, updateRole } from "../../helpers"
import { styles } from "./styles"

const Home: React.FC = () => {
    const currentUser = auth().currentUser
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Text onPress={() => updateRole(currentUser?.uid, Role.MANAGER)}>Update Role</Text>
        </View>
    )
}

export default Home