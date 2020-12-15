import React, { useState, useEffect } from "react";
import {Container, Text,Card,CardItem,Left,Right,Body,Button,Spinner,Content} from "native-base";
import {StyleSheet,Image,Dimensions,ScrollView} from "react-native";

//Importación de Fuentes Expo
import * as Font from "expo-font";

//Obtener los valores por destructuring
const { width, height } = Dimensions.get("window");

 /*   let [fontsLoaded,error] = useFonts({
        Raleway_200ExtraLight,
        //"FredokaOne-Regular":require("../../assets/fonts/FredokaOne-Regular.ttf"),
        //"Gumy_Monster":require("../../assets/fonts/Gumy_Monster.ttf"),

    });
    
    if (!fontsLoaded){
        return <AppLoading/>
    }
*/

const countsBookhomeScreen = ({navigation}) => {
const [fontsLoaded, setFontsLoaded] = useState(false);
useEffect(() => {
    const loadFontsAsync = async () => {
      await Font.loadAsync({
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }).then(() => {
        setFontsLoaded(true);
      });
    };

    loadFontsAsync();
  }, []);

    if (!fontsLoaded)
    return (
      <Content contentContainerStyle={styles.content}>
        <Spinner color="blue" />
      </Content>
    );
  

    return (
        <Container style={styles.main}>
            
            <CardItem transparent style={{backgroundColor:'#FAF8DC',}}> 
                    <Left>
                        <Text style={styles.title} onPress={()=>
                                {navigation.navigate("allAccountScreen")}}>Account</Text>
                    </Left>   
                    
                    <Right>
                        <Image source={require("../img/AccountsBook.png")}
                         transparent style={styles.Logo}/>
                    </Right>
            </CardItem >
            <CardItem transparent style={{backgroundColor:'#FAF8DC',}} >
                <Left>
                    <Text style={styles.subtitle}>Book</Text>
                </Left>
            </CardItem>
            
           <Container style={styles.verticalContainer}>

               <Container style={styles.horizontalContainer}>
                   <ScrollView horizontal={true} style={{flex:1}}>
                   <Card transparent >
                        <CardItem style={styles.cardItem}>
                            <Button transparent style={styles.buttonContent} onPress={()=>
                                {navigation.navigate("allAccountScreen")}} >
                                <Body style={styles.mainContent}>
                                    <Image source={require("../img/1.png")}
                                    transparent style={styles.ImageLogo}/>
                               
                                </Body>
                            </Button>
                        </CardItem> 
                    </Card>
                    <Card transparent >
                        <CardItem style={styles.cardItem}>
                            <Button transparent style={styles.buttonContent} onPress={()=>
                                {navigation.navigate("allAccountScreen")}} >
                                <Body style={styles.mainContent}>
                                    <Image source={require("../img/2.png")}
                                    transparent style={styles.ImageLogo}/>
                               
                                </Body>
                            </Button>
                        </CardItem> 
                    </Card>
                    <Card transparent >
                        <CardItem style={styles.cardItem}>
                            <Button transparent style={styles.buttonContent} onPress={()=>
                                {navigation.navigate("aboutScreen")}} >
                                <Body style={styles.mainContent}>
                                    <Image source={require("../img/about.png")}
                                    transparent style={styles.ImageLogo}/>
                               
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
        backgroundColor:'#FAF8DC',
    },
    verticalContainer:{
        flexDirection:'row',
        flex:1,
        backgroundColor:'#FAF8DC',
    },
    horizontalContainer:{
        width:10,
        flexDirection:'column',
        backgroundColor:'#FAF8DC',
    },
    aboutContainer:{
        flexDirection:'row',
        flex:1,
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:'#FAF8DC',
    },
    title:{
        marginTop:-50,
        fontSize:width*0.12,
        backgroundColor:'#FAF8DC',
        fontFamily:'Roboto',
    },
    subtitle:{
        marginTop:-100,
        fontSize:width*0.12,
        backgroundColor:'#FAF8DC',
        fontFamily:'Roboto',
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
        fontFamily:'Roboto'
    },
    verticalBarContent:{
        borderRadius:30,
        flex:.7,
        marginRight:-30,
        marginLeft:5,
        backgroundColor:'#111E6C',
        textAlign:"center",
        justifyContent:"center",
    },
    
    ImageLogo:{
        width:width*.74,
        height:width*.74,
        resizeMode: 'contain',
        backgroundColor:'#cdcdcd',
    },
    Logo:{
        width:150,
        height:150,
        resizeMode: "contain",
        backgroundColor:'#FAF8DC',
    },
    mainContent:{
        alignItems:"center",
    },
    cardItem:{
        borderRadius:30,
        backgroundColor:'#cdcdcd',
        width:width*.8,
        height:width*.8,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContent:{
        alignSelf:'center',
        backgroundColor:'#cdcdcd',
        borderStyle:"dotted",
        width:width*.74,
        height:width*.74,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
    },
})
export default countsBookhomeScreen;
/*
 <Card transparent style={{height:500,alignItems:"center",backgroundColor:'#FAF8DC',}}>
                        <CardItem transparent style={{backgroundColor:'#FAF8DC',}}>
                            <Button transparent >
                                    <Image source={require("../img/about.png")}
                                    transparent style={{height:width*.58,width:width*.51,backgroundColor:'#FAF8DC'}}/>
                            </Button>
                        </CardItem> 
                    </Card>
                    */