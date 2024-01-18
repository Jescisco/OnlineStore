import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Online Store</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})