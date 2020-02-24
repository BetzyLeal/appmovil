import React,{Component} from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon, Right, Left, Header, Toast} from 'native-base';
import {StyleSheet} from 'react-native';

class Registro extends Component{

  render(){
      const navegar = this.props.navigation;
      return(
      <Container>

          <Content padder contentContainerStyle = {misEstilos.content}>
            <Card>
              <CardItem header bordered>

                <Text style = {misEstilos.textCenter}>
                  {this.props.route.params.titulo}
                  {this.props.route.params.nombre}
                </Text>

              </CardItem>
              <CardItem bordered>
                <Body style = {misEstilos.body}>
                  <Item inlineLabel>
                    <Icon type = 'FontAwesome' name = 'user'></Icon>
                    <Input placeHolder = 'Nombre de Usuario'/>
                  </Item>

                  <Item inlineLabel last>
                    <Icon type = 'Entypo' name = 'email'></Icon>
                    <Input placeHolder = 'Correo'/>
                  </Item>

                  <Item inlineLabel last>
                    <Icon type = 'FontAwesome' name = 'lock'></Icon>
                    <Input placeHolder = 'Contraseña'/>
                  </Item>
                  
                </Body>
              </CardItem>
              <CardItem footer bordered>
                
                <Button rounded dark style = {misEstilos.boton} onPress={()=> Toast.show({
                  text: 'Datos Guardados con exito',
                  buttonText: 'Okay'
                  })}>
                    <Text>Guardar</Text>
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