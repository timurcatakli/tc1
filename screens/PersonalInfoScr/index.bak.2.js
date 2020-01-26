import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import {
  StyleProvider,
  Container,
  Header,
  Content,
  Form,
  Input,
  Label,
  Item,
  Button,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import config from 'shared/config';
import { useNavigation } from 'react-navigation-hooks';
import {
  FlowHero,
  FlowImage,
  CustomModal,
  FlowWrapper,
  GoBack,
  Divider,
  TitleAndText,
} from 'shared/components';
import customStyles from 'shared/styles';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

const styles = StyleSheet.create({});

const PersonalInfoScr = () => {
  const { body, form, button, buttonFooter } = customStyles;
  return (
    <StyleProvider style={getTheme(platform)}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <GoBack />
          <Grid>
            <FlowHero
              image="personalInfo"
              title="One last step..."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Row style={{ backgroundColor: '#00CE9F' }}>
              <View style={{ width: '100%' }}>
                <Form>
                  <Item stackedLabel>
                    <Label>Username</Label>
                    <Input />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Password</Label>
                    <Input />
                  </Item>
                  <Item stackedLabel>
                    <Label>Username</Label>
                    <Input />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Password</Label>
                    <Input />
                  </Item>
                  <Item stackedLabel>
                    <Label>Username</Label>
                    <Input />
                  </Item>
                  <Item stackedLabel last>
                    <Label>Password</Label>
                    <Input />
                  </Item>
                </Form>
              </View>
            </Row>
            <Row
              style={{
                flex: 1,
                backgroundColor: 'gold',
                height: 110,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
            >
              <View
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  backgroundColor: 'rgb(73, 18, 59)',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}
              >
                <Button primary rounded block>
                  <Text style={button}>Register</Text>
                </Button>
                <Divider margin={20} />
              </View>
            </Row>
          </Grid>
        </Container>
      </TouchableWithoutFeedback>
    </StyleProvider>
  );
};

export default PersonalInfoScr;
