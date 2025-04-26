import React from 'react'
import { Card } from 'flowbite-react'
import { router, usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';


const MovieCard = ({ movie }) => {

    // console.log(movie);
    const page = usePage();
    const { genres } = page.props;

    console.log('movie', movie);

    const movieOnClick = (id) => {
        if (movie.name) {
            router.get(route('tv.shows.detail', id));
        }
        else {
            router.get(route('movie.detail', id));
        }
    }

    return (
        <div onClick={() => movieOnClick(movie.id)}>
            <Card
                className=" max-w-[290px] text-sm mt-3 h-auto"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            >
                <h5 className="text-xl flex-wrap font-bold tracking-tight text-gray-900 dark:text-white">
                    {movie.title ? movie.title : movie.name}
                </h5>
                <div className="flex gap-3">
                    <p><i className="fa-solid fa-star me-1 text-yellow-300"></i>{movie.vote_average}</p>
                    <p><i className="fa-solid fa-calendar-days me-1 text-blue-400"></i>{movie.release_date ? movie.release_date : movie.first_air_date}</p>
                </div>
                <div>
                    <p>
                        {
                            genres.filter((genre) => movie.genre_ids.includes(genre.id))
                                .map((genre) => genre.name)
                                .join(', ')
                        }
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default MovieCard
