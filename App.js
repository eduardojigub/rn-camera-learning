import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Access Denied</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera type={type} style={styles.camera} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    wudth: '100%',
    height: '100%',
  },
});
