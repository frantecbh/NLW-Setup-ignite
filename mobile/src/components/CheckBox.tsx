import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import Animated, { FlipInXDown, RotateOutUpLeft, ZoomIn, ZoomOut } from 'react-native-reanimated';
import colors from 'tailwindcss/colors'

import { Feather } from '@expo/vector-icons'

interface Props extends TouchableOpacityProps {
  checked?: boolean,
  texto: string
}


export function CheckBox({ texto, checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest} className="flex-row mb-2 items-center gap-2">

      {
        checked ?
          <Animated.View 
          className='h-8 w-8 bg-green-500 rounded-lg items-center justify-center'
          entering={ZoomIn}
          exiting={ZoomOut}
          >
            <Feather name='check' size={20} color={colors.white} />
          </Animated.View>
          :
          <View className='h-8 w-8 bg-zinc-900 rounded-lg' />

      }

      <Text className='text-white text-base font-semibold'>
        {texto}
      </Text>



    </TouchableOpacity>
  );
}