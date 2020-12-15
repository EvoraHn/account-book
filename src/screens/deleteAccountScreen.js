
import React, { useContext } from "react";
import{StyleSheet,Image,Dimensions,ScrollView} from "react-native";
import{
    Container,
    Content,
    Spinner,
    Text,
    Card,
    CardItem,
    Button,
    Body,
    Item,
    Left,
    Right} from "native-base";

import{useFonts,Raleway_200ExtraLight,}from "@expo-google-fonts/raleway";
import { AppLoading } from "expo";

//import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

// Utilizar el contexto de Cuentas



const deleteAccountScreen =({navigation}) => {
    
   

    //Importaciones para Fuentes
    let [fontsLoaded,error] = useFonts({
        Raleway_200ExtraLight,
        //"FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
        //"Gumy_Monster":require("../../assets/fonts/Gumy_Monster.ttf"),
    });

    if (!fontsLoaded){
        return (
            <Content style={styles.spinnerStyle}>
              <Spinner color="green"  />
            </Content>
          )
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

                        
                                
                            <CardItem   style={styles.cardItem}>
                                <Container style={styles.verticalCardContainer}>
                                    
                                    <Card transparent style={styles.middleCardContainer}>
                                        
                                        
                                        <Body style={styles.mainContent}>
                                            <Text></Text>
                                            <Item >
                                                <Left >
                                                    <Text></Text>
                                                </Left>
                                                <Right>
                                                <Text></Text>
                                                </Right>
                                            </Item>
                                            <Text style={styles.titleCards}>Seguro de Eliminar esta cuenta?</Text>
                                            <Text></Text>
                                            <Text></Text>
                                            <Text></Text>
                                            <Item>
                                                <Left>
                                                    <Text></Text>
                                                </Left>
                                                
                                                <Text></Text>
                                            </Item>
                                            
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
        backgroundColor:'#FAF8DC',
    },
    verticalbar:{
        flex:.10,
        alignSelf:"center",
        justifyContent:"center",
        backgroundColor:'#FAF8DC',
    },

    spinnerStyle: {
        flex: 1,
        marginTop:240
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
        flexDirection:'column',
        backgroundColor:'#FAF8DC',
    },
    
    ImageLogo:{
        width:150,
        height:150,
        resizeMode: "contain",
        
    },
    
    mainContent:{
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center"
    },
    cardItem:{
        borderRadius:30,
        backgroundColor:'#cdcdcd',
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
        backgroundColor:'#cdcdcd',
        height:width*.4,
        alignItems:"center",
        
    },
    cardButtonLeftContainer:{
        flex:.2,
        
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
        borderRadius:10,
        backgroundColor:'#17964E'
    },
    leftButtonEdit:{
        height:width*.15,
        marginBottom:5,
        backgroundColor:'#F35D22',
        borderRadius:10
    },
    leftButtonDelete:{
        height:width*.15,
        marginBottom:5,
        backgroundColor:'#f36868',
        borderRadius:10
    },
    imageButton:{
        height:width*.08,
        width:width*0.08,
        marginLeft:3,
        marginRight:3,


    },

    titleCards:{
        fontWeight: 'bold',
        fontSize:15,
        backgroundColor:'#cdcdcd',
    }

    
    


})
export default deleteAccountScreen;