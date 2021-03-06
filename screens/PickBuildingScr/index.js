import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { FlowWrapper, TitleAndText, Divider } from 'shared/components';
import customStyles from 'shared/styles';
import { logout } from 'shared/queries/';
import Buildings from './Buildings';

const PickBuildingScr = () => {
  // console.log('PickBuildingScr =>', useContext(AppContext));
  const {
    viewContentFooterWrapper,
    viewContentWrapper,
    viewFooterWrapper,
    buttonLabel,
  } = customStyles;

  return (
    <FlowWrapper>
      <Divider margin={10} />
      <View style={viewContentFooterWrapper}>
        <View style={[viewContentWrapper, { justifyContent: 'flex-start' }]}>
          <Divider margin={20} />
          <TitleAndText
            title="PICK YOUR BUILDING"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Divider margin={10} />
          <Buildings />
        </View>
        <View>
          <View style={viewFooterWrapper}>
            <Button primary rounded block onPress={logout}>
              <Text style={buttonLabel}>LOGOUT</Text>
            </Button>
            <Divider margin={20} />
          </View>
        </View>
      </View>
    </FlowWrapper>
  );
};

export default PickBuildingScr;
