import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export enum Role {
    EMPLOYEE = "Employee",
    ADMIN = "Admin", 
    MANAGER = "Manager"
}

export const getUser = async (uid: string | undefined) => {
    const users = await firestore().collection('users').where('uid', '==', uid).get();
    return users
}

export const saveData = async (data: any, successCallback: (json: any) => void, errorCallback: (err: any) => void) => {
    await firestore().collection("users").add(data).then(async (res) => {
        const data = await (await res.get()).data()
        successCallback(data)
    }).catch(err => {
        errorCallback(err)
    })
}

export const updateRole = async (uid: string | undefined, role: string) => {
    const userRef = await getUser(uid)
    const userId = userRef.docs[0].id
    await firestore().collection("users").doc(userId).update({role: Role.MANAGER}).then((res) => {
        Alert.alert(`Role ${Role.MANAGER} is assigned to ${userRef.docs[0].data().displayName} Successfully!!`)
    }).catch((err) => {
        Alert.alert("Something went wrong!!")
    })

}
