import react , {useState} from "react";
import {View, Text, Button , StyleSheet} from 'react-native';
import ColorDegree from "../components/ColorDegree";

const COLOR_DELTA = 15;

const SquareScreen = () => {

    const [red ,setRed] = useState(0);
    const [green ,setGreen] = useState(0);
    const [blue ,setBlue] = useState(0);
    
 return(
 <View>
    <ColorDegree 
    onIncrement={()=>{if (red<255)setRed(red+COLOR_DELTA)}} 
    onDecrement={()=>{if (red>0)setRed(red-COLOR_DELTA)}} 
    color="red"
    />
    <ColorDegree 
    onIncrement={()=>{if (green<255)setGreen(green+COLOR_DELTA)}} 
    onDecrement={()=>{if (green>0)setGreen(green-COLOR_DELTA)}} 
    color="green"
    />
    <ColorDegree 
    onIncrement={()=>{if (blue<255)setBlue(blue+COLOR_DELTA)}} 
    onDecrement={()=>{if (blue>0)setBlue(blue-COLOR_DELTA)}} 
    color="blue"
    />
    <View style={{width:100, height:100, backgroundColor:`rgb(${red},${green},${blue})`}}/>
 </View>);
}

styles = StyleSheet.create({});


export default SquareScreen;
