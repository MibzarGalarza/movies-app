import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Movie } from '@/infratructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';


interface Props {
    title?: string;
    movies: Movie[];
    className?: string;
    loadNextPage?: () => void;
}

const MovieHorizontalList = ({ movies, title, className, loadNextPage }: Props) => {

    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200)
    }, [movies])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
        if (isEndReached) return;
        isLoading.current = true;
        console.log("Cargar siguientes peliculas")
        loadNextPage && loadNextPage();
        isLoading.current = false;
    }


    return (
        <View className={`${className}`}>
            {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movies}
                renderItem={({ item }) => <MoviePoster poster={item.poster} id={item.id} smallPoster={true} />}
                keyExtractor={(item, i) => `${item.id}-${i}`}
                onScroll={onScroll}
            />
        </View>
    )
}

export default MovieHorizontalList