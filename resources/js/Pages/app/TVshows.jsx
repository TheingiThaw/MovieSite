import { usePage } from '@inertiajs/react'
import React from 'react'
import MovieCard from './MovieCard';

const TVshows = () => {
    const { popularTVShows } = usePage().props;
    console.log(popularTVShows);
    return (
        <div>
            <h2 className='text-xl font-bold text-yellow-350 uppercase my-3 px-5'>Popular Movies</h2>

            <div className="flex items-center justify-center">
                <div className='flex flex-wrap justify-between'>
                    {popularTVShows.slice(0, 8).map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
                </div>
            </div>
        </div>
    )
}

export default TVshows
