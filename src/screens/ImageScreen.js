import react from "react";
import { Text , StyleSheet ,View } from "react-native";
import ImageDetails from '../components/ImageDetails'

const ImageScreen =()=> {
    return(
    <View>
        <ImageDetails title="Forests" imageSource={require('../../assets/forest.jpg')} score ={9}/>
        <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} score ={10}/>
        <ImageDetails title="Mountains" imageSource={require('../../assets/mountain.jpg')} score ={5}/>   
    </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;
