import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Payment from './src/components/Payment'

const App = () => {
  return (
    <View style={styles.container}>
      <Payment />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})