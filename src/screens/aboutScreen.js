
import React from "react";
import{StyleSheet,Image,Dimensions,ScrollView} from "react-native";
import{Container,Text,Card,CardItem,Button,Body,Item, Left, Right} from "native-base";
const { width } = Dimensions.get("window");
const aboutScreen =({navigation}) => {

    return (
        <Container style={styles.main}>
            <Container style={styles.verticalContainer}>
                <Container style={styles.verticalbar}>
                    
                    <Button style={styles.verticalBarContent} onPress={()=>
                                {navigation.navigate("countsBookHomeScreen")}}>
                                    <Text/>
                    </Button>
                </Container>
               <Container style={styles.horizontalContainer}>
                   <Text style={styles.title}>Accounts Book</Text>
                   <Image source={require("../img/AccountsBook.png")}
                                    transparent style={styles.ImageLogo}/> 
                    <Text style={styles.title}> Version Develop </Text>
                    <Text>Codificado & diseñado por</Text>
                    <Text>Ariel Lutz & Eliab Evora</Text>
               </Container>
            </Container>
        </Container>       
    )
} 

const styles = StyleSheet.create({
    main:{
        marginTop:32,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#FAF8DC',
    },
    verticalbar:{
        flex:.10,
        alignSelf:"center",
        justifyContent:"center",
        backgroundColor:'#FAF8DC',
    },
    verticalBarText:{ 
        transform: [{ rotate: '90deg'}],
        color:"white",
        fontSize:30,
        width:200,
        alignSelf:"flex-end",
        marginRight:-30
    },
    verticalBarContent:{
        flex:.7,
        borderRadius:30,
        width:50,
        marginLeft:-30,
        marginRight:5,
        backgroundColor:'#111E6C',
        textAlign:"center",
        justifyContent:"center",
    },
    verticalContainer:{
        flexDirection:'row',
        backgroundColor:'#FAF8DC',
    },
    horizontalContainer:{
        width:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        textAlign:'center',
        backgroundColor:'#FAF8DC',
    },
    
    ImageLogo:{
        marginTop:width*.2,
        marginBottom:width*.1,
        width:width*0.8,
        height:width*0.99,
        resizeMode: "contain",
        
    },
    
    title:{
        marginTop:width*.1,
        fontSize:width*.11
    },
})
export default aboutScreen;