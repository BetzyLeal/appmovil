import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon, Right} from 'native-base';
import {StyleSheet} from 'react-native';


class Login extends Component{
    render(){
        const navegar = this.props.navigation;
        return(
        <Container>
            <Content padder contentContainerStyle = {misEstilos.content}>
                <Card>
                    <CardItem header bordered>
                    <Text style = {misEstilos.textCenter}>Inicio de Sesion</Text>
                    </CardItem>
                    <Button rounded dark style = {misEstilos.boton} 
                    onPress ={() => {
                        navegar.navigate('Bienvenida',{
                            titulo: 'Registro Usuario',
                            nombre: 'Betzy'
                        });
                    }}>


                    <Text>Registrar</Text>
                    </Button>
                </Card>
            </Content>
        </Container>
        );
    };
};


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