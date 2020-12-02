import React, { useState, useEffect } from "react";
import {Container, Text,Card,CardItem,Left,Right,Body,Button} from "native-base";
import {StyleSheet,Image,Dimensions,ScrollView} from "react-native";

//Obtener los valores por destructuring
const { width, height } = Dimensions.get("window");
const countsBookhomeScreen = ({navigation}) => {
    return (
        <Container style={styles.main}>
            
            <CardItem> 
                    <Left>
                        <Text style={styles.title}>Account</Text>
                    </Left>   
                    
                    <Right>
                        <Image source={require("../img/AccountsBook.jpg")}
                         transparent style={styles.ImageLogo}/>
                    </Right>
                    </CardItem>
                    <CardItem >
                        <Left>
                            <Text style={styles.subtitle}>Book</Text>
                        </Left>
                    </CardItem>
            
           <Container style={styles.verticalContainer}>

               <Container style={styles.horizontalContainer}>
                   <ScrollView horizontal={true}>
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
                                    tarjeta 3 
                                </Text>
                                </Body>
                            </Button>
                        </CardItem> 
                    </Card>
                   </ScrollView>
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
    },
    verticalContainer:{
        flexDirection:'row',
        backgroundColor:'green',
        
    },
    horizontalContainer:{
        width:10,
        flexDirection:'column',
        //backgroundColor:'pink',
       
    },
    ImageLogo:{
        width:150,
        height:150,
        resizeMode: "contain",
    },
    title:{
        marginTop:-50,
        fontSize:50,
    },
    subtitle:{
        marginTop:-100,
        fontSize:50,
    },
    verticalbar:{
        flex:.20, 
       },
    verticalBarText:{ 
        transform: [{ rotate: '270deg'}],
        color:"white",
        fontSize:30,
        width:250,
        //height:300,
        //alignSelf:"flex-end",
        marginRight:20
    },
    verticalBarContent:{
        borderRadius:30,
        flex:.7,
        //height:500,
        marginRight:-30,
        marginLeft:5,
        //marginTop:30,
        backgroundColor:'blue',
        textAlign:"center",
        justifyContent:"center",
    },
    mainContent:{
        alignItems:"center",
        //justifyContent:"center",
    },
    cardItem:{
        borderRadius:30,
        backgroundColor:'grey'
    },
    buttonContent:{
        backgroundColor:'grey',
        borderStyle:"dotted",
        height:200,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
    },
    



})
export default countsBookhomeScreen;