import { View, Text, StatusBar, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';



const WelcomeScreen = () => {

  const navigation = useNavigation();
  return (
       <View className="flex-1 w-full h-full justify-end">

          <StatusBar translucent={true} backgroundColor='transparent' />
          
            <Image source={require("../../asstes/welcome.png")} 
             className="w-full h-full absolute" resizeMode="cover"/>

             <View className="pb-10 space-y-8">
               <View className="absolute bottom-0 w-full">
                <Animated.View entering={FadeInDown.duration(600)} style={{flex:1}}>
                  <LinearGradient
                  colors={["rgba(255,255,255,0)","rgba(255,255,255,0.9)","white","white"]}
                  style={{width:"100%",height:"100%"}}
                  start={{x:0.5,y:0}}
                  end={{x:0.5,y:0.8}}>
                  <View className="space-y-3 mx-4 mb-20 mt-36">
                        <Text className="text-center text-5xl text-black font-bold">Pexels</Text>
                        <Text className="text-center text-xl text-neutral-900">Every Pexels Tells a Story</Text>

                        <TouchableOpacity className="bg-black p-3 rounded-lg"onPress={()=>navigation.navigate("Home")}>
                           <Text className="text-center text-2xl text-white">Explore</Text>
                         </TouchableOpacity>   
                 </View>
                  </LinearGradient>
                  </Animated.View>
               </View>
             </View>
             
         
          
        
       </View>
  )
}



export default WelcomeScreen;