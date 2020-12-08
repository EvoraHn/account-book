
import React from "react";
import{StyleSheet,Image,Dimensions,ScrollView} from "react-native";
import{Container,Text,Card,CardItem,Button,Body,Item, Left, Right} from "native-base";
import{useFonts,Raleway_200ExtraLight,}from "@expo-google-fonts/raleway";
import { AppLoading } from "expo";
//import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");


const allAccountsScreen =({navigation}) => {

    //Importaciones para Fuentes
    let [fontsLoaded,error] = useFonts({
        Raleway_200ExtraLight,
        //"FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
        //"Gumy_Monster":require("../../assets/fonts/Gumy_Monster.ttf"),
    });

    if (!fontsLoaded){
        return <AppLoading/>
    }
    
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
                    <ScrollView horizontal={false}>
                        <CardItem  style={styles.cardItem}>
                            <Container style={styles.verticalCardContainer}>
                                <Card transparent style={styles.cardButtonLeftContainer}>
                                    <Button style={styles.leftButton}>
                                        <Image source={require("../img/Modificar.png")}
                                        transparent style={styles.imageButton}/>
                                    </Button>
                                    <Button style={styles.leftButton}>
                                        <Image source={require("../img/Eliminar.png")}
                                        transparent style={styles.imageButton}/>
                                    </Button>

                                </Card>
                                <Card transparent style={styles.middleCardContainer}>
                                    <Body style={styles.mainContent}>
                                        <Text>Nombre</Text>
                                        <Item >
                                            <Left >
                                                <Text>Fecha</Text>
                                            </Left>
                                            <Right>
                                                <Text>Hora</Text>
                                            </Right>
                                        </Item>
                                        <Text>motivo de cuenta</Text>
                                        <Text>Comentario</Text>
                                        <Text>Cantidad</Text>
                                    </Body>
                                </Card>

                                <Card transparent style={styles.cardButtonRightContainer}>

                                    <Button style={styles.rightButton}>
                                        <Text>
                                            
                                            
                                        </Text>
                                    </Button>

                                </Card>

                                
                                
                                </Container>
                            
                        </CardItem> 
                        
                        
                    
                        
                    </ScrollView>
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
    },
    verticalbar:{
        flex:.10,
        alignSelf:"center",
        justifyContent:"center"
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
        //marginTop:100,
        backgroundColor:'blue',
        textAlign:"center",
        justifyContent:"center",
    },
    verticalContainer:{
        flexDirection:'row',
        //backgroundColor:'green',
    },
    horizontalContainer:{
        width:10,
        flexDirection:'column',
        backgroundColor:'pink',
        
    },
    
    ImageLogo:{
        width:150,
        height:150,
        resizeMode: "contain",
        //alignSelf:"center"
    },
    
    mainContent:{
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center"
    },
    cardItem:{
        borderRadius:30,
        //backgroundColor:'grey',
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        height:width*.5,
        marginLeft:width*.10,
        marginRight:width*.10,
        marginTop:5
        
    },
    
    verticalCardContainer:{
        flexDirection:'row',
        //backgroundColor:'grey',
        height:width*.4,
        alignItems:"center",
        
    },
    cardButtonLeftContainer:{
        flex:.2,
        //backgroundColor:'green',
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        marginLeft:width*-.1
    },
    cardButtonRightContainer:{
        flex:.2,
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        marginRight:width*-.12
    },
    middleCardContainer:{
        flex:1,
        padding:20,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    rightButton:{
        height:width*.38,
        borderRadius:10
    },
    leftButton:{
        height:width*.15,
        marginBottom:5,
        backgroundColor:'orange',
        borderRadius:10
    },
    imageButton:{
        height:width*.08,
        width:width*0.08,
        marginLeft:3,
        marginRight:3,


    }
    


})
export default allAccountsScreen;