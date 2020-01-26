import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { H3, Text, Button, ListItem, Separator, Body, Right } from 'native-base';
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
    width: 80,
    height: 80,
  },
  logoView: {
    marginRight: 20,
    paddingTop: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  titleView: { flex: 1 },
  separator: { backgroundColor: 'white', borderColor: '#5F6368', paddingLeft: 20 },
});

const BuildingsScr = () => {
  const { navigate } = useNavigation();
  const { body } = customStyles;

  const handleOnPress = () => {
    navigate('B');
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

        <Divider margin={10} />
        <ScrollView>
          {Object.keys(buildings).map(obj => {
            const building = buildings[obj];
            return (
              <React.Fragment key={obj}>
                <Separator bordered key={obj} style={styles.separator}>
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
