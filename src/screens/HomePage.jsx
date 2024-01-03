import {View, Text} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Services from '../components/Services';
import MyCarousel from '../components/MyCarousel';
const clientItem = [
  {
    name: 'Client1',
    url: 'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.webp?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w=',
  },
  {
    name: 'Client2',
    url: 'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc=',
  },
  {
    name: 'Client3',
    url: 'https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg',
  },
  {
    name: 'Client4',
    url: 'https://media.licdn.com/dms/image/C4D12AQFBwRUfyBn5yQ/article-cover_image-shrink_600_2000/0/1520110535291?e=2147483647&v=beta&t=9zFPqxuqLOcN0xHA_v5jHZVEW5WNLMxhVCj4eOOwJFI',
  },
];
const servicesItem = [
  {
    name: 'Service1',
    url:'https://img.freepik.com/free-vector/business-people-arranging-appointment-digital-booking-app_74855-20006.jpg',
  },
  {
    name: 'Service2',
    url:'https://img.freepik.com/free-vector/business-woman-doing-various-tasks-same-time_23-2148821985.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701302400&semt=ais',
  },
  {
    name: 'Service3',
    url: 'https://img.freepik.com/premium-vector/online-lesson-art-drawing_82574-6148.jpg',
  },
  {
    name: 'Service14',
    url:'https://img.freepik.com/free-vector/engineer-developer-with-laptop-tablet-code-cross-platform-development-cross-platform-operating-systems-software-environments-concept-bright-vibrant-violet-isolated-illustration_335657-312.jpg',
  },
];
const HomePage = () => {
  return (
    <View className="flex flex-1 w-full bg-yellow-500">
      <Header />
      <MyCarousel />
      <Services title="services" item={servicesItem} />
      <Services title="Clients" item={clientItem}/>
      <Menu />
    </View>
  );
};

export default HomePage;
