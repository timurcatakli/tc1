import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import FeedScr from './FeedScr';

const SellScr = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sell!</Text>
    </View>
  );
};

const ChatsScr = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chats!</Text>
    </View>
  );
};

const MyScr = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyScr!</Text>
    </View>
  );
};

const TabBarComponent = props => <BottomTabBar {...props} />;

export default createBottomTabNavigator(
  {
    Feed: FeedScr,
    Sell: SellScr,
    Chats: ChatsScr,
    My: MyScr,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      /* eslint-disable-next-line */
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Sell') {
          iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
        } else if (routeName === 'Feed') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        } else if (routeName === 'Chats') {
          iconName = focused ? 'md-chatboxes' : 'md-chatboxes';
        } else if (routeName === 'My') {
          iconName = focused ? 'ios-person' : 'ios-person';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: props => (
      <TabBarComponent
        {...props}
        style={{
          borderTopColor: 'transparent',
          backgroundColor: '#FFD36E',
          height: 60,
          paddingTop: 10,
        }}
      />
    ),
    tabBarOptions: {
      activeTintColor: '#FF5C3E',
      inactiveTintColor: '#545454',
      labelStyle: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontFamily: 'Rubik-Medium',
      },
      tabStyle: {},
      style: {},
    },
  }
);
