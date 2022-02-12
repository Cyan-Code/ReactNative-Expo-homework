import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState<number>(0)

  return (
    <View style={styles.container}>
      <Text>Count: { count }</Text>
      <View style={styles.contentButtons}>
        <Button
          title='      +1      '
          onPress={()=>setCount(value => value+1)}
        />
        <View style={styles.contentText}>
        </View>
        <Button
          title='      -1      '
          onPress={()=>setCount(value => value-1)}
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
