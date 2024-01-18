import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Cart() {
  return (
    <View style={styles.Cart}>
      <Text>Comming Soon</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Cart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  }
})