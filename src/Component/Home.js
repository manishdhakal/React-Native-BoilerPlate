import React from 'react';
import {DrawerLayoutAndroid, StyleSheet, TouchableOpacity, View, StatusBar} from 'react-native';

import {Container, Header, Content, Button, Text, Left, Right, Icon, Body, Card} from 'native-base';


const HomeScreen = (props)=> {
    // const navigationView = (
    //     <View style={{flex: 1, backgroundColor: '#fff', marginTop:StatusBar.currentHeight}}>
    //       <Card style={{alignItems:'center', justifyContent:'center', height:150}}>
    //         {/* <Image source={require('../assets/dp.jpg')} style={{height:120, width:120, borderRadius:60}} /> */}
    //       </Card>

    //     </View>
    //   );
    return (
        <Container style={styles.container}>
            <Header style={{justifyContent:'space-between', backgroundColor:'#0C9674'}}>
              <Left>
                <TouchableOpacity onPress={() =>props.navigation.toggleDrawer()}>
                  <Icon name="md-menu" style={{fontSize: 25, color: 'white'}} />
                </TouchableOpacity>
              </Left>
              <Body >
                <Text style={{fontSize:25, color:'white'}}>Template</Text>
              </Body>
              <Right>
                {/* <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                  {/* <Image source={require('../assets/dp.jpg')} style={{height:30, width:30, borderRadius:15}} /> 
                </TouchableOpacity> */}
              </Right>
            </Header>

            <View style={{flex:1}}>
              <Card style={{flex:1}}>
                <View style={{marginHorizontal:10, borderBottomWidth:1}}>
                  <Text style={{fontSize:20, fontWeight:'bold'}}>Resources</Text>
                </View>

                <View style={{flexDirection:'row', marginHorizontal:10,}}>

                  <View style={{flex:1, borderBottomWidth:1}}>
                    <Text style={{fontSize:20,}} >Name</Text>
                  </View>

                  <View style={{flex:1, borderBottomWidth:1}}>
                    <Text style={{fontSize:20,}} >Qty</Text>
                    
                  </View>

                  <View style={{ flex:1, borderBottomWidth:1}}>
                  <Text style={{fontSize:20,}}>Price</Text>
                    
                  </View>

                </View>

              </Card>

              <Card style={{flex:1}}>
                

              </Card>


              <View style={{flex:1, flexDirection:'row'}}>
                <Card style={{flex:1}}>
              
                </Card>
                <Card style={{flex:1}}>

                </Card>
              
              </View>

            </View>

      </Container>

    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
    //   marginTop: StatusBar.currentHeight,
      flex : 1,
      backgroundColor: '#ccc'
      
    }
  }); 