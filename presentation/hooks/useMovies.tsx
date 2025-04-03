import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.actions"
import { topMoviesAction } from "@/core/actions/movies/top-tared.actions"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.actions"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {

    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: () => nowPlayingAction(),
        staleTime: 1000 * 60 * 60 * 24
    })

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: () => popularMoviesAction(),
        staleTime: 1000 * 60 * 60 * 24
    })

    const topQuery = useQuery({
        queryKey: ['movies', 'top'],
        queryFn: () => topMoviesAction(),
        staleTime: 1000 * 60 * 60 * 24
    })

    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: () => upcomingMoviesAction(),
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topQuery,
        upcomingQuery
    };
}