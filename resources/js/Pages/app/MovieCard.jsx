import React from 'react'
import { Card } from 'flowbite-react'
import { router } from '@inertiajs/react';


const MovieCard = () => {
    const movieOnClick = () => {
        console.log('clicked');
        return router('movie.detail');
    }

    return (
        <div onClick={movieOnClick}>
            <Card
                className=" max-w-[290px] text-sm mt-3 h-auto"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc='/movie/p_moana2_payoff_5787a994.jpeg'
            // imgSrc={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            >
                <h5 className="text-xl flex-wrap font-bold tracking-tight text-gray-900 dark:text-white">
                    Movie Title
                    {/* {data.title} */}
                </h5>
                <div className="flex gap-3">
                    <p><i className="fa-solid fa-star"></i> 7</p>
                    <p><i className="fa-solid fa-calendar-days me-1"></i>2019, Sep, 10</p>
                </div>
                <div>
                    <p>Adventure, Drama, Mystery, Science Fiction, Thriller</p>
                </div>
            </Card>
        </div>
    )
}

export default MovieCard
