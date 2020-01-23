import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text, ListItem, Separator, Body, Right } from 'native-base';
import buildings from './mockData';

const styles = StyleSheet.create({
  content: {},
});

const BuildingsScr = props => {
  const { navigation } = props;

  const handleOnPress = () => {
    navigation.navigate('B');
  };
  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        {Object.keys(buildings).map(obj => {
          const building = buildings[obj];
          return (
            <>
              <Separator bordered key={obj}>
                <Text>{building.label.toUpperCase()}</Text>
              </Separator>
              {building.data.map(location => {
                return (
                  <ListItem key={location.id}>
                    <Body>
                      <Text>{location.name}</Text>
                      <Text note numberOfLines={1}>
                        {location.city}
                      </Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text onPress={handleOnPress}>Select</Text>
                      </Button>
                    </Right>
                  </ListItem>
                );
              })}
            </>
          );
        })}
      </Content>
    </Container>
  );
};

BuildingsScr.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    popToTop: PropTypes.func.isRequired,
  }).isRequired,
};

export default BuildingsScr;
