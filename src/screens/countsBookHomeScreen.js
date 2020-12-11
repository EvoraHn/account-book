import React, { useState, useEffect } from "react";
import {Container, Text,Card,CardItem,Left,Right,Body,Button} from "native-base";
import {StyleSheet,Image,Dimensions,ScrollView} from "react-native";

//Obtener los valores por destructuring
const { width, height } = Dimensions.get("window");
const countsBookhomeScreen = ({navigation}) => {
    return (
        <Container style={styles.main}>
            
            <CardItem transparent style={{backgroundColor:'#FAF8DC',}}> 
                    <Left>
                        <Text style={styles.title}>Account</Text>
                    </Left>   
                    
                    <Right>
                        <Image source={require("../img/AccountsBook.png")}
                         transparent style={styles.ImageLogo}/>
                    </Right>
            </CardItem >
            <CardItem transparent style={{backgroundColor:'#FAF8DC',}} >
                <Left>
                    <Text style={styles.subtitle}>Book</Text>
                </Left>
            </CardItem>
            
           <Container style={styles.verticalContainer}>

               <Container style={styles.horizontalContainer}>
                   <ScrollView horizontal={true} style={{height:10}}>
                   <Card transparent >
                        <CardItem style={styles.cardItem}>
                            <Button transparent style={styles.buttonContent}>
                                <Body style={styles.mainContent}>
                                    <Image source={require("../img/image.png")}
                                    transparent style={styles.ImageLogo}/>
                                <Text onPress={()=>
                                {navigation.navigate("allAccountScreen")}}>
                                    tarjeta 1 
                                </Text>
                                </Body>
                            </Button>
                        </CardItem> 
                    </Card>
                    <Card transparent >
                        <CardItem style={styles.cardItem}>
                            <Button transparent style={styles.buttonContent}>
                                <Body style={styles.mainContent}>
                                    <Image source={require("../img/image.png")}
                                    transparent style={styles.ImageLogo}/>
                                <Text>
                                    tarjeta 2 
                                </Text>
                                </Body>
                            </Button>
                        </CardItem> 
                    </Card>
                    <Card transparent >
                        <CardItem style={styles.cardItem}>
                            <Button transparent style={styles.buttonContent}>
                                <Body style={styles.mainContent}>
                                    <Image source={require("../img/image.png")}
                                    transparent style={styles.ImageLogo}/>
                                <Text>
                                    tarjeta s 
                                </Text>
                                </Body>
                            </Button>
                        </CardItem> 
                    </Card>
                   </ScrollView>
                   <Card transparent style={{height:500,alignItems:"center",backgroundColor:'#FAF8DC',}}>
                        <CardItem transparent style={{backgroundColor:'#FAF8DC',}}>
                            <Button transparent >
                                    <Image source={require("../img/about.png")}
                                    transparent style={{height:width*.58,width:width*.51,backgroundColor:'#FAF8DC'}}/>
                            </Button>
                        </CardItem> 
                    </Card>
               </Container>
               
               <Container style={styles.verticalbar}>
                   <Button style={styles.verticalBarContent} onPress={()=>
                            {navigation.navigate("newAccountScreen")}}>
                        <Text style={styles.verticalBarText}  >
                           Nueva Cuenta
                        </Text>
                   </Button>
               </Container>
               
            </Container>
        </Container>
    );
     
    
};
const styles = StyleSheet.create({

    main:{
        marginTop:32,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#FAF8DC',
    },
    verticalContainer:{
        flexDirection:'row',
        backgroundColor:'#FAF8DC',
    },
    horizontalContainer:{
        width:10,
        flexDirection:'column',
        backgroundColor:'#FAF8DC',
    },
    ImageLogo:{
        width:150,
        height:150,
        resizeMode: "contain",
        backgroundColor:'#FAF8DC',
    },
    title:{
        marginTop:-50,
        fontSize:50,
        backgroundColor:'#FAF8DC',
    },
    subtitle:{
        marginTop:-100,
        fontSize:50,
        backgroundColor:'#FAF8DC',
    },
    verticalbar:{
        flex:.20, 
        backgroundColor:'#FAF8DC',
       },
    verticalBarText:{ 
        transform: [{ rotate: '270deg'}],
        color:"white",
        fontSize:30,
        width:250,
        marginRight:20,
    },
    verticalBarContent:{
        borderRadius:30,
        flex:.7,
        //height:500,
        marginRight:-30,
        marginLeft:5,
        //marginTop:30,
        backgroundColor:'#111E6C',
        textAlign:"center",
        justifyContent:"center",
    },
    mainContent:{
        alignItems:"center",
        //justifyContent:"center",
        //backgroundColor:'#FAF8DC',
    },
    cardItem:{
        borderRadius:30,
        backgroundColor:'#cdcdcd'
    },
    buttonContent:{
        backgroundColor:'#cdcdcd',
        borderStyle:"dotted",
        height:200,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
    },
    



})
export default countsBookhomeScreen;