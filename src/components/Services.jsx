import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Services = ({title, item}) => {
  return (
    <View className="my-5 mx-3">
      <Text className="text-2xl  font-bold text-white">{title}</Text>
      <View className="flex flex-row justify-around items-center mt-1">
        {
          item.map(({name,url}) => {
            return (
              <View className='flex flex-col items-center '>
                <Image
                  source={{uri:url}}
                  style={{width: wp(15), height: wp(15)}}
                  className="rounded-full"
                />
                <Text className='text-white'>{name}</Text>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default Services;
