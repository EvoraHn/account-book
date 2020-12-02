
import React from "react";
import{StyleSheet,Image,Dimensions} from "react-native";
import{Container,Text,Card,CardItem,Button} from "native-base";

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
               </Container>
            </Container>
        </Container>
               
    )
} 

const styles = StyleSheet.create({
    main:{
        marginTop:32,
        flex:1,
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
})
export default allAccountsScreen;