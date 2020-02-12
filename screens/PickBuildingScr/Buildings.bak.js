import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import app from 'shared/firebase';
import { Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import config from '/shared/config';
import { getBuildingsByDomain } from 'shared/queries/';
import { getDomainFromEmail } from 'shared/utilities';
import { Loader } from 'shared/components';
import Building from './Building';

const styles = StyleSheet.create({
  contentWrapper: {
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
  },
});

const Buildings = () => {
  const userEmail = app.auth().currentUser.email;
  const userDomain = getDomainFromEmail(userEmail);
  const [buildings, setBuildings] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    getBuildingsByDomain(userDomain).then(response => {
      setBuildings(response);
      setFetching(false);
    });
  }, []);

  if (fetching) {
    return <Loader />;
  }
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
          OTHER/REMOTE
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
