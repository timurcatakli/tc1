import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import config from '/shared/config';

const styles = StyleSheet.create({
  loader: { display: 'flex', flex: 1, justifyContent: 'center' },
});

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={config.colors.secondaryColor} />
    </View>
  );
};

export default Loader;
