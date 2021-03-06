import React from 'react';
import { View, Text } from 'react-native';
import app from 'shared/firebase';
import { useNavigation } from 'react-navigation-hooks';
import { Button, Icon } from 'native-base';
import { FlowWrapper, TitleAndText, Divider } from 'shared/components';
import customStyles from 'shared/styles';

const HomeScr = () => {
  const {
    viewContentFooterWrapper,
    viewContentWrapper,
    viewFooterWrapper,
    buttonLabel,
  } = customStyles;

  const handleLogout = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
      })
      .catch(error => {
        // An error happened.
        console.log('An error happened.', error);
      });
  };
  return (
    <FlowWrapper>
      <View style={viewContentFooterWrapper}>
        <View style={viewContentWrapper}>
          <Divider margin={20} />
          <TitleAndText title="Home....." text="Home" />
        </View>
        <View>
          <View style={viewFooterWrapper}>
            <Button dark rounded block iconLeft onPress={handleLogout}>
              <Text style={{ color: 'gold' }}>Logout</Text>
            </Button>
            <Divider margin={20} />
          </View>
        </View>
      </View>
    </FlowWrapper>
  );
};

export default HomeScr;
