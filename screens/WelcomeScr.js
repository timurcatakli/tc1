import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Text, H1 } from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from 'react-navigation-hooks';
import { FlowWrapper, Divider } from 'shared/components';
import customStyles from 'shared/styles';
import config from 'shared/config';

const styles = StyleSheet.create({
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  image: { width: wp('70%'), height: hp('34%') },
  safeAreaView: { flex: 1 },
  title: {
    fontFamily: 'Rubik-Medium',
    color: '#005D68',
    textAlign: 'center',
    fontSize: 70,
    lineHeight: 70,
    letterSpacing: -6,
  },
  description: {
    textAlign: 'center',
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
  },
});

const WelcomeScr = () => {
  const { button, buttonView } = customStyles;
  const { navigate } = useNavigation();
  return (
    <FlowWrapper>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.hero}>
          <Image
            source={require('assets/images/group.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <H1 style={styles.title}>CRCL</H1>
          <Text style={styles.description}>
            What Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla elit ut
            congue pharetra. What Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla elit ut congue pharetra.
          </Text>
        </View>
        <View style={buttonView}>
          <Button primary rounded block onPress={() => navigate('Register')}>
            <Text style={button}>Register</Text>
          </Button>
          <Divider margin={10} />
          <Button rounded dark block onPress={() => navigate('Login')}>
            <Text style={button}>Log in</Text>
          </Button>
          <Divider margin={10} />
        </View>
      </SafeAreaView>
    </FlowWrapper>
  );
};

export default WelcomeScr;
