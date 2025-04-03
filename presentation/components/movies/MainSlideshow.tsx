import { View, Text, Dimensions, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import { Movie } from '@/infratructure/interfaces/movie.interface';
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
    className?: string;
}

const MainSlideshow = ({ movies, className }: Props) => {

    const ref = useRef<ICarouselInstance>(null);

    const width = useWindowDimensions().width;

    return (
        <View className={`${className} h-[250px] w-full`}>
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({ item }) => <MoviePoster poster={item.poster} id={item.id} smallPoster={false} />}
                width={200}
                height={350}
                style={{
                    width: width,
                    height: 350,
                    justifyContent: "center",
                    alignItems: "center"
                }}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                defaultIndex={1}
            />
        </View>
    )
}

export default MainSlideshow