import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

const TabsLayout = () => {
  return (
    <>
    <Tabs>
      <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
      }}></Tabs.Screen>
    </Tabs>
    </>
  )
}

export default TabsLayout