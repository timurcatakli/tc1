import React from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableHighlight } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from 'react-navigation-hooks';
import { Ionicons } from '@expo/vector-icons';
import { H3, Text, Button } from 'native-base';
import { FlowWrapper, GoBack, Divider } from 'shared/components';
import customStyles from 'shared/styles';
import config from 'shared/config';
import buildings from './mockData';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
  },
  logo: {
    width: wp('20%'),
    height: wp('20%'),
  },
  logoView: {
    marginRight: 20,
    paddingTop: 2,
  },
  titleView: { flex: 1 },
  separator: {
    backgroundColor: '#5F6368',
    borderColor: '#5F6368',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  group: { color: 'white' },
  building: {
    marginBottom: 8,
    marginTop: 8,
    height: 60,
    flexDirection: 'row',
    width: '100%',
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
  },
  buildingLeft: { flex: 3, justifyContent: 'center' },
  buildingLeftTop: { fontSize: 18 },
  buildingLeftBottom: { fontFamily: 'Rubik-Medium', color: '#005D68' },
  buildingRight: { flex: 1, justifyContent: 'center' },
});

const BuildingsScr = () => {
  const { navigate } = useNavigation();
  const { body } = customStyles;

  const handleOnPress = () => {
    navigate('PersonalInfo');
  };

  return (
    <FlowWrapper>
      <GoBack />
      <View style={body}>
        <Divider margin={10} />
        <View style={styles.header}>
          <View style={styles.logoView}>
            <Image source={require('assets/logos/splunk-logo.png')} style={styles.logo} />
          </View>
          <View style={styles.titleView}>
            <H3>Pick your building</H3>
            <Divider margin={4} />
            <Text>Proin consectetur ac risus vel imperdiet.</Text>
          </View>
        </View>

        <Divider margin={hp('4%')} />
        <ScrollView>
          {Object.keys(buildings).map(obj => {
            const building = buildings[obj];
            return (
              <React.Fragment key={obj}>
                <View key={obj} style={styles.separator}>
                  <Text style={styles.group}>{building.label.toUpperCase()}</Text>
                </View>

                {building.data.map(location => {
                  return (
                    <TouchableHighlight
                      underlayColor="#dadde0"
                      onPress={handleOnPress}
                      key={location.id}
                    >
                      <View key={location.id} style={styles.building}>
                        <View style={styles.buildingLeft}>
                          <Text style={styles.buildingLeftTop}>{location.name}</Text>
                          <Text style={styles.buildingLeftBottom}>{location.city}</Text>
                        </View>
                        <View style={styles.buildingRight}>
                          <Button transparent>
                            <Ionicons
                              name="md-arrow-forward"
                              size={32}
                              color="#5F6368"
                              onPress={handleOnPress}
                            />
                          </Button>
                        </View>
                      </View>
                    </TouchableHighlight>
                  );
                })}
              </React.Fragment>
            );
          })}
        </ScrollView>
      </View>
      <Divider margin={20} />
    </FlowWrapper>
  );
};

export default BuildingsScr;
