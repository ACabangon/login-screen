import { StyleSheet, ImageBackground, Image, Alert,  } from 'react-native';
import {CheckBox, Button} from "react-native-elements";
import { useState } from 'react'
import { TextInput} from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ViewWithLoading from '../components/ViewWithLoading';
import { RootTabScreenProps } from '../types';
import * as React from 'react';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [remember, setRemember] = useState(false)
  const [loading, setloading] = useState(true);
  
  const account = {
    email:"hakdog01@gmail.com",
    password:"12345"
  }

  const MyComponent = () => {
    const [text, setText] = React.useState('');
  };

  const handleLogin = () => {
    if (account.email === email && account.password === password) {
      return Alert.alert("Login Account", `email: ${email} \npassword: ${password}`);
  }
      return Alert.alert("Error Account", `email: ${email} \npassword: ${password}`);
  }

  setTimeout(() =>{
    setloading(false);
  }, 2000);

  return (

<View style={styles.container}>

      {/* loading  */}
  <View style={{zIndex: 1, position: 'absolute'}}>
    <ViewWithLoading loading={loading}>

    </ViewWithLoading>
  </View>

  <ImageBackground source={require('../assets/images/backg.jpg')} resizeMode="cover" style={styles.imagebg}>
      <Image source={require('../assets/images/backg.jpg')} style={styles.imageblur} resizeMode="cover" blurRadius={30}/> 

    <View style={styles.form}>
      <View style={styles.signin}><Text style={{fontFamily:'ubuntu-bold', fontSize: 50, color: 'rgb(67, 181, 160)' }}>Sign In</Text></View>

    {/* user container  */}
      <View style={{flexDirection: "row", height:70, padding: 20, marginTop: 10, marginLeft: 20, backgroundColor: 'transparent'}}>

        {/* profile image  */}
        <View style={{ flex: 0.2, backgroundColor: 'transparent'}}>
          <Image source={require('../assets/images/profile.png')} style={styles.image} resizeMode="contain"/>
        </View>

        {/* text username  */}
        <View style={{ flex: 0.6, backgroundColor: 'transparent', marginTop: 15}}>
          <TextInput
          value={email}
          style={styles.textbox}
          autoComplete={false}
          placeholder="Email"
          
          onChangeText={(text: string) =>{
            setEmail(text);
          }}
          /> 
        </View>

      </View>

    {/* password container  */}
      <View style={{flexDirection: "row", height:70, padding: 20,paddingTop: 0, marginLeft: 20, backgroundColor: 'transparent'}}>

        <View style={{ flex: 0.2, backgroundColor: 'transparent'}}>
          <Image source={require('../assets/images/pass.png')} style={styles.image} resizeMode="contain"/>
        </View>

        {/* text password */}
        <View style={{ flex: 0.6, backgroundColor: 'transparent', marginTop: 15}}>
          <TextInput
          value={password}
          style={styles.textbox}
          autoComplete={false}
          placeholder="Password"
          
          onChangeText={(text: string) =>{
            setPassword(text);
          }}
          secureTextEntry={visible}
          right={
          <TextInput.Icon name={visible ? "eye" : "eye-off"}
          onPress={() =>{
              setVisible(!visible);
          }}
          />}
          /> 

        </View>

      </View>

      <View style={{ flex: .4, flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'center', marginBottom: 10}}>
          <CheckBox title="Remember me" checked={remember} onPress={() => setRemember(!remember)}
            containerStyle={{flex: 0, marginLeft: 0, padding: 0, backgroundColor: 'transparent', borderWidth: 0}}
          />
        <Text style={{flex: .6,textDecorationLine: 'underline', color: 'rgb(76, 68, 207)'}}>Forgot Password?</Text>
      </View>

    {/* button login */}
      <View style={styles.button}>
      <Button
        title="Login"
        buttonStyle={{ backgroundColor: 'rgb(67, 181, 160)', width: 230, height: 40, borderRadius: 30}}
      onPress={handleLogin}
      />
    </View>

    <View style={{ flexDirection: "row", height: 30, padding: 20, alignSelf: 'center', backgroundColor: 'transparent'}}>
      <View style={{flex: .52, backgroundColor: 'transparent', width: 80, height: 25}}><Text >Dont have an account yet?</Text></View>
      <View style={{flex: .2,  backgroundColor: 'transparent',width: 30, height: 25}}><Text style={{color: 'rgb(76, 68, 207)', textDecorationLine: 'underline'}}>Sign Up!</Text></View>
    </View>

    <View style={{flexDirection: 'row', backgroundColor: 'transparent', margin: 30, marginBottom: 15}}>
      <View style={{backgroundColor: 'rgba(255, 255, 255, .5)', height: 1, flex: 1, alignSelf: 'center'}} />
      <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 18, color: 'white' }}>OR</Text>
      <View style={{backgroundColor: 'rgba(255, 255, 255, .5)', height: 1, flex: 1, alignSelf: 'center'}}/>
    </View>

    <View style={{flexDirection: 'row', backgroundColor: 'transparent', alignSelf: 'center'}}>
      <View style={styles.nobg}><Image source={require('../assets/images/facebook.png')} style={styles.icons} resizeMode="contain"/></View>
      <View style={styles.nobg}><Image source={require('../assets/images/google.png')} style={styles.icons} resizeMode="contain"/></View>
      <View style={styles.nobg}><Image source={require('../assets/images/twitter.png')} style={styles.icons} resizeMode="contain"/></View>
    </View>

    </View>
  
  </ImageBackground>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  nobg:{
    backgroundColor: 'transparent',
    margin: 10, marginTop: 0
  },
  imagebg:{
    width: '100%', height: 650
  },
  form:{
    width: '100%', height: '90%',
    borderTopRightRadius: 200, borderBottomLeftRadius: 150,
    position: 'absolute', bottom: 0,
    backgroundColor: 'rgba(155, 168, 184, .45)'
  },
  imageblur:{
    position: 'absolute',
    width: '100%', height: '90%',
    borderTopRightRadius: 200, borderBottomLeftRadius: 150,
    bottom: 0
  },
  image:{
    marginTop: 20,
    height: 35, width: 35
  },
  textbox:{
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, .4)',
    color: 'black',
    borderBottomWidth: 1.5,
    width: 200, height: 35
  },
  other:{
    backgroundColor: 'transparent',
    margin: 0, padding: 0,
    borderColor: 'white'
  },

  button:{
    alignSelf: 'center',
    width: 230, height: 40,
    borderRadius: 30,
    backgroundColor: 'transparent'
  },
  signin:{
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginTop: 50
  },
  icons:{
    width: 50, height:50
  }
});
