import { StyleSheet, ImageBackground, Image, Alert} from 'react-native';
import {Button} from "react-native-elements";
import { useState, Fragment } from 'react';
import { TextInput } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as React from 'react';
import {Form, Formik} from 'formik';
import * as yup from "yup";


export default function TabOneScreen() {

  const [visible, setVisible] = useState(true);

  const loginSchema = yup.object({
    fname: yup.string().required('Field is required'),
    lname: yup.string().required('Field is required'),
    password: yup.string().required('Field is required'),
    cpassword: yup.string().required('Field is required'),
  });

return (
<View style={styles.nobg}>
<ImageBackground source={require('../assets/images/backg.jpg')} resizeMode="cover" style={styles.background}>
<Image source={require('../assets/images/backg.jpg')} style={styles.formblur} resizeMode="cover" blurRadius={10}/>
  <View style={styles.formblur}>
    <View style={styles.register}>
      <Text style={{fontFamily:'ubuntu-bold', fontSize: 50, color: '#c51365'}}>
        Register</Text>
    </View>

    <View style={styles.nobg}>
      <Formik
      initialValues={{
        email: '',
        password: '',
        cpassword: '',
        fname: '',
        lname: ''
        
      }}
      onSubmit={(values, actions)=>{
        if (values.password != values.cpassword){
          return Alert.alert("Password incorrect", `the password you typed \n do not match`);
        }
        return Alert.alert("Registered successfully!", `You can now log in`);
        
        }}
        validationSchema={loginSchema}
        validate={values => {
          const errors = {};
            if (!values.email) {
              errors.email = 'Email is required!';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
            errors.email = 'Invalid email address!';
          }
          return errors;
        }}
      >
        
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Fragment>
            {/* email  */}
            <View style={[styles.inputcontainer, styles.nobg]}> 
              <TextInput
                mode="outlined"
                theme={{ colors: { primary: '#c51365'}}}
                label="Email"
                value = {values.email}
                style={styles.textbox}
                autoComplete={false}
                error={errors.email ? true : false}
                onChangeText={handleChange('email')}
              />
              {errors.email &&
                <Text style={styles.errortext}>
                  {errors.email}
                </Text>
              }
            </View>

          {/* first name  */}
            <View style={[styles.inputcontainer, styles.nobg]}>
              <TextInput
                mode="outlined"
                theme={{ colors: { primary: '#c51365'}}}
                label= "First Name"
                value = {values.fname}
                autoComplete={true}
                style={styles.textbox}
                onChangeText={handleChange('fname')}
                error={errors.fname ? true : false}
              />
              {errors.fname &&
                <Text style={styles.errortext}>
                  {errors.fname}
                </Text>
              }
            </View> 
          {/* last name  */}
            <View style={[styles.inputcontainer, styles.nobg]}>
              <TextInput
              mode="outlined"
              theme={{ colors: { primary: '#c51365'}}}
              label="Last Name"
              value = {values.lname}
              autoComplete={true}
              style={styles.textbox}
              onChangeText={handleChange('lname')}
              error={errors.lname ? true : false}
              />
              {errors.lname &&
                <Text style={styles.errortext}>
                  {errors.lname}
                </Text>
              }
            </View> 
          
          {/* password  */}
       <View style={[styles.inputcontainer, styles.nobg]}>
            <TextInput
              mode="outlined"
              theme={{ colors: { primary: '#c51365'}}}
              label="Password"
              value={values.password}
              style={styles.textbox}
              autoComplete={false}
              onChangeText={handleChange('password')}
              secureTextEntry={visible}
              error={errors.password ? true : false}
              right={
              <TextInput.Icon name={visible ? "eye" : "eye-off"}
              onPress={() =>{
                setVisible(!visible);
              }}
              />}
            /> 
              {errors.password &&
                <Text style={styles.errortext}>
                  {errors.password}
                </Text>
              }
          </View>          
        {/* confirm pass  */}
          <View style={[styles.inputcontainer, styles.nobg]}>
            <TextInput
              mode="outlined"
              theme={{ colors: { primary: '#c51365'}}}
              label="Confirm Password"
              autoComplete={true}
              style={styles.textbox}
              onChangeText={handleChange('cpassword')}
              secureTextEntry={visible}
              error={errors.cpassword ? true : false}
            />
            {errors.cpassword &&
                <Text style={styles.errortext}>
                  {errors.cpassword}
                </Text>
              }
          </View>

        {/* button login */}
          <View style={styles.button}>
            <Button
              title="Register"
              style={{borderRadius: 30}}
              buttonStyle={{ backgroundColor: '#c51365', width: 160, height: 40, borderRadius: 30}}
              onPress={() => {handleSubmit()}}
            />
          </View>
          </Fragment>
        )}
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
    width: 250, height: 40, fontSize: 20,
    alignSelf: 'center'
  },
  inputcontainer:{
    margin: 10
  },
  button:{
    margin: 15,
    alignSelf: 'center',
    width: 160, height: 40,
    borderRadius: 30,
    backgroundColor: 'transparent'
  },
  errortext:{
    flex: 1,
    marginTop: 45,
    color: 'red',
    width: 240,
    alignSelf: 'center',
    position: 'absolute'
  }
});
