import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Services from '../components/Services'
import MyCarousel from '../components/MyCarousel'

const HomePage = () => {
  return (
    <View className='flex flex-1 w-full bg-yellow-500'>
        <Header/>
      {/* <Text>HomePage</Text> */}
      <MyCarousel/>
      <Services title='services'/>
      <Services title='Clients'/>
      <Menu/>
    </View>
  )
}

export default HomePage