import {View, Text} from 'react-native';
import React, {FC} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../../components/HomeComponents/HomeHeader';
import TagList from '../../components/HomeComponents/TagList';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView>
      <HomeHeader/>
        <TagList/>

    </SafeAreaView>
  );
};

export default HomeScreen;
