import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Dimensions } from 'react-native'


const { width, height } = Dimensions.get('screen');

  

export const Wordinfor = ({Title,Name}) => {

    const imageW = width * 0.7;
    const imageH = imageW * 1.54;
    
  return (
    <View style={styles.topmenu}>


   
          <View style={styles.TextView}>
            <Text style={styles.Text}>
                {Title}
            </Text>

          </View>
    

    </View>

  )
}



const styles = StyleSheet.create ({
   
  TextView:{
    height:50,
   /*  backgroundColor:Colour.Boxcolor, */
   backgroundColor:"blue",

    justifyContent:"space-around",
    marginHorizontal:20,
    alignItems:"center",
    borderRadius:10,

    
},
Text:{
    paddingHorizontal:20,
    /* color:Colour.Textcolor, */
    fontSize:17,
    fontFamily:'MontserratA'

},


topmenu:{
    width,
    justifyContent:"center",
    alignItems:"center"
}

   
  
    
   
    
  
    
  
  
  
  
   
  
  
  
   
   
  
  
  })
  
  
  