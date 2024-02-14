import react ,{useState} from "react";
import {View ,Text ,Button , StyleSheet ,FlatList} from 'react-native';


const ColorScreen =()=> {

    const [colors ,setColors] = useState([]);

    return(
    <View>
        <Button
        onPress={()=>setColors([...colors,randomDegrees()])}
        title="Add a Color"/>


        <FlatList
        keyExtractor={(item)=>item}
        data={colors}
        renderItem={({item})=>{
            return(<View style={{width:100,height:100,backgroundColor:item}}/>)}}
        />
    </View>);
}

const randomDegrees = ()=> {
    const red =   Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue =  Math.floor(Math.random()*256)

    return `rgb(${red},${green},${blue})`
}


styles = StyleSheet.create({});

export default ColorScreen;
