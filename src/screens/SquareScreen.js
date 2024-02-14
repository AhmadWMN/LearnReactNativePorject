import react , {useState} from "react";
import {View, Text, Button , StyleSheet} from 'react-native';
import ColorDegree from "../components/ColorDegree";

const COLOR_DELTA = 15;

const SquareScreen = () => {

    const [red ,setRed] = useState(0);
    const [green ,setGreen] = useState(0);
    const [blue ,setBlue] = useState(0);

const setColor =(color , change) => {

   switch (color) {
      case 'red':
         red+change >=255 || red+change <= 0 ? null :setRed(red+change)
         return
      case 'green':
         green+change >=255 || green+change <= 0 ? null :setGreen(green+change)
         return
      case 'blue':
         blue+change >=255 || blue+change <= 0 ? null :setBlue(blue+change)
         return
   } 
}
    
 return(
 <View>
    <ColorDegree 
    onIncrement={()=>{setColor('red',COLOR_DELTA)}} 
    onDecrement={()=>{setColor('red',-1*COLOR_DELTA)}} 
    color="red"
    />
    <ColorDegree 
    onIncrement={()=>{setColor('green',COLOR_DELTA)}} 
    onDecrement={()=>{setColor('green',-1*COLOR_DELTA)}} 
    color="green"
    />
    <ColorDegree 
    onIncrement={()=>{setColor('blue',COLOR_DELTA)}} 
    onDecrement={()=>{setColor('blue',-1*COLOR_DELTA)}} 
    color="blue"
    />
    <View style={{width:100, height:100, backgroundColor:`rgb(${red},${green},${blue})`}}/>
 </View>);
}

styles = StyleSheet.create({});


export default SquareScreen;
