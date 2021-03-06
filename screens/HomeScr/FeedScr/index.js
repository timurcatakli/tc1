import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { Text } from 'native-base';
import { FeedHeader, FeedWrapper } from 'shared/components';
import ListingController from './ListingController';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

const FeedScr = () => {
  const [data, setData] = useState([]);

  const makeRemoteRequest = () => {
    // const url = 'http://localhost:3000/listings';
    const url = 'https://my.api.mockaroo.com/products.json?key=4a9b0470';
    /* eslint-disable-next-line */
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(error => {
        console.log(error);
        // setFeedState({ ...feedState, ...{ error, loading: false } });
      });
  };

  useEffect(() => {
    makeRemoteRequest();
  }, []);

  return (
    <FeedWrapper>
      {/* <Image source={Splunk} /> */}
      <FeedHeader />
      <FlatList
        data={data}
        contentContainerStyle={styles.container}
        ListEmptyComponent={() => <Text>List is empty</Text>}
        numColumns={2}
        initialNumToRender={4}
        renderItem={({ item }) => <ListingController item={item} />}
        keyExtractor={item => item.id}
      />
    </FeedWrapper>
  );
};

export default FeedScr;
