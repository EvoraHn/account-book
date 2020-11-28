import React from "react";
import {Container, Text,Card,CardItem,Left,Right,Body} from "native-base";
import
    {StyleSheet,Image,Dimensions} 
from "react-native";
const countsBookhomeScreen = () => {
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
                    <Card transparent>
                        <CardItem style={styles.cardItem}>
                            <Body style={styles.mainContent}>
                                <Image source={require("../img/image.png")}
                                transparent style={styles.ImageLogo}/>
                                <Text>
                                    Hola
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card transparent>
                        <CardItem style={styles.cardItem}>
                            <Body style={styles.mainContent}>
                                <Image source={require("../img/image.png")}
                                transparent style={styles.ImageLogo}/>
                                <Text>
                                    Hola
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card transparent>
                        <CardItem style={styles.cardItem}>
                            <Body style={styles.mainContent}>
                                <Image source={require("../img/image.png")}
                                transparent style={styles.ImageLogo}/>
                                <Text>
                                    Hola
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    
               </Container>
               
               <Container style={styles.verticalbar}>
                   <Card style={styles.verticalBarContent}>
                        <Text style={{ transform: [{ rotate: '270deg'}],color:"white",fontSize:30,width:200,alignSelf:"flex-end",marginRight:-30}}>
                           Nueva Cuenta
                        </Text>
                   </Card>
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
        flex:.25, 
        //flexDirection:'column',
        //backgroundColor:'red',
        //justifyContent:"center",
        //alignItems:"center",
        //paddingBottom:200
        
       },
    mainContent:{
        alignItems:"center",
        justifyContent:"center",
        
        
    },
    verticalBarContent:{
        borderRadius:30,
        height:600,
        marginRight:-30,
        marginLeft:5,
        marginTop:30,
        backgroundColor:'blue',
        textAlign:"center",
        justifyContent:"center",
        
        
    },
    cardItem:{
        borderRadius:30,
        backgroundColor:'grey'
    }



})
export default countsBookhomeScreen;