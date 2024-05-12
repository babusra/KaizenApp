import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import {Images} from '../../resources/Images';
import {moderateScale} from '../../utils/Dimension';
import LoginBttn from './LoginBttn';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeHeader: FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
      }}>
      <Image
        source={Images.logo}
        style={{width: moderateScale(81), height: moderateScale(40)}}
      />
      <View style={{flexDirection: 'row', gap: 8}}>
        <LoginBttn />
        <Icon name="user" size={30} color="#900" />
      </View>
    </View>
  );
};

export default HomeHeader;
