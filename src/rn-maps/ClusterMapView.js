import React, {useEffect, useState} from 'react';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';

const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
};

const ClusterMapView = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('In the counter');
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  console.log('Counter', counter);

  return (
    <MapView initialRegion={INITIAL_REGION} style={{flex: 1}}>
      <Marker coordinate={{latitude: 52.4, longitude: 18.7}} />
      <Marker coordinate={{latitude: 52.1, longitude: 18.4}} />
      <Marker coordinate={{latitude: 52.6, longitude: 18.3}} />
      <Marker coordinate={{latitude: 51.6, longitude: 18.0}} />
      <Marker coordinate={{latitude: 53.1, longitude: 18.8}} />
      <Marker coordinate={{latitude: 52.9, longitude: 19.4}} />
      <Marker coordinate={{latitude: 52.2, longitude: 21}} />
      <Marker coordinate={{latitude: 52.4, longitude: 21}} />
      <Marker coordinate={{latitude: 51.8, longitude: 20}} />
    </MapView>
  );
};

export default ClusterMapView;
