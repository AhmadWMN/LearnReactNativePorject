import react, { useState } from "react";
import {View , StyleSheet , Button , Text} from 'react-native';

const CounterScreen =()=>{

    const [counter , setCounter] = useState(0);
    return(
    <View>
        <Button 
        title="Increment" 
        onPress={
            ()=>{
            setCounter(counter + 1);
            console.log(counter);}
        }
        />
        <Button title="Decrement" 
        onPress={()=>{
            setCounter(counter - 1);
            console.log(counter);
        }}/>
        <Text>Counter : {counter} </Text>
    </View>);
}

const styles = StyleSheet.create({});

export default CounterScreen;