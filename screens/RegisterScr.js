import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Container, Content, Button, Text, Form, Input, Item, Label, Icon } from 'native-base';

const RegisterScr = props => {
  const { navigation } = props;
  return (
    <Container>
      <Content
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
          height: '100%',
        }}
      >
        <Form bordered rounded regular style={{ width: '100%' }}>
          <Item success>
            <Input placeholder="Textbox with Success Input" />
            <Icon name="checkmark-circle" />
          </Item>
          <View style={{ marginVertical: 46 }} />
          <Item error>
            <Input placeholder="Textbox with Error Input" />
            <Icon name="close-circle" />
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
        <Button dark block onPress={() => navigation.navigate('A')} style={{ marginTop: 20 }}>
          <Text> Screen A </Text>
        </Button>
        <Button dark block onPress={() => navigation.popToTop()} style={{ marginTop: 20 }}>
          <Text> Home </Text>
        </Button>
      </Content>
    </Container>
  );
};

RegisterScr.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    popToTop: PropTypes.func.isRequired,
  }).isRequired,
};

export default RegisterScr;
