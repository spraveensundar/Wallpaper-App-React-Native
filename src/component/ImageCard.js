import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

const ImageCard = ({item, index}) => {
  return (
    <Pressable>
      <Image source={{uri: item?.webformatURL}} className="w-100 h-80 rounded-lg m-2"/>
    </Pressable>
  )
}

export default ImageCard