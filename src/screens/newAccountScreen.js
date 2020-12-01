import React from "react";
import{Container,Text,Card,CardItem,Body,Button,Input,Item, Left, Right}
 from "native-base";
import{StyleSheet,Image,Dimensions} from "react-native";

const { width, height } = Dimensions.get("window");

const newAccountScreen =({navigation}) => {
    return (
        <Container style={styles.main}>
            <Container style={styles.verticalContainer}>

                <Container style={styles.verticalbar}>
                    
                    <Button style={styles.verticalBarContent} onPress={()=>
                                {navigation.navigate("countsBookHomeScreen")}}>
                                    <Text>
                                    </Text>
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
                            <Button style={styles.Button}  >
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
                    <Card style={styles.calculatorContainer}>
                        
                                <Card style={styles.calculatorScreen}>
                                    <Input placeholder={"0.00"}/>
                                    <Input placeholder={"Total"}/>
                                </Card>
                        
                        <Container style={styles.calculatorButtonsContainer}>
                            <Container style={styles.calculatorLeftButtons}>
                                
                                <Card style={styles.wrap} >
                                <Button style={styles.calculatorButtons}>
                                    <Text style={styles.calculatorButtonText}>
                                        +
                                    </Text>
                                </Button>
                                <Button style={styles.calculatorButtons}>
                                    <Text style={styles.calculatorButtonText}>
                                        -
                                    </Text>
                                </Button>
                                </Card>
                                <Card style={styles.wrap} >
                                <Button style={styles.calculatorButtons}>
                                    <Text style={styles.calculatorButtonText}>
                                        *
                                    </Text>
                                </Button>
                                <Button style={styles.calculatorButtons}>
                                    <Text style={styles.calculatorButtonText}>
                                        %
                                    </Text>
                                </Button>
                            </Card> 

                            </Container>
                            <Container style={styles.calculatorRightButtons}>
                               
                                
                                <Button style={{flex:1,width:60
                                    ,alignSelf:"center",justifyContent:"center"}}>
                                    <Text style={styles.calculatorButtonText}>
                                        =
                                    </Text>
                                </Button>
                                
                            

                            </Container>
                        </Container>
                    </Card>
                    
                    
                    <Card style={styles.comentaryContainer} >
                        <Input placeholder={"Comentario"}/>
                    </Card>

                    <Button transparent style={{alignSelf:"flex-end",marginBottom:30}} > 
                        <Button style={styles.addButton}>
                            <Text>Agregar</Text>
                            

                        </Button>
                        
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
        flex:1,
        justifyContent:"center",
        width:width*.60,
        alignSelf:"center",
        backgroundColor:'blue',
        paddingTop:30,
        paddingBottom:30

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
    },
    calculatorLeftButtons:{
        backgroundColor:'purple',
        //flexDirection:"column",
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        
        //marginBottom:30
        //resizeMode:'contain'
        height:200

    },
    calculatorRightButtons:{
        backgroundColor:'orange',
        //flexDirection:"column",
        flex:.5,
        //marginBottom:30
        height:200
    },

    calculatorScreen:{
        flexDirection:"column",
        
        flex:.7,
    },
    calculatorScreenContainer:{
        flex:1,
        //height:60
    },
    calculatorButtonsContainer:{
        //flexWrap:"wrap",
        flexDirection:"row",
        backgroundColor:'green',
        flex:1,
        justifyContent:"center",
        alignItems:"center"
        //marginBottom:30
       
        
        
    },
    calculatorButtons:{
        flex:1,height:70,
        justifyContent:"center"
    },
    calculatorButtonText:{
        fontSize:30,
        textAlign:"center"
    }



})
export default newAccountScreen;
/*<Card style={styles.wrap} >
                                
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
</Card>*/



/*<Container style={styles.container}>
                    <Card  style={styles.calculatorContainer}>
                        <Container style={styles.calculatorScreenContainer}>
                            <Card style={styles.calculatorScreen}>
                                <Input placeholder={"0.00"}/>
                                <Input placeholder={"Total"}/>
                            </Card>
                        </Container>
                        <Container style={styles.calculatorButtonsContainer}>

                        
                        <Container style={styles.calculatorLeftButtons}>
                            <Card style={styles.wrap} >
                                <Button style={{flex:.5}}>
                                    <Text>
                                        1
                                    </Text>
                                </Button>
                                <Button style={{flex:.5}}>
                                    <Text>
                                        1
                                    </Text>
                                </Button>
                            </Card>
                            <Card style={styles.wrap} >
                                <Button style={{flex:.5}}>
                                    <Text>
                                        1
                                    </Text>
                                </Button>
                                <Button style={{flex:.5}}>
                                    <Text>
                                        1
                                    </Text>
                                </Button>
                            </Card>
                        </Container>
                        <Container style={styles.calculatorRightButtons}>
                        <Card style={styles.wrap} >
                                <Button style={{flex:.5}}>
                                    <Text>
                                        1
                                    </Text>
                                </Button>
                                
                            </Card>
                                
                            
                           
                        </Container>
                        </Container>
                    </Card>
                    </Container>*/
