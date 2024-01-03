import React from 'react';
import { View, Text, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
const data = [
    {
      title: 'Image 1',
      url: 'https://picsum.photos/id/1/200/300',
    },
    {
      title: 'Image 2',
      url: 'https://picsum.photos/id/2/200/300',
    },
    {
      title: 'Image 3',
      url: 'https://picsum.photos/id/3/200/300',
    },
    {
      title: 'Image 3',
      url: 'https://picsum.photos/id/4/200/300',
    },
    {
      title: 'Image 5',
      url: 'https://picsum.photos/id/5/200/300',
    },
    
  ];
  const MyCarousel = () => {
    const renderItem = ({ item }) => {
      return (
        <View className='bg-yellow-500 p-4 w-[100vw]' >
          <Text className='text-white text-lg mb-2'>{item.title}</Text>
          <Image source={{ uri: item.url }} style={{  height: 200 }} className='w-full rounded-lg' />
        </View>
      );
    };
  
    return (
        <View className='w-full bg-black'>
      <Carousel 
        data={data}
        renderItem={renderItem}
        sliderWidth={wp(100)}
        itemWidth={500}
      />
      </View>
    );
  }

export default MyCarousel

