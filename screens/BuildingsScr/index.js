import React from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import {
  Text,
  Button,
  StyleProvider,
  H1,
  H2,
  H3,
  Form,
  Item,
  Label,
  Input,
  ListItem,
  Separator,
  Body,
  Right,
} from 'native-base';
import buildings from './mockData';
import { DismissKeyboard } from '../../shared/components';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

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
  form: { width: '100%' },
});

const BuildingsScr = () => {
  const { navigate, goBack } = useNavigation();

  const handleOnPress = () => {
    navigate('B');
  };

  return (
    <StyleProvider style={getTheme(platform)}>
      <View style={styles.wrapper}>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.paddedView}>
            <Button iconLeft transparent onPress={() => goBack()}>
              <Ionicons name="md-arrow-round-back" size={32} color="#5F6368" />
            </Button>
          </View>
          <View style={styles.paddedView}>
            <H3 style={styles.h1}>PLACE</H3>
          </View>
          <View style={styles.paddedContent}>
            <View style={styles.divider20} />
            <View>
              <H3 style={styles.h1}>Pick your building</H3>
            </View>
            <View style={styles.divider10} />
            <View style={styles.centerContent}>
              <Text style={styles.text}>Pick your building related msg goes here</Text>
            </View>
            <View style={styles.divider10} />
          </View>
          <ScrollView>
            {Object.keys(buildings).map(obj => {
              const building = buildings[obj];
              return (
                <>
                  <Separator bordered style={{ backgroundColor: 'white' }}>
                    <Text>{building.label.toUpperCase()}</Text>
                  </Separator>

                  {building.data.map(location => {
                    return (
                      <ListItem key={location.id}>
                        <Body>
                          <Text>{location.name}</Text>
                          <Text note numberOfLines={1}>
                            {location.city}
                          </Text>
                        </Body>
                        <Right>
                          <Button transparent>
                            <Text onPress={handleOnPress}>Select</Text>
                          </Button>
                        </Right>
                      </ListItem>
                    );
                  })}
                </>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </View>
    </StyleProvider>
  );
};

BuildingsScr.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    popToTop: PropTypes.func.isRequired,
  }).isRequired,
};

export default BuildingsScr;
