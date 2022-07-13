import React,{useState} from 'react'
import { View,Text, Platform ,StyleSheet,Image,KeyboardAvoidingView,TextInput,TouchableOpacity, SafeAreaView, Dimensions, StatusBar, FlatList} from 'react-native'

import { Picinfor } from './Picinfor';
import { Wordinfor } from './wordinfor';

const { width, height } = Dimensions.get('screen');

const DATA = [
  {
    id: '1',
    title: 'Afro vibes',
    location: 'Mumbai, India',
    date: 'Nov 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
  },
  {
    id: '2',

    title: 'Jungle Party',
    location: 'Unknown',
    date: 'Sept 3rd, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
      
  },
  {
    id: '3',

    title: '4th Of July',
    location: 'New York, USA',
    date: 'Oct 11th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
  },
  {
    id: '4',

    title: 'Summer festival',
    location: 'Bucharest, Romania',
    date: 'Aug 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
  },
  {
    id: '5',

    title: 'BBQ with friends',
    location: 'Prague, Czech Republic',
    date: 'Sept 11th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
  },
  {
    id: '6',

    title: 'Festival music',
    location: 'Berlin, Germany',
    date: 'Apr 21th, 2021',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
  },
  {
    id: '7',

    title: 'Beach House',
    location: 'Liboa, Portugal',
    date: 'Aug 12th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
  },
];





function Other() {

  const [Pastimg, setPastimg] = useState(DATA)

 


  const [Past, setPast] = useState(DATA)
  return (
    <SafeAreaView style={{ flex:1,
      width:"100%",
      height:"100%",
      alignItems:"center",
      justifyContent:"center",
      /* backgroundColor:Colour.Bgcolor, */
      flex:1,
      

    
    }}>

       <StatusBar hidden />
        <TouchableOpacity style={styles.cycle} /* onPress={MakeNotenavigate} */></TouchableOpacity>
      
        <View style={{
        width,
        height:"70%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
       
      }}>
        <FlatList 
            data={Pastimg}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            renderItem={({ item }) =>(
              <TouchableOpacity style={styles.toptext}
              onPress={() =>{
                console.warn(item.poster)
               
              }}
              >

                <Picinfor  source={{ uri: item.poster }} />
              </TouchableOpacity>

            ) }
          />


      </View>

       
      <View style={{
        width,
        height:"30%",
        flex: 1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",

      }}>

        <FlatList 
            data={Past}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            renderItem={({ item }) =>(
              <TouchableOpacity
              onPress={() =>{
                console.warn(item.title)
                navigation.navigate('NoteView', {postt});
  
              }}
             
              >
                <Wordinfor  Title={item.title} />
              </TouchableOpacity>

            ) }
           

            />

     
      </View>


    </SafeAreaView>
    
  )
}

export default Other


const styles = StyleSheet.create ({

  backgroundColor: {
    flex: 1,
    justifyContent:'center',
    alignItems:"center",

    


   
   
  },





  cycle:{
    width:30,
    height:30,
   /*  backgroundColor:Colour.TTextcolor, */
    borderRadius:200,
    shadowColor: "#000",
    position:"absolute",
    zIndex:1,
   
    left:"90%",
   top:"1%"


  }
})












