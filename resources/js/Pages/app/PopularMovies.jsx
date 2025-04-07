import React from 'react'
import MovieCard from './MovieCard'

const PopularMovies = () => {
    return (
        <div>
            <h2 className='text-xl font-bold text-yellow-350 uppercase my-3'>Popular Movies</h2>

            <div className='flex flex-wrap justify-between'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    )
}

export default PopularMovies
