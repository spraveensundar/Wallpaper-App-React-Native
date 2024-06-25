import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import { data } from '../constants'
import Animated, { FadeInRight } from 'react-native-reanimated'



const Categories = ({activeCategory,handleActiveCategory}) => {
  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{padding:15}}
    data={data.categ}
    keyExtractor={item=> item}
    renderItem={({item, index})=>(
      <CategoryItem
           isActive={activeCategory==item}
           handleActiveCategory={handleActiveCategory}
           title={item}
           index={index}
          />
  )}
    />
  )
}


const CategoryItem =({title,index,isActive,handleActiveCategory})=>{

  let btnClass = isActive? "bg-black": "bg-white";
  let  font=isActive? "font-semibold text-white" :"text-gray-500"

  return(

    <Animated.View entering={FadeInRight.delay(index*200).duration(1000)}>
    <TouchableOpacity  onPress={()=>handleActiveCategory(isActive? null:title)}  className={"mx-2 rounded-full shadow-2xl  shadow-white border border-gray-300 "+btnClass}>
      <Text className={"p-3 text-lg text-neutral-600"+font}>{title}</Text>
    </TouchableOpacity>
    </Animated.View>
  )
}


export default Categories;