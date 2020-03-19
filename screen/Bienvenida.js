import React,{Component} from 'react';
import {Container, Content, Text, Button, View} from 'native-base';
import {StyleSheet} from 'react-native';

import 'react-native-gesture-handler';

class Bienvenida extends Component{

  render(){
      const navegar = this.props.navigation;
      return(
      <Container>

          <Content padder contentContainerStyle = {misEstilos.content}>
          <View style={misEstilos.center}>
            <Text style={misEstilos.title}>Bienvenido Usuario: {this.props.route.params.usuario}</Text>
            <Text style={misEstilos.title}>Tu contraseña es: {this.props.route.params.contrasena}</Text>
            
            <Button rounded dark style = {misEstilos.boton} 
                    onPress ={() => {
                        navegar.navigate('Login',{
                        });
                    }}>

                  <Text>Regresar a Login</Text>
            </Button>

            <Button rounded dark style = {misEstilos.boton} 
                    onPress ={() => {
                        navegar.navigate('Registro',{
                        });
                    }}>

                  <Text>Regresar a Registro</Text>
            </Button>
 
            
          </View>

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

  body: {
    paddingVertical: 35,
  },

  header: {
    justifyContent: 'flex-start',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F8875A'
  },
  title: {
    fontSize: 26,
    marginBottom: 16
  },
  androidButtonText: {
    backgroundColor: 'red',
    fontSize: 10
  }
  
});

export default Bienvenida;