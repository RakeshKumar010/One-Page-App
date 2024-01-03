import { View, Text, Image } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const Services = ({title}) => {
  return (
    <View className='my-5 mx-3'>
      <Text className='text-2xl  font-bold'>{title}</Text>
      <View className='flex flex-row justify-around items-center mt-1'>
      <Image
          source={require('../assets/image/servicesImg/dataEntry.jpg')}
          style={{width: wp(15), height: wp(15)}}
          className="rounded-full"
        />
      <Image
          source={require('../assets/image/servicesImg/blogPost.jpg')}
          style={{width: wp(15), height: wp(15)}}
          className="rounded-full"
        />
      <Image
          source={require('../assets/image/servicesImg/onlineReview.jpg')}
          style={{width: wp(15), height: wp(15)}}
          className="rounded-full"
        />
      <Image
          source={require('../assets/image/servicesImg/socialSharing.jpg')}
          style={{width: wp(15), height: wp(15)}}
          className="rounded-full"
        />

      </View>
    </View>
  )
}

export default Services