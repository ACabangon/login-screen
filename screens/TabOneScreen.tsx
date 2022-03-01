import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#d6c1bd',
      alignItems: 'center',
      padding: 20
    }}>   
    <Text style={{fontSize: 30}}>LOGIN</Text>

      <View style={{margin: 20, padding:30, width: 250, height: 250, backgroundColor: '#a0b3a8', elevation: 20, alignItems: 'center'}}>
        
        <View style={{backgroundColor: 'transparent'}}>
          <Text>Username:</Text>
          <Text style={{borderWidth: 1, borderColor: "black", backgroundColor: "white", borderRadius: 15, height: 25, width: 200 }}/>
        </View>

        <View style={{ backgroundColor: 'transparent'}}>
          <Text style={{marginTop: 20}}>Password:</Text>
          <Text style={{borderWidth: 1, borderColor: "black", backgroundColor: "white", borderRadius: 15, height: 25, width: 200 }}/>
          <Text style={{fontSize: 12, textDecorationLine: 'underline', marginLeft: 10}}>Forgot Password?</Text>
        </View>
        <Text style={{backgroundColor: '#c895a4', borderWidth: 1, marginTop: 35, width: 80, textAlign: 'center', alignSelf: 'center', color: "black"}}>Login</Text>
      </View>
    </View>
    
  );
}
const image = {uri: "assets\images\clouds.jpg"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
