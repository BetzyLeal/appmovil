import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon, View} from 'native-base';
import {StyleSheet, ActivityIndicator, Switch, Alert} from 'react-native';
import api from '../data/api';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            username:'', 
            pass:''}
    }

    login = async() => {
        let validarLog = await api.validarLog(this.state.username, this.state.pass)

        if(validarLog.status == 1){
            this.props.navigation.navigate('Principal');
        }
        else{
            Alert.alert('Usuario o clave invalidos');
        }
    }


    state={
        showIndicator:false,
    }
    onButtonPress=()=>{
        this.setState({
            showIndicator:true
        }),
    this.props.navigation.navigate('Bienvenida',{contrasena:this.state.contrasena, usuario:this.state.usuario});
    }

    state = {switchValue:false}
    toggleSwitch = (value) => {
      this.setState({switchValue: value})
   }

   

    render(){
        const navegar = this.props.navigation;
        if(this.state.showIndicator){
            return(
                <View style={misEstilos.content}>
                    <ActivityIndicator size="large" color="FFFFFF"></ActivityIndicator>
                </View>
            );
        }else{
        return(
            <>


        <Container>
            <Content padder contentContainerStyle = {misEstilos.content}>
                <Card>
                    <CardItem header bordered>
                    <Text style = {misEstilos.textCenter}>Inicio de Sesion</Text>
                    </CardItem>
                <CardItem bordered>
                    <Body style = {misEstilos.body}>

                    <Item inlineLabel>
                        <Icon type = 'FontAwesome' name = 'user'></Icon>
                        <Input type="text"
                            placeholder = "Nombre de Usuario"
                            //value={this.state.usuario}
                            onChangeText={(username)=>this.setState({username})}
                        />
                    </Item>

                    <Item inlineLabel last>
                        <Icon type = 'FontAwesome' name = 'lock'></Icon>
                        <Input type="password"
                            placeholder = "Contrasena"
                            //value={this.state.contrasena}
                            onChangeText={(pass)=>this.setState({pass})}
                            secureTextEntry={true}
                        />
                    </Item>


                    <Switch
                          style={{marginTop:30}}
                          onValueChange = {this.toggleSwitch}
                          value = {this.state.switchValue}/>
                           <Text>{this.state.switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>



                    </Body>
                </CardItem>

                <CardItem footer bordered>
                    <Button rounded dark style = {misEstilos.boton} 
                    onPress ={() =>
                        navegar.navigate('Registro',{
                            pass: this.state.pass,
                            username: this.state.username})}>
                    <Text>Registrar</Text>
                    </Button>


                <Button rounded dark style = 
                { misEstilos.boton} onPress={() => {this.login() }} >
                    <Text> Entrar </Text>
                    </Button>
                </CardItem>


                <CardItem>
                <Button rounded dark style = {misEstilos.boton} 
                    onPress ={() =>
                        navegar.navigate('Principal')}>
                    <Text>Movies</Text>
                    </Button>

                <Button rounded dark style = {misEstilos.boton} 
                    onPress ={() =>
                        navegar.navigate('Principal2')}>
                    <Text>StarWars</Text>
                    </Button>
                </CardItem>

                

                </Card>
            </Content>
            </Container>
            </>
        );
    }
}
}


const misEstilos = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    
    textCenter:{
        textAlign: 'center',
        width: '100%',
    },

    boton: {
        flex: 1,
        justifyContent: 'center',
        //marginLeft: '35%',
        //justifyContent: 'center',
    },

    boton1: {
        flex: 1,
        justifyContent: 'center',
        //marginLeft: '70%',
        //justifyContent: 'center',
    },
        
    body: {
        paddingVertical: 35,
    }        
        
});

export default Login;