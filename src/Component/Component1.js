import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Container, Header, Text, Left, Right, Icon, Body} from 'native-base'

const Component1 = (props) => {
    return (
      <Container>
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
      <Container style={{ justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontWeight:'bold'}}>
                COMPONENT1
            </Text>
      </Container>
    </Container>
    );
}

export default Component1