import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  StyleProvider,
  Text,
  Title,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import getTheme from '/native-base-theme/components';
import platform from '/native-base-theme/variables/platform';
import config from '/shared/config';

const { gradientBottom, gradientTop, gray } = config.colors;
const { feed } = config.pages;
const styles = StyleSheet.create({
  headerBody: {
    color: gray,
    fontFamily: 'Rubik-Medium',
    textTransform: 'uppercase',
  },
});

const FeedWrapper = ({ children }) => {
  return (
    <StyleProvider style={getTheme(platform)}>
      <Container style={{ backgroundColor: 'transparent' }}>
        <LinearGradient colors={[gradientTop, gradientBottom]} style={{ flex: 1, width: '100%' }}>
          <Header transparent>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title style={styles.headerBody}>{feed.title}</Title>
            </Body>
            <Right>
              <Button transparent>
                <Text>
                  <Ionicons name="ios-notifications" size={25} color={config.colors.gray} />
                </Text>
              </Button>
            </Right>
          </Header>
          <View>{children}</View>
        </LinearGradient>
      </Container>
    </StyleProvider>
  );
};

FeedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
FeedWrapper.defaultProps = {};

export default FeedWrapper;
