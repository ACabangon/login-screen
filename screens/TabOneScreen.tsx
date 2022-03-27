import { StyleSheet, ImageBackground, Image, Alert} from 'react-native';
import {Button} from "react-native-elements";
import { useState, Fragment } from 'react';
import { TextInput } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as React from 'react';
import {Formik} from 'formik';
//import * as yup from "yup";


export default function TabOneScreen() {

  const [visible, setVisible] = useState(true);

  // const handleRegister = () => {

  //   if (email === "" || fname === "" || lname === "" || password === "" || cpassword === "") {
  //     return Alert.alert("Login failed", `please fill all the fields`);
  //   }else if (password != cpassword){
  //     return Alert.alert("Password incorrect", `the password you typed \n do not match`);
  //   }
  //     return Alert.alert("Registered successfully!", `You can now log in`);
  // }

return (
<View>
<ImageBackground source={require('../assets/images/backg.jpg')} resizeMode="cover" style={styles.background}>
<Image source={require('../assets/images/backg.jpg')} style={styles.formblur} resizeMode="cover" blurRadius={10}/>
  <View style={styles.formblur}>
    <View style={styles.register}>
      <Text style={{fontFamily:'ubuntu-bold', fontSize: 50, color: '#c51365'}}>
        Register</Text>
    </View>

    <View style={{flex: 1}}>
      <Formik
      initialValues={{
        email: '',
        password: '',
        cpassword: '',
        fname: '',
        lname: ''
        
      }}
      onSubmit={(values, actions)=>{
        console.log(values);
      }}
      >
        {({ values, handleChange, handleSubmit, errors, touched })=>{
          <Fragment>
          {/* email  */}
            <View style={styles.nobg}> 
              <TextInput
                mode="outlined"
                theme={{ colors: { primary: '#c51365'}}}
                label="Email"
                value = {values.email}
                style={styles.textbox}
                autoComplete={false}
                onChangeText={handleChange('email')}
              />
            </View>

          {/* first name  */}
            <View style={styles.nobg}>
              <TextInput
                mode="outlined"
                theme={{ colors: { primary: '#c51365'}}}
                label= "First Name"
                value = {values.fname}
                autoComplete={true}
                style={styles.textbox}
                onChangeText={handleChange('fname')}
              />
            </View> 
          {/* last name  */}
            <View style={styles.nobg}>
              <TextInput
              mode="outlined"
              theme={{ colors: { primary: '#c51365'}}}
              label="Last Name"
              value = {values.lname}
              autoComplete={true}
              style={styles.textbox}
              onChangeText={handleChange('lname')}
              />
            </View> 
          
          {/* password  */}
       <View style={styles.nobg}>
            <TextInput
              mode="outlined"
              theme={{ colors: { primary: '#c51365'}}}
              label="Password"
              value={values.password}
              style={styles.textbox}
              autoComplete={false}
              onChangeText={handleChange('password')}
              secureTextEntry={visible}
              right={
              <TextInput.Icon name={visible ? "eye" : "eye-off"}
              onPress={() =>{
                setVisible(!visible);
              }}
              />}
            /> 
          </View>          

        {/* confirm pass  */}
          <View style={styles.nobg}>
            <TextInput
              mode="outlined"
              theme={{ colors: { primary: '#c51365'}}}
              label="Confirm Password"
              autoComplete={true}
              style={styles.textbox}
              onChangeText={handleChange('cpassword')}
              secureTextEntry={visible}
            />
          </View>

        {/* button login */}
          <View style={styles.button}>
            <Button
              title="Register"
              buttonStyle={{ backgroundColor: '#c51365', width: 160, height: 40, borderRadius: 30}}
              //onPress={handleRegister}
            />
          </View>

          </Fragment>
        }}

      </Formik>
       
     {/* end all textinput container*/}
    </View>

  {/* end form blur */}
  </View> 
</ImageBackground>
</View>

  );
}

const styles = StyleSheet.create({
  background:{
    width: '100%', height: '100%'
  },
  formblur:{
    backgroundColor: 'rgba(155, 168, 184, .45)',
    position: 'absolute',
    width: '100%', height: '90%',
    borderTopRightRadius: 200, borderBottomLeftRadius: 150,
    bottom: 0
  },
  nobg:{
    backgroundColor: 'transparent'
  },
  register:{
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginTop: 50, marginBottom: 20
  },
  textbox:{
    backgroundColor: 'rgb(255, 255, 255)',
    width: 250, height: 40, fontSize: 17,
    margin: 10,
    alignSelf: 'center',
    flex: 1
  },
  button:{
    margin: 15,
    alignSelf: 'center',
    width: 160, height: 40,
    borderRadius: 30,
    backgroundColor: 'transparent'
  },
});
