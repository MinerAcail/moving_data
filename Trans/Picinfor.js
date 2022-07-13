import React from 'react'
import { View, Dimensions,StyleSheet,TouchableOpacity,Image } from 'react-native'

const { width, height } = Dimensions.get('screen');


export const Picinfor = ({onPress, Title,source}) => {
  
  const imageW = width * 0.7;
const imageH = imageW * 1.54;

  
  
  return (
    <View style={styles.topmenu}>


        <Image source={source}   style={styles.Image}/>

  
     
         
            


            </View>

  )
}



const styles = StyleSheet.create ({


  Image:{
          
    width:300,
    height:320,
    borderRadius:13,
    resizeMode:"cover",





  
    
    
  
  },
  topmenu:{
    width,
    justifyContent:"center",
    alignItems:"center"
    
  }


  
    
   
    
  
    
  
  
  
  
   
  
  
  
   
   
  
  
  })
  
  
  