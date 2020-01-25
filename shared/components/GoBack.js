import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import { Button } from 'native-base';

const styles = StyleSheet.create({
  wrapper: { width: '100%', paddingLeft: 30, paddingRight: 30 },
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

GoBack.propTypes = {};
GoBack.defaultProps = {};
export default GoBack;
