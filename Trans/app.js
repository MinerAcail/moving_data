import { View,Text, Platform ,StyleSheet,Image,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { Colour } from '../../Component/colors'
import Mw from './birth.jpg'



const VNote = ({value,onChangeText,source,navigation}) => {

  function MakeNotenavigate(){

    navigation.navigate('Other');

  } 



  return (
  
<View style={{

   flex:1,
    backgroundColor:"#755980",
    justifyContent:"center",
    alignItems:"center"
}}>
    <TouchableOpacity style={styles.title}  onPress={MakeNotenavigate}>

<Text style={styles.titleView}   >
  Add Title
</Text>

</TouchableOpacity>

        
      <View  style={styles.Viewitem}>
        <View style={styles.imgitem}>
            <Image 
             source={Mw}
            style={styles.Image} />
        </View>

        <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    
    >


        <TextInput
         
         multiline={true}
         numberOfLines={100}
         
        style={styles.textitem}
     
        placeholder="My Note"
      
       
        onChangeText={onChangeText}
        value={value}
      />

    </KeyboardAvoidingView>


    </View>

    </View>

     
  

  
  )
}
export default VNote

const styles = StyleSheet.create ({
    title:{
        width:110,
        borderRadius:17,
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:20
        
    
    
      },
    
      titleView:{
        fontSize:18,
        fontWeight: "bold",
      /*   marginLeft:20, */
        
        fontFamily:'MontserratV'
      
       
    
      },
  Viewitem:{

    


    backgroundColor:"red",



 /*    marginVertical:10, */
    width:350,
    height:400,
   
    borderBottomEndRadius:17,
    borderBottomStartRadius:17,
    borderTopEndRadius:5,
    borderTopStartRadius:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,






},
imgitem:{
         
  borderRadius:5,
  justifyContent:"center",
  alignItems:"center",
  width:"100%",
  height:130,

  marginTop:1,



 
},
Image:{
          
  width:310,
  height:120,
  resizeMode:"stretch",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:3,
  

  
  

},


textitem:{
  fontSize: 15,
  height:250,

  width:"100%",


  borderRadius:12,
  paddingHorizontal:12,
  paddingVertical:25 ,
  textAlignVertical:"top",
  top:Platform.OS === 'ios' ? 13 :-13,







  


},

Baritem:{
  left:"57%",
  bottom:-15,
 
  position:"absolute",

 
},

button:{
width:130,
height:50,
paddingHorizontal:30,
borderRadius:17,
backgroundColor:"blue",

flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",

paddingHorizontal:24,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,





  

}, 


})




