import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const LoginBttn = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'red',
        width: 91,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:50
      }}>
      <Text style={{color: '#fff',fontSize:12,fontWeight:'700'}}>Giriş Yap</Text>
    </TouchableOpacity>
  );
};

export default LoginBttn;
