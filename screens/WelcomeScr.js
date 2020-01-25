import React from 'react';
import { View, SafeAreaView, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import { Text, Button, StyleProvider, H1 } from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  safeAreaView: { width: '100%', height: '100%' },
  paddedView: { width: '100%', paddingLeft: 30, paddingRight: 30 },
  paddedContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  divider20: { width: '100%', marginVertical: 20 },
  divider10: { width: '100%', marginVertical: 10 },
  h1: { fontFamily: 'Rubik-Medium', color: '#5F6368' },
  centerContent: { width: '100%', alignItems: 'center' },
  text: { fontFamily: 'Rubik-Regular', color: '#5F6368', textAlign: 'center' },
  button: { fontFamily: 'Rubik-Medium', textTransform: 'uppercase' },
  buttonPrimary: { backgroundColor: '#FF4C1D' },
  buttonSecondary: { backgroundColor: '#5F6368' },
  buttonFooter: {
    width: '100%',
    height: 140,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'flex-end',
  },
});

const WelcomeScr = () => {
  const { navigate } = useNavigation();
  return (
    <StyleProvider style={getTheme(platform)}>
      <View style={styles.wrapper}>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.paddedContent}>
            <View style={styles.centerContent}>
              <Image
                source={require('../assets/images/welcome-scr.png')}
                style={{ width: 240, height: 240 }}
              />
            </View>
            <View style={styles.divider20} />
            <View>
              <H1 style={styles.h1}>CIRCL</H1>
            </View>
            <View style={styles.divider10} />
            <View style={styles.centerContent}>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla elit ut
                congue pharetra.
              </Text>
            </View>
          </View>
          <View style={styles.buttonFooter}>
            <Button
              dark
              rounded
              block
              onPress={() => navigate('Register')}
              style={styles.buttonPrimary}
            >
              <Text style={styles.button}>Register</Text>
            </Button>
            <View style={styles.divider10} />
            <Button
              rounded
              dark
              block
              onPress={() => navigate('Login')}
              style={styles.buttonSecondary}
            >
              <Text style={styles.button}>Login</Text>
            </Button>
            <View style={styles.divider20} />
          </View>
        </SafeAreaView>
      </View>
    </StyleProvider>
  );
};

WelcomeScr.propTypes = {};

WelcomeScr.defaultProps = {};

export default WelcomeScr;
