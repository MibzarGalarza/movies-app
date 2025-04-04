import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';
import { useMovie } from '@/presentation/hooks/useMovie';

const MovieScreen = () => {

    const { id } = useLocalSearchParams();
    const { movieQuery } = useMovie(+id);

    if (movieQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color="purple" size={40} />
            </View>
        );
    }

    return (
        <ScrollView>
            <Text>{movieQuery.data?.rating}</Text>
        </ScrollView>
    )
}

export default MovieScreen;