import { View, Text } from 'react-native'
import React from 'react'
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from './ImageCard';

const ImageGrid = ({image}) => {
  return (
    <View  style={{width:'100%',minHeight:"2px"}}>
      <MasonryFlashList
      data={image}
      numColumns={2}
      initialNumberToRender={1000}
      renderItem={({ item , index}) => <ImageCard item={item} index={index}/>}
      estimatedItemSize={200}
    />
    </View>
  )
}

export default ImageGrid