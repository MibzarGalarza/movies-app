import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {

    const { height: screenHeight } = useWindowDimensions();

    return (
        <>
            <LinearGradient
                colors={["rgba(0,0,0,0.3)", "transparent"]}
                start={[0, 0]}
                style={{
                    height: screenHeight * 0.4,
                    position: "absolute",
                    zIndex: 1,
                    width: "100%"
                }}
            />
            <View style={{ position: "absolute", zIndex: 99, elevation: 9, top: 35, left: 10 }}>
                <Pressable
                    onPress={() => router.dismiss()}
                >
                    <Ionicons
                        name='arrow-back'
                        size={30}
                        color="#FFF"
                        className="shadow"
                    />
                </Pressable>
            </View>
            <View
                style={{ height: screenHeight * 0.7 }}
                className=' shadow-black/20 shadow-xl'>

                <View className="flex-1 rounded-b-[25px] overflow-hidden">
                    <Image
                        source={{ uri: poster }}
                        resizeMode='cover'
                        className='flex-1'
                    />
                </View>

                <View className='px-5 mt-5'>
                    <Text className='font-normal'>{originalTitle}</Text>
                    <Text className='font-semibold text-2xl'>{title}</Text>
                </View>

            </View>
        </>
    )
}

export default MovieHeader