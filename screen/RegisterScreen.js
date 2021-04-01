import React,{useLayoutEffect,useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View } from "react-native";
import {StatusBar} from 'expo-status-bar';
import { Input, Button,Text } from 'react-native-elements';
import { auth} from "../FireBase";

const RegisterScreen = ({ navigation}) => {
    const [name, setName] =useState ('');
    const [email, setEmail] =useState ('');
    const [password, setPassword] =useState ('');
    const [imageURL, setImageURL] =useState ('');
    useLayoutEffect (() => {
   navigation.setOptions({
       headerBackTitle: "Back to login",
   });
    }, [navigation]);   
    const register =() => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.update ({
                displayName: name,
                photoURL: 
                imageURL || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgbin.com%2Fpng%2F42BvXTN1%2Fsamsung-galaxy-a8-a8-user-login-telephone-avatar-png&psig=AOvVaw2Ct64CxH87syjsk1d6JAqu&ust=1617277381188000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjR9PW52u8CFQAAAAAdAAAAABAE",
            });
        })
        .catch ((error) => alert(error.message)); 
         
    };

    return (
        <KeyboardAvoidingView behavior ="padding" style= {styles.container }>
        <StatusBar style= "light"></StatusBar>
            <Text h4 style={{marginBottom : 150,alignItems : "center"}}>   Create an okBazar Account 
            </Text>
            <View style = {styles.inputContainer}>
              <Input
                    placeholder="FUll Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={(text)=> setName(text)} 
              />

              <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text)=> setEmail(text)} 
              />

              <Input
                    placeholder="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text)=> setPassword(text)} 
              />

                <Input
                    placeholder="profile picture url (optional)"
                    type="text"
                    value= {imageURL}
                    onChangeText={(text)=> setImageURL(text)} 
                    onSubmitEditing={register}
              />      
            </View>
            <Button containerStyle={styles.button }
            raised
            onPress = {register}
            title="Register"/>
        <View style= {{height: 100}}/>
        </KeyboardAvoidingView>
        
    );
};
export default RegisterScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width:300,
    },
});
 