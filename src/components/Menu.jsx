import { View, Image } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const Menu = () => {
  return (
    <View className='flex flex-row justify-around border-2 border-x-0 items-center py-1 absolute bottom-0 w-full'> 
     {/* <Image source={require('.')} */}
     <Image
          source={require('../assets/image/homeIcon.png')}
          style={{width: wp(10), height: wp(10)}}
          className="bg-blend-multiply"
        />
     <Image
          source={require('../assets/image/mapIcon.png')}
          style={{width: wp(10), height: wp(10)}}
          className="bg-blend-multiply"
        />
     <Image
          source={require('../assets/image/phoneIcon.png')}
          style={{width: wp(8), height: wp(8)}}
          className="bg-blend-multiply"
        />
     <Image
          source={require('../assets/image/threedot.png')}
          style={{width: wp(10), height: wp(10)}}
          className="bg-blend-multiply"
        />
    </View>
  )
}

export default Menu