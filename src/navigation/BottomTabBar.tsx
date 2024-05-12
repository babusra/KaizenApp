import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../utils/Colors';
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
              borderTopWidth: isFocused ? 4 : 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: 20,
              height: moderateScale(90),
              borderTopColor: isFocused ? 'red' : 'white',
              backgroundColor: 'white',
            }}>
            <Icon
              name={options.tabBarIcon}
              size={27}
              color={isFocused ? 'red' : 'white'}
              style={{paddingBottom: 8}}
            />
            <Text style={{color: isFocused ? 'red' : 'white'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
