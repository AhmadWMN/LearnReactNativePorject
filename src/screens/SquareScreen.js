import react , {useReducer} from "react";
import {View, Text, Button , StyleSheet} from 'react-native';
import ColorDegree from "../components/ColorDegree";

const COLOR_DELTA = 15;

const reducer = (state , action) =>{

   switch(action.colorToChange){
      case 'red':
         return {...state, red: state.red + action.amount};
      case 'green':
         return {...state, green: state.green + action.amount};
      case 'blue' :
         return {...state, blue: state.blue + action.amount};
      default :
      return state;
   }

}

const SquareScreen = () => {

   const [state, dispatch] = useReducer(reducer, {red:0,green:0,blue:0});
   const {red , green , blue} = state;
;    
 return(
 <View>
    <ColorDegree 
    onIncrement={()=>dispatch({colorToChange:'red',amount : COLOR_DELTA})} 
    onDecrement={()=>dispatch({colorToChange:'red',amount :-1*COLOR_DELTA})} 
    color="red"
    />
    <ColorDegree 
    onIncrement={()=>dispatch({colorToChange:'green',amount : COLOR_DELTA})} 
    onDecrement={()=>dispatch({colorToChange:'green',amount : -1*COLOR_DELTA})}
    color="green"
    />
    <ColorDegree 
     onIncrement={()=>dispatch({colorToChange:'blue',amount : COLOR_DELTA})} 
     onDecrement={()=>dispatch({colorToChange:'blue',amount : -1*COLOR_DELTA})}
    color="blue"
    />
    <View style={{width:100, height:100, backgroundColor:`rgb(${red},${green},${blue})`}}/>
 </View>);
}

styles = StyleSheet.create({});


export default SquareScreen;
