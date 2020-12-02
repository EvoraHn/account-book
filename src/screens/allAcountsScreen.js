
import React from "react";
import{StyleSheet,Image,Dimensions,ScrollView} from "react-native";
import{Container,Text,Card,CardItem,Button,Body,Item, Left, Right} from "native-base";
//import { ScrollView } from "react-native-gesture-handler";

const allAccountsScreen =({navigation}) => {
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
                    
                        <CardItem style={styles.cardItem}>
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
        backgroundColor:'grey',
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        marginTop:5,
        flex:1
        
    },
})
export default allAccountsScreen;