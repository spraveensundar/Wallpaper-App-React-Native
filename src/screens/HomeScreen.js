import { View, Text, TouchableOpacity, StatusBar,  ScrollView, TextInput, Pressable} from 'react-native'
import React, { useRef, useState, useEffect, useCallback} from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-easy-icon';
import Categories from '../component/Categories';
import { apiCall } from '../Api';
import ImageGrid from '../component/ImageGrid';
import { debounce} from "lodash"
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
import { MagnifyingGlassIcon, XCircleIcon} from "react-native-heroicons/outline"

var page = 1;

const HomeScreen = () => {

    const[search, setSearch]=useState("");
    const searchInputRef = useRef(null);
    const [image,setImage]=useState([]);
    const [activeCategory, setActiveCategory]=useState(null)

    const handleActiveCategory =(cat)=>{
      setActiveCategory(cat)
      clearSearch()
      setImage([])
      page=1;
      let params ={
        page,
      }
      if(cat) params.category = cat;
      fetchImages(params, false)
    }


    useEffect(()=>{
      fetchImages();
    },[])

    const fetchImages= async (params={page: 1}, append=false)=>{
      let res = await apiCall(params);
      if(res.success && res?.data?.hits){
        if(append)

          setImage([...image, ...res.data.hits])

        setImage([...res.data.hits])
      }
    }


    const handleSearch =(text)=>{
        setSearch(text);
        if(text.length>2){
          page=1;
          setImage([]);
          setActiveCategory(null);
          fetchImages({page, q:text},false)
        }

        if(text==""){
          page = 1;
          searchInputRef?.current?.clear();
          setImage([]);
          setActiveCategory(null)
          fetchImages({page},false);
        }
    }

    const clearSearch = ()=>{
        setSearch("");
        searchInputRef?.current?.clear();
    }

    const handleTextDebounce = useCallback(debounce(handleSearch, 400),[]);

    const navigation = useNavigation();

  return (

    <View className="flex-1 w-100 hv-100 p-2">

      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"}/>

      <View className="flex-row justify-between mb-3 mx-2 mt-16">
        <Text className="text-center text-3xl text-black font-bold">Pexels</Text>
        <SparklesIconOutline  type="feather" name="award" color="coral" size={30}/>
      </View>

      <ScrollView
      contentContainerStyle={{padding:10}}>

        <View className="flex-row justify-between items-center border px-3 rounded-xl border-gray-500">
             <MagnifyingGlassIcon type="feather"  className="m-2 px-3 rounded-lg" name="search" color="coral" size={30}/>
             <TextInput
             
              //value={search} 
              onChangeText={handleTextDebounce}
              className="flex-1 px-2" 
              placeholder='Search for free photo'
              ref={searchInputRef}/>
             {
              search &&(
                <Pressable onPress={()=>handleSearch("")}>
                <XCircleIcon className="bg-neutral-600 m-2 px-3 rounded-lg" type="feather" name="search" color="coral" size={30}/>
                </Pressable>
              )
             }
            
        </View>

        {/* categories */}  
        <View className="flex-1">
          <Categories activeCategory={activeCategory} handleActiveCategory={handleActiveCategory}/>
        </View>


        <View>
           {
             image.length>0 && <ImageGrid image={image}/>
           }
        </View>

      </ScrollView>

    </View>
  )
}

export default HomeScreen;