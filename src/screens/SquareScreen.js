import react , {useState} from "react";
import {View, Text, Button , StyleSheet} from 'react-native';
import ColorDegree from "../components/ColorDegree";


const SquareScreen = () => {
    const [red ,setRed] = useState(0);
    const [green ,setGreen] = useState(0);
    const [blue ,setBlue] = useState(0);
 return(
 <View>
    {/* <Text>Red degree : {red}</Text>
    <Button title="+" onPress={()=>{setRed(red+1)}}/>
    <Button title="-" onPress={()=>{setRed(red-1)}}/>
    <Text>Green degree  : {green}</Text>
    <Button title="+" onPress={()=>{setGreen(green+1)}}/>
    <Button title="-" onPress={()=>{setGreen(green-1)}}/>
    <Text>Blue degree  : {blue}</Text>
    <Button title="+" onPress={()=>{setBlue(blue+1)}}/>
    <Button title="-" onPress={()=>{setBlue(blue-1)}}/> */}
    <ColorDegree onIncrement={()=>{setRed(red+1)}} onDecrement={()=>{setRed(red-1)}} color="red"/>
    <ColorDegree onIncrement={()=>{setGreen(green+1)}} onDecrement={()=>{setGreen(green-1)}} color="green"/>
    <ColorDegree onIncrement={()=>{setBlue(blue+1)}} onDecrement={()=>{setBlue(blue-1)}} color="blue"/>
    <View style={{width:100, height:100, backgroundColor:`rgb(${red},${green},${blue})`}}></View>
 </View>);
}

styles = StyleSheet.create({});


export default SquareScreen;
