import React,{Component} from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon, Right} from 'native-base';
import {StyleSheet} from 'react-native';

import api from '../data/api';

class Registro extends Component{

  constructor(props){
    super(props);
    this.state = {
      email:'',
      user:'',
      pass:''
    }
  }

 register = () => api.registerData(this.state.email, this.state.user, this.state.pass)



  mensaje = ()=>{alert('Datos guardados')};
  render(){
      const navegar = this.props.navigation;
      return(
      <Container>

          <Content padder contentContainerStyle = {misEstilos.content}>
            <Card>

            <CardItem header bordered>
                    <Text style = {misEstilos.textCenter}>Registrar</Text>
            </CardItem>
              <CardItem bordered>
                <Body style = {misEstilos.body}>

                  
                  <Item inlineLabel>
                        <Icon type = 'FontAwesome' name = 'user'></Icon>
                        <Input
                            placeholder = "Nombre de Usuario"
                            //value={this.state.usuario}
                            onChangeText={(user)=>this.setState({user})}
                        />
                  </Item>

                  <Item inlineLabel last>
                    <Icon type = 'Entypo' name = 'email'></Icon>
                    <Input
                      placeholder = 'Correo'
                      //value={this.state.correo}
                      onChangeText={(email)=>this.setState({email})}
                    />
                  </Item>

                  <Item inlineLabel last>
                      <Icon type = 'FontAwesome' name = 'lock'></Icon>
                      <Input type="password"
                          placeholder = 'Contraseña'
                          //value={this.state.contrasena}
                          onChangeText={(pass)=>this.setState({pass})}
                          secureTextEntry={true}
                      />
                  </Item>
                  
                </Body>
              </CardItem>


              <CardItem footer bordered>  
                <Button rounded dark style = {misEstilos.boton}
                  onPress={() => navegar.navigate('Login')}>
                    <Text>Login</Text>
                  </Button>

                <Button rounded dark style = {misEstilos.boton} 
                          onPress={this.register}>
                  <Text>Guardar</Text>
                </Button>

                
              </CardItem>
              

              <CardItem footer bordered> 
                <Button rounded dark style = {misEstilos.boton} 
                    onPress ={() =>
                        navegar.navigate('Bienvenida',{
                            contrasena: this.state.contrasena,
                            usuario: this.state.usuario
                        })}>
                    <Text>Entrar</Text>
                </Button>
              </CardItem>       

            </Card>

            <Card>
              <CardItem header bordered>
                <Text style = {misEstilos.textCenter}>O registrate por medio de:</Text>
              </CardItem>

              <CardItem>
                <Icon type = 'AntDesign' name = 'facebook-square'></Icon>
                <Text>Facebook</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>

              <CardItem>
              <Icon type = 'AntDesign' name = 'twitter'></Icon>
                <Text>Twitter</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>

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

  body: {
    paddingVertical: 35,
  },

  header: {
    justifyContent: 'flex-start',
  }
  
});

export default Registro;