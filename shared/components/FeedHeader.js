import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 4,
  },
  buttonLabel: {
    fontFamily: 'Rubik-Medium',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  button: {
    margin: 2,
  },
});

const FeedHeader = () => {
  return (
    <View style={styles.container}>
      <Button rounded style={styles.button} success>
        <Text style={styles.buttonLabel}>All</Text>
      </Button>
      <Button rounded style={styles.button} info>
        <Text style={styles.buttonLabel}>Electronics</Text>
      </Button>
      <Button rounded style={styles.button} info>
        <Text style={styles.buttonLabel}>Events</Text>
      </Button>
      <Button rounded style={styles.button} info>
        <Text style={styles.buttonLabel}>Misc</Text>
      </Button>
    </View>
  );
};

export default FeedHeader;
