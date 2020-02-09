import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import config from '/shared/config';
import { getBuildingsByDomain } from 'shared/queries/';
import buildings from './mockData';
import Building from './Building';

const styles = StyleSheet.create({
  contentWrapper: {
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
  },
});

const Buildings = () => {
  useEffect(() => {
    console.log('useEffect');
    getBuildingsByDomain('splunk.com').then(res => {
      console.log(res);
    });
  }, []);

  return (
    <ScrollView style={styles.contentWrapper}>
      {buildings.map(building => {
        return <Building key={building.id} data={building} />;
      })}
      <Button dark iconRight style={{ minHeight: 70, marginBottom: 40 }}>
        <Text
          style={{
            fontFamily: 'Rubik-Medium',
            textTransform: 'uppercase',
            fontSize: 16,
          }}
        >
          OTHER
        </Text>
        <Ionicons
          name="md-arrow-round-forward"
          size={28}
          color="white"
          style={{ marginRight: 10 }}
        />
      </Button>
    </ScrollView>
  );
};

export default Buildings;
