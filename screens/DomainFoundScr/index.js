import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { useNavigation } from 'react-navigation-hooks';
import { FlowWrapper, TitleAndText, GoBack, Divider } from 'shared/components';
import customStyles from 'shared/styles';
import DomainFoundMessage from './DomainFoundMessage';

const DomainFoundScr = () => {
  const {
    viewContentFooterWrapper,
    viewContentWrapper,
    viewFooterWrapper,
    buttonLabel,
  } = customStyles;

  const { navigate, state } = useNavigation();
  const { title } = state.params;
  return (
    <FlowWrapper>
      <GoBack />
      <View test-id="view-content-footer-wrapper" style={viewContentFooterWrapper}>
        <View style={viewContentWrapper} test-id="view-content-wrapper">
          <DomainFoundMessage title={title} />
          <Divider margin={20} />
          <TitleAndText
            title="Now Confirm your email"
            text="We just emailed you a temporary password. You may login to the app once you receive it. Don't forget to check your spam folder."
          />
        </View>
        <View test-id="view-footer-wrapper">
          <View style={viewFooterWrapper}>
            <Button primary rounded block onPress={() => navigate('Login')}>
              <Text style={buttonLabel}>LOGIN</Text>
            </Button>
            <Divider margin={20} />
          </View>
        </View>
      </View>
    </FlowWrapper>
  );
};

export default DomainFoundScr;
