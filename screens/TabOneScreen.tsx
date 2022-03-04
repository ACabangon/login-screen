import { StyleSheet, ImageBackground, Image } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/backg.jpg')} resizeMode="cover" style={styles.imagebg}>
      <Image source={require('../assets/images/backg.jpg')} style={styles.imageblur} resizeMode="cover" blurRadius={30}/> 

    <View style={styles.form}>
      <View style={styles.signin}><Text style={{fontFamily:'ubuntu-bold', fontSize: 50, color: 'rgb(67, 181, 160)' }}>Sign In</Text></View>

      <View style={{ flexDirection: "row", height: 100, padding: 20, marginTop: 10, marginLeft: 20, backgroundColor: 'transparent'}}>
        <View style={{ flex: 0.2, backgroundColor: 'transparent'}}>
          <Image source={require('../assets/images/profile.png')} style={styles.image} resizeMode="contain"/>
        </View>
        <View style={{ flex: 0.6, backgroundColor: 'transparent'}}>
          <Text style={styles.textbox}>{'\t Username'}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", height: 100, padding: 20,paddingTop: 0, marginLeft: 20, backgroundColor: 'transparent'}}>
        <View style={{ flex: 0.24, backgroundColor: 'transparent'}}>
          <Image source={require('../assets/images/pass.png')} style={styles.image} resizeMode="contain"/>
        </View>

        <View style={{ flex: 0.6, backgroundColor: 'transparent'}}>
          <Text style={styles.textbox}>{'\t Password '}</Text>
          <Text style={{position:'relative', left: -30, textDecorationLine: 'underline', color: 'rgb(76, 68, 207)', marginTop: 8}}>Forgot Password?</Text>
        </View>
        <Image source={require('../assets/images/hide.png')} style={{width: 25, height: 16}}/>
      </View>
    
    <View style={styles.button}>
      <Text style={{fontFamily:'ubuntu-reg', textAlign: 'center', margin: 10, fontSize: 17}}>LOGIN</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imagebg:{
    width: '100%', height: '100%'
  },
  form:{
    width: '100%', height: '90%',
    borderTopRightRadius: 200, borderBottomLeftRadius: 150,
    position: 'absolute',bottom: 0,
    backgroundColor: 'rgba(155, 168, 184, .45)'
  },
  imageblur:{
    position: 'absolute',
    width: '100%', height: '90%',
    borderTopRightRadius: 200, borderBottomLeftRadius: 150,
    bottom: 0
  },
  image:{
    height: 35, width: 35
  },
  textbox:{
    alignSelf: 'center',
    borderColor: 'rgba(255, 255, 255, .4)',
    color: 'rgba(255, 255, 255, .55)',
    borderBottomWidth: 1.5,
    width: 220, height: 30
  },
  button:{
    alignSelf: 'center',
    width: 250, height: 40,
    borderRadius: 30,
    backgroundColor: 'rgb(67, 181, 160)'
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
