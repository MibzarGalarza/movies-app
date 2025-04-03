import { movieApi } from "@/core/api/movie-api"
import { MovieDBMoviesResponse } from "@/infratructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infratructure/mapers/movie.mapper";

export const nowPlayingAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing')
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
        return movies;
    } catch (error) {
        console.log(error)
    }
}