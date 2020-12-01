import React from "react";
import{Container,Text,Card,CardItem,Body,Button,Input,Item, Left, Right} from "native-base";
import{StyleSheet,Image,Dimensions} from "react-native";

const { width, height } = Dimensions.get("window");

const newAccountScreen =({navigation}) => {
    return (
        <Container style={styles.main}>
            <Container style={styles.verticalContainer}>

                <Container style={styles.verticalbar}>
                    <Card style={styles.verticalBarContent} >
                    </Card>
                    <Button onPress={()=>
                                {navigation.navigate("counsBookHomeScreen")}}>
                    </Button>
                </Container>

               <Container style={styles.horizontalContainer}>
                    <Card  style={styles.inputBar}>
                        <Item >
                            <Input placeholder={"Motivo de la cuenta"}/>
                           
                        </Item>
                    </Card>
                    <Item>
                        <Left > 
                            <Button style={styles.Button} >
                                <Text >       
                                </Text>
                            </Button>
                        </Left>
                        <Right >
                            <Card  style={styles.inputBarSecondary} >
                                <Item>
                                    <Input placeholder={"Acreedor de la cuenta"}/>
                                </Item>
                            </Card>
                        </Right>
                    </Item>

                    <Card  style={styles.calculatorContainer}>
                        
                            <Input placeholder={"0.00"}/>
                            <Input placeholder={"Total"}/>
                            <Card style={styles.wrap} >
                                
                                <Button style={{flex:1}}>
                                <Text>
1
                                </Text>

                                </Button>
                                <Button style={{flex:1}}>
                                <Text>
1
                                </Text>

                                </Button>


                               
                                
                                


                            </Card>
                            
                            
                    </Card>

                    <Card style={styles.comentaryContainer} >
                        <Input placeholder={"Comentario"}/>
                    </Card>

                    <Button transparent style={{alignSelf:"flex-end",marginTop:30}} > 
                        <Card style={styles.addButton}>
                            <Text>Agregar</Text>
                            <Text>Nota</Text>

                        </Card>
                        
                    </Button>
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
        height:500,
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
    inputBar:{
        //backgroundColor:'white',
        borderRadius:30,
        //flex:.12,
        justifyContent:"center",
        width:width*.70,
        alignSelf:"flex-end"
    },
    inputBarSecondary:{
        //backgroundColor:'white',
        borderRadius:30,
        //flex:.12,
        justifyContent:"center",
        width:width*.60,
        alignSelf:"flex-end"
    },
    Button:{
        backgroundColor:'green',
        width:width*.11,
        borderRadius:50,
        marginLeft:30
    },
    calculatorContainer:{
        borderRadius:30,
        flex:.5,
        justifyContent:"center",
        width:width*.60,
        alignSelf:"center"
    },
    comentaryContainer:{
        borderRadius:30,
        flex:.3,
        justifyContent:"center",
        width:width*.80,
        alignSelf:"center"
    },
    addButton:{
        backgroundColor:'green',
        width:width*.30,
        height:70,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        marginRight:22
    },
    wrap:{
        flexWrap:"nowrap",
        flexDirection:"row"
    }


})
export default newAccountScreen;