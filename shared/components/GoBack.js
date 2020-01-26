import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import { Button } from 'native-base';
import config from 'shared/config';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const GoBack = () => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Button iconLeft transparent onPress={() => goBack()}>
        <Ionicons name="md-arrow-round-back" size={32} color="#5F6368" />
      </Button>
    </View>
  );
};

export default GoBack;
