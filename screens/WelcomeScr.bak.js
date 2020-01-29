import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Text, H1 } from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Row, Grid } from 'react-native-easy-grid';
import { useNavigation } from 'react-navigation-hooks';
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
  image: { width: wp('80%'), height: hp('26%') },
  subheader: { textAlign: 'center', textTransform: 'uppercase' },
  title: {
    fontFamily: 'Rubik-Medium',
    color: '#005D68',
    textAlign: 'center',
    fontSize: 70,
    lineHeight: 70,
    letterSpacing: -6,
  },
  description: { textAlign: 'center' },
});

const WelcomeScr = () => {
  const { button, buttonView, buttonRow } = customStyles;
  const { navigate } = useNavigation();
  return (
    <FlowWrapper>
      <Grid>
        <Row>
          <View style={styles.body}>
            <Image source={require('assets/images/group.png')} style={styles.image} />
            <Divider margin={10} />
            <H1 style={styles.title}>CRCL</H1>
            <Text style={styles.description}>
              What Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla elit ut
              congue pharetra.
            </Text>
          </View>
        </Row>
        <Row style={buttonRow}>
          <View style={buttonView}>
            <Button primary rounded block onPress={() => navigate('Register')}>
              <Text style={button}>Register</Text>
            </Button>
            <Divider margin={10} />
            <Button rounded dark block onPress={() => navigate('Login')}>
              <Text style={button}>Log in</Text>
            </Button>
            <Divider margin={20} />
          </View>
        </Row>
      </Grid>
    </FlowWrapper>
  );
};

export default WelcomeScr;
