import react from "react";
import { Text , StyleSheet ,Image ,View } from "react-native";

const ImageDetails =({imageSource , title , score})=> {
    return(
    <View>
        <Image source={imageSource}></Image>
        <Text>Image {title}</Text>
        <Text>Image score - {score}</Text>
    </View>);
}

const styles = StyleSheet.create({})

export default ImageDetails;
