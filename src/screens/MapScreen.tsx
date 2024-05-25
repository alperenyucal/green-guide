import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="standard"
        // istanbul besiktas
        initialRegion={{
          latitude: 41.0392,
          longitude: 29.0158,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation>
        {/* Recycling centers in Istanbul */}
        <Marker
          coordinate={{ latitude: 41.0082, longitude: 28.9784 }}
          title="Atık Getir"
          description="Recycling Center"
        />
        <Marker
          coordinate={{ latitude: 41.0152, longitude: 28.9797 }}
          title="Atık Getir"
          description="Recycling Center"
        />
        <Marker
          coordinate={{ latitude: 41.0114, longitude: 28.9831 }}
          title="Atık Getir"
          description="Recycling Center"
        />
        <Marker
          coordinate={{ latitude: 41.0151, longitude: 28.9842 }}
          title="Atık Getir"
          description="Recycling Center"
        />
        <Marker
          coordinate={{ latitude: 41.076903, longitude: 29.031955 }}
          title="Atık Getir"
          description="Recycling Center"
        />
        <Marker
          coordinate={{ latitude: 41.044924, longitude: 29.055567 }}
          title="Atık Getir"
          description="Recycling Center"
        />
        <Marker
          coordinate={{ latitude: 41.115367, longitude: 29.0235 }}
          title="Atık Getir"
          description="Recycling Center"
        />
        <Marker
          coordinate={{ latitude: 41.0777, longitude: 29.016 }}
          title="Atık Getir"
          description="Recycling Center"
        />
        <Marker
          coordinate={{ latitude: 41.075, longitude: 29.016 }}
          title="Atık Getir"
          description="Recycling Center"
        />
        <Marker
          coordinate={{ latitude: 41.079624, longitude: 29.07777 }}
          title="Atık Getir"
          description="Recycling Center"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
