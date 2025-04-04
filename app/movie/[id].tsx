import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getMOvieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';

const { id } = useLocalSearchParams();

getMOvieByIdAction(+id);

const MovieScreen = () => {
    return (
        <View>
            <Text>[id]</Text>
        </View>
    )
}

export default MovieScreen;