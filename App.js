import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Topo from './src/components/Topo';
import Lista from './src/components/Lista';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      <Topo/>
      <Lista/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
