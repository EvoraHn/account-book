import React from "react";
import{Container,Text,Card,CardItem,Body,Button} from "native-base";
import{StyleSheet,Image,Dimensions} from "react-native";
const newAccountScreen =({navigation}) => {
    return (
        <Container>
            <Container style={styles.verticalContainer}>

                <Container style={styles.verticalbar}>
                   <Card style={styles.verticalBarContent}>
                        <Text style={styles.verticalBarText} >
                           Nueva Cuenta
                        </Text>
                   </Card>
               </Container>

               <Container style={styles.horizontalContainer}>
                    <Card transparent>
                        
                    </Card>
                    
                    
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
        borderRadius:30,
        height:600,
        marginLeft:-30,
        marginRight:5,
        //marginTop:100,
        backgroundColor:'blue',
        textAlign:"center",
        justifyContent:"center",
    },
    verticalContainer:{
        flexDirection:'row',
        backgroundColor:'green',
    },
    horizontalContainer:{
        width:10,
        flexDirection:'column',
        backgroundColor:'pink',
       
    },

})
export default newAccountScreen;