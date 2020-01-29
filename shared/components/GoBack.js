import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import { Button, Header } from 'native-base';
import config from 'shared/config';

const styles = StyleSheet.create({
  header: { backgroundColor: 'transparent', borderBottomWidth: 0 },
  image: { width: hp('5%'), height: hp('5%') },
  view: {
    width: '100%',
    paddingLeft: config.style.paddingLeft - 10,
    paddingRight: config.style.paddingRight - 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const GoBack = () => {
  const { goBack } = useNavigation();
  return (
    <Header style={styles.header}>
      <View style={styles.view}>
        <View>
          <Button iconLeft transparent onPress={() => goBack()}>
            <Ionicons name="md-arrow-round-back" size={32} color="#5F6368" />
          </Button>
        </View>
        <View>
          <Image source={require('assets/images/logo.png')} style={styles.image} />
        </View>
      </View>
    </Header>
  );
};

export default GoBack;
