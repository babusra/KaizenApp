import {View, Text, TouchableOpacity} from 'react-native';
import { Colors } from '../utils/Colors';
import {moderateScale} from '../utils/Dimension';
import Icon from 'react-native-vector-icons/FontAwesome';

export function BottomTabBar({state, descriptors, navigation}: any) {
 

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              borderTopWidth:isFocused
              ? 4
              : 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: 20,
              height: moderateScale(90),
              borderTopColor: isFocused
                ? Colors.purple
                : Colors.grey,
              backgroundColor: Colors.white,
            }}>

              <Icon name={options.tabBarIcon} size={27} color={isFocused? Colors.purple:Colors.darkGrey} style={{paddingBottom:8}}  />
              <Text style={{color:isFocused?Colors.purple:Colors.darkGrey}} >{label}</Text>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: moderateScale(20),
                    height: moderateScale(20),
                    borderRadius: 30,
                    backgroundColor:'red',
                    position:'absolute',
                    top:20,
                    right:20
                  }}>
                  <Text style={{color:Colors.white}}>{"0"}</Text>
                </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
