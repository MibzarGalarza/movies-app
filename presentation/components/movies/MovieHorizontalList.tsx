import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infratructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';


interface Props {
    title?: string;
    movies: Movie[];
    className?: string;
}

const MovieHorizontalList = ({ movies, title, className }: Props) => {
    return (
        <View className={`${className}`}>
            {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movies}
                renderItem={({ item }) => <MoviePoster poster={item.poster} id={item.id} smallPoster={true} />}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    )
}

export default MovieHorizontalList