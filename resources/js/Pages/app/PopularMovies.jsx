import React from 'react'
import MovieCard from './MovieCard'
import { usePage } from '@inertiajs/react'

const PopularMovies = () => {

    const { popularMovies, genres } = usePage().props;

    return (
        <div>
            <h2 className='text-xl font-bold text-yellow-350 uppercase my-3 px-5'>Popular Movies</h2>

            <div className="flex items-center justify-center">
                <div className='flex flex-wrap justify-between'>
                    {popularMovies.slice(0, 8).map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
                </div>
            </div>
        </div>
    )
}

export default PopularMovies
