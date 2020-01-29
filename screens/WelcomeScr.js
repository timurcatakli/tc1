import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Text, H1 } from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Row, Grid } from 'react-native-easy-grid';
import { useNavigation } from 'react-navigation-hooks';
import { FlowWrapper, Divider } from 'shared/components';
import customStyles from 'shared/styles';
import config from 'shared/config';

const styles = StyleSheet.create({});

const WelcomeScr = () => {
  const { button, buttonView, buttonRow } = customStyles;
  const { navigate } = useNavigation();
  return <FlowWrapper />;
};

export default WelcomeScr;
