
import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
  return (<View style={{flexDirection:'column'}}>
    <View style={{flexDirection:'row'}}>

    <View  style={styles.outer}>
    <Text
     style={styles.container}
    > Name : </Text>
    
    <Text
      style={styles.container}
    > Phone Number : </Text>
    <Text
      style={styles.container}
    > email-address : </Text>
    <Text
     style={styles.container}
    > Message : </Text> 
   
</View>


<View  style={styles.outer}>
    <Text
   style={styles.rectangle}
    > {route.params.name}</Text>
    <Text
   style={styles.rectangle}
    >{route.params.number}</Text>
    <Text
    style={styles.rectangle}
    > {route.params.email}</Text>
    
   
</View>

</View>
<View
style={{marginHorizontal: 24, borderWidth: 1,
    borderColor: "#223e4b",borderRadius:8,}}
>
<Text
  style={styles.outerRectangle}
    > {route.params.message}</Text>
    </View>
</View>
  );
};


const styles = StyleSheet.create({
  rectangle:{
    padding: 8,
    marginTop: 11,
    borderWidth: 1,
    borderColor: "#223e4b",
    borderRadius:8,
    width:170,
    justifyContent: 'center',
    alignItems: 'center',
      
  }, outerRectangle:{
    padding: 8, 
    justifyContent: 'top',
    alignItems: 'top',
    height:'100%',
    flexWrap: 'wrap',
flexDirection: 'row',
      
  },
  container:{
    padding:16
  },
  outer:{
  paddingHorizontal: 5,
  marginTop: 50,
  justifyContent: 'top',
  alignItems: 'top',
  }
})

export default ProfileScreen;