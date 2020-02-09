import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { Button, Icon } from 'native-base';
import { FlowWrapper, TitleAndText, Divider } from 'shared/components';
import customStyles from 'shared/styles';

const ErrorScr = () => {
  const {
    viewContentFooterWrapper,
    viewContentWrapper,
    viewFooterWrapper,
    buttonLabel,
  } = customStyles;

  const { state, goBack } = useNavigation();
  const errorMsg = state.params.error;

  return (
    <FlowWrapper>
      <View style={viewContentFooterWrapper}>
        <View style={viewContentWrapper}>
          <Divider margin={20} />
          <TitleAndText error title="Oopps..." text={errorMsg} />
        </View>
        <View>
          <View style={viewFooterWrapper}>
            <Button
              dark
              rounded
              block
              iconLeft
              style={{ backgroundColor: 'red' }}
              onPress={() => goBack()}
            >
              <Icon name="arrow-back" style={{ marginRight: 10 }} />
              <Text style={buttonLabel}>Go Back</Text>
            </Button>
            <Divider margin={20} />
          </View>
        </View>
      </View>
    </FlowWrapper>
  );
};

export default ErrorScr;
