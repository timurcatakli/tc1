import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { Text, Button, H1 } from 'native-base';
import { FlowWrapper, Divider } from 'shared/components';
import customStyles from 'shared/styles';
import config from 'shared/config';

const styles = StyleSheet.create({
  body: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
    flex: 1,
  },
});
const WelcomeScr = () => {
  const { navigate } = useNavigation();
  const { button, buttonFooter } = customStyles;
  return (
    <FlowWrapper>
      <View style={styles.body}>
        <Image
          source={require('assets/images/welcome-scr.png')}
          style={{ width: 240, height: 240 }}
        />
        <Divider margin={20} />
        <Text style={{ textAlign: 'center' }}>welcome to</Text>
        <H1 style={{ fontFamily: 'Rubik-Medium', color: '#5F6368' }}>CRCL</H1>
        <Divider margin={10} />
        <Text style={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla elit ut congue
          pharetra.
        </Text>

        <Divider margin={20} />
      </View>

      <View style={buttonFooter}>
        <Button primary rounded block onPress={() => navigate('Register')}>
          <Text style={button}>Register</Text>
        </Button>
        <Divider margin={10} />
        <Button rounded dark block onPress={() => navigate('Login')}>
          <Text style={button}>Log in</Text>
        </Button>

        <Divider margin={20} />
      </View>
    </FlowWrapper>
  );
};

export default WelcomeScr;
