import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = () => {
  return (
    <View
      style={{height: hp(10)}}
      className="bg-yellow-500 flex flex-row justify-between px-2 items-center">
      <View className='flex flex-row gap- items-center'>
        <Image
          source={require('../assets/image/navLine.png')}
          style={{width: wp(10), height: wp(10)}}
          className="bg-blend-multiply"
        />
        <Image
          source={require('../assets/image/logo.png')}
          style={{width: wp(15), height: wp(18)}}
          className="bg-blend-multiply"
        />
      </View>
      <View className='flex flex-row items-center'>
      <Image
          source={require('../assets/image/location.png')}
          style={{width: wp(5), height: wp(5)}}
          className="bg-blend-multiply"
        />
        <Text className='text-xl font-bold'>Location</Text>
      </View>
    </View>
  );
};

export default Header;
