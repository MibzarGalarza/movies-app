import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infratructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infratructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infratructure/mapers/movie.mapper";


export const getMOvieByIdAction = async (id: number | string): Promise<CompleteMovie> => {
    try {
        const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);
        console.log(data)
        return MovieMapper.fromTheMovieDBToCompleteMovie(data);
    } catch (error) {
        console.log(error)
    }
}