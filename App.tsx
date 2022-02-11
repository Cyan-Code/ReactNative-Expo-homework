import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style={styles.contentButtons}>
        <Button
          title='      +1      '
          onPress={()=> Alert.alert('mas uno :p')}
        />
        <View style={styles.contentText}>
        </View>
        <Button
          title='      -1      '
          onPress={()=> Alert.alert('mas uno :p')}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33F6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentButtons: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentText: {
    flex:0.2
  }
});
