import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import { Button, Header } from 'native-base';
import config from 'shared/config';

const styles = StyleSheet.create({
  header: { backgroundColor: 'white', borderBottomWidth: 0 },
  view: {
    width: '100%',
    paddingLeft: config.style.paddingLeft - 10,
    paddingRight: config.style.paddingRight - 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const GoBack = () => {
  const { goBack } = useNavigation();
  return (
    <Header style={styles.header}>
      <View style={styles.view}>
        <Button iconLeft transparent onPress={() => goBack()}>
          <Ionicons name="md-arrow-round-back" size={32} color="#5F6368" />
        </Button>
      </View>
    </Header>
  );
};

export default GoBack;
