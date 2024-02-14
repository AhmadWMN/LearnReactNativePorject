import React from "react";
import {Text ,StyleSheet,FlatList} from "react-native";


const ListScreen = () => {

    const Data = [
        {name: 'Ahmad',key:'1',age:'Age 24'},
        {name: 'Ali',key:'2',age:'Age 60'},
        {name: 'Mohammad',key:'3',age:'Age 23'},
        {name: 'Rami',key:'4',age:'Age 47'},
        {name: 'Solaiman',key:'5',age:'Age 28'},
        {name: 'Alaa',key:'6',age:'Age 43'},
        {name: 'Ibraheem',key:'7',age:'Age 24'},
        {name: 'Omar',key:'8',age:'Age 23'},
        {name: 'Amr',key:'9',age:'Age 23'},
        {name: 'Kareem',key:'10',age:'Age 19'}
    ]

 return(
 <FlatList
 showsVerticalScrollIndicator={true}
 keyExtractor={(item)=>{
  item.key.toString
 }}
 data={Data}
 renderItem={({item})=>{return(<Text style={styles.textStyle}>{item.name} - {item.age}</Text>)}}
 />
);   
}


const styles = StyleSheet.create({
  textStyle: {
    fontSize:30,
    marginVertical:30,
  }
})


export default ListScreen;