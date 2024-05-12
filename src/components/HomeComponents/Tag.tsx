import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from '../../utils/Dimension';

const Tag = ({title, icon}: {title: string; icon: string}) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 3,
        borderColor: '#ECEEEF',
        padding: moderateScale(5),
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: icon
        }}
        style={{width: 24, height: 24, borderRadius: 6}}
      />
      <Text style={{padding: 7}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Tag;
