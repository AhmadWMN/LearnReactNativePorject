import react ,{useState} from "react";
import {View, Text, Button , StyleSheet} from 'react-native';


const ColorDegree = ({color , onIncrement , onDecrement})=>{
    return(
    <View>
        <Text>{color}</Text>
        <Button title="+" onPress={()=>{onIncrement()}}/>
        <Button title="-" onPress={()=>{onDecrement()}}/>
    </View>);
}


const style = StyleSheet.create({});


export default ColorDegree;
